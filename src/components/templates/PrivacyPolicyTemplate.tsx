import { privacyPolicyContent } from "@/config/content/privacy-policy";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

export function PrivacyPolicyTemplate({
  content,
}: {
  content: typeof privacyPolicyContent;
}) {
  return (
    <>
      <Header />
      <main className="section-wrapper bg-gray-50 pt-6 pb-16">
        <div className="section-container min-h-screen">
          <div className="max-w-7xl mx-auto px-14 py-12">
            <h1 className="text-4xl font-bold mt-14 mb-14 text-gray-900 text-center">
              {content.title}
            </h1>
            <div className="prose prose-purple max-w-none bg-white p-12 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-600">
                Last updated: {content.lastUpdated}
              </p>

              {content.sections.map((section) => (
                <div key={section.id} className="mt-8">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 mt-4 text-sm">{section.content}</p>

                  {section.items?.map((item) => (
                    <div key={item.title} className="mt-6">
                      <h3 className="text-base font-medium text-gray-800">
                        {item.title}
                      </h3>
                      <ul className="list-disc pl-6 text-gray-600 mt-2 text-sm">
                        {item.items.map((subItem) => (
                          <li key={subItem}>{subItem}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}

              <div className="pt-8">
                <h2 className="text-xl font-semibold text-gray-900">
                  Contact Us
                </h2>
                <p className="text-gray-600 text-sm mt-4">
                  If you have any questions about our Privacy Policy, please
                  contact us at:
                  <a
                    href={`mailto:${content.contactEmail}`}
                    className="text-purple-600 ml-2"
                  >
                    {content.contactEmail}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
