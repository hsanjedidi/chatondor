import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import type { TranslationKey } from "@/i18n/translations";
import { CONTACT } from "@/lib/contact-info";

type FieldName = "name" | "email" | "phone" | "message";

type FormValues = Record<FieldName, string>;

type FormErrors = Partial<Record<"name" | "email" | "message", TranslationKey>>;

type SubmitStatus = "idle" | "success";

const EMPTY_VALUES: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "w-full rounded-2xl border border-brand-200 bg-white px-5 py-3.5 text-sm text-brand-900 placeholder:text-brand-400 transition duration-300 focus:border-gold-500 focus:outline-none focus:ring-4 focus:ring-gold-200/60";

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "contact.required";
  }

  if (!values.email.trim()) {
    errors.email = "contact.required";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "contact.invalidEmail";
  }

  if (!values.message.trim()) {
    errors.message = "contact.required";
  }

  return errors;
}

export function ContactForm() {
  const { t } = useLanguage();

  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const updateField = (field: FieldName, value: string) => {
    setValues((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const subject = `Contact - ${values.name.trim()}`;

    const body = `
Name: ${values.name}
Email: ${values.email}
Phone: ${values.phone || "Not provided"}

Message:
${values.message}
    `.trim();

    const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setStatus("success");
    setValues(EMPTY_VALUES);
    setErrors({});
  };

  // Success message
  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-5 py-12 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-700">
          <CheckCircle2 className="h-8 w-8" />
        </span>

        <h3 className="text-3xl font-semibold text-brand-900">
          {t("contact.successTitle")}
        </h3>

        <p className="max-w-sm text-sm text-brand-700">
          {t("contact.successText")}
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 rounded-full border border-brand-300 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:border-gold-500 hover:text-gold-700"
        >
          {t("contact.another")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Name and Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-brand-800">
          {t("contact.name")}

          <input
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={inputClass}
            aria-invalid={errors.name ? true : undefined}
          />

          {errors.name && (
            <span className="text-xs font-normal text-red-700">
              {t(errors.name)}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-brand-800">
          {t("contact.email")}

          <input
            type="email"
            autoComplete="email"
            dir="ltr"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClass}
            aria-invalid={errors.email ? true : undefined}
          />

          {errors.email && (
            <span className="text-xs font-normal text-red-700">
              {t(errors.email)}
            </span>
          )}
        </label>
      </div>

      {/* Phone */}
      <label className="flex flex-col gap-2 text-sm font-medium text-brand-800">
        {t("contact.phone")}

        <input
          type="tel"
          autoComplete="tel"
          dir="ltr"
          value={values.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          className={inputClass}
        />
      </label>

      {/* Message */}
      <label className="flex flex-col gap-2 text-sm font-medium text-brand-800">
        {t("contact.message")}

        <textarea
          rows={6}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          maxLength={2000}
          className={`${inputClass} resize-y`}
          aria-invalid={errors.message ? true : undefined}
        />

        {errors.message && (
          <span className="text-xs font-normal text-red-700">
            {t(errors.message)}
          </span>
        )}
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-800 px-8 py-4 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
      >
        <Send className="h-4 w-4" />

        {t("contact.send")}
      </button>
    </form>
  );
}
