'use client';

import Image from 'next/image';
import { useLanguage } from '../../../context/LanguageContext';

export default function ChildPreventiveHealthProgram() {
  const { isArabic } = useLanguage();

  const content = {
    impactProgram: isArabic ? 'برنامج مؤثر' : 'Impact Program',

    title: isArabic
      ? 'برنامج الصحة الوقائية للأطفال'
      : 'Child Preventive Health Program',

    description: isArabic
      ? 'ضمان الفحوصات الصحية المبكرة، والإرشادات الغذائية الأساسية، والرعاية الوقائية لبناء مستقبل أكثر صحة للأطفال الفلسطينيين.'
      : 'Ensuring early health screenings, essential nutritional guidance, and preventive care to build a healthier future for Palestinian children.',

    overview: isArabic ? 'نظرة عامة' : 'Overview',

    protectingHealth: isArabic
      ? 'حماية صحة الأطفال ونموهم'
      : 'Protecting Child Health & Development',

    overviewText: isArabic
      ? 'يركز برنامج الصحة الوقائية للأطفال في'
      : 'The',

    programName: isArabic
      ? 'برنامج الصحة الوقائية للأطفال'
      : 'Child Preventive Health Program',

    at: isArabic ? 'في' : 'at',

    overviewDescription: isArabic
      ? 'فلسطين تعطي على تقديم الدعم الطبي الاستباقي، والتثقيف الصحي، والتدخلات المبكرة. ومن خلال الشراكة مع المتخصصين في المجال الطبي والمجتمعات المحلية، نعمل على حماية الأطفال من الأمراض التي يمكن الوقاية منها وتشجيع العادات الصحية التي تستمر مدى الحياة.'
      : 'focuses on proactive medical support, health education, and early interventions. By partnering with medical professionals and local communities, we safeguard children against preventable illnesses and encourage lifelong wellness habits.',

    programGoals: isArabic ? 'أهداف البرنامج' : 'Program Goals',

    goal1: isArabic
      ? 'توفير الفحوصات الصحية والنمائية المبكرة للأطفال الصغار'
      : 'Provide early developmental and health screenings for young children',

    goal2: isArabic
      ? 'تقديم التقييمات الغذائية والإرشادات الأساسية حول المكملات الغذائية'
      : 'Offer nutritional assessments and essential supplement guidance',

    goal3: isArabic
      ? 'توعية الأسر حول النظافة والرعاية الوقائية والوقاية من الأمراض'
      : 'Educate families on hygiene, preventive care, and disease prevention',

    goal4: isArabic
      ? 'الحد من الفوارق الصحية في المجتمعات التي تعاني من نقص الموارد'
      : 'Reduce health disparities in under-resourced communities',

    expectedOutcomes: isArabic
      ? 'النتائج المتوقعة'
      : 'Expected Outcomes',

    outcome1: isArabic
      ? 'زيادة معدلات الكشف المبكر عن الحالات الصحية لدى الأطفال'
      : 'Increased detection rates for early childhood health conditions',

    outcome2: isArabic
      ? 'تعزيز وعي الوالدين بنظافة الأطفال والتغذية السليمة'
      : 'Enhanced parental awareness surrounding pediatric hygiene and nutrition',

    outcome3: isArabic
      ? 'تعزيز التزام المجتمع بالممارسات الصحية الوقائية'
      : 'Stronger community-wide commitment to preventive healthcare practices',

    outcome4: isArabic
      ? 'الحد على المدى الطويل من الأمراض التي يمكن تجنبها وغياب الأطفال عن المدرسة بسبب المرض'
      : 'Long-term reduction in avoidable childhood illness and absenteeism',

    coreStrategy: isArabic ? 'الاستراتيجية الأساسية' : 'Core Strategy',

    programPillars: isArabic ? 'ركائز البرنامج' : 'Program Pillars',

    pillar1: isArabic
      ? '1. الفحوصات والتشخيص المبكر'
      : '1. Early Screenings & Diagnostics',

    pillar1Item1: isArabic
      ? 'فحوصات دورية للنظر والأسنان والفحص البدني العام'
      : 'Routine vision, dental, and general physical checkups',

    pillar1Item2: isArabic
      ? 'الكشف المبكر عن التأخر في النمو'
      : 'Early detection of developmental delays',

    pillar1Item3: isArabic
      ? 'أنظمة إحالة للحصول على رعاية متخصصة للأطفال'
      : 'Referral systems for specialized pediatric care',

    pillar2: isArabic
      ? '2. الدعم الغذائي والعافية'
      : '2. Nutritional Support & Wellness',

    pillar2Item1: isArabic
      ? 'إعداد خطط غذائية مخصصة والاستشارات الغذائية'
      : 'Customized meal planning and dietary counseling',

    pillar2Item2: isArabic
      ? 'توزيع الفيتامينات الأساسية والعناصر الغذائية الدقيقة'
      : 'Distribution of essential vitamins and micronutrients',

    pillar2Item3: isArabic
      ? 'متابعة مراحل النمو والصحة البدنية'
      : 'Monitoring growth milestones and physical health',

    pillar3: isArabic
      ? '3. نظافة الأسرة والتثقيف الصحي'
      : '3. Family Hygiene & Health Education',

    pillar3Item1: isArabic
      ? 'ورشات تفاعلية حول عادات النظافة الشخصية'
      : 'Interactive workshops on personal hygiene habits',

    pillar3Item2: isArabic
      ? 'إرشاد الوالدين للتعامل مع أمراض الطفولة الشائعة'
      : 'Parental guidance for managing common childhood illnesses',

    pillar3Item3: isArabic
      ? 'حملات مجتمعية للتوعية بالصحة والنظافة'
      : 'Community-driven sanitation and health awareness campaigns',

    protectChildren: isArabic
      ? 'احمِ صحة الأطفال في فلسطين'
      : "Protect Children's Health in Palestine",

    supportText: isArabic
      ? 'يساهم دعمكم في تمويل العيادات الصحية المتنقلة، وأدوات الفحص، وحزم التغذية الأساسية للأطفال الأكثر احتياجًا.'
      : 'Your support finances mobile health clinics, screening kits, and essential nutrition packs for vulnerable children.',

    supportToday: isArabic
      ? 'ادعم صحة الأطفال اليوم'
      : 'Support Child Health Today',

    copyright: isArabic
      ? 'مبادرة تمكين الشباب. جميع الحقوق محفوظة. -2024–2026 فلسطين تعطي ©'
      : 'Youth Empowerment Initiative. All Rights Reserved. -2024–2026 PalGives ©',
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

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
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
            {content.protectingHealth}
          </h3>

          <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
            {content.overviewText}{' '}
            <strong className="text-slate-900">
              {content.programName}
            </strong>{' '}
            {content.at}{' '}
            <strong
              className="text-slate-900 notranslate"
              translate="no"
            >
              PalGives
            </strong>{' '}
            {content.overviewDescription}
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
                src="/images/programs/child2.jpg"
                alt={
                  isArabic
                    ? 'فحص صحي للأطفال'
                    : 'Medical health screening for children'
                }
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase">
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
                src="/images/programs/child7.jpg"
                alt={
                  isArabic
                    ? 'ورشة حول التغذية والصحة'
                    : 'Nutritional and health workshop'
                }
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase">
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

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
              {content.programPillars}
            </h2>
          </div>

          {/* 3 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Pillar 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/programs/child8.jpg"
                  alt={
                    isArabic
                      ? 'الفحص الطبي المبكر'
                      : 'Early Medical Screening'
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
                  src="/images/programs/child-health-8.jpg"
                  alt={
                    isArabic
                      ? 'الدعم الغذائي'
                      : 'Nutritional Support'
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
                  src="/images/programs/women-health-9.png"
                  alt={
                    isArabic
                      ? 'التثقيف الصحي'
                      : 'Health Education'
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
            {content.protectChildren}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base">
            {content.supportText}
          </p>

          <div className="pt-2">
            <a
              href={donateHref}
              className="inline-block px-8 py-3.5 bg-[#F3D03E] text-slate-900 font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber-400 transition-colors shadow-md cursor-pointer"
            >
              {content.supportToday}
            </a>
          </div>
        </div>
      </section>

      {/* 6. FOOTER COPYRIGHT */}
      <footer className="py-8 bg-slate-100 border-t border-slate-200 text-center text-xs text-slate-500 font-medium">
        {content.copyright}
      </footer>
    </div>
  );
}

