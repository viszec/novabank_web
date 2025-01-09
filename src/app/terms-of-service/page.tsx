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