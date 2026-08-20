'use client';

import Image from 'next/image';

export default function EducationProgram() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-slate-200 py-20 px-6 sm:px-12 text-center">
        <div className="max-w-5xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 bg-[#F3D03E] text-slate-900 text-xs font-extrabold tracking-widest uppercase rounded">
            Impact Program
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            EDUCATION PROGRAM
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Unlocking potential and empowering youth through accessible, high-quality education and skill-building initiatives.
          </p>
        </div>
      </section>

      {/* 2. OVERVIEW & WHY IT MATTERS */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Overview text */}
          <div className="text-center space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Overview
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Unlocking Potential, Empowering Youth
            </h3>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              At <span className="font-bold text-slate-900">PalGives</span>, we believe that every child and young person deserves access to quality education that inspires curiosity, creativity, and confidence. Our <span className="font-bold text-slate-900">Education Program</span> equips learners with essential academic, digital, and life skills—preparing them to succeed in school, work, and life.
            </p>
          </div>

          {/* Why It Matters */}
          <div className="p-8 bg-slate-50 border-l-4 border-[#F3D03E] rounded-r-2xl shadow-sm space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              WHY IT MATTERS
            </h3>
            <ul className="space-y-3 text-slate-700 text-base font-medium list-disc list-inside">
              <li>
                <strong className="text-slate-900">85%</strong> of our participants report improved academic performance within one year.
              </li>
              <li>
                <strong className="text-slate-900">75%</strong> gain stronger digital and STEAM skills.
              </li>
              <li>
                Education is the key to breaking cycles of poverty and unemployment.
              </li>
            </ul>
            <p className="text-sm font-semibold text-amber-800 bg-amber-50 p-3 rounded-lg border border-amber-200 inline-block">
              We focus on hands-on learning, mentorship, and community support to ensure every student succeeds.
            </p>
          </div>

        </div>
      </section>

      {/* 3. WHAT WE OFFER & IMPACT (YELLOW BANNER) */}
      <section className="bg-[#F3D03E] py-20 sm:py-28 px-6 sm:px-12 text-slate-900">
        <div className="max-w-5xl mx-auto space-y-20 sm:space-y-24">
          
          {/* What We Offer Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/education-1.jpg" // Update with your actual image path
                alt="Interactive learning session"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                What We Offer
              </h2>
              <ul className="space-y-4 text-sm sm:text-base text-slate-900 font-medium">
                <li className="p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/80">
                  <strong className="block text-slate-950 font-bold mb-1">Academic Support:</strong>
                  Tutoring in core subjects (Math, Science, Languages).
                </li>
                <li className="p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/80">
                  <strong className="block text-slate-950 font-bold mb-1">Digital & STEAM Skills:</strong>
                  Coding, IT literacy, and creative problem-solving.
                </li>
                <li className="p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/80">
                  <strong className="block text-slate-950 font-bold mb-1">Life Skills & Leadership:</strong>
                  Communication, teamwork, and critical thinking.
                </li>
                <li className="p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/80">
                  <strong className="block text-slate-950 font-bold mb-1">Mentorship & Guidance:</strong>
                  Personalized support and career exploration.
                </li>
              </ul>
            </div>
          </div>

          {/* Impact Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center pt-16 border-t border-slate-900/20">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white order-2 md:order-1">
              <Image
                src="/images/education-2.jpg" // Update with your actual image path
                alt="Students collaborating"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                Impact
              </h2>
              <p className="text-base font-bold text-slate-800">
                Through this program, PalGives helps youth:
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                <li>Improve academic outcomes and confidence.</li>
                <li>Develop critical thinking, digital, and leadership skills.</li>
                <li>Access future educational and career opportunities.</li>
                <li>Become active contributors to their communities.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 4. JOIN US (CTA SECTION) */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <Image
              src="/images/education-3.jpg" // Update with your actual image path
              alt="Classroom students"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-amber-600">
              Get Involved
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              JOIN US
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              <strong className="text-slate-900">Be a part of the change!</strong> Support PalGives in creating brighter futures for Palestinian youth. Your contribution empowers children to <span className="font-bold text-slate-900">learn, grow, and unlock their full potential</span>—one student at a time.
            </p>
            <div>
              <a
                href="/donate"
                className="inline-block px-8 py-3.5 bg-[#F3D03E] text-slate-900 font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber-400 transition-colors shadow-md"
              >
                Support Education
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 5. FOOTER BANNER */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black">
            Invest in Education Today
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Help us provide learning materials, digital devices, and skilled instructors to under-resourced communities.
          </p>
          <div className="pt-2">
            <a
              href="/donate"
              className="inline-block px-8 py-3.5 bg-[#F3D03E] text-slate-900 font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber-400 transition-colors shadow-md"
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}