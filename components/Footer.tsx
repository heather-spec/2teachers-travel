
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-inkNavy text-warmStone py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-6">
            <h3 className="font-sans font-extrabold text-2xl tracking-tighter text-white">
              2 teachers <span className="font-serif italic font-light">travel</span>
            </h3>
            <p className="text-sm opacity-60 leading-relaxed font-medium">
              Educator-led student travel specialized for Washington, DC. Founded by Ohio teachers to ensure safety, curriculum alignment, and personal leadership.
            </p>
            <div className="pt-2 space-y-2 font-bold text-sm">
              <p>937-238-7388</p>
              <p>2TeachersTravelCompany@gmail.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-black mb-8 text-brass uppercase tracking-[0.2em] text-[10px]">Quick Links</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><Link to="/school-trips" className="hover:text-brass transition-colors">The Program</Link></li>
              <li><Link to="/#planning" className="hover:text-brass transition-colors">Planning Process</Link></li>
              <li><Link to="/why-us" className="hover:text-brass transition-colors">Founder Story</Link></li>
              <li><Link to="/faqs" className="hover:text-brass transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 text-brass uppercase tracking-[0.2em] text-[10px]">Coordination</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><Link to="/tour-info" className="hover:text-brass transition-colors">Tour Policies</Link></li>
              <li><Link to="/tour-info#payments" className="hover:text-brass transition-colors">Payment Schedule</Link></li>
              <li><Link to="/tour-info#insurance" className="hover:text-brass transition-colors">Cancellation Details</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 text-brass uppercase tracking-[0.2em] text-[10px]">Primary Service Area</h4>
            <p className="text-xs font-bold opacity-60 mb-6 uppercase tracking-widest leading-loose">
              Springboro & Dayton Area<br/>
              Greater Columbus Region<br/>
              Central Ohio School Districts<br/>
              Destination: Washington, DC
            </p>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] opacity-30">
          <p>© {new Date().getFullYear()} 2 Teachers Travel. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Professional Student Travel for Ohio Educators.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
