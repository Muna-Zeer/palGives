
'use client';

import Image from 'next/image';
import { useLanguage } from '../../../context/LanguageContext';

export default function YouthDevelopment() {
  const { isArabic } = useLanguage();

  const content = {
    impactProgram: isArabic ? 'برنامج مؤثر' : 'Impact Program',

    title: isArabic
      ? 'تنمية الشباب وريادة الأعمال'
      : 'Youth Development & Entrepreneurship',

    description: isArabic
      ? 'تمكين الشباب الفلسطيني بالمهارات الأساسية في مجال الأعمال، والتدريب على القيادة، والإرشاد، وبناء شبكات مهنية تساعدهم على تشكيل مستقبل مستدام.'
      : "Empowering Palestine's youth with essential business skills, leadership training, mentorship, and career-building networks to shape a sustainable future.",

    overview: isArabic ? 'نظرة عامة' : 'Overview',

    aboutProgram: isArabic ? 'عن البرنامج' : 'ABOUT THE PROGRAM',

    aboutParagraph1: isArabic
      ? 'في فلسطين تعطي، نؤمن بأن الشباب هم القوة الدافعة للتنمية المستدامة والتحول الاجتماعي. وقد صُمم برنامج تنمية الشباب وريادة الأعمال لتزويد الشباب بالمهارات والثقة والفرص التي يحتاجون إليها ليصبحوا مستقلين اقتصاديًا وقادة مسؤولين اجتماعيًا.'
      : 'At PalGives, we believe that youth are the driving force of sustainable development and social transformation. Our Youth Development & Entrepreneurship Program is designed to equip young people with the skills, confidence, and opportunities they need to become economically independent and socially responsible leaders.',

    aboutParagraph2: isArabic
      ? 'ومن خلال التدريب المنظم والإرشاد والمشاركة العملية، ندعم الشباب في تحويل إمكاناتهم إلى تأثير ملموس داخل مجتمعاتهم.'
      : 'Through structured training, mentorship, and practical engagement, we support youth in transforming their potential into tangible impact within their communities.',

    context: isArabic ? 'السياق' : 'The Context',

    challenge: isArabic ? 'التحدي' : 'THE CHALLENGE',

    challengeParagraph1: isArabic
      ? 'يواجه الشباب في فلسطين تحديات كبيرة، بما في ذلك ارتفاع معدلات البطالة، ومحدودية الوصول إلى الفرص الاقتصادية، وقلة التعرض للمنظومات الريادية. كما يفتقر الكثير منهم إلى الوصول إلى الإرشاد المنظم، والشبكات المهنية، وأنظمة دعم الشركات الناشئة.'
      : 'Young people in Palestine face significant challenges, including high unemployment rates, limited access to economic opportunities, and restricted exposure to entrepreneurial ecosystems. Many lack access to structured mentorship, professional networks, and startup support systems.',

    challengeParagraph2: isArabic
      ? 'تعالج فلسطين تعطي هذه الفجوات من خلال نموذج تنموي متكامل يركز على الشباب ومصمم لتحقيق تأثير ملموس على المدى الطويل.'
      : 'PalGives addresses these gaps through an integrated, youth-centered development model built for tangible long-term impact.',

    strategy: isArabic ? 'الاستراتيجية' : 'Strategy',

    ourApproach: isArabic ? 'نهجنا' : 'OUR APPROACH',

    approachDescription: isArabic
      ? 'يجمع برنامجنا بين التعلم العملي والتطبيق في العالم الحقيقي:'
      : 'Our program combines practical learning with real-world application:',

    pillar1Title: isArabic
      ? '1. تطوير مهارات القيادة ومهارات الحياة'
      : '1. Leadership & Life Skills Development',

    pillar1Item1: isArabic
      ? 'التواصل والتحدث أمام الجمهور'
      : 'Communication and public speaking',

    pillar1Item2: isArabic
      ? 'التفكير النقدي وحل المشكلات'
      : 'Critical thinking and problem-solving',

    pillar1Item3: isArabic
      ? 'العمل الجماعي والتعاون'
      : 'Teamwork and collaboration',

    pillar1Item4: isArabic
      ? 'الثقة بالنفس والتطوير الشخصي'
      : 'Self-confidence and personal development',

    pillar2Title: isArabic
      ? '2. ريادة الأعمال والابتكار'
      : '2. Entrepreneurship & Innovation',

    pillar2Item1: isArabic
      ? 'إنشاء نماذج الأعمال واختبار السوق'
      : 'Business model generation & market testing',

    pillar2Item2: isArabic
      ? 'الثقافة المالية وإعداد الميزانيات'
      : 'Financial literacy and budgeting',

    pillar2Item3: isArabic
      ? 'أساسيات عرض المشاريع وجمع التمويل'
      : 'Pitching and fundraising fundamentals',

    pillar3Title: isArabic
      ? '3. المهارات الرقمية وقابلية التوظيف'
      : '3. Digital & Employability Skills',

    pillar3Item1: isArabic
      ? 'المهارات الرقمية والأدوات عبر الإنترنت'
      : 'Digital literacy and online tools',

    pillar3Item2: isArabic
      ? 'كتابة السيرة الذاتية والاستعداد للمقابلات'
      : 'CV writing and interview preparation',

    pillar3Item3: isArabic
      ? 'الاستعداد للعمل الحر والعمل عن بُعد'
      : 'Freelancing and remote work readiness',

    pillar4Title: isArabic
      ? '4. الإرشاد ودعم الشركات الناشئة'
      : '4. Mentorship & Startup Support',

    pillar4Item1: isArabic
      ? 'جلسات تدريب وإرشاد فردية'
      : 'Individual coaching sessions',

    pillar4Item2: isArabic
      ? 'ورشات يقودها خبراء'
      : 'Expert-led workshops',

    pillar4Item3: isArabic
      ? 'فرص للتواصل وبناء العلاقات'
      : 'Networking opportunities',

    pillar4Item4: isArabic
      ? 'دعم المبادرات التي يقودها الشباب'
      : 'Support for youth-led initiatives',

    expectedOutcomes: isArabic
      ? 'النتائج المتوقعة'
      : 'EXPECTED OUTCOMES',

    expectedIntro: isArabic
      ? 'من خلال هذا البرنامج، تهدف فلسطين تعطي إلى:'
      : 'Through this program, PalGives aims to:',

    outcome1: isArabic
      ? 'زيادة قابلية الشباب للتوظيف والاستعداد للعمل'
      : 'Increase youth employability and job readiness',

    outcome2: isArabic
      ? 'دعم إنشاء المشاريع الصغيرة ومتناهية الصغر التي يقودها الشباب'
      : 'Support the creation of youth-led micro and small enterprises',

    outcome3: isArabic
      ? 'تعزيز مهارات القيادة والمشاركة المدنية'
      : 'Strengthen leadership and civic engagement skills',

    outcome4: isArabic
      ? 'تعزيز القدرة على التكيف الاقتصادي بين الشباب الأكثر عرضة للتحديات'
      : 'Foster economic resilience among vulnerable youth',

    outcome5: isArabic
      ? 'بناء شبكة مستدامة من الشباب صانعي التغيير'
      : 'Build a sustainable network of young changemakers',

    impactVision: isArabic ? 'رؤية الأثر' : 'IMPACT VISION',

    impactIntro: isArabic
      ? 'من خلال الاستثمار في قدرات الشباب وريادة الأعمال، تساهم فلسطين تعطي في:'
      : 'By investing in youth capacity and entrepreneurship, PalGives contributes to:',

    impact1: isArabic
      ? 'الحد من بطالة الشباب'
      : 'Reducing youth unemployment',

    impact2: isArabic
      ? 'تعزيز المشاركة الاقتصادية المحلية'
      : 'Strengthening local economic participation',

    impact3: isArabic
      ? 'تعزيز الابتكار والاعتماد على الذات'
      : 'Promoting innovation and self-reliance',

    impact4: isArabic
      ? 'دعم التنمية المجتمعية الشاملة والمستدامة'
      : 'Advancing inclusive and sustainable community development',

    ctaTitle: isArabic
      ? 'ادعموا الجيل القادم من القادة في فلسطين'
      : "Support Palestine's Next Generation of Leaders",

    ctaDescription: isArabic
      ? 'يساهم دعمكم في توفير التمويل المباشر لبرامج التدريب والمنح الأولية والإرشاد لرواد الأعمال الشباب.'
      : 'Your support provides direct funding for training programs, seed grants, and mentorship for young entrepreneurs.',

    supportButton: isArabic
      ? 'ادعم هذا البرنامج'
      : 'Support This Program',
  };

  const donateHref = isArabic ? '/ar/donate' : '/en/donate';

  return (
    <div
      dir={isArabic ? 'rtl' : 'ltr'}
      className="min-h-screen bg-slate-50 font-sans text-slate-800"
    >
      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-slate-200 py-20 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto text-center space-y-4">
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

      {/* 2. ABOUT THE PROGRAM */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            {content.overview}
          </h2>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {content.aboutProgram}
          </h3>

          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            {content.aboutParagraph1}
          </p>

          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            {content.aboutParagraph2}
          </p>
        </div>
      </section>

      {/* 3. THE CHALLENGE */}
      <section className="bg-[#F3D03E] py-20 sm:py-28 px-6 sm:px-12 text-slate-900">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/images/programs/youth11.jpg"
              alt={isArabic ? 'ورشة عمل للشباب' : 'Youth workshop'}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-slate-800">
              {content.context}
            </span>

            <h2 className="text-2xl sm:text-3xl font-black">
              {content.challenge}
            </h2>

            <p className="leading-relaxed font-medium text-slate-800">
              {content.challengeParagraph1}
            </p>

            <p className="leading-relaxed font-medium text-slate-800">
              {content.challengeParagraph2}
            </p>
          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH - PILLARS 1 & 2 */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-amber-600">
                {content.strategy}
              </span>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                {content.ourApproach}
              </h2>

              <p className="text-slate-600 mt-2">
                {content.approachDescription}
              </p>
            </div>

            <div className="space-y-4">
              {/* Pillar 1 */}
              <div className="p-5 bg-slate-50 border-l-4 border-[#F3D03E] rounded-r-lg shadow-sm">
                <h3 className="font-bold text-slate-900 text-base">
                  {content.pillar1Title}
                </h3>

                <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
                  <li>{content.pillar1Item1}</li>
                  <li>{content.pillar1Item2}</li>
                  <li>{content.pillar1Item3}</li>
                  <li>{content.pillar1Item4}</li>
                </ul>
              </div>

              {/* Pillar 2 */}
              <div className="p-5 bg-slate-50 border-l-4 border-[#F3D03E] rounded-r-lg shadow-sm">
                <h3 className="font-bold text-slate-900 text-base">
                  {content.pillar2Title}
                </h3>

                <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
                  <li>{content.pillar2Item1}</li>
                  <li>{content.pillar2Item2}</li>
                  <li>{content.pillar2Item3}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 order-1 md:order-2">
            <Image
              src="/images/programs/youth20.jpg"
              alt={
                isArabic
                  ? 'جلسة تدريب للشباب'
                  : 'Youth training session'
              }
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH CONTINUED - PILLARS 3 & 4 */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <Image
              src="/images/programs/youth18.jpg"
              alt={
                isArabic
                  ? 'ورشة تفاعلية في الصف'
                  : 'Classroom interactive workshop'
              }
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-4">
            {/* Pillar 3 */}
            <div className="p-5 bg-white border-l-4 border-[#F3D03E] rounded-r-lg shadow-sm">
              <h3 className="font-bold text-slate-900 text-base">
                {content.pillar3Title}
              </h3>

              <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
                <li>{content.pillar3Item1}</li>
                <li>{content.pillar3Item2}</li>
                <li>{content.pillar3Item3}</li>
              </ul>
            </div>

            {/* Pillar 4 */}
            <div className="p-5 bg-white border-l-4 border-[#F3D03E] rounded-r-lg shadow-sm">
              <h3 className="font-bold text-slate-900 text-base">
                {content.pillar4Title}
              </h3>

              <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
                <li>{content.pillar4Item1}</li>
                <li>{content.pillar4Item2}</li>
                <li>{content.pillar4Item3}</li>
                <li>{content.pillar4Item4}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXPECTED OUTCOMES & IMPACT VISION */}
      <section className="bg-[#F3D03E] py-24 sm:py-32 px-6 sm:px-12 text-slate-900">
        <div className="max-w-5xl mx-auto space-y-24 sm:space-y-32">

          {/* Expected Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/programs/youth6.jpg"
                alt={
                  isArabic
                    ? 'نقاش جماعي حول طاولة'
                    : 'Group table discussion'
                }
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                {content.expectedOutcomes}
              </h2>

              <p className="text-base font-bold text-slate-800">
                {content.expectedIntro}
              </p>

              <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                <li>{content.outcome1}</li>
                <li>{content.outcome2}</li>
                <li>{content.outcome3}</li>
                <li>{content.outcome4}</li>
                <li>{content.outcome5}</li>
              </ul>
            </div>
          </div>

          {/* Impact Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center pt-20 sm:pt-28 border-t border-slate-900/20">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white order-2 md:order-1">
              <Image
                src="/images/programs/youth5.jpg"
                alt={
                  isArabic
                    ? 'عرض تقديمي وقاعة محاضرات'
                    : 'Presentation and lecture hall'
                }
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                {content.impactVision}
              </h2>

              <p className="text-base font-bold text-slate-800">
                {content.impactIntro}
              </p>

              <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                <li>{content.impact1}</li>
                <li>{content.impact2}</li>
                <li>{content.impact3}</li>
                <li>{content.impact4}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
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

