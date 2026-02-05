
import React from 'react';
import Layout from '../components/Layout';
import AnswerBox from '../components/AnswerBox';

const Parents: React.FC = () => {
  return (
    <Layout
      title="Parent Information | Safety & Trip Details"
      description="Parent guide for your student's Washington, DC school trip. Details on safety, FMCSA buses, hotel security, payments, and educator-led supervision."
    >
      <section 
        className="bg-inkNavy pt-48 pb-24 text-white text-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url(https://i.imgur.com/9yRkQfU.jpeg)' }}
      >
        <div className="absolute inset-0 bg-inkNavy/70 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="heading-xl font-sans font-bold md:font-extrabold text-5xl md:text-8xl tracking-tight md:tracking-tighter mb-8 text-white">
            Parent Information <br />
            <span className="italic font-serif font-light text-white/90 block mt-4 text-3xl md:text-5xl lg:tracking-widest">Clear facts for your child's safety and success.</span>
          </h1>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-4xl">
        <div className="space-y-16">
          <div id="leadership">
            <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight">Who is leading the trip?</h2>
            <AnswerBox>
              The founders of 2 Teachers Travel personally lead each trip in Washington, DC. That means consistent educator supervision and on-site decision-making throughout travel.
            </AnswerBox>
            <p className="text-slate leading-relaxed mt-4">
              Unlike large companies that assign seasonal tour managers, we are the ones you meet during the planning call and the ones who lead the group on the steps of the Lincoln Memorial.
            </p>
          </div>

          <div id="safety">
            <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight">How is safety handled?</h2>
            <AnswerBox>
              Safety includes FMCSA-vetted buses, hotel night security, and educator-led supervision. Families receive clear expectations and trip documentation before departure.
            </AnswerBox>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="p-4 bg-white border border-inkNavy/5 rounded shadow-sm text-center">
                <div className="text-brass mb-2 font-bold text-sm uppercase">Transportation</div>
                <p className="text-xs text-slate">Buses vetted through Federal Motor Carrier Safety Administration (FMCSA).</p>
              </div>
              <div className="p-4 bg-white border border-inkNavy/5 rounded shadow-sm text-center">
                <div className="text-brass mb-2 font-bold text-sm uppercase">Night Security</div>
                <p className="text-xs text-slate">Vetted local security guards monitor hotel hallways every night.</p>
              </div>
              <div className="p-4 bg-white border border-inkNavy/5 rounded shadow-sm text-center">
                <div className="text-brass mb-2 font-bold text-sm uppercase">Educator Led</div>
                <p className="text-xs text-slate">Decades of classroom experience managing student groups.</p>
              </div>
            </div>
          </div>

          {/* New Image Break */}
          <div className="py-8">
             <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative h-[400px]">
                <img 
                   src="https://i.imgur.com/UYYwd4Z.jpeg" 
                   alt="Students on a trip" 
                   className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inkNavy/80 via-transparent to-transparent flex items-end p-10">
                   <p className="text-white font-sans font-extrabold text-2xl tracking-tight">Experienced supervision at every landmark.</p>
                </div>
             </div>
          </div>

          <div id="whats-included">
            <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight">What’s included, and what’s not?</h2>
            <AnswerBox>
              Trips typically include transportation, lodging, a structured educational itinerary, and on-site leadership. Optional travel insurance is available separately.
            </AnswerBox>
            <p className="text-slate leading-relaxed mt-4">
              Detailed itinerary packets are shared months in advance. We work to ensure most costs (meals, tickets, fees) are bundled to reduce student out-of-pocket needs.
            </p>
          </div>

          <div id="payments">
            <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight">How do payments and cancellations work?</h2>
            <AnswerBox>
              Final payment is due 45 days before departure. Deposits are non-refundable. Refunds depend on non-recoverable costs once bookings are made.
            </AnswerBox>
            <div className="mt-8 border border-inkNavy/10 rounded-xl overflow-hidden">
               <div className="bg-inkNavy p-4 text-white font-bold uppercase tracking-widest text-xs">Payment Timeline (Typical)</div>
               <div className="bg-white p-6 space-y-4 text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-bold">Booking / Deposit</span>
                    <span className="text-brass">Due at Registration</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-bold">Interim Payments</span>
                    <span>Scheduled by School</span>
                  </div>
                  <div className="flex justify-between font-bold text-inkNavy pt-2">
                    <span>Final Balance</span>
                    <span>45 Days Before Departure</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center bg-warmStone p-12 rounded-2xl">
          <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight">Need a copy of the Parent Pack?</h2>
          <p className="mb-8 text-slate max-w-lg mx-auto">Download our comprehensive guide covering safety, packing lists, and what to expect during the Washington, DC trip.</p>
          <button className="bg-brass text-inkNavy px-10 py-4 rounded font-bold hover:bg-inkNavy hover:text-white transition-all">Get Parent Info Pack (PDF)</button>
        </div>
      </section>
    </Layout>
  );
};

export default Parents;
