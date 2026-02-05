
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ComparisonVisual from '../components/ComparisonVisual';
import { PLANNING_STEPS, HOMEPAGE_FAQS } from '../constants';
import AnswerBox from '../components/AnswerBox';

const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "2 Teachers Travel",
        "description": "Expert-led Washington, DC school trips for student groups, specializing in 8th-grade history and civics curriculum alignment for Central Ohio schools.",
        "email": "2TeachersTravelCompany@gmail.com",
        "telephone": "937-238-7388",
        "areaServed": ["Central Ohio", "Ohio", "Dayton", "Columbus", "Springboro"],
        "url": "https://sites.google.com/view/2teacherstravel/"
      }
    ]
  };

  return (
    <Layout 
      schema={homeSchema}
      title="2 Teachers Travel | Teacher-Led DC School Trips in Ohio"
      description="Ohio's premier Washington, DC tour company for schools. Our educator-led trips feature custom itineraries, night security, and budget-friendly planning."
    >
      {/* 1. New Hero Section - Optimized for Mobile "Above the Fold" */}
      <section id="hero" className="pt-44 pb-12 lg:pt-48 lg:pb-32 relative overflow-hidden flex items-center min-h-[auto] lg:min-h-[90vh]">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
           {/* Image anchored right, fixed width on desktop to prevent shifting */}
           <img 
             src="https://i.imgur.com/u21zLqA.jpeg" 
             alt="US Capitol Dome with Students" 
             className="absolute right-0 top-0 h-full w-full lg:w-[65%] object-cover object-center"
           />
           {/* Gradient Overlay for Text Contrast */}
           <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent lg:w-3/4 z-10"></div>
           {/* Mobile extra fade */}
           <div className="absolute inset-0 bg-white/60 lg:hidden z-10"></div>
        </div>
        
        <div className="container mx-auto px-8 md:px-6 relative z-20">
          <div className="max-w-3xl pt-0 md:pt-0">
            <span className="text-brass font-black uppercase tracking-[0.3em] text-[10px] mb-3 md:mb-8 inline-block px-4 py-1 border border-brass/20 rounded-full bg-white/80 backdrop-blur-sm">
              Washington, DC Student Travel
            </span>
            <h1 className="heading-xl font-sans font-extrabold text-4xl md:text-7xl lg:text-8xl text-inkNavy mb-3 md:mb-8 tracking-tighter leading-[0.95]">
              School Trips to <br className="hidden md:block" /> Washington, DC
              <span className="block font-serif italic font-light text-3xl md:text-6xl mt-1 md:mt-2 text-inkNavy/90">& beyond</span>
            </h1>
            <p className="font-serif text-lg md:text-3xl italic text-slate mb-5 md:mb-12 leading-tight max-w-2xl">
              Built for learning, led by educators, designed for real school constraints.
            </p>
            
            <div className="flex flex-col gap-5 md:gap-10">
              <div className="bg-white/60 backdrop-blur-sm border-l-4 border-brass p-3 md:p-6 rounded-r-xl max-w-2xl">
                 <p className="text-base md:text-xl text-inkNavy/90 leading-relaxed font-medium">
                  We specialize in personalized, educator-led Washington, DC trips aligned to 8th-grade history, civics, and government curricula. Trips are customized for student stamina, instructional goals, and affordability.
                 </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact" className="bg-brass text-white px-8 py-3 md:px-12 md:py-5 rounded-full font-black text-lg md:text-xl shadow-xl shadow-brass/20 hover:bg-inkNavy transition-all transform hover:-translate-y-1 text-center inline-block">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro / Founders Block - THE REFERENCE STYLE */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight">
                Planned and personally led by teachers who know what schools actually need.
              </h2>
              <div className="space-y-6 text-lg text-slate font-medium leading-relaxed">
                <p>
                  2 Teachers Travel plans and personally leads Washington, DC school trips for middle and high school groups, primarily serving Central Ohio schools. We help teachers run meaningful, well-organized trips without being locked into inflexible travel companies or handed off to unfamiliar staff.
                </p>
                <p>
                  Founded by two retired educators with more than 40 years of combined teaching experience, our trips are built around curriculum, student safety, and real school budgets.
                </p>
              </div>
              
              <div className="mt-10">
                <Link to="/why-us" className="inline-flex items-center gap-2 bg-inkNavy text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-brass transition-colors shadow-lg group">
                  Meet René and Jeane
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
            
            <div className="relative">
               <div className="grid grid-cols-2 gap-6 relative z-10">
                  <div className="space-y-4 mt-12">
                     <div className="aspect-[3/4] bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img 
                          src="https://i.imgur.com/IwUQR3i.jpg" 
                          alt="René Offenberger" 
                          className="w-full h-full object-cover" 
                        />
                     </div>
                     <div className="text-center">
                       <p className="font-bold text-inkNavy text-lg">René Offenberger</p>
                       <p className="text-xs font-black uppercase tracking-widest text-brass">Co-Founder</p>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="aspect-[3/4] bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img 
                          src="https://i.imgur.com/e1MGz1l.jpg" 
                          alt="Jeane Toadvine" 
                          className="w-full h-full object-cover" 
                        />
                     </div>
                     <div className="text-center">
                       <p className="font-bold text-inkNavy text-lg">Jeane Toadvine</p>
                       <p className="text-xs font-black uppercase tracking-widest text-brass">Co-Founder</p>
                     </div>
                  </div>
               </div>
               
               {/* Decorative Background Elements */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[100%] bg-brass/5 rounded-full blur-[80px] -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comparison Section */}
      <section id="comparison" className="py-24 bg-[#F9F7F2] scroll-mt-32 relative overflow-hidden">
        {/* Cherry Blossom decoration */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-5 -translate-x-1/2 -translate-y-1/2 z-0">
             <img src="https://images.unsplash.com/photo-1522881451255-f59ad836fdbc?auto=format&fit=crop&q=80" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight">The Personal Alternative</h2>
            <p className="text-slate font-medium text-lg">Why Ohio schools trust our expert-led model over corporate agencies.</p>
          </div>
          <ComparisonVisual />
        </div>
      </section>

      {/* New Why Choose Us Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight">Why Choose Us</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-inkNavy border-b border-brass/20 pb-2 inline-block">Customized Itineraries</h3>
              <p className="text-slate leading-relaxed">No two schools are the same, and neither are our itineraries. We work with each school to design a trip that aligns with their curriculum, interests, and goals. From history and government to STEAM and leadership, we’ll create an experience that fits your unique needs.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-inkNavy border-b border-brass/20 pb-2 inline-block">Educational Focus</h3>
              <p className="text-slate leading-relaxed">Our trips aren’t just about sightseeing—they’re about learning. From the U.S. Capitol to the National Mall, Smithsonian Museums, and monuments, we provide engaging, hands-on learning experiences that bring history to life. With our deep understanding of the Washington, D.C. area, we incorporate educational programming into every aspect of the trip.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-inkNavy border-b border-brass/20 pb-2 inline-block">Affordable, Flexible Packages</h3>
              <p className="text-slate leading-relaxed">We understand the budget constraints that participants may have. That’s why we offer a range of flexible travel options to meet different budgets, without compromising on quality or experience. We’re committed to providing a value-packed educational experience, no matter the budget.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-inkNavy border-b border-brass/20 pb-2 inline-block">Personalized Service</h3>
              <p className="text-slate leading-relaxed">With 2 Teachers Travel, you're never just another client. We take the time to understand your goals, preferences, and concerns, and ensure that every detail is handled to your satisfaction. From the moment you book with us to the moment your students return home, we’re with you every step of the way. We are willing to conduct parent informational meetings as requested.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Trip Logistics Section */}
      <section className="py-24 bg-[#F9F7F2]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight">Trip Logistics Made Simple</h2>
          <p className="text-xl text-slate font-medium leading-relaxed mb-8">
            Planning a great trip is only half the work. The logistics are what create the real burden for schools and families.
          </p>
          <p className="text-lg text-slate leading-relaxed mb-10">
            That’s why every trip includes access to our secure <span className="font-bold text-inkNavy">School Trip Management Portal</span>. Parents can complete required forms and track payments in one place, and schools can view real-time readiness for every student. No spreadsheet chasing, no paper packets, and far fewer last-minute issues before departure.
          </p>
          <Link to="/school-trips" className="inline-flex items-center text-brass font-bold text-lg hover:text-inkNavy transition-colors group">
            Learn more about our trip management system
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      {/* 4. Value & Safety (Image in section) */}
      <section id="value-safety" className="py-24 bg-inkNavy text-white scroll-mt-32 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <h2 className="font-sans font-extrabold text-4xl text-white mb-8 tracking-tight leading-tight">Value & Safety</h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-brass font-black uppercase tracking-widest text-xs mb-6">TRANSPORTATION</h3>
                <p className="text-xl text-warmStone leading-relaxed font-medium">
                  Your students travel on high-quality coaches from companies vetted through the FMCSA for compliance and safety. We never cut corners on transit.
                </p>
              </div>
              
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-64 w-full">
                 <img src="https://i.imgur.com/UDTshGA.jpeg" alt="Students traveling safely" className="w-full h-full object-cover" />
              </div>

              <Link to="/parents" className="inline-block bg-white/10 border border-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-inkNavy transition-all">
                 More info for parents
              </Link>
            </div>
            
            <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 flex flex-col h-full justify-center backdrop-blur-md">
               <h3 className="text-brass font-black uppercase tracking-widest text-xs mb-6">NIGHT SECURITY</h3>
               <p className="text-xl text-warmStone leading-relaxed mb-10 font-medium">
                 We hire local, professional security companies to monitor hotel hallways from lights-out until morning. This ensures student compliance and gives chaperones the rest they need to lead effectively the next day.
               </p>
               <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
                  <span className="w-10 h-[1px] bg-white/20"></span>
                  Professional Monitoring Provided
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trip Information (Parallax Background - No Overlay) */}
      <section 
        id="trip-info" 
        className="py-32 relative bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url(https://i.imgur.com/ugYGgLC.jpeg)' }}
      >
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/95 backdrop-blur-sm px-10 py-6 rounded-[2rem] shadow-xl">
               <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-2 tracking-tight leading-tight">Trip Information</h2>
               <p className="text-slate font-medium text-lg">Key details for a seamless experience.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl border border-inkNavy/10 shadow-xl">
              <h3 className="font-bold text-lg text-inkNavy mb-4">What's Included?</h3>
              <p className="text-slate text-sm leading-relaxed">
                The cost of the trip covers motor coach transportation, hotel accommodations, and all items mentioned in the "What's Included" section of the specific tour page. Tips and meals provided as part of the itinerary are already included in the tour price. Travel insurance is not part of the package, but it can be purchased for 10% of the trip cost.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-inkNavy/10 shadow-xl">
              <h3 className="font-bold text-lg text-inkNavy mb-4">Itinerary Modifications</h3>
              <p className="text-slate text-sm leading-relaxed">
                Because these tours are carefully planned in advance, 2 Teachers Travel reserves the right to make changes or substitutions to enhance the experience. Circumstances such as weather, traffic delays, closers, etc. may require modification of the itinerary.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-inkNavy/10 shadow-xl">
              <h3 className="font-bold text-lg text-inkNavy mb-4">Cancellation & Refund</h3>
              <p className="text-slate text-sm leading-relaxed">
                A deposit is required to reserve your spot on any tour and is non-refundable. If the tour reaches full capacity, you will be added to a waiting list.
              </p>
              <Link to="/tour-info" className="text-brass font-bold text-xs uppercase tracking-widest mt-4 inline-block hover:text-inkNavy">Read Full Policy</Link>
            </div>
          </div>

          <div className="text-center">
             <Link to="/contact" className="bg-inkNavy text-white px-10 py-4 rounded-full font-black text-lg hover:bg-brass transition-all shadow-xl">
                Start Planning Your Trip
             </Link>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
           <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-16 tracking-tight leading-tight text-center">Common Questions</h2>
           <div className="space-y-6">
             {HOMEPAGE_FAQS.map((faq, idx) => (
               <div key={idx} className="border border-inkNavy/10 rounded-2xl overflow-hidden hover:border-brass/30 transition-colors">
                 <button 
                   onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                   className="w-full flex items-center justify-between p-6 bg-white text-left"
                 >
                   <span className="font-bold text-lg text-inkNavy pr-8">{faq.question}</span>
                   <span className={`text-brass font-bold text-2xl transition-transform ${activeFaq === idx ? 'rotate-45' : ''}`}>+</span>
                 </button>
                 {activeFaq === idx && (
                   <div className="p-6 pt-0 bg-white">
                     <p className="text-slate text-lg leading-relaxed">{faq.answer}</p>
                   </div>
                 )}
               </div>
             ))}
           </div>
           <div className="mt-12 text-center">
             <Link to="/faqs" className="text-inkNavy font-bold border-b-2 border-brass pb-1 hover:text-brass transition-colors">View All FAQs</Link>
           </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-inkNavy rounded-[2.5rem] px-8 py-16 md:px-16 md:py-24 text-center shadow-2xl relative overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent rounded-[2.5rem]"></div>
            <div className="relative z-10">
              <span className="text-white/50 font-black uppercase tracking-[0.3em] text-[10px] mb-6 inline-block px-4 py-1.5 border border-white/10 rounded-full bg-white/5">
                Next Steps
              </span>
              <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-white mb-6 tracking-tight leading-tight">
                Ready to start planning?
              </h2>
              <p className="text-white/60 text-lg md:text-xl font-medium max-w-xl mx-auto mb-10 leading-relaxed">
                We'll build a custom itinerary and budget proposal for your school in 48 hours. No pressure, just a better way to travel.
              </p>
              <Link to="/contact" className="inline-block bg-brass text-white px-10 py-5 rounded-full font-black text-lg md:text-xl shadow-xl shadow-brass/30 hover:scale-105 transition-transform">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
