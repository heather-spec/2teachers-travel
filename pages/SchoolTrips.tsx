
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import AnswerBox from '../components/AnswerBox';
import { PLANNING_STEPS } from '../constants';

const schoolTripsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Washington, DC Tour Company for Schools | Ohio + Overseas",
      "description": "Ohio-based Washington, DC tour company for schools. Custom, educator-led trips plus overseas school tours designed for real budgets and smooth logistics.",
      "serviceType": "Planning and founder-led leadership for Washington, DC student travel",
      "areaServed": ["Ohio", "Central Ohio"]
    },
    {
      "@type": "HowTo",
      "name": "How to Plan a Washington, DC School Trip with 2 Teachers Travel",
      "step": PLANNING_STEPS.map(s => ({ "@type": "HowToStep", "name": s.title, "text": s.description }))
    }
  ]
};

const SchoolTrips: React.FC = () => {
  return (
    <Layout 
      schema={schoolTripsSchema} 
      disableWatermark={true}
      title="Info for Schools | Washington, DC Tour Company"
      description="Expert planning from a Washington, DC tour company for schools. We handle logistics, overseas travel, and itineraries for Ohio 8th-grade classes."
    >
      <section id="hero" className="bg-white pt-40 pb-0 lg:pt-48 lg:pb-0 relative overflow-hidden flex items-center min-h-[auto] lg:min-h-[90vh]">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://i.imgur.com/YApA7Wg.jpeg" 
             alt="School Trip Group" 
             className="absolute right-0 top-0 h-full w-full lg:w-[65%] object-cover object-center"
           />
           {/* Gradient Overlay for Text Contrast - Desktop */}
           <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent lg:w-3/4 z-10"></div>
           {/* Mobile overlay - Gradient to WHITE at the bottom to eliminate gray band/image cut-off */}
           <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white lg:hidden z-10"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl pt-0 md:pt-0">
            <h1 className="heading-xl font-sans font-extrabold text-4xl md:text-7xl lg:text-8xl text-inkNavy mb-6 md:mb-8 tracking-tighter leading-[0.95]">
              Washington, DC Tour Company for Schools <br />
              <span className="block font-serif italic font-light text-3xl md:text-6xl mt-1 md:mt-2 text-inkNavy/90">+ Ohio & beyond</span>
            </h1>
            <p className="font-serif text-lg md:text-3xl italic text-slate mb-5 md:mb-12 leading-tight max-w-2xl">
              Customized itineraries and leadership from Ohio educators.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-[1fr_200px] gap-8 items-start mb-12">
              <div>
                  <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-6 tracking-tight leading-tight">What kind of trips do you offer?</h2>
                  
                  {/* Cleaned up paragraph without extra box wrapper */}
                  <p className="text-lg leading-relaxed text-inkNavy font-medium italic mb-8">
                    We specialize in Washington, DC school trips, Ohio and regional travel, and overseas itineraries, all built for real educational outcomes, smooth logistics, and actual school budgets. Every trip is customized and personally led by the founders.
                  </p>
                  
                  <div className="bg-white p-6 rounded-2xl border border-inkNavy/10 shadow-sm">
                    <h3 className="font-bold text-xl text-inkNavy mb-3 flex items-center gap-2">
                      <span className="text-brass">★</span> Customization
                    </h3>
                    <p className="text-slate leading-relaxed">
                      A travel itinerary can be customized to meet each group's unique preferences by tailoring the destinations, activities, and accommodations to suit their interests and needs. Whether it’s focusing on adventure, relaxation, cultural experiences, or family-friendly options, every detail can be adjusted. Flexible scheduling allows for personalized experiences, from private tours to customized meal options. This ensures that every member of the group enjoys a trip that feels designed just for them.
                    </p>
                  </div>
              </div>
              {/* Side image */}
              <div className="hidden md:block h-48 rounded-2xl overflow-hidden shadow-lg -rotate-2 mt-4">
                  <img 
                      src="https://i.imgur.com/rJQqylX.jpeg" 
                      alt="The White House" 
                      className="w-full h-full object-cover"
                  />
              </div>
          </div>

          {/* Extra requested image UYYwd4Z */}
          <div className="mb-20 rounded-3xl overflow-hidden shadow-xl aspect-[16/6] relative">
              <img 
                src="https://i.imgur.com/UYYwd4Z.jpeg" 
                alt="Group of students" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inkNavy/60 to-transparent flex items-end p-8">
                <span className="text-white font-bold text-xl tracking-wide">Creating memories that last a lifetime.</span>
              </div>
          </div>

          {/* We Make It Easy Section */}
          <div className="mt-16 mb-20 bg-[#F9F7F2] p-10 md:p-14 rounded-[3rem]">
            <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight text-center">We Make It Easy.</h2>
            <p className="text-lg text-slate text-center max-w-3xl mx-auto mb-10 leading-relaxed">
              Planning the trip is only half the work. Managing the logistics is what overwhelms schools and families. 
              That’s why every trip includes access to our <span className="font-bold text-inkNavy">School Trip Management Portal</span>, designed to reduce administrative burden and keep everyone aligned from enrollment through departure day.
            </p>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-3xl border border-inkNavy/5 shadow-sm">
                <h3 className="font-bold text-lg text-inkNavy mb-4 uppercase tracking-widest text-sm text-brass">For Schools, it means:</h3>
                <ul className="space-y-3 text-slate font-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-brass font-bold text-lg leading-none mt-1">•</span>
                    One live roster with real-time status for every student
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brass font-bold text-lg leading-none mt-1">•</span>
                    Clear visibility into forms and payment completion
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brass font-bold text-lg leading-none mt-1">•</span>
                    Easy identification of who needs follow-up
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brass font-bold text-lg leading-none mt-1">•</span>
                    CSV roster exports for school records
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brass font-bold text-lg leading-none mt-1">•</span>
                    Fewer last-minute issues before departure
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-inkNavy/5 shadow-sm">
                <h3 className="font-bold text-lg text-inkNavy mb-4 uppercase tracking-widest text-sm text-brass">For Parents, it means:</h3>
                <ul className="space-y-3 text-slate font-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-brass font-bold text-lg leading-none mt-1">•</span>
                    One dashboard for trip details, forms, and payment deadlines
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brass font-bold text-lg leading-none mt-1">•</span>
                    Progress tracking for what’s complete and what’s still needed
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brass font-bold text-lg leading-none mt-1">•</span>
                    Structured payments (deposit + installments) with transparent status
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brass font-bold text-lg leading-none mt-1">•</span>
                    A clear "Ready to Travel" confirmation when everything is complete
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center text-inkNavy font-bold italic mt-10 text-lg">
              Instead of spreadsheets, paper packets, and long email chains, the trip runs through one system with real-time updates and clear accountability.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight text-center">Our Step-by-Step Planning Process</h2>
            {/* Modified Layout: Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PLANNING_STEPS.map((step, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] border border-inkNavy/5 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-brass text-white flex items-center justify-center font-bold text-xl mb-6 shadow-md shadow-brass/20">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-lg text-inkNavy mb-3 leading-tight">{step.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            {/* New Requested Image */}
            <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://i.imgur.com/krLimbb.jpeg" alt="Planning details visual" className="w-full h-auto" width="1200" height="675" />
            </div>

            <div className="mt-12 text-center">
              <Link to="/contact" className="bg-brass text-white px-10 py-4 rounded-full font-black text-xl hover:bg-inkNavy transition-all shadow-xl shadow-brass/20 transform hover:-translate-y-1 inline-block uppercase tracking-widest">
                  Start Planning
              </Link>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight">What do you handle vs. what does the school handle?</h2>
            <AnswerBox>
              We handle trip design, coordination, family logistics through our portal (payments and required forms), and on-site leadership. Schools manage internal approvals, district-required permissions, and student policy enforcement.
            </AnswerBox>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-forest/5 p-8 rounded-xl border border-forest/10">
                <h3 className="font-bold text-forest mb-4 uppercase text-sm tracking-widest">Our Responsibility</h3>
                <ul className="space-y-3 text-sm">
                  <li>• Itinerary design & museum bookings</li>
                  <li>• Transportation (FMCSA-vetted buses)</li>
                  <li>• Hotel blocks & night security</li>
                  <li>• On-site leadership & problem solving</li>
                  <li>• Parent meeting support</li>
                </ul>
              </div>
              <div className="bg-slate/5 p-8 rounded-xl border border-slate/10">
                <h3 className="font-bold text-slate mb-4 uppercase text-sm tracking-widest">School Responsibility</h3>
                <ul className="space-y-3 text-sm">
                  <li>• Administrative/Board approvals</li>
                  <li>• Student behavior</li>
                  <li>• Selecting chaperones</li>
                  <li>• On-trip student supervision support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight">How do budgets work?</h2>
            <AnswerBox>
              We design trips around what families can afford by adjusting lodging, inclusions, and pacing. Share your range early and we’ll build a realistic plan.
            </AnswerBox>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white border border-inkNavy/5 rounded-lg text-center shadow-sm">
                <h3 className="font-bold text-inkNavy mb-2">Essentials Tier</h3>
                <p className="text-xs text-slate mb-4">Focus on core monuments & museums with budget-conscious lodging.</p>
                <p className="font-serif font-bold text-brass text-lg">Value Optimized</p>
              </div>
              <div className="p-6 bg-white border-2 border-brass rounded-lg text-center shadow-md relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brass text-inkNavy text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Most Popular</span>
                <h3 className="font-bold text-inkNavy mb-2">Classic Experience</h3>
                <p className="text-xs text-slate mb-4">Includes guided evening tours, standard dining, and closer lodging.</p>
                <p className="font-serif font-bold text-brass text-lg">Curriculum Deep-Dive</p>
              </div>
              <div className="p-6 bg-white border border-inkNavy/5 rounded-lg text-center shadow-sm">
                <h3 className="font-bold text-inkNavy mb-2">Premium Discovery</h3>
                <p className="text-xs text-slate mb-4">Includes theater tickets, premium meals, and prime hotel locations.</p>
                <p className="font-serif font-bold text-brass text-lg">All-Inclusive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Parallax Section RZsIME7 */}
      <section 
        className="relative py-32 md:py-48 bg-fixed bg-center bg-cover my-0"
        style={{ backgroundImage: 'url(https://i.imgur.com/RZsIME7.jpeg)' }}
      >
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-4xl">
        {/* New Policy Section for Schools */}
        <div className="mt-0">
          <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight text-center">Tour Details & Policies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-[#F9F7F2] p-8 rounded-3xl border border-inkNavy/5">
                <h3 className="font-bold text-lg text-inkNavy mb-3">What's Included?</h3>
                <p className="text-slate text-sm leading-relaxed">
                  The cost covers motor coach transportation, hotel accommodations, and all items mentioned in the "What's Included" section of the specific tour page. Tips and meals provided as part of the itinerary are already included in the tour price. Standard pricing is non-refundable; refundable pricing is available for an additional 10% of the trip cost and must be selected at booking.
                </p>
              </div>
              <div className="bg-[#F9F7F2] p-8 rounded-3xl border border-inkNavy/5">
                <h3 className="font-bold text-lg text-inkNavy mb-3">Transportation</h3>
                <p className="text-slate text-sm leading-relaxed">
                  We use top-of-the-line, modern motor coaches that come with restrooms, air conditioning, reclining seats, PA systems, stereo, video monitors, and DVD players. Frequent stops are made for your comfort throughout the journey.
                </p>
              </div>
              <div className="bg-[#F9F7F2] p-8 rounded-3xl border border-inkNavy/5">
                <h3 className="font-bold text-lg text-inkNavy mb-3">Itinerary Modifications</h3>
                <p className="text-slate text-sm leading-relaxed">
                  Because these tours are carefully planned in advance, 2 Teachers Travel reserves the right to make changes or substitutions to enhance the experience. Circumstances such as weather, traffic delays, closers, etc. may require modification of the itinerary.
                </p>
              </div>
            </div>
            <div className="space-y-8">
               <div className="bg-[#F9F7F2] p-8 rounded-3xl border border-inkNavy/5">
                <h3 className="font-bold text-lg text-inkNavy mb-3">Clear Communication</h3>
                <p className="text-slate text-sm leading-relaxed">
                  We handle the parent informational process by providing comprehensive packets that cover packing lists, behavioral expectations, and medical protocols. Parents have direct access to us for critical questions, ensuring peace of mind.
                </p>
              </div>
               <div className="bg-[#F9F7F2] p-8 rounded-3xl border border-inkNavy/5">
                <h3 className="font-bold text-lg text-inkNavy mb-3">Tour Guide</h3>
                <p className="text-slate text-sm leading-relaxed">
                  Every trip is led by a friendly, skilled, and experienced tour guide. Our guides are part of our team and are available to help with anything you need. In some cases, a local guide may also join the tour to offer in-depth information about the area.
                </p>
              </div>
              <div className="bg-[#F9F7F2] p-8 rounded-3xl border border-inkNavy/5">
                <h3 className="font-bold text-lg text-inkNavy mb-3">Cancellation & Payment</h3>
                <p className="text-slate text-sm leading-relaxed mb-4">
                  A deposit is required to reserve your spot on any tour and is non-refundable. If the tour reaches full capacity, you will be added to a waiting list.
                </p>
                <p className="text-slate text-sm leading-relaxed mb-4">
                  Final payments must be made 45 days prior to the tour’s departure. If you need to cancel your trip, you will receive a full refund minus any non-recoverable costs incurred on your behalf at the time of cancellation.
                </p>
                 <p className="text-slate text-sm leading-relaxed">
                  Our tours are priced based on a minimum number of participants. If this minimum is not met approximately 100 days before the trip’s departure, we may need to cancel the tour. Should this happen, you will receive a full refund.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-warmStone p-10 rounded-2xl border border-inkNavy/5">
          <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight">We feel locked into our current travel company. Can we switch?</h2>
          <p className="text-lg text-slate leading-relaxed mb-6">
            Yes. Many schools stick with the same provider out of habit, not because it’s the best fit. We can build a comparable plan that’s more flexible, more personal, and often more affordable.
          </p>
          <Link to="/contact" className="inline-block bg-inkNavy text-white px-8 py-3 rounded font-bold hover:bg-brass transition-colors">Compare Our Rates</Link>
        </div>
      </section>
    </Layout>
  );
};

export default SchoolTrips;
