
'use client';

import Image from 'next/image';
import { useLanguage } from '../../../context/LanguageContext';

export default function EducationProgram() {
  const { isArabic } = useLanguage();

  const content = {
    impactProgram: isArabic ? 'برنامج مؤثر' : 'Impact Program',

    title: isArabic ? 'برنامج التعليم' : 'EDUCATION PROGRAM',

    description: isArabic
      ? 'إطلاق الإمكانات وتمكين الشباب من خلال التعليم الجيد والمتاح ومبادرات بناء المهارات.'
      : 'Unlocking potential and empowering youth through accessible, high-quality education and skill-building initiatives.',

    overview: isArabic ? 'نظرة عامة' : 'Overview',

    overviewTitle: isArabic
      ? 'إطلاق الإمكانات وتمكين الشباب'
      : 'Unlocking Potential, Empowering Youth',

    overviewTextStart: isArabic
      ? 'في'
      : 'At',

    overviewText: isArabic
      ? 'فلسطين تعطي، نؤمن بأن كل طفل وشاب يستحق الوصول إلى تعليم جيد يلهم الفضول والإبداع والثقة. يعمل برنامج التعليم لدينا على تزويد المتعلمين بالمهارات الأكاديمية والرقمية ومهارات الحياة الأساسية، وإعدادهم للنجاح في المدرسة والعمل والحياة.'
      : ', we believe that every child and young person deserves access to quality education that inspires curiosity, creativity, and confidence. Our',

    educationProgram: isArabic
      ? 'برنامج التعليم'
      : 'Education Program',

    overviewEnding: isArabic
      ? 'يزود المتعلمين بالمهارات الأكاديمية والرقمية ومهارات الحياة الأساسية، ويهيئهم للنجاح في المدرسة والعمل والحياة.'
      : 'equips learners with essential academic, digital, and life skills—preparing them to succeed in school, work, and life.',

    whyItMatters: isArabic ? 'لماذا هذا مهم؟' : 'WHY IT MATTERS',

    academicPerformance: isArabic
      ? 'من المشاركين أفادوا بتحسن أدائهم الأكاديمي خلال عام واحد.'
      : 'of our participants report improved academic performance within one year.',

    digitalSkills: isArabic
      ? 'يكتسبون مهارات أقوى في المجالات الرقمية وSTEAM.'
      : 'gain stronger digital and STEAM skills.',

    educationImportance: isArabic
      ? 'التعليم هو المفتاح لكسر دوائر الفقر والبطالة.'
      : 'Education is the key to breaking cycles of poverty and unemployment.',

    handsOnLearning: isArabic
      ? 'نركز على التعلم العملي والإرشاد والدعم المجتمعي لضمان نجاح كل طالب.'
      : 'We focus on hands-on learning, mentorship, and community support to ensure every student succeeds.',

    whatWeOffer: isArabic ? 'ما نقدمه' : 'What We Offer',

    academicSupport: isArabic
      ? 'الدعم الأكاديمي:'
      : 'Academic Support:',

    academicSupportText: isArabic
      ? 'دروس تقوية في المواد الأساسية (الرياضيات والعلوم واللغات).'
      : 'Tutoring in core subjects (Math, Science, Languages).',

    digitalSteam: isArabic
      ? 'المهارات الرقمية وSTEAM:'
      : 'Digital & STEAM Skills:',

    digitalSteamText: isArabic
      ? 'البرمجة والثقافة الرقمية وحل المشكلات الإبداعي.'
      : 'Coding, IT literacy, and creative problem-solving.',

    lifeSkills: isArabic
      ? 'مهارات الحياة والقيادة:'
      : 'Life Skills & Leadership:',

    lifeSkillsText: isArabic
      ? 'التواصل والعمل الجماعي والتفكير النقدي.'
      : 'Communication, teamwork, and critical thinking.',

    mentorship: isArabic
      ? 'الإرشاد والتوجيه:'
      : 'Mentorship & Guidance:',

    mentorshipText: isArabic
      ? 'الدعم الشخصي واستكشاف المسارات المهنية.'
      : 'Personalized support and career exploration.',

    impact: isArabic ? 'الأثر' : 'Impact',

    impactIntro: isArabic
      ? 'من خلال هذا البرنامج، تساعد فلسطين تعطي الشباب على:'
      : 'Through this program, PalGives helps youth:',

    improveAcademic: isArabic
      ? 'تحسين النتائج الأكاديمية وتعزيز الثقة بالنفس.'
      : 'Improve academic outcomes and confidence.',

    developSkills: isArabic
      ? 'تطوير مهارات التفكير النقدي والمهارات الرقمية والقيادية.'
      : 'Develop critical thinking, digital, and leadership skills.',

    futureOpportunities: isArabic
      ? 'الوصول إلى فرص التعليم والعمل المستقبلية.'
      : 'Access future educational and career opportunities.',

    communityContributors: isArabic
      ? 'أن يصبحوا أفرادًا فاعلين ومساهمين في مجتمعاتهم.'
      : 'Become active contributors to their communities.',

    getInvolved: isArabic ? 'شارك معنا' : 'Get Involved',

    joinUs: isArabic ? 'انضم إلينا' : 'JOIN US',

    bePart: isArabic
      ? 'كن جزءًا من التغيير!'
      : 'Be a part of the change!',

    joinDescription: isArabic
      ? 'ادعم فلسطين تعطي في خلق مستقبل أكثر إشراقًا للشباب الفلسطيني. تساهم مساهمتك في تمكين الأطفال من التعلم والنمو واكتشاف كامل إمكاناتهم، طالبًا بعد طالب.'
      : 'Support PalGives in creating brighter futures for Palestinian youth. Your contribution empowers children to learn, grow, and unlock their full potential—one student at a time.',

    learnGrow: isArabic
      ? 'التعلم والنمو واكتشاف كامل إمكاناتهم'
      : 'learn, grow, and unlock their full potential',

    supportEducation: isArabic
      ? 'ادعم التعليم'
      : 'Support Education',

    investEducation: isArabic
      ? 'استثمر في التعليم اليوم'
      : 'Invest in Education Today',

    investDescription: isArabic
      ? 'ساعدنا في توفير المواد التعليمية والأجهزة الرقمية والمدرسين المؤهلين للمجتمعات التي تعاني من نقص الموارد.'
      : 'Help us provide learning materials, digital devices, and skilled instructors to under-resourced communities.',

    donateNow: isArabic ? 'تبرع الآن' : 'Donate Now',
  };

  const donateHref = isArabic ? '/ar/donate' : '/en/donate';

  return (
    <div
      dir={isArabic ? 'rtl' : 'ltr'}
      className="min-h-screen bg-slate-50 font-sans text-slate-800"
    >
      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-slate-200 py-20 px-6 sm:px-12 text-center">
        <div className="max-w-5xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 bg-[#F3D03E] text-slate-900 text-xs font-extrabold tracking-widest uppercase rounded">
            {content.impactProgram}
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {content.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>
      </section>

      {/* 2. OVERVIEW & WHY IT MATTERS */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Overview */}
          <div className="text-center space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              {content.overview}
            </h2>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {content.overviewTitle}
            </h3>

            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              {content.overviewTextStart}{' '}

              <span
                className="font-bold text-slate-900 notranslate"
                translate="no"
              >
                PalGives
              </span>

              {content.overviewText}

              <span className="font-bold text-slate-900">
                {content.educationProgram}
              </span>

              {isArabic
                ? ` ${content.overviewEnding}`
                : ` ${content.overviewEnding}`}
            </p>
          </div>

          {/* Why It Matters */}
          <div className="p-8 bg-slate-50 border-l-4 border-[#F3D03E] rounded-r-2xl shadow-sm space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {content.whyItMatters}
            </h3>

            <ul className="space-y-3 text-slate-700 text-base font-medium list-disc list-inside">
              <li>
                <strong className="text-slate-900">85%</strong>{' '}
                {content.academicPerformance}
              </li>

              <li>
                <strong className="text-slate-900">75%</strong>{' '}
                {content.digitalSkills}
              </li>

              <li>{content.educationImportance}</li>
            </ul>

            <p className="text-sm font-semibold text-amber-800 bg-amber-50 p-3 rounded-lg border border-amber-200 inline-block">
              {content.handsOnLearning}
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER & IMPACT */}
      <section className="bg-[#F3D03E] py-20 sm:py-28 px-6 sm:px-12 text-slate-900">
        <div className="max-w-5xl mx-auto space-y-20 sm:space-y-24">

          {/* What We Offer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/programs/youth22.jpg"
                alt={
                  isArabic
                    ? 'جلسة تعليمية تفاعلية'
                    : 'Interactive learning session'
                }
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                {content.whatWeOffer}
              </h2>

              <ul className="space-y-4 text-sm sm:text-base text-slate-900 font-medium">

                <li className="p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/80">
                  <strong className="block text-slate-950 font-bold mb-1">
                    {content.academicSupport}
                  </strong>

                  {content.academicSupportText}
                </li>

                <li className="p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/80">
                  <strong className="block text-slate-950 font-bold mb-1">
                    {content.digitalSteam}
                  </strong>

                  {content.digitalSteamText}
                </li>

                <li className="p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/80">
                  <strong className="block text-slate-950 font-bold mb-1">
                    {content.lifeSkills}
                  </strong>

                  {content.lifeSkillsText}
                </li>

                <li className="p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/80">
                  <strong className="block text-slate-950 font-bold mb-1">
                    {content.mentorship}
                  </strong>

                  {content.mentorshipText}
                </li>
              </ul>
            </div>
          </div>

          {/* Impact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center pt-16 border-t border-slate-900/20">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white order-2 md:order-1">
              <Image
                src="/images/programs/youth23.jpg"
                alt={
                  isArabic
                    ? 'طلاب يتعاونون معًا'
                    : 'Students collaborating'
                }
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                {content.impact}
              </h2>

              <p className="text-base font-bold text-slate-800">
                {content.impactIntro}
              </p>

              <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                <li>{content.improveAcademic}</li>
                <li>{content.developSkills}</li>
                <li>{content.futureOpportunities}</li>
                <li>{content.communityContributors}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. JOIN US */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <Image
              src="/images/programs/youth24.jpg"
              alt={
                isArabic
                  ? 'طلاب داخل الصف'
                  : 'Classroom students'
              }
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-amber-600">
              {content.getInvolved}
            </span>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              {content.joinUs}
            </h2>

            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              <strong className="text-slate-900">
                {content.bePart}
              </strong>{' '}
              {isArabic
                ? 'ادعم '
                : 'Support '}

              <span
                className="font-bold text-slate-900 notranslate"
                translate="no"
              >
                PalGives
              </span>

              {isArabic
                ? ' في خلق مستقبل أكثر إشراقًا للشباب الفلسطيني. تساهم مساهمتك في تمكين الأطفال من '
                : ' in creating brighter futures for Palestinian youth. Your contribution empowers children to '}

              <span className="font-bold text-slate-900">
                {content.learnGrow}
              </span>

              {isArabic ? '، طالبًا بعد طالب.' : '—one student at a time.'}
            </p>

            <div>
              <a
                href={donateHref}
                className="inline-block px-8 py-3.5 bg-[#F3D03E] text-slate-900 font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber-400 transition-colors shadow-md cursor-pointer"
              >
                {content.supportEducation}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER BANNER */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black">
            {content.investEducation}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base">
            {content.investDescription}
          </p>

          <div className="pt-2">
            <a
              href={donateHref}
              className="inline-block px-8 py-3.5 bg-[#F3D03E] text-slate-900 font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber-400 transition-colors shadow-md cursor-pointer"
            >
              {content.donateNow}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

