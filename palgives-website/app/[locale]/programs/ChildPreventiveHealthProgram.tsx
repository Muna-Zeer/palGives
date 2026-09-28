'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function ChildPreventiveHealthProgram() {
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
            {isArabic ? 'برنامج صحة الطفل الوقائية' : 'Child Preventive Health Program'}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {isArabic 
              ? 'ضمان فحوصات صحية مبكرة، توجيهات غذائية أساسية، ورعاية وقائية لبناء مستقبل أكثر صحة للأطفال الفلسطينيين.'
              : 'Ensuring early health screenings, essential nutritional guidance, and preventive care to build a healthier future for Palestinian children.'}
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
            {isArabic ? 'حماية صحة الطفل وتطويره' : 'Protecting Child Health & Development'}
          </h3>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
            {isArabic ? (
              <>
                يركز{' '}
                <strong className="text-slate-900">برنامج صحة الطفل الوقائية</strong>{' '}
                في مؤسسة{' '}
                <strong className="text-slate-900 notranslate" translate="no">فلسطين تعطي</strong>{' '}
                على الدعم الطبي الاستباقي، التثقيف الصحي، والتدخلات المبكرة. من خلال الشراكة مع المتخصصين الطبيين والمجتمعات المحلية، نحمي الأطفال ضد الأمراض القابلة للوقاية ونشجع عادات العافية مدى الحياة.
              </>
            ) : (
              <>
                The{' '}
                <strong className="text-slate-900">Child Preventive Health Program</strong> at{' '}
                <strong className="text-slate-900 notranslate" translate="no">PalGives</strong>{' '}
                focuses on proactive medical support, health education, and early interventions. By partnering with medical professionals and local communities, we safeguard children against preventable illnesses and encourage lifelong wellness habits.
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
                src="/images/programs/child2.jpg" 
                alt="Medical health screening for children"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase">
                {isArabic ? 'أهداف البرنامج' : 'Program Goals'}
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                <li>
                  {isArabic ? 'توفير فحوصات نمو وصحة مبكرة للأطفال الصغار' : 'Provide early developmental and health screenings for young children'}
                </li>
                <li>
                  {isArabic ? 'تقديم تقييمات تغذوية وإرشادات حول المكملات الغذائية الأساسية' : 'Offer nutritional assessments and essential supplement guidance'}
                </li>
                <li>
                  {isArabic ? 'توعية العائلات بالنظافة الشخصية، الرعاية الوقائية، والوقاية من الأمراض' : 'Educate families on hygiene, preventive care, and disease prevention'}
                </li>
                <li>
                  {isArabic ? 'تقليل التفاوتات الصحية في المجتمعات محرومة الموارد' : 'Reduce health disparities in under-resourced communities'}
                </li>
              </ul>
            </div>
          </div>

          {/* Expected Outcomes Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center pt-16 border-t border-slate-900/20">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white order-2 md:order-1">
              <Image
                src="/images/programs/child7.jpg" 
                alt="Nutritional and health workshop"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase">
                {isArabic ? 'النتائج المتوقعة' : 'Expected Outcomes'}
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                <li>
                  {isArabic ? 'زيادة معدلات الكشف عن الحالات الصحية في الطفولة المبكرة' : 'Increased detection rates for early childhood health conditions'}
                </li>
                <li>
                  {isArabic ? 'تعزيز وعي الآباء والأمهات حول النظافة والتغذية لدى الأطفال' : 'Enhanced parental awareness surrounding pediatric hygiene and nutrition'}
                </li>
                <li>
                  {isArabic ? 'التزام مجتمعي أقوى بممارسات الرعاية الصحية الوقائية' : 'Stronger community-wide commitment to preventive healthcare practices'}
                </li>
                <li>
                  {isArabic ? 'انخفاض طويل الأمد في الأمراض المتاحة الوقاية والغياب عن المدارس' : 'Long-term reduction in avoidable childhood illness and absenteeism'}
                </li>
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
              {isArabic ? 'ركائز البرنامج' : 'Program Pillars'}
            </h2>
          </div>

          {/* 3 Pillar Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/programs/child8.jpg" 
                  alt="Early Medical Screening"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-1">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  {isArabic ? '1. الفحوصات والتشخيص المبكر' : '1. Early Screenings & Diagnostics'}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li>
                    {isArabic ? 'فحوصات روتينية للنظر، الأسنان، والفحص البدني العام' : 'Routine vision, dental, and general physical checkups'}
                  </li>
                  <li>
                    {isArabic ? 'الكشف المبكر عن تأخر النمو' : 'Early detection of developmental delays'}
                  </li>
                  <li>
                    {isArabic ? 'أنظمة تحويل للرعاية الاكلينيكية المتخصصة للأطفال' : 'Referral systems for specialized pediatric care'}
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/programs/child-health-8.jpg"
                  alt="Nutritional Support"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-1">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  {isArabic ? '2. الدعم الغذائي والعافية' : '2. Nutritional Support & Wellness'}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li>
                    {isArabic ? 'تخطيط الوجبات المخصصة وتقديم الاستشارات الغذائية' : 'Customized meal planning and dietary counseling'}
                  </li>
                  <li>
                    {isArabic ? 'توزيع الفيتامينات الأساسية والمغذيات الدقيقة' : 'Distribution of essential vitamins and micronutrients'}
                  </li>
                  <li>
                    {isArabic ? 'متابعة مراحل النمو والصحة البدنية' : 'Monitoring growth milestones and physical health'}
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/programs/women-health-9.png" 
                  alt="Health Education"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-1">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  {isArabic ? '3. النظافة الأسرية والتثقيف الصحي' : '3. Family Hygiene & Health Education'}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li>
                    {isArabic ? 'ورش عمل تفاعلية حول عادات النظافة الشخصية' : 'Interactive workshops on personal hygiene habits'}
                  </li>
                  <li>
                    {isArabic ? 'إرشادات أولياء الأمور للتعامل مع أمراض الطفولة الشائعة' : 'Parental guidance for managing common childhood illnesses'}
                  </li>
                  <li>
                    {isArabic ? 'حملات التوعية المجتمعية بالصحة العامة والنظافة البيئية' : 'Community-driven sanitation and health awareness campaigns'}
                  </li>
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
            {isArabic ? 'احمِ صحة الأطفال في فلسطين' : "Protect Children's Health in Palestine"}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {isArabic 
              ? 'دعمك يمول العيادات الصحية المتنقلة، أدوات الفحص، وحزم التغذية الأساسية للأطفال المحتاجين.'
              : 'Your support finances mobile health clinics, screening kits, and essential nutrition packs for vulnerable children.'}
          </p>
          <div className="pt-2">
            <a
              href="/donate"
              className="inline-block px-8 py-3.5 bg-[#F3D03E] text-slate-900 font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber-400 transition-colors shadow-md cursor-pointer"
            >
              {isArabic ? 'ادعم صحة الطفل اليوم' : 'Support Child Health Today'}
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