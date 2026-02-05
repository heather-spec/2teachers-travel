
import React from 'react';
import Layout from '../components/Layout';

const WhyUs: React.FC = () => {
  return (
    <Layout
      title="Meet the Founders | 2 Teachers Travel"
      description="Meet the educators behind 2 Teachers Travel. We personally lead every Washington, DC school trip, ensuring safety and curriculum alignment for Ohio students."
    >
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
         {/* Decorative Background Image - Washington Monument - Fixed Z-Index */}
         <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 opacity-40 mask-gradient-b">
           <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent lg:hidden z-10"></div>
           <img 
            src="https://images.unsplash.com/photo-1543862475-eb136770b5b0?auto=format&fit=crop&q=80" 
            alt="Washington Monument and Reflecting Pool" 
            className="w-full h-full object-cover lg:rounded-bl-[5rem] relative z-0"
           />
         </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-32">
            <span className="text-brass font-black uppercase tracking-[0.3em] text-[10px] mb-10 inline-block px-4 py-1 border border-brass/20 rounded-full bg-white/50 backdrop-blur-sm">
              MEET THE FOUNDERS
            </span>
            <h1 className="heading-xl font-sans font-bold md:font-extrabold text-5xl md:text-8xl lg:text-[7rem] text-inkNavy mb-12 tracking-tight md:tracking-tighter">
              Bred from the <br/>
              <span className="italic font-serif font-light text-slate">classroom.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate max-w-4xl mx-auto leading-relaxed font-medium bg-white/60 p-6 rounded-3xl lg:bg-transparent lg:p-0">
              We believe that the best learning happens when students experience history and government firsthand. That’s why we’ve made it our mission to create unforgettable educational journeys to the nation’s capital.
            </p>
          </div>

          <div className="space-y-48">
            {/* Jeane Toadvine Bio Section */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-brass font-black uppercase tracking-widest text-xs mb-6 block">CO-FOUNDER</span>
                <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight">Jeane Toadvine</h2>
                <div className="space-y-8 text-xl text-slate leading-relaxed font-medium">
                  <p>
                    Jeane Toadvine has played a pivotal role in planning and chaperoning a wide range of student trips, including 8th-grade trips to Washington, D.C., and New York City, as well as international educational tours through EF Student Tours.
                  </p>
                  <p>
                    Her international trips have taken students to France, Spain, Monaco, Italy, Greece, Scotland, and England. Jeane also organized and led Presidential Inauguration trips for Carlisle and Miamisburg High Schools across five election cycles.
                  </p>
                  <p>
                    Her commitment to enriching students’ lives through travel has left a lasting impact, as she has been instrumental in fostering cultural awareness and personal growth in her students.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                 <div className="bg-[#F9F7F2] aspect-[4/5] relative overflow-hidden rounded-[3rem] shadow-2xl group border border-slate-100">
                    <img 
                      src="https://i.imgur.com/e1MGz1l.jpg" 
                      alt="Jeane Toadvine" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-brass/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 </div>
              </div>
            </div>

            {/* René Offenberger Bio Section */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="">
                 <div className="bg-[#F9F7F2] aspect-[4/5] relative overflow-hidden rounded-[3rem] shadow-2xl group border border-slate-100">
                    <img 
                      src="https://i.imgur.com/IwUQR3i.jpg" 
                      alt="René Offenberger" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-brass/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 </div>
              </div>
              <div>
                <span className="text-brass font-black uppercase tracking-widest text-xs mb-6 block">CO-FOUNDER</span>
                <h2 className="font-sans font-extrabold text-4xl text-inkNavy mb-8 tracking-tight leading-tight">René Offenberger</h2>
                <div className="space-y-8 text-xl text-slate leading-relaxed font-medium">
                  <p>
                    René Offenberger is a seasoned educator with 34 years of experience in the classroom and a deep passion for student travel. Soon to retire in 2025, Mrs. Offenberger has had the privilege of participating in more than 15 student trips to Washington, D.C., with over a decade spent in leadership roles.
                  </p>
                  <p>
                    She has also participated in and led tours through other student travel companies such as Explorica and EF, further enhancing her expertise in creating meaningful travel experiences for students.
                  </p>
                  <p>
                    Throughout her career, she has coordinated and led educational trips, working closely with local tour guides, bus companies, and iconic D.C. sites to ensure that each experience is of the highest quality for students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Block */}
      <section className="py-48 bg-[#F9F7F2] mt-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 opacity-10 translate-x-1/4 translate-y-1/4">
          <svg className="w-[600px] h-[600px] text-inkNavy" viewBox="0 0 100 100" fill="currentColor">
            <path d="M40 0 C 0 0 0 100 100 100" />
          </svg>
        </div>
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
           <svg className="w-20 h-20 text-brass/20 mx-auto mb-16" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H21.017C22.1216 3 23.017 3.89543 23.017 5V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H8.017C9.12157 3 10.017 3.89543 10.017 5V15C10.017 18.3137 7.33071 21 4.017 21H1.017Z" /></svg>
           <h3 className="font-serif text-4xl md:text-5xl font-light italic text-inkNavy leading-[1.2] mb-20 tracking-tight">
             "Our mission is to create unforgettable educational journeys to the nation’s capital, tailored to the unique needs of each school and group."
           </h3>
           <div className="flex flex-col items-center">
             <div className="flex -space-x-4 mb-8">
                <div className="w-16 h-16 rounded-full border-4 border-white bg-slate-300 shadow-xl overflow-hidden">
                   <img src="https://i.imgur.com/e1MGz1l.jpg" alt="Jeane" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-white bg-slate-400 shadow-xl overflow-hidden">
                   <img src="https://i.imgur.com/IwUQR3i.jpg" alt="René" className="w-full h-full object-cover grayscale" />
                </div>
             </div>
             <p className="font-black text-inkNavy text-xl tracking-tight">Jeane & René</p>
             <p className="text-slate font-bold uppercase tracking-widest text-xs mt-2">Founders, 2 Teachers Travel</p>
           </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyUs;
