import { Metadata } from 'next';
import { ContactTemplate } from '@/components/templates/ContactTemplate';
import { contactContent } from '@/config/content/contact';

export const metadata: Metadata = {
  title: 'Contact Us - Acorn Ledger',
  description: 'Get in touch with Acorn Ledger team for support, feedback, or business inquiries.',
};

export default function ContactPage() {
  return <ContactTemplate content={contactContent} />;
} 