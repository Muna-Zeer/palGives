
'use client';

import Image from 'next/image';
import { useLanguage } from '../../../context/LanguageContext';

export default function MentalHealthFamilySupport() {
  const { isArabic } = useLanguage();

  const content = {
    impactProgram: isArabic ? 'برنامج مؤثر' : 'Impact Program',

    title: isArabic
      ? 'الصحة النفسية ودعم الأسرة'
      : 'MENTAL HEALTH & FAMILY SUPPORT',

    description: isArabic
      ? 'تعزيز الرفاه النفسي، وتقوية الروابط الأسرية، وتوفير الرعاية النفسية والاجتماعية الأساسية للأطفال والشباب والآباء.'
      : 'Promoting emotional well-being, strengthening family bonds, and providing essential psychosocial care for children, youth, and parents.',

    overview: isArabic ? 'نظرة عامة' : 'Overview',

    overviewTitle: isArabic
      ? 'تعزيز القدرة على التكيف والرفاه'
      : 'Nurturing Resilience & Well-being',

    overviewStart: isArabic ? 'يهدف برنامج' : 'The',

    programName: isArabic
      ? 'الصحة النفسية ودعم الأسرة'
      : 'Mental Health & Family Support',

    overviewAt: isArabic ? 'في' : 'program at',

    overviewText: isArabic
      ? 'فلسطين تعطي إلى تعزيز الصحة النفسية للأطفال والشباب وأفراد الأسرة، وتوفير الدعم اللازم لتقوية الروابط الأسرية وتمكين الأسر من مواجهة التحديات اليومية بطريقة صحية ومستدامة.'
      : 'aims to promote the mental well-being of children, youth, and family members, providing the necessary support to strengthen family bonds and empower families to face daily challenges in a healthy and sustainable way.',

    programGoals: isArabic ? 'أهداف البرنامج' : 'PROGRAM GOALS',

    goal1: isArabic
      ? 'تعزيز الصحة النفسية للأطفال والشباب'
      : 'Enhance the mental health of children and youth',

    goal2: isArabic
      ? 'توفير الدعم النفسي والاجتماعي والاجتماعي للأسر'
      : 'Provide psychosocial and social support to families',

    goal3: isArabic
      ? 'تعزيز مهارات التعامل مع الضغوط والتحديات اليومية'
      : 'Strengthen skills for coping with daily pressures and challenges',

    goal4: isArabic
      ? 'بناء بيئة أسرية صحية ومستقرة'
      : 'Build a healthy and stable family environment',

    expectedOutcomes: isArabic
      ? 'النتائج المتوقعة'
      : 'EXPECTED OUTCOMES',

    outcome1: isArabic
      ? 'تحسين الصحة النفسية للأطفال والشباب'
      : 'Improved mental health for children and youth',

    outcome2: isArabic
      ? 'تعزيز الروابط الأسرية والتواصل الفعال'
      : 'Strengthened family bonds and effective communication',

    outcome3: isArabic
      ? 'زيادة قدرة الأسرة على إدارة الضغوط والتحديات'
      : 'Increased family capacity to manage pressures and challenges',

    outcome4: isArabic
      ? 'توفير بيئة أسرية داعمة ومستقرة تعزز نمو الأطفال والشباب'
      : "Establishing a supportive and stable family environment that fosters children's and youth's growth",

    coreStrategy: isArabic ? 'الاستراتيجية الأساسية' : 'Core Strategy',

    programPillars: isArabic ? 'ركائز البرنامج' : 'PROGRAM PILLARS',

    pillar1: isArabic
      ? 'الدعم النفسي والاجتماعي'
      : 'Psychosocial & Social Support',

    pillar1Item1: isArabic
      ? 'جلسات علاج فردية وجماعية'
      : 'Individual and group therapy sessions',

    pillar1Item2: isArabic
      ? 'برامج لتعزيز الثقة بالنفس والتكيف الاجتماعي'
      : 'Programs to boost self-confidence and social adaptation',

    pillar1Item3: isArabic
      ? 'ورشات حول إدارة المشاعر والتعامل مع التوتر'
      : 'Workshops on managing emotions and handling stress',

    pillar2: isArabic
      ? 'دعم الأسرة'
      : 'Family Support',

    pillar2Item1: isArabic
      ? 'جلسات إرشاد واستشارات أسرية'
      : 'Family guidance and counseling sessions',

    pillar2Item2: isArabic
      ? 'تعزيز التواصل الصحي والعلاقات الأسرية'
      : 'Promoting healthy communication and family relationships',

    pillar2Item3: isArabic
      ? 'برامج لمساعدة الآباء على دعم أطفالهم أكاديميًا واجتماعيًا'
      : 'Programs to help parents support their children academically and socially',

    pillar3: isArabic
      ? 'التدريب ومهارات الحياة'
      : 'Training & Life Skills',

    pillar3Item1: isArabic
      ? 'برامج لتطوير مهارات حل المشكلات واتخاذ القرارات'
      : 'Programs to develop problem-solving and decision-making skills',

    pillar3Item2: isArabic
      ? 'تعزيز مهارات التواصل بين أفراد الأسرة'
      : 'Enhancing communication skills among family members',

    pillar3Item3: isArabic
      ? 'ورشات حول إدارة الوقت وتنظيم الحياة الأسرية'
      : 'Workshops on time management and organizing family life',

    ctaTitle: isArabic
      ? 'ادعموا الرفاه الأسري في فلسطين'
      : 'Support Family Well-being in Palestine',

    ctaDescription: isArabic
      ? 'يساهم دعمكم في توفير الاستشارات النفسية المتخصصة، وورشات الأسرة، ودوائر دعم الشباب لبناء مجتمعات أكثر قدرة على التكيف.'
      : 'Your support provides professional psychological counseling, family workshops, and youth support circles to build resilient communities.',

    supportButton: isArabic
      ? 'ادعم برامج الصحة النفسية'
      : 'Support Mental Health Programs',
  };

  const donateHref = isArabic ? '/ar/donate' : '/en/donate';

  return (
    <div
      dir={isArabic ? 'rtl' : 'ltr'}
      className="min-h-screen bg-slate-50 font-sans text-slate-800"
    >
      {/* 1. HERO SECTION */}
      <section
        className="relative w-full h-[70vh] min-h-[450px] flex flex-col justify-center items-center text-center bg-stone-100 bg-cover bg-center px-4"
        style={{ backgroundImage: "url('/images/')" }}
      >
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

      {/* 2. OVERVIEW SECTION */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            {content.overview}
          </h2>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {content.overviewTitle}
          </h3>

          <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
            {content.overviewStart}{' '}

            <strong className="text-slate-900">
              {content.programName}
            </strong>{' '}

            {content.overviewAt}{' '}

            <strong
              className="text-slate-900 notranslate"
              translate="no"
            >
              PalGives
            </strong>{' '}

            {content.overviewText}
          </p>
        </div>
      </section>

      {/* 3. PROGRAM GOALS & EXPECTED OUTCOMES */}
      <section className="bg-[#F3D03E] py-20 sm:py-28 px-6 sm:px-12 text-slate-900">
        <div className="max-w-5xl mx-auto space-y-20 sm:space-y-24">

          {/* Program Goals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/programs/Health.jpg"
                alt={
                  isArabic
                    ? 'جلسة علاج أسري'
                    : 'Family therapy session'
                }
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                {content.programGoals}
              </h2>

              <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                <li>{content.goal1}</li>
                <li>{content.goal2}</li>
                <li>{content.goal3}</li>
                <li>{content.goal4}</li>
              </ul>
            </div>
          </div>

          {/* Expected Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center pt-16 border-t border-slate-900/20">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white order-2 md:order-1">
              <Image
                src="/images/programs/Health2.jpg"
                alt={
                  isArabic
                    ? 'نشاط مجتمعي خارجي'
                    : 'Outdoor community activity'
                }
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                {content.expectedOutcomes}
              </h2>

              <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                <li>{content.outcome1}</li>
                <li>{content.outcome2}</li>
                <li>{content.outcome3}</li>
                <li>{content.outcome4}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAM PILLARS */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-amber-600">
              {content.coreStrategy}
            </span>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {content.programPillars}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Pillar 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/programs/Health3.jpg"
                  alt={
                    isArabic
                      ? 'الدعم النفسي والاجتماعي'
                      : 'Psychosocial & Social Support'
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 space-y-3 flex-1">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  {content.pillar1}
                </h3>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li>{content.pillar1Item1}</li>
                  <li>{content.pillar1Item2}</li>
                  <li>{content.pillar1Item3}</li>
                </ul>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/programs/Health4.jpg"
                  alt={
                    isArabic
                      ? 'دعم الأسرة'
                      : 'Family Support'
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 space-y-3 flex-1">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  {content.pillar2}
                </h3>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li>{content.pillar2Item1}</li>
                  <li>{content.pillar2Item2}</li>
                  <li>{content.pillar2Item3}</li>
                </ul>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/programs/women-health-6.jpg"
                  alt={
                    isArabic
                      ? 'التدريب ومهارات الحياة'
                      : 'Training & Life Skills'
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 space-y-3 flex-1">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  {content.pillar3}
                </h3>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li>{content.pillar3Item1}</li>
                  <li>{content.pillar3Item2}</li>
                  <li>{content.pillar3Item3}</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-20 sm:py-24 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black">
            {content.ctaTitle}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base">
            {content.ctaDescription}
          </p>

          <div className="pt-2">
            <a
              href={donateHref}
              className="inline-block px-8 py-3.5 bg-[#F3D03E] text-slate-900 font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber-400 transition-colors shadow-md cursor-pointer"
            >
              {content.supportButton}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

