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

import { Metadata } from 'next';
import { privacyPolicyContent } from '@/config/content/privacy-policy';
import { PrivacyPolicyTemplate } from '@/components/templates/PrivacyPolicyTemplate';

export const metadata: Metadata = {
  title: 'Privacy Policy - Acorn Ledger',
  description: privacyPolicyContent.description,
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyTemplate content={privacyPolicyContent} />;
}

import { Metadata } from 'next';
import { termsOfServiceContent } from '@/config/content/terms-of-service';
import { TermsOfServiceTemplate } from '@/components/templates/TermsOfServiceTemplate';

export const metadata: Metadata = {
  title: 'Terms of Service - Acorn Ledger',
  description: termsOfServiceContent.description,
};

export default function TermsOfService() {
  return <TermsOfServiceTemplate content={termsOfServiceContent} />;
}