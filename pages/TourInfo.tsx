
import React from 'react';
import Layout from '../components/Layout';
import AnswerBox from '../components/AnswerBox';

const TourInfo: React.FC = () => {
  return (
    <Layout
      title="Tour Policies & Planning | 2 Teachers Travel"
      description="Essential planning info: payment schedules, cancellation policies, and travel protection options. We make logistics easy for our Washington, DC tour company for schools."
    >
      <section className="bg-inkNavy pt-32 pb-20 text-white text-center relative overflow-hidden">
        {/* Flags Image - Fixed Z-Index */}
        <div className="absolute inset-0 opacity-40 z-0">
            <img 
             src="https://images.unsplash.com/photo-1557161163-440eb6190740?auto=format&fit=crop&q=80" 
             alt="US Flags" 
             className="w-full h-full object-cover"
            />
        </div>
        <div className="absolute inset-0 bg-inkNavy/60 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-sans font-bold md:font-extrabold text-4xl md:text-6xl tracking-tight md:tracking-tighter mb-4">Tour Information and Policies</h1>
          <p className="text-xl opacity-80 font-light italic">Clear guidelines for a smooth travel experience.</p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-4xl">
        <div className="space-y-16">
          <div id="insurance">
            <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight">Cancellation Details</h2>
            <AnswerBox>
              Travel Protection Option. Refundable pricing is available for an additional 10% of the total trip cost. This option allows families to cancel the trip for any reason prior to departure and receive a full refund. Standard pricing does not include cancellation protection and is non-refundable. Refundable pricing must be selected at the time of booking.
            </AnswerBox>
          </div>

          <div id="payments">
            <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight">Payment Schedule</h2>
            <AnswerBox>
              Final payment is due 45 days prior to departure. A structured payment plan is typically established early in the planning process to spread out the cost.
            </AnswerBox>
          </div>

          <div id="cancellations">
            <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight">Cancellations & Refunds</h2>
            <AnswerBox>
              Deposits are non-refundable. Refunds for the remaining balance depend on non-recoverable costs incurred by 2 Teachers Travel from vendors (hotels, buses, etc.).
            </AnswerBox>
            <div className="bg-white p-8 rounded-xl border border-inkNavy/5 mt-6 shadow-sm">
              <h3 className="font-bold text-inkNavy mb-4">Minimum Participation Risk</h3>
              <p className="text-slate leading-relaxed">
                Trip viability is assessed approximately 100 days prior to departure. If the minimum number of participants required to meet the budget is not met, the trip may be canceled with a full refund to all participants.
              </p>
            </div>
          </div>

          <div id="inclusions">
            <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight">What’s included?</h2>
            <AnswerBox>
              Trips typically include motor coach transportation, hotel accommodations, a structured educational itinerary, and on-site trip leadership by the founders.
            </AnswerBox>
          </div>

          <div id="who-not-for" className="bg-warmStone p-10 rounded-2xl">
            <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight">Who is this not for?</h2>
            <AnswerBox className="bg-white">
              2 Teachers Travel may not be the right fit if you want a fully automated self-serve travel platform, a large corporate call-center model, or non-DC travel. Our service is intentionally hands-on and educator-led.
            </AnswerBox>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TourInfo;
