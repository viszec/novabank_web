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
