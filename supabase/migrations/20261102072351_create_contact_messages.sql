/*
# Create contact messages table

1. New Tables
- `contact_messages`: messages sent from the website contact form.
  - `id` (uuid, primary key)
  - `name` (text, required, max 120 chars)
  - `email` (text, required, max 255 chars)
  - `phone` (text, optional, max 40 chars)
  - `message` (text, required, max 2000 chars)
  - `created_at` (timestamp)

2. Security
- Row level security is enabled.
- Visitors (anon) and signed-in users can only INSERT a message. They cannot read, edit or delete messages, so one visitor never sees another's data.
- Length limits are enforced in the database as well as in the form.

3. Notes
- Administrators read messages from the database dashboard.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  phone text CHECK (phone IS NULL OR char_length(phone) <= 40),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
