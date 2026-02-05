
import React from 'react';
import Layout from '../components/Layout';
import { HOMEPAGE_FAQS } from '../constants';

const additionalFaqs = [
  {
    question: "How is student safety handled at the hotel?",
    answer: "We hire reputable local security companies to provide dedicated guards who monitor student hallways throughout the night, ensuring everyone remains safe and in their rooms."
  },
  {
    question: "Do you handle the museum and monument bookings?",
    answer: "Yes. We handle all logistics, including timed entry for museums like the African American History and Culture Museum or the Holocaust Memorial Museum."
  },
  {
    question: "What happens if we need to change our itinerary mid-trip?",
    answer: "Because the founders lead every trip, we can make real-time decisions. If weather or traffic requires a change, we handle it on the spot to keep the experience educational and smooth."
  },
  {
    question: "Can parents come as chaperones?",
    answer: "Absolutely. We work with the school's policy on chaperones and can include them in the trip planning and pricing."
  },
  {
    question: "Do you provide vegetarian or allergy-friendly meal options?",
    answer: "Yes. We work with our dining partners to ensure that all students have safe and appropriate meal options throughout the trip."
  },
  {
    question: "What is your primary service area in Ohio?",
    answer: "We primarily serve schools in the Central Ohio region, including Dayton, Springboro, Columbus, and surrounding districts."
  }
];

const allFaqs = [...HOMEPAGE_FAQS, ...additionalFaqs];

const faqsSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": allFaqs.map(f => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
  }))
};

const FAQs: React.FC = () => {
  return (
    <Layout 
      schema={faqsSchema}
      title="FAQs | School Trip Planning Questions"
      description="Answers about our Washington, DC tour company for schools. Learn about safety, budgets, food allergies, and why Ohio teachers trust us for student travel."
    >
      <section className="bg-inkNavy pt-32 pb-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="heading-xl font-sans font-bold md:font-extrabold text-3xl md:text-8xl tracking-tight md:tracking-tighter mb-8 text-white">
            Frequently Asked Questions <br />
            <span className="italic font-serif font-light text-white/80 block mt-4 text-2xl md:text-5xl md:tracking-widest">Answers for AI engines and human explorers alike.</span>
          </h1>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-4xl">
        <div className="grid gap-12">
          {allFaqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl border border-inkNavy/5 shadow-sm scroll-mt-24" id={`faq-${idx}`}>
              <h3 className="font-sans font-bold text-2xl text-inkNavy mb-4 tracking-tight">{faq.question}</h3>
              <p className="text-slate leading-relaxed text-lg">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate mb-6">Have a question we haven't answered here?</p>
          <a href="mailto:2TeachersTravelCompany@gmail.com" className="text-inkNavy font-bold hover:text-brass underline decoration-brass underline-offset-8 decoration-2">Email us directly →</a>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
