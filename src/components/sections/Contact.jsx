import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dialog, setDialog] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setDialog(null);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setDialog({ type: 'success', title: 'Message Sent!', text: 'Thanks for reaching out. I will get back to you within 24 hours.' });
        e.target.reset();
      } else {
        setDialog({ type: 'error', title: 'Sending Failed', text: 'Could not send the message. Please try again later.' });
      }
    } catch (error) {
      console.error(error);
      setDialog({ type: 'error', title: 'Network Error', text: 'Failed to connect. Please ensure the backend is running properly.' });
    } finally {
      setIsLoading(false);
    }
  };

  const closeDialog = () => setDialog(null);

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50"></div>
      <div className="absolute inset-0 hero-bg"></div>
      <div className="floating-shape w-96 h-96 bg-indigo-500/15 -bottom-48 -right-48"></div>
      <div className="floating-shape w-72 h-72 bg-cyan-400/10 top-20 -left-36"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeading 
          number="07" 
          subtitle="Get in touch" 
          title1="Let's Work" 
          title2="Together" 
          description="Have a project in mind? I'd love to hear about it. Let's discuss how I can help bring your ideas to life." 
        />
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8 section-animate">
            <GlassCard>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-slate-400 mb-8">
                Ready to start your project? Send me a message and I'll get back to you within 24 hours. Let's create something amazing together.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Email</div>
                    <div className="font-medium">dev.ranausman@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Response Time</div>
                    <div className="font-medium">Within 24 hours</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400/20 to-emerald-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Availability</div>
                    <div className="font-medium">Worldwide Remote</div>
                  </div>
                </div>
              </div>
            </GlassCard>
            
            {/* Social links */}
            <div className="flex gap-4">
              <a href="#" className="glass w-12 h-12 rounded-xl flex items-center justify-center hover:border-indigo-500/50 transition-colors">
                <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="glass w-12 h-12 rounded-xl flex items-center justify-center hover:border-indigo-500/50 transition-colors">
                <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="section-animate">
            <GlassCard>
              <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="user@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                  <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="Project Inquiry" />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-2">Budget Range</label>
                  <select id="budget" name="budget" className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-100 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all">
                    <option value="">Select budget range</option>
                    <option value="100-200">$100 - $200</option>
                    <option value="200-500">$200 - $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000+">$1,000+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Your Message</label>
                  <textarea id="message" name="message" rows="5" required className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                </div>
                <Button type="submit" variant="primary" className="w-full relative flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </Button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Dialog overlay and box */}
      {dialog && (
        <div className="fixed inset-0 z-50 flexItems-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200 flex items-center">
          <div className="bg-slate-800 border border-slate-700/50 rounded-2xl p-8 max-w-sm w-full mx-auto shadow-2xl relative text-center animate-in zoom-in-95 duration-200">
            {/* Close button */}
            <button 
              onClick={closeDialog}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Icon */}
            <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
              dialog.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
            }`}>
              {dialog.type === 'success' ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              )}
            </div>

            {/* Content */}
            <h4 className="text-xl font-semibold text-white mb-2">{dialog.title}</h4>
            <p className="text-slate-400">{dialog.text}</p>
            
            <Button 
              onClick={closeDialog} 
              className="mt-8 w-full justify-center" 
              variant="primary"
            >
              Okay
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
