"use client";

import { useState } from "react";
import { Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactContent } from "@/config/content/contact";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from 'next/image';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactTemplate({
  content,
}: {
  content: typeof contactContent;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Add your form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string,
    field?: keyof FormData
  ) => {
    if (typeof e === "string" && field) {
      setFormData((prev: FormData) => ({
        ...prev,
        [field]: e,
      }));
    } else if (typeof e !== "string" && "target" in e) {
      setFormData((prev: FormData) => ({
        ...prev,
        [e.target.id]: e.target.value,
      }));
    }
  };

  return (
    <>
      <Header />
      <main id="contact" className="section-wrapper bg-gray-50 pt-32 pb-16">
        <div className="section-container min-h-screen mt-32">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {content.title}
            </h1>
            <p className="text-lg text-gray-600 mt-6 mb-12">
              {content.description}
            </p>
            <div className="relative w-full max-w-7xl mx-auto py-8">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                width={content.image.width}
                height={content.image.height}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14 py-8">
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm p-8 border-[2.5px] border-purple-400">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {content.form.name.label}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none transition-colors"
                    placeholder={content.form.name.placeholder}
                    required={content.form.name.required}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {content.form.email.label}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none transition-colors"
                    placeholder={content.form.email.placeholder}
                    required={content.form.email.required}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {content.form.subject.label}
                  </label>
                  <Select
                    onValueChange={(value) => handleChange(value, "subject")}
                  >
                    <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none transition-colors">
                      <SelectValue
                        placeholder={content.form.subject.placeholder}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {content.form.subject.options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {content.form.message.label}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none transition-colors"
                    placeholder={content.form.message.placeholder}
                    required={content.form.message.required}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 rounded-full text-lg font-medium bg-purple-600 text-white hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : content.submitButton}
                  <Send className="w-6 h-6" />
                </Button>
              </form>
            </div>

            {/* Alternative Contact Methods */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {content.alternativeContact.title}
              </h2>
              {content.alternativeContact.methods.map((method) => (
                <div
                  key={method.title}
                  className="bg-white rounded-xl p-6 shadow-sm border-[2.5px] border-purple-400"
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="flex items-center gap-2 text-purple-600 border-b border-gray-200 pb-4">
                    <Mail className="w-4 h-4" />
                    <a
                      href={`mailto:${method.email}`}
                      className="text-sm hover:underline"
                    >
                      {method.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 mt-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">
                      Response time: {method.responseTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
