import { termsOfServiceContent } from '@/config/content/terms-of-service';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
export function TermsOfServiceTemplate({ content }: { content: typeof termsOfServiceContent }) {
  return (
    <>
      <Header />
      <main className="section-wrapper bg-gray-50 pt-32 pb-16">
        <div className="section-container min-h-screen">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mt-20 mb-8 text-gray-900 text-center">{content.title}</h1>
        <div className="prose prose-purple bg-gray-50 p-8 rounded-2xl shadow-sm">
          <p className="text-gray-600">Last updated: {content.lastUpdated}</p>
          
          {content.sections.map((section) => (
            <div key={section.id} className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
              {Array.isArray(section.content) ? (
                section.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mt-4">{paragraph}</p>
                ))
              ) : (
                <p className="text-gray-600 mt-4">{section.content}</p>
              )}
              
              {section.features?.map((feature) => (
                <div key={feature.title} className="mt-6">
                  <h3 className="text-xl font-medium text-gray-800">{feature.title}</h3>
                  <ul className="list-disc pl-6 text-gray-600 mt-2">
                    {feature.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {section.responsibilities?.map((responsibility) => (
                <div key={responsibility.title} className="mt-6">
                  <h3 className="text-xl font-medium text-gray-800">{responsibility.title}</h3>
                  <ul className="list-disc pl-6 text-gray-600 mt-2">
                    {responsibility.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
            <p className="text-gray-600 mt-4">
              For any questions regarding these terms, please contact us at:
              <a href={`mailto:${content.contactEmail}`} className="text-purple-600 ml-2">
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
