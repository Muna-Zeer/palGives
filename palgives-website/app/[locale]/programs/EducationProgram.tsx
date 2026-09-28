'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function EducationProgram() {
  const { locale } = useLanguage();
  const isArabic = locale === 'ar';

  return (
    <div
      className="w-full min-h-screen bg-slate-50 font-sans text-slate-800"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      
      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-slate-200 py-20 px-6 sm:px-12 text-center shadow-xs">
        <div className="max-w-5xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 bg-[#F3D03E] text-slate-900 text-xs font-extrabold tracking-widest uppercase rounded">
            {isArabic ? 'برنامج تأثير' : 'Impact Program'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            {isArabic ? 'برنامج التعليم' : 'EDUCATION PROGRAM'}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {isArabic 
              ? 'إطلاق الطاقات وتمكين الشباب من خلال مبادرات تعليمية يسهل الوصول إليها وعالية الجودة وبناء المهارات.'
              : 'Unlocking potential and empowering youth through accessible, high-quality education and skill-building initiatives.'}
          </p>
        </div>
      </section>

      {/* 2. OVERVIEW & WHY IT MATTERS */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Overview text */}
          <div className="text-center space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              {isArabic ? 'نظرة عامة' : 'Overview'}
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {isArabic ? 'إطلاق الطاقات، وتمكين الشباب' : 'Unlocking Potential, Empowering Youth'}
            </h3>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              {isArabic ? (
                <>
                  في{' '}
                  <span className="font-bold text-slate-900 notranslate" translate="no">
                    فلسطين تعطي
                  </span>
                  ، نؤمن بأن كل طفل وشاب يستحق الوصول إلى تعليم عالي الجودة يلهم الفضول، الإبداع، والثقة. يزود{' '}
                  <span className="font-bold text-slate-900">برنامج التعليم</span>{' '}
                  الخاص بنا المتعلمين بالمهارات الأكاديمية، الرقمية، والحياتية الأساسية، مما يؤهلهم للنجاح في المدرسة، العمل، والحياة.
                </>
              ) : (
                <>
                  At{' '}
                  <span className="font-bold text-slate-900 notranslate" translate="no">PalGives</span>, we believe that every child and young person deserves access to quality education that inspires curiosity, creativity, and confidence. Our <span className="font-bold text-slate-900">Education Program</span> equips learners with essential academic, digital, and life skills—preparing them to succeed in school, work, and life.
                </>
              )}
            </p>
          </div>

          {/* Why It Matters (Handles RTL border alignment seamlessly) */}
          <div className={`p-8 bg-slate-50 ${isArabic ? 'border-r-4' : 'border-l-4'} border-[#F3D03E] ${isArabic ? 'rounded-l-2xl' : 'rounded-r-2xl'} shadow-sm space-y-6`}>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {isArabic ? 'لماذا يكتسي هذا البرنامج أهمية؟' : 'WHY IT MATTERS'}
            </h3>
            <ul className="space-y-3 text-slate-700 text-base font-medium list-disc list-inside">
              <li>
                <strong className="text-slate-900">85%</strong>{' '}
                {isArabic 
                  ? 'من المشاركين لدينا يسجلون تحسناً في الأداء الأكاديمي خلال عام واحد.' 
                  : 'of our participants report improved academic performance within one year.'}
              </li>
              <li>
                <strong className="text-slate-900">75%</strong>{' '}
                {isArabic 
                  ? 'يكتسبون مهارات رقمية ومهارات في العلوم والتكنولوجيا والهندسة والرياضيات (STEAM) بشكل أقوى.' 
                  : 'gain stronger digital and STEAM skills.'}
              </li>
              <li>
                {isArabic 
                  ? 'التعليم هو المفتاح لكسر حلقات الفقر والبطالة.' 
                  : 'Education is the key to breaking cycles of poverty and unemployment.'}
              </li>
            </ul>
            <p className="text-sm font-semibold text-amber-800 bg-amber-50 p-3 rounded-lg border border-amber-200 inline-block">
              {isArabic 
                ? 'نحن نركز على التعلم العملي، التوجيه، ودعم المجتمع لضمان نجاح كل طالب.' 
                : 'We focus on hands-on learning, mentorship, and community support to ensure every student succeeds.'}
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
                src="/images/programs/youth22.jpg" 
                alt="Interactive learning session"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                {isArabic ? 'ما نقدمه' : 'What We Offer'}
              </h2>
              <ul className="space-y-4 text-sm sm:text-base text-slate-900 font-medium">
                <li className="p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/80">
                  <strong className="block text-slate-950 font-bold mb-1">
                    {isArabic ? 'الدعم الأكاديمي:' : 'Academic Support:'}
                  </strong>
                  {isArabic ? 'دروس تقوية في المواد الأساسية (الرياضيات، العلوم، اللغات).' : 'Tutoring in core subjects (Math, Science, Languages).'}
                </li>
                <li className="p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/80">
                  <strong className="block text-slate-950 font-bold mb-1">
                    {isArabic ? 'المهارات الرقمية والعلوم (STEAM):' : 'Digital & STEAM Skills:'}
                  </strong>
                  {isArabic ? 'البرمجة، المعرفة التقنية، وحل المشكلات الإبداعي.' : 'Coding, IT literacy, and creative problem-solving.'}
                </li>
                <li className="p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/80">
                  <strong className="block text-slate-950 font-bold mb-1">
                    {isArabic ? 'المهارات الحياتية والقيادة:' : 'Life Skills & Leadership:'}
                  </strong>
                  {isArabic ? 'التواصل، العمل الجماعي، والتفكير النقدي.' : 'Communication, teamwork, and critical thinking.'}
                </li>
                <li className="p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/80">
                  <strong className="block text-slate-950 font-bold mb-1">
                    {isArabic ? 'التوجيه والإرشاد:' : 'Mentorship & Guidance:'}
                  </strong>
                  {isArabic ? 'دعم شخصي واستكشاف المسار الوظيفي.' : 'Personalized support and career exploration.'}
                </li>
              </ul>
            </div>
          </div>

          {/* Impact Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center pt-16 border-t border-slate-900/20">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white order-2 md:order-1">
              <Image
                src="/images/programs/youth23.jpg" 
                alt="Students collaborating"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                {isArabic ? 'الأثر' : 'Impact'}
              </h2>
              <p className="text-base font-bold text-slate-800">
                {isArabic ? 'من خلال هذا البرنامج، تساعد مؤسسة فلسطين تعطي الشباب على:' : 'Through this program, PalGives helps youth:'}
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                <li>{isArabic ? 'تحسين النتائج الأكاديمية وبناء الثقة بالنفس.' : 'Improve academic outcomes and confidence.'}</li>
                <li>{isArabic ? 'تطوير التفكير النقدي، والمهارات الرقمية والقيادية.' : 'Develop critical thinking, digital, and leadership skills.'}</li>
                <li>{isArabic ? 'الوصول إلى فرص تعليمية ومهنية مستقبلية.' : 'Access future educational and career opportunities.'}</li>
                <li>{isArabic ? 'أن يصبحوا مساهمين فاعلين في مجتمعاتهم.' : 'Become active contributors to their communities.'}</li>
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
              src="/images/programs/youth24.jpg" 
              alt="Classroom students"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-amber-600">
              {isArabic ? 'شاركنا العمل' : 'Get Involved'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              {isArabic ? 'انضم إلينا' : 'JOIN US'}
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              <strong className="text-slate-900">
                {isArabic ? 'كن جزءاً من التغيير!' : 'Be a part of the change!'}
              </strong>{' '}
              {isArabic ? 'ادعم فلسطين تعطي في خلق مستقبل مشرق للشباب الفلسطيني. تبرعك يمكن الأطفال من' : 'Support PalGives in creating brighter futures for Palestinian youth. Your contribution empowers children to'}{' '}
              <span className="font-bold text-slate-900">
                {isArabic ? 'التعلم، النمو، وإطلاق كامل طاقاتهم' : 'learn, grow, and unlock their full potential'}
              </span>
              {isArabic ? '— طالباً تلو الآخر.' : '—one student at a time.'}
            </p>
            <div>
              <a
                href="/donate"
                className="inline-block px-8 py-3.5 bg-[#F3D03E] text-slate-900 font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber-400 transition-colors shadow-md cursor-pointer"
              >
                {isArabic ? 'ادعم التعليم' : 'Support Education'}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 5. FOOTER BANNER */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black">
            {isArabic ? 'استثمر في التعليم اليوم' : 'Invest in Education Today'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {isArabic 
              ? 'ساعدنا في توفير المواد التعليمية، الأجهزة الرقمية، والمعلمين الأكفاء للمجتمعات ذات الموارد المحدودة.'
              : 'Help us provide learning materials, digital devices, and skilled instructors to under-resourced communities.'}
          </p>
          <div className="pt-2">
            <a
              href="/donate"
              className="inline-block px-8 py-3.5 bg-[#F3D03E] text-slate-900 font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber-400 transition-colors shadow-md cursor-pointer"
            >
              {isArabic ? 'تبرع الآن' : 'Donate Now'}
            </a>
          </div>
        </div>
      </section>

      {/* 6. FOOTER COPYRIGHT */}
      <footer className="py-8 bg-slate-100 border-t border-slate-200 text-center text-xs text-slate-500 font-medium">
        {isArabic 
          ? 'مبادرة تمكين الشباب. جميع الحقوق محفوظة. 2024–2026 فلسطين تعطي ©' 
          : 'Youth Empowerment Initiative. All Rights Reserved. -2024–2026 PalGives ©'}
      </footer>

    </div>
  );
}