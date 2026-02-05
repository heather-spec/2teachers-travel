
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Resources: React.FC = () => {
  const articles = [
    {
      title: "How to Plan a DC Trip for 8th Grade",
      excerpt: "A comprehensive guide for history and civics teachers looking to make the most of the nation's capital.",
      link: "/resources/how-to-plan-a-dc-trip-for-8th-grade",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80" // Lincoln Memorial
    },
    {
      title: "Alternatives to Big Student Travel Companies",
      excerpt: "Why smaller, educator-led firms are often a better fit for specialized school budgets and goals.",
      link: "/resources/alternatives-to-big-student-travel-companies",
      image: "https://images.unsplash.com/photo-1543862475-eb136770b5b0?auto=format&fit=crop&q=80" // Monument (reused but as thumbnail)
    },
    {
      title: "DC Trip Budget Options for Schools",
      excerpt: "A breakdown of where you can save and where you should invest for a successful student trip.",
      link: "/resources/dc-trip-budget-options-for-schools",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80" // General DC/Details
    }
  ];

  return (
    <Layout
      title="Teacher Resources | Planning Guides & Templates"
      description="Free resources for teachers planning student travel. Download packing lists, board approval templates, and guides for Washington, DC school trips."
    >
      <section className="bg-inkNavy py-20 text-white text-center relative overflow-hidden">
         {/* Decorative Background - Cherry Blossoms - Fixed Z-Index */}
         <div className="absolute inset-0 opacity-40 z-0">
           <img src="https://images.unsplash.com/photo-1522881451255-f59ad836fdbc?auto=format&fit=crop&q=80" alt="Cherry Blossoms in DC" className="w-full h-full object-cover" />
         </div>
         <div className="absolute inset-0 bg-inkNavy/60 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-sans font-bold md:font-extrabold text-4xl md:text-6xl tracking-tight md:tracking-tighter mb-4">Resources for Teachers Planning Washington, DC Trips</h1>
          <p className="text-xl opacity-80 font-light italic">Tools, tips, and strategies for school trip success.</p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-white border border-inkNavy/5 rounded-xl overflow-hidden shadow-sm flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-sans font-bold text-xl text-inkNavy mb-3 tracking-tight">{article.title}</h3>
                <p className="text-sm text-slate mb-6 flex-grow leading-relaxed">{article.excerpt}</p>
                <Link to={article.link} className="text-brass font-bold text-sm uppercase tracking-widest hover:text-inkNavy transition-colors flex items-center gap-2">
                  Read More 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-parchment p-12 rounded-2xl text-center border border-inkNavy/5">
          <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight">Ready-to-Use Materials</h2>
          <p className="text-slate mb-8 max-w-lg mx-auto">We provide downloadable checklists, board approval templates, and parent meeting slide decks for all our partner schools.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white px-6 py-2 rounded-full text-xs font-bold text-inkNavy border border-inkNavy/10 shadow-sm">Board Approval Template</span>
            <span className="bg-white px-6 py-2 rounded-full text-xs font-bold text-inkNavy border border-inkNavy/10 shadow-sm">Packing Checklist</span>
            <span className="bg-white px-6 py-2 rounded-full text-xs font-bold text-inkNavy border border-inkNavy/10 shadow-sm">Sample Itineraries</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
