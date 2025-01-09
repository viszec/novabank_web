export const contactContent = {
  title: "Get in Touch",
  description: "Have questions or need assistance? We're here to help! Choose the best way to reach us below.",
  image: {
    src: "/images/contact-hero.svg",
    alt: "Contact Acorn Ledger Support Team",
    width: 800,
    height: 600
  },
  form: {
    name: {
      label: "Your Name",
      placeholder: "Enter your full name",
      required: true
    },
    email: {
      label: "Email Address",
      placeholder: "Enter your email address",
      required: true
    },
    subject: {
      label: "Subject",
      placeholder: "Select a subject",
      required: true,
      options: [
        {
          label: "General Inquiry",
          value: "general"
        },
        {
          label: "Technical Support",
          value: "support"
        },
        {
          label: "Account Issues",
          value: "account"
        },
        {
          label: "Billing Questions",
          value: "billing"
        },
        {
          label: "Feature Request",
          value: "feature"
        },
        {
          label: "Partnership Opportunity",
          value: "partnership"
        }
      ]
    },
    message: {
      label: "Message",
      placeholder: "Type your message here...",
      required: true
    }
  },
  submitButton: "Send Message",
  alternativeContact: {
    title: "Other Ways to Connect",
    methods: [
      {
        title: "Customer Support",
        description: "Get help with your account, technical issues, or general questions.",
        email: "support@acornledger.io",
        responseTime: "Within 24 hours"
      },
      {
        title: "Business Inquiries",
        description: "For partnerships, press, or business development opportunities.",
        email: "business@acornledger.io",
        responseTime: "2-3 business days"
      }
    ]
  }
};
