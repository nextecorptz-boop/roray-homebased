import { SITE_INFO } from '@/lib/content';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function ContactBlock() {
  return (
    <section className="bg-bone-warm section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-white border border-gray-200 p-8 md:p-16 relative overflow-hidden no-radius">
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-roray-green opacity-5 -translate-y-1/2 translate-x-1/2 no-radius blur-2xl"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <SectionHeader 
                eyebrow="Get In Touch"
                title="Ready to discuss your care needs?"
                description="Contact us today for a free consultation. Our clinical coordinators are ready to help you build the right plan for your loved ones."
                className="mb-10"
              />
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/book" variant="primary">
                  Book Consultation
                </Button>
                <Button href={`https://wa.me/${SITE_INFO.phoneClean}`} variant="outline" className="border-roray-green text-roray-green hover:bg-roray-green hover:text-white">
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
            
            <div className="bg-bone p-8 border border-gray-200 no-radius">
              <h4 className="font-display font-bold text-xl text-navy-deep mb-6">Contact Information</h4>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-white flex items-center justify-center text-roray-green border border-gray-200 no-radius">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-1">Office Location</p>
                    <p className="text-navy font-semibold">{SITE_INFO.office}</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-white flex items-center justify-center text-roray-green border border-gray-200 no-radius">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-1">Phone / WhatsApp</p>
                    <p className="text-navy font-semibold">{SITE_INFO.phone}</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-white flex items-center justify-center text-roray-green border border-gray-200 no-radius">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-1">Email Address</p>
                    <p className="text-navy font-semibold">{SITE_INFO.email}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
