'use client';

import T from '../../components/T';

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 border-b border-slate-800 py-20 px-6 sm:px-12 text-center text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-4 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            <T>YOUR DONATION MAKES A REAL DIFFERENCE</T>
          </h1>
          <div className="w-48 h-1.5 bg-[#F3D03E] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* 2. INTRODUCTORY SECTION */}
      <section className="py-16 px-6 sm:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
            <T>At</T> <strong className="text-slate-900 notranslate" translate="no">PalGives – Harmony, Action, Leading</strong>, <T>we believe that every contribution, no matter how small, can create meaningful change. Your donation helps us empower youth, support education, strengthen community initiatives, and promote sustainable development.</T>
          </p>
        </div>
      </section>

      {/* 3. WHY SUPPORT PALGIVES? (YELLOW BANNER) */}
      <section className="bg-[#F3D03E] py-20 sm:py-24 px-6 sm:px-12 text-slate-900">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-center sm:text-left">
            <T>WHY SUPPORT PALGIVES?</T>
          </h2>
          <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-semibold list-disc list-inside">
            <li><T>Direct support for youth and community programs</T></li>
            <li><T>Transparency and accountability in financial management</T></li>
            <li><T>Sustainable impact at the local community level</T></li>
            <li><T>Strong partnerships with local and international organizations</T></li>
          </ul>
        </div>
      </section>

      {/* 4. HOW YOUR DONATION IS USED */}
      <section className="py-20 sm:py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              <T>How Your Donation Is Used</T>
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base">
              <T>Your generous contribution supports:</T>
            </p>
          </div>
          <ul className="space-y-3 text-sm sm:text-base text-slate-700 font-medium list-disc list-inside bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <li><T>Youth empowerment and leadership programs</T></li>
            <li><T>Educational and training activities</T></li>
            <li><T>Sports and recreational initiatives for children and youth</T></li>
            <li><T>Community support projects for vulnerable families</T></li>
          </ul>
        </div>
      </section>

      {/* 5. WAYS TO DONATE (YELLOW BANNER) */}
      <section className="bg-[#F3D03E] py-20 sm:py-24 px-6 sm:px-12 text-slate-900">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              <T>Ways to Donate</T>
            </h2>
            <p className="text-slate-900 font-semibold text-sm sm:text-base">
              <T>You can support our work through:</T>
            </p>
          </div>
          <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-semibold list-disc list-inside">
            <li><T>Bank transfer</T></li>
            <li><T>Online donation (PayPal / Credit Card)</T></li>
            <li><T>Direct donations to the organization</T></li>
          </ul>
        </div>
      </section>

      {/* 6. BE PART OF THE CHANGE & CTA */}
      <section className="py-20 sm:py-24 px-6 sm:px-12 bg-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            <T>Be Part of the Change</T>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            <T>Your support makes a real difference in building a better future for youth and communities.</T>
          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-amber-600">
            <T>Join us in making a lasting impact!</T>
          </p>
          <div className="pt-2">
            <button
              onClick={() => alert('Donation processing system coming soon!')}
              className="px-10 py-4 bg-[#F3D03E] text-slate-900 font-black uppercase tracking-wider text-sm rounded-lg border-2 border-slate-900 hover:bg-amber-400 transition-colors shadow-lg cursor-pointer"
            >
              <T>Donate Now</T>
            </button>
          </div>
        </div>
      </section>

      {/* 7. FOOTER BANNER */}
      <section className="bg-[#F3D03E] py-12 px-6 text-center text-slate-900 font-bold text-sm sm:text-base border-t border-slate-900/10">
        <p><T>Support youth, education, and community development.</T></p>
        <p className="mt-1"><T>Donate today and help create lasting change.</T></p>
      </section>

      {/* 8. FOOTER COPYRIGHT */}
      <footer className="py-8 bg-slate-100 border-t border-slate-200 text-center text-xs text-slate-500 font-medium">
        <T>Youth Empowerment Initiative. All Rights Reserved. -2024–2026 PalGives ©</T>
      </footer>

    </div>
  );
}