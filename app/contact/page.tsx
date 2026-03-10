'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  type: string;
};

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    
    // TODO: Replace with your actual form endpoint (e.g., Web3Forms, Formspree, or your own API)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-deep to-navy py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/75 max-w-2xl mx-auto">
            Ready to start your mortgage journey? Book a free discovery call or send us a message.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-navy mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help with any questions about mortgages, refinancing, or your property journey.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy mb-1">Phone</div>
                    <a href="tel:0800000000" className="text-gray-600 hover:text-blue transition">
                      0800 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy mb-1">Email</div>
                    <a href="mailto:hello@basemortgages.co.nz" className="text-gray-600 hover:text-blue transition">
                      hello@basemortgages.co.nz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy mb-1">Location</div>
                    <p className="text-gray-600">
                      Auckland, New Zealand<br />
                      (Serving clients nationwide)
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://calendly.com/your-calendly-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy transition w-full"
                >
                  <span>Book a Free Discovery Call</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">We'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-blue hover:text-navy font-semibold"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Full Name *</label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
                        placeholder="John Smith"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-navy mb-2">Email *</label>
                        <input
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                          })}
                          type="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-navy mb-2">Phone</label>
                        <input
                          {...register('phone')}
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
                          placeholder="021 123 4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">I'm interested in *</label>
                      <select
                        {...register('type', { required: 'Please select an option' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
                      >
                        <option value="">Select...</option>
                        <option value="first-home">First Home Buyer</option>
                        <option value="refinancing">Refinancing</option>
                        <option value="investor">Property Investment</option>
                        <option value="refix">Refix / Restructure</option>
                        <option value="construction">New Build / Construction</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Message *</label>
                      <textarea
                        {...register('message', { required: 'Message is required' })}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue resize-none"
                        placeholder="Tell us about your situation..."
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-blue text-white px-6 py-4 rounded-lg font-semibold hover:bg-navy transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
