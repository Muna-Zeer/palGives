'use client';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* HERO BANNER */}
      <section className="bg-slate-900 border-b border-slate-800 py-20 px-6 sm:px-12 text-center text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-4 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            CONTACT US
          </h1>
          <div className="w-48 h-1.5 bg-[#F3D03E] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Introductory Text */}
          <div className="space-y-3 border-b border-slate-200 pb-8">
            <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
            <p className="text-slate-600 leading-relaxed text-base">
              We are pleased to hear from you for any inquiries, suggestions, or partnership opportunities. You can reach us through the following channels:
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Email Addresses */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="p-2 bg-[#F3D03E] text-slate-900 rounded-lg text-sm">✉</span>
                Email Addresses
              </h3>
              <ul className="space-y-2 text-sm text-slate-700 font-medium">
               <li>
                  <a href="mailto:info@palgive.org" className="hover:text-amber-600 underline decoration-slate-300">
                    info@palgive.org
                  </a>
                </li>
                <li>
                  <a href="mailto:PalGives@Outlook.com" className="hover:text-amber-600 underline decoration-slate-300">
                    PalGives@Outlook.com
                  </a>
                </li>
               
              </ul>
            </div>

            {/* Social Media */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="p-2 bg-[#F3D03E] text-slate-900 rounded-lg text-sm">🌐</span>
                Social Media
              </h3>
              <div className="space-y-3 text-sm text-slate-700 font-medium">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Facebook</span>
                  <a 
                    href="https://www.facebook.com/PalGive" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-600 underline decoration-slate-300 break-all"
                  >
                    https://www.facebook.com/PalGive
                  </a>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Instagram</span>
                  <a 
                    href="https://www.instagram.com/palgives1?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-600 underline decoration-slate-300 break-all"
                  >
                    https://www.instagram.com/palgives1?hl=en
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Our Office Locations */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="p-2 bg-[#F3D03E] text-slate-900 rounded-lg text-sm">📍</span>
              Our Office Locations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              {/* Bethlehem */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
                <h4 className="font-extrabold text-slate-900 border-b border-slate-100 pb-2">
                  Bethlehem
                </h4>
                <div className="text-slate-600 space-y-1">
                  <p className="font-semibold text-slate-800">Administrative Office:</p>
                  <p>Jerusalem-Hebron Street – Al-Natsheh Building – First Floor</p>
                  <p className="font-semibold text-slate-800 pt-2">Training Halls:</p>
                  <p>Jerusalem-Hebron Street – Al-Ribat Building – Third Floor</p>
                </div>
              </div>

              {/* Nablus */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
                <h4 className="font-extrabold text-slate-900 border-b border-slate-100 pb-2">
                  Nablus
                </h4>
                <div className="text-slate-600 space-y-1">
                  <p>Rafidia Street – Al-Balad Building – First Floor</p>
                </div>
              </div>

              {/* Jerusalem */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
                <h4 className="font-extrabold text-slate-900 border-b border-slate-100 pb-2">
                  Jerusalem
                </h4>
                <div className="text-slate-600 space-y-1">
                  <p>French Hill Street – Al-Afaq Building – Second Floor- 404</p>
                </div>
              </div>
            </div>

            <p className="text-center text-sm font-semibold text-slate-700 pt-4 border-t border-slate-200">
              We welcome your visit during official working hours and look forward to connecting with you.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER COPYRIGHT */}
      <footer className="py-8 bg-slate-100 border-t border-slate-200 text-center text-xs text-slate-500 font-medium">
        Youth Empowerment Initiative. All Rights Reserved. -2024–2026 PalGives ©
      </footer>

    </div>
  );
}