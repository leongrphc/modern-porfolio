-- Create contacts table for the contact form
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contact messages
CREATE POLICY "Anyone can submit contact messages" 
ON public.contacts 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent reading contact messages (admin only access)
CREATE POLICY "No public read access to contacts" 
ON public.contacts 
FOR SELECT 
USING (false);