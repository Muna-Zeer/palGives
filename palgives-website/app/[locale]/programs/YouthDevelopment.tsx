'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function YouthDevelopment() {
  const { locale } = useLanguage();
  const isArabic = locale === 'ar';

  return (
    <div
      className="w-full min-h-screen bg-slate-50 font-sans text-slate-800"
      dir={isArabic ? 'rtl' : 'ltr'}
    >

      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-slate-200 py-20 px-6 sm:px-12 text-center">
        <div className="max-w-5xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 bg-[#F3D03E] text-slate-900 text-xs font-extrabold tracking-widest uppercase rounded">
            {isArabic ? 'برنامج تأثير' : 'Impact Program'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {isArabic ? 'تنمية الشباب وريادة الأعمال' : 'YOUTH DEVELOPMENT & ENTREPRENEURSHIP'}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {isArabic
              ? "تمكين شباب فلسطين بالمهارات التجارية الأساسية، التدريب القيادي، الإرشاد، وشبكات بناء المستقبل المهني لصياغة مستقبل مستدام."
              : "Empowering Palestine's youth with essential business skills, leadership training, mentorship, and career-building networks to shape a sustainable future."}
          </p>
        </div>
      </section>

      {/* 2. ABOUT THE PROGRAM */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            {isArabic ? 'نظرة عامة' : 'Overview'}
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase">
            {isArabic ? 'حول البرنامج' : 'ABOUT THE PROGRAM'}
          </h3>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            {isArabic ? (
              <>
                في مؤسسة{' '}
                <strong className="text-slate-900 notranslate" translate="no">فلسطين تعطي</strong>{' '}
                ، نؤمن بأن الشباب هم القوة المحركة للتنمية المستدامة والتحول الاجتماعي. تم تصميم برنامجنا لتنمية الشباب وريادة الأعمال لتزويد الشباب بالمهارات والثقة والفرص التي يحتاجونها ليصبحوا قادة مستقلين اقتصادياً ومسؤولين اجتماعياً.
              </>
            ) : (
              <>
                At <strong className="text-slate-900 notranslate" translate="no">PalGives</strong>, we believe that youth are the driving force of sustainable development and social transformation. Our Youth Development & Entrepreneurship Program is designed to equip young people with the skills, confidence, and opportunities they need to become economically independent and socially responsible leaders.
              </>
            )}
          </p>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            {isArabic
              ? 'من خلال التدريب المنظم، والإرشاد، والمشاركة العملية، ندعم الشباب في تحويل إمكاناتهم إلى تأثير ملموس داخل مجتمعاتهم.'
              : 'Through structured training, mentorship, and practical engagement, we support youth in transforming their potential into tangible impact within their communities.'}
          </p>
        </div>
      </section>

      {/* 3. THE CHALLENGE (YELLOW BANNER) */}
      <section className="bg-[#F3D03E] py-20 sm:py-28 px-6 sm:px-12 text-slate-900">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/images/programs/youth11.jpg" 
              alt="Youth workshop"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-slate-800">
              {isArabic ? 'السياق' : 'The Context'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase">
              {isArabic ? 'التحدي' : 'THE CHALLENGE'}
            </h2>
            <p className="leading-relaxed font-medium text-slate-800">
              {isArabic
                ? 'يواجه الشباب في فلسطين تحديات كبيرة، بما في ذلك ارتفاع معدلات البطالة، والفرص الاقتصادية المحدودة، ومحدودية الوصول إلى الأنظمة البيئية لريادة الأعمال. يفتقر الكثيرون إلى الإرشاد المنظم، والشبكات المهنية، ودعم المشاريع الناشئة.'
                : 'Young people in Palestine face significant challenges, including high unemployment rates, limited access to economic opportunities, and restricted exposure to entrepreneurial ecosystems. Many lack access to structured mentorship, professional networks, and startup support systems.'}
            </p>
            <p className="leading-relaxed font-medium text-slate-800">
              <span className="notranslate" translate="no">PalGives</span>{' '}
              {isArabic
                ? 'تعالج هذه الفجوات من خلال نموذج تنموي متكامل وممركز حول الشباب ومصمم لتحقيق تأثير طويل الأجل.'
                : 'addresses these gaps through an integrated, youth-centered development model built for tangible long-term impact.'}
            </p>
          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH (PILLARS 1 & 2) */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-amber-600">
                {isArabic ? 'الاستراتيجية' : 'Strategy'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase">
                {isArabic ? 'نهجنا' : 'OUR APPROACH'}
              </h2>
              <p className="text-slate-600 mt-2">
                {isArabic ? 'يجمع برنامجنا بين التعلم العملي والتطبيق الواقعي:' : 'Our program combines practical learning with real-world application:'}
              </p>
            </div>

            <div className="space-y-4">
              <div className={`p-5 bg-slate-50 ${isArabic ? 'border-r-4' : 'border-l-4'} border-[#F3D03E] ${isArabic ? 'rounded-l-lg' : 'rounded-r-lg'} shadow-sm`}>
                <h3 className="font-bold text-slate-900 text-base">
                  {isArabic ? '1. تطوير القيادة والمهارات الحياتية' : '1. Leadership & Life Skills Development'}
                </h3>
                <ul className={`mt-2 space-y-1 text-sm text-slate-600 list-disc ${isArabic ? 'list-inside' : 'list-inside'}`}>
                  <li>{isArabic ? 'مهارات التواصل والإلقاء العام' : 'Communication and public speaking'}</li>
                  <li>{isArabic ? 'التفكير النقدي وحل المشكلات' : 'Critical thinking and problem-solving'}</li>
                  <li>{isArabic ? 'العمل الجماعي والتعاون' : 'Teamwork and collaboration'}</li>
                  <li>{isArabic ? 'الثقة بالنفس والتطوير الشخصي' : 'Self-confidence and personal development'}</li>
                </ul>
              </div>

              <div className={`p-5 bg-slate-50 ${isArabic ? 'border-r-4' : 'border-l-4'} border-[#F3D03E] ${isArabic ? 'rounded-l-lg' : 'rounded-r-lg'} shadow-sm`}>
                <h3 className="font-bold text-slate-900 text-base">
                  {isArabic ? '2. ريادة الأعمال والابتكار' : '2. Entrepreneurship & Innovation'}
                </h3>
                <ul className={`mt-2 space-y-1 text-sm text-slate-600 list-disc ${isArabic ? 'list-inside' : 'list-inside'}`}>
                  <li>{isArabic ? 'توليد نماذج الأعمال واختبار السوق' : 'Business model generation & market testing'}</li>
                  <li>{isArabic ? 'الثقافة المالية وإعداد الموازنات' : 'Financial literacy and budgeting'}</li>
                  <li>{isArabic ? 'أساسيات العرض التقديمي وجمع التبرعات' : 'Pitching and fundraising fundamentals'}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 order-1 md:order-2">
            <Image
              src="/images/programs/youth20.jpg" 
              alt="Youth training session"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH CONTINUED (PILLARS 3 & 4) */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <Image
              src="/images/programs/youth18.jpg" 
              alt="Classroom interactive workshop"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-4">
            <div className={`p-5 bg-white ${isArabic ? 'border-r-4' : 'border-l-4'} border-[#F3D03E] ${isArabic ? 'rounded-l-lg' : 'rounded-r-lg'} shadow-sm`}>
              <h3 className="font-bold text-slate-900 text-base">
                {isArabic ? '3. المهارات الرقمية والتوظيف' : '3. Digital & Employability Skills'}
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
                <li>{isArabic ? 'المحو الأمية الرقمية والأدوات عبر الإنترنت' : 'Digital literacy and online tools'}</li>
                <li>{isArabic ? 'كتابة السيرة الذاتية والتحضير للمقابلات' : 'CV writing and interview preparation'}</li>
                <li>{isArabic ? 'العمل الحر والجاهزية للعمل عن بعد' : 'Freelancing and remote work readiness'}</li>
              </ul>
            </div>

            <div className={`p-5 bg-white ${isArabic ? 'border-r-4' : 'border-l-4'} border-[#F3D03E] ${isArabic ? 'rounded-l-lg' : 'rounded-r-lg'} shadow-sm`}>
              <h3 className="font-bold text-slate-900 text-base">
                {isArabic ? '4. الإرشاد ودعم الشركات الناشئة' : '4. Mentorship & Startup Support'}
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
                <li>{isArabic ? 'جلسات التوجيه الفردي' : 'Individual coaching sessions'}</li>
                <li>{isArabic ? 'ورش عمل بقيادة خبراء' : 'Expert-led workshops'}</li>
                <li>{isArabic ? 'فرص بناء شبكات العلاقات المهنية' : 'Networking opportunities'}</li>
                <li>{isArabic ? 'دعم المبادرات التي يقودها الشباب' : 'Support for youth-led initiatives'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXPECTED OUTCOMES & IMPACT VISION */}
      <section className="bg-[#F3D03E] py-24 sm:py-32 px-6 sm:px-12 text-slate-900">
        <div className="max-w-5xl mx-auto space-y-24 sm:space-y-32">

          {/* Expected Outcomes Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/programs/youth6.jpg"
                alt="Group table discussion"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase">
                {isArabic ? 'النتائج المتوقعة' : 'EXPECTED OUTCOMES'}
              </h2>
              <p className="text-base font-bold text-slate-800">
                {isArabic ? (
                  <>من خلال هذا البرنامج، تسعى <span className="notranslate" translate="no">فلسطين تعطي</span> إلى:</>
                ) : (
                  <>Through this program, <span className="notranslate" translate="no">PalGives</span> aims to:</>
                )}
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                <li>{isArabic ? 'زيادة قابلية توظيف الشباب والجاهزية للعمل' : 'Increase youth employability and job readiness'}</li>
                <li>{isArabic ? 'دعم إنشاء المشاريع الصغيرة ومتناهية الصغر التي يقودها الشباب' : 'Support the creation of youth-led micro and small enterprises'}</li>
                <li>{isArabic ? 'تعزيز مهارات القيادة والمشاركة المدنية' : 'Strengthen leadership and civic engagement skills'}</li>
                <li>{isArabic ? 'تعزيز المرونة الاقتصادية بين الشباب المستضعفين' : 'Foster economic resilience among vulnerable youth'}</li>
                <li>{isArabic ? 'بناء شبكة مستدامة من صانعي التغيير الشباب' : 'Build a sustainable network of young changemakers'}</li>
              </ul>
            </div>
          </div>

          {/* Impact Vision Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center pt-20 sm:pt-28 border-t border-slate-900/20">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white order-2 md:order-1">
              <Image
                src="/images/programs/youth5.jpg"
                alt="Presentation and lecture hall"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase">
                {isArabic ? 'رؤية التأثير' : 'IMPACT VISION'}
              </h2>
              <p className="text-base font-bold text-slate-800">
                {isArabic ? (
                  <>من خلال الاستثمار في قدرات الشباب وريادة الأعمال، تساهم <span className="notranslate" translate="no">فلسطين تعطي</span> في:</>
                ) : (
                  <>By investing in youth capacity and entrepreneurship, <span className="notranslate" translate="no">PalGives</span> contributes to:</>
                )}
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                <li>{isArabic ? 'حدوث خفض في بطالة الشباب' : 'Reducing youth unemployment'}</li>
                <li>{isArabic ? 'تعزيز المشاركة الاقتصادية المحلية' : 'Strengthening local economic participation'}</li>
                <li>{isArabic ? 'تعزيز الابتكار والاعتماد على الذات' : 'Promoting innovation and self-reliance'}</li>
                <li>{isArabic ? 'دفع عجلة التنمية المجتمعية الشاملة والمستدامة' : 'Advancing inclusive and sustainable community development'}</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-20 sm:py-24 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black">
            {isArabic ? 'ادعم الجيل القادم من القادة في فلسطين' : "Support Palestine's Next Generation of Leaders"}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {isArabic
              ? 'دعمك يوفر تمويلاً مباشراً لبرامج التدريب، والمنح التأسيسية، والإرشاد لرواد الأعمال الشباب.'
              : 'Your support provides direct funding for training programs, seed grants, and mentorship for young entrepreneurs.'}
          </p>
          <div className="pt-2">
            <a
              href="/donate"
              className="inline-block px-8 py-3.5 bg-[#F3D03E] text-slate-900 font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber-400 transition-colors shadow-md cursor-pointer"
            >
              {isArabic ? 'ادعم هذا البرنامج' : 'Support This Program'}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}