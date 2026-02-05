
import React, { useState } from 'react';
import Layout from '../components/Layout';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    email: '',
    tripType: '8th Grade DC',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate email sending
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout
      title="Contact Us | Request a School Trip Quote"
      description="Start planning your 8th-grade trip. Contact our Washington, DC tour company for schools in Ohio to request a quote and custom itinerary proposal."
    >
      <section className="pt-32 pb-24 bg-white relative overflow-hidden">
        {/* Background Decorative Image - Jefferson Memorial - Fixed Z-Index */}
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 opacity-30">
           <img 
             src="https://images.unsplash.com/photo-1553018251-54a7c13220c5?auto=format&fit=crop&q=80" 
             alt="Jefferson Memorial" 
             className="w-full h-full object-cover lg:rounded-l-[5rem]"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:hidden z-10"></div>
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-brass font-black uppercase tracking-[0.3em] text-[10px] mb-6 inline-block px-4 py-1 border border-brass/20 rounded-full bg-white/50 backdrop-blur-sm">
              Get Started
            </span>
            <h1 className="heading-xl font-sans font-bold md:font-extrabold text-4xl md:text-6xl text-inkNavy mb-8 tracking-tight md:tracking-tighter">
              Start Your Planning.
            </h1>
            <p className="text-xl text-slate font-medium max-w-2xl mx-auto">
              Tell us about your school and your goals. We'll send you a custom proposal within 48 hours.
            </p>
          </div>

          <div className="bg-white rounded-[3rem] shadow-2xl border border-inkNavy/5 p-8 md:p-12 relative overflow-hidden">
            {submitted ? (
              <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="font-sans font-extrabold text-3xl text-inkNavy mb-4">Request Sent!</h2>
                <p className="text-lg text-slate mb-8 max-w-md mx-auto">
                  Thanks, {formData.name}. René and Jeane have received your request and will be in touch shortly to discuss your trip for {formData.school}.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="text-brass font-bold uppercase tracking-widest text-xs hover:text-inkNavy transition-colors"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-inkNavy/60 ml-4">Your Name</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full bg-[#F9F7F2] rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-brass/20 transition-all font-medium text-inkNavy"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-inkNavy/60 ml-4">School Name</label>
                    <input 
                      required
                      name="school"
                      value={formData.school}
                      onChange={handleChange}
                      placeholder="Springboro Middle School"
                      className="w-full bg-[#F9F7F2] rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-brass/20 transition-all font-medium text-inkNavy"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-inkNavy/60 ml-4">Email Address</label>
                    <input 
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@school.edu"
                      className="w-full bg-[#F9F7F2] rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-brass/20 transition-all font-medium text-inkNavy"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-inkNavy/60 ml-4">Trip Interest</label>
                    <div className="relative">
                      <select 
                        name="tripType"
                        value={formData.tripType}
                        onChange={handleChange}
                        className="w-full bg-[#F9F7F2] rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-brass/20 transition-all font-medium text-inkNavy appearance-none"
                      >
                        <option>8th Grade Washington DC</option>
                        <option>High School Washington DC</option>
                        <option>New York City</option>
                        <option>Other / Custom</option>
                      </select>
                      <svg className="w-5 h-5 absolute right-6 top-1/2 -translate-y-1/2 text-slate pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-inkNavy/60 ml-4">Anything specific you need?</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="We have about 100 students and are looking at May dates..."
                    className="w-full bg-[#F9F7F2] rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-brass/20 transition-all font-medium text-inkNavy"
                  />
                </div>

                <div className="pt-4 flex justify-end">
                  <button 
                    type="submit" 
                    className="bg-brass text-white px-12 py-5 rounded-full font-black text-xl hover:bg-inkNavy transition-all shadow-xl shadow-brass/20 transform hover:-translate-y-1"
                  >
                    Request Quote
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
