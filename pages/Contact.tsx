
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Web Design',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://formspree.io/f/xvzbdzbp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: 'Web Design',
          message: ''
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json();
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info */}
            <div>
              <h1 className="text-5xl font-extrabold mb-8">Let's <span className="text-gradient">Talk</span></h1>
              <p className="text-xl text-slate-400 mb-12">
                Have a project in mind or want to join our next cohort? Reach out to us. We typically respond within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-teal-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Call Us</h4>
                    <p className="text-slate-400">{CONTACT_INFO.phone}</p>
                    <p className="text-slate-500 text-sm">Mon - Fri, 9am - 6pm WAT</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-indigo-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email Us</h4>
                    <p className="text-slate-400">{CONTACT_INFO.email}</p>
                    <p className="text-slate-500 text-sm">Official queries & Support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-teal-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Visit Us</h4>
                    <p className="text-slate-400">{CONTACT_INFO.address}</p>
                  </div>
                </div>
              </div>

              {/* Chat Support Tooltip */}
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 p-6 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 inline-flex items-center hover:bg-indigo-600/20 transition-all group"
              >
                 <MessageCircle className="text-indigo-400 mr-3 group-hover:scale-110 transition-transform" />
                 <div className="flex flex-col">
                   <span className="text-indigo-300 font-medium text-sm">Quick chat? Message us on WhatsApp</span>
                   <span className="text-indigo-400/60 text-xs font-bold">{CONTACT_INFO.whatsappDisplay}</span>
                 </div>
              </a>
            </div>

            {/* Form */}
            <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
              {submitted ? (
                <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="text-teal-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-slate-400">Thank you for reaching out. We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                      {error}
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-semibold text-slate-400 mb-2">Full Name</label>
                    <input
                      required
                      name="name"
                      type="text"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-400 mb-2">Email Address</label>
                    <input
                      required
                      name="email"
                      type="email"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-400 mb-2">What can we help with?</label>
                    <select
                      name="subject"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    >
                      <option>Web Design</option>
                      <option>Web App Development</option>
                      <option>UI/UX Design</option>
                      <option>Tech Training</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-400 mb-2">Message</label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} className="ml-2" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
