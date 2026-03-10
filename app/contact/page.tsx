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
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) { setSubmitted(true); reset(); }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white">

      {/* Page header */}
      <section className="py-16 px-6 lg:px-8 border-b border-gray-100" style={{ background: '#F8F9FB' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Get in touch
          </h1>
          <p className="text-lg text-gray-500 mt-4 max-w-xl">
            Ready to start your mortgage journey? Book a free discovery call or send us a message — we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-0.5 text-sm">Phone</div>
                    <a href="tel:0272664925" className="text-gray-500 hover:text-teal transition-colors text-sm">027 266 4925</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-0.5 text-sm">Email</div>
                    <a href="mailto:karl@basemortgages.co.nz" className="text-gray-500 hover:text-teal transition-colors text-sm">karl@basemortgages.co.nz</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-0.5 text-sm">Location</div>
                    <p className="text-gray-500 text-sm">Auckland, New Zealand<br />(Serving clients nationwide)</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90"
                  style={{ background: '#27C1B7' }}
                >
                  Book a Free Discovery Call
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl p-8 border border-gray-100" style={{ background: '#F8F9FB' }}>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-14 h-14 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500 mb-6">We&apos;ll get back to you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="text-teal hover:text-teal-dark font-semibold text-sm transition-colors">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition"
                        placeholder="John Smith"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
                        <input
                          {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                          type="email"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition"
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone</label>
                        <input
                          {...register('phone')}
                          type="tel"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition"
                          placeholder="021 123 4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">I&apos;m interested in *</label>
                      <select
                        {...register('type', { required: 'Please select an option' })}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition"
                      >
                        <option value="">Select...</option>
                        <option value="first-home">First Home Buyer</option>
                        <option value="refinancing">Refinancing</option>
                        <option value="investor">Property Investment</option>
                        <option value="refix">Refix / Restructure</option>
                        <option value="construction">New Build / Construction</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                      <textarea
                        {...register('message', { required: 'Message is required' })}
                        rows={5}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition resize-none"
                        placeholder="Tell us about your situation..."
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      style={{ background: '#27C1B7' }}
                    >
                      {submitting ? 'Sending...' : <><Send className="w-4 h-4" /> Send Message</>}
                    </button>

                    <p className="text-xs text-gray-400 text-center">
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
