'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function MentalHealthFamilySupport() {
  const { locale } = useLanguage();
  const isArabic = locale === 'ar';

  return (
    <div
      className="w-full min-h-screen bg-slate-50 font-sans text-slate-800"
      dir={isArabic ? 'rtl' : 'ltr'}
    >

      {/* 1. HERO SECTION */}
      <section
        className="relative w-full h-[70vh] min-h-[450px] flex flex-col justify-center items-center text-center bg-stone-100 bg-cover bg-center px-4"
        style={{ backgroundImage: "url('/images/')" }}
      >
        <div className="absolute inset-0 bg-slate-900/40"></div>
        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 bg-[#F3D03E] text-slate-900 text-xs font-extrabold tracking-widest uppercase rounded">
            {isArabic ? 'برنامج تأثير' : 'Impact Program'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {isArabic ? 'الصحة النفسية ودعم الأسرة' : 'MENTAL HEALTH & FAMILY SUPPORT'}
          </h1>
          <p className="text-base sm:text-lg text-slate-100 max-w-3xl mx-auto leading-relaxed">
            {isArabic
              ? 'تعزيز الرفاه العاطفي، توطيد الروابط الأسرية، وتقديم الرعاية النفسية والاجتماعية الأساسية للأطفال، الشباب، وأولياء الأمور.'
              : 'Promoting emotional well-being, strengthening family bonds, and providing essential psychosocial care for children, youth, and parents.'}
          </p>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            {isArabic ? 'نظرة عامة' : 'Overview'}
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {isArabic ? 'رعاية المرونة والرفاه النفسي' : 'Nurturing Resilience & Well-being'}
          </h3>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
            {isArabic ? (
              <>
                يهدف برنامج{' '}
                <strong className="text-slate-900">الصحة النفسية ودعم الأسرة</strong>{' '}
                في مؤسسة{' '}
                <strong className="text-slate-900 notranslate" translate="no">فلسطين تعطي</strong>{' '}
                إلى تعزيز الصحة النفسية للأطفال والشباب وأفراد الأسرة، وتوفير الدعم اللازم لتقوية الروابط الأسرية وتمكين الأسر من مواجهة تحديات الحياة اليومية بطريقة صحية ومستدامة.
              </>
            ) : (
              <>
                The <strong className="text-slate-900">Mental Health & Family Support</strong> program at{' '}
                <strong className="text-slate-900 notranslate" translate="no">PalGives</strong> aims to promote the mental well-being of children, youth, and family members, providing the necessary support to strengthen family bonds and empower families to face daily challenges in a healthy and sustainable way.
              </>
            )}
          </p>
        </div>
      </section>

      {/* 3. PROGRAM GOALS & EXPECTED OUTCOMES (YELLOW BANNER) */}
      <section className="bg-[#F3D03E] py-20 sm:py-28 px-6 sm:px-12 text-slate-900">
        <div className="max-w-5xl mx-auto space-y-20 sm:space-y-24">

          {/* Program Goals Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/programs/Health.jpg"
                alt="Family therapy session"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase">
                {isArabic ? 'أهداف البرنامج' : 'PROGRAM GOALS'}
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                <li>{isArabic ? 'تحسين الصحة النفسية للأطفال والشباب' : 'Enhance the mental health of children and youth'}</li>
                <li>{isArabic ? 'توفر الدعم النفسي والاجتماعي للأسر' : 'Provide psychosocial and social support to families'}</li>
                <li>{isArabic ? 'تعزيز مهارات التعامل مع الضغوط والتحديات اليومية' : 'Strengthen skills for coping with daily pressures and challenges'}</li>
                <li>{isArabic ? 'بناء بيئة أسرية صحية ومستقرة' : 'Build a healthy and stable family environment'}</li>
              </ul>
            </div>
          </div>

          {/* Expected Outcomes Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center pt-16 border-t border-slate-900/20">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white order-2 md:order-1">
              <Image
                src="/images/programs/Health2.jpg"
                alt="Outdoor community activity"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase">
                {isArabic ? 'النتائج المتوقعة' : 'EXPECTED OUTCOMES'}
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                <li>{isArabic ? 'تحسن الصحة النفسية للأطفال والشباب' : 'Improved mental health for children and youth'}</li>
                <li>{isArabic ? 'روابط أسرية أقوى وتواصل فعال' : 'Strengthened family bonds and effective communication'}</li>
                <li>{isArabic ? 'زيادة قدرة الأسرة على إدارة الضغوط والتحديات' : 'Increased family capacity to manage pressures and challenges'}</li>
                <li>{isArabic ? 'إرساء بيئة أسرية داعمة ومستقرة تعزز نمو الأطفال والشباب' : "Establishing a supportive and stable family environment that fosters children's and youth's growth"}</li>
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
              {isArabic ? 'الاستراتيجية الأساسية' : 'Core Strategy'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
              {isArabic ? 'ركائز البرنامج' : 'PROGRAM PILLARS'}
            </h2>
          </div>

          {/* 3 Pillar Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Pillar 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/programs/Health3.jpg"
                  alt="Psychosocial & Social Support"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-1">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  {isArabic ? 'الدعم النفسي والاجتماعي' : 'Psychosocial & Social Support'}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li>{isArabic ? 'جلسات العلاج الفردي والجماعي' : 'Individual and group therapy sessions'}</li>
                  <li>{isArabic ? 'برامج لتعزيز الثقة بالنفس والتكيف الاجتماعي' : 'Programs to boost self-confidence and social adaptation'}</li>
                  <li>{isArabic ? 'ورش عمل حول إدارة المشاعر والتعامل مع التوتر' : 'Workshops on managing emotions and handling stress'}</li>
                </ul>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/programs/Health4.jpg"
                  alt="Family Support"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-1">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  {isArabic ? 'دعم الأسرة' : 'Family Support'}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li>{isArabic ? 'جلسات الإرشاد والتوجيه الأسري' : 'Family guidance and counseling sessions'}</li>
                  <li>{isArabic ? 'تعزيز التواصل الصحي والعلاقات الأسرية' : 'Promoting healthy communication and family relationships'}</li>
                  <li>{isArabic ? 'برامج لمساعدة أولياء الأمور في دعم أطفالهم أكاديمياً واجتماعياً' : 'Programs to help parents support their children academically and socially'}</li>
                </ul>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/programs/women-health-6.jpg"
                  alt="Training & Life Skills"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-1">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  {isArabic ? 'التدريب والمهارات الحياتية' : 'Training & Life Skills'}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li>{isArabic ? 'برامج لتطوير مهارات حل المشكلات واتخاذ القرار' : 'Programs to develop problem-solving and decision-making skills'}</li>
                  <li>{isArabic ? 'تعزيز مهارات التواصل بين أفراد الأسرة' : 'Enhancing communication skills among family members'}</li>
                  <li>{isArabic ? 'ورش عمل حول إدارة الوقت وتنظيم الحياة الأسرية' : 'Workshops on time management and organizing family life'}</li>
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
            {isArabic ? 'ادعم الرفاه الأسري في فلسطين' : 'Support Family Well-being in Palestine'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {isArabic
              ? 'دعمك يوفر الاستشارات النفسية المهنية، الورش الأسرية، ودوائر دعم الشباب لبناء مجتمعات مرنة وقوية.'
              : 'Your support provides professional psychological counseling, family workshops, and youth support circles to build resilient communities.'}
          </p>
          <div className="pt-2">
            <a
              href="/donate"
              className="inline-block px-8 py-3.5 bg-[#F3D03E] text-slate-900 font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber-400 transition-colors shadow-md cursor-pointer"
            >
              {isArabic ? 'ادعم برامج الصحة النفسية' : 'Support Mental Health Programs'}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}