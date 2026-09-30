'use client';

import { useLanguage } from '../../../context/LanguageContext';

export default function DonatePage() {
  const { isArabic } = useLanguage();

  const content = {
    heroTitle: isArabic
      ? 'تبرعك يحدث فرقًا حقيقيًا'
      : 'YOUR DONATION MAKES A REAL DIFFERENCE',

    intro: isArabic
      ? 'نؤمن في'
      : 'At',

    introOrganization: 'PalGives – Harmony, Action, Leading',

    introDescription: isArabic
      ? 'أن كل مساهمة، مهما كانت صغيرة، يمكن أن تحدث تغييرًا ملموسًا. يساعد تبرعكم في تمكين الشباب، ودعم التعليم، وتعزيز المبادرات المجتمعية، وتشجيع التنمية المستدامة.'
      : 'we believe that every contribution, no matter how small, can create meaningful change. Your donation helps us empower youth, support education, strengthen community initiatives, and promote sustainable development.',

    whySupport: isArabic
      ? 'لماذا تدعم فلسطين تعطي؟'
      : 'WHY SUPPORT PALGIVES?',

    directSupport: isArabic
      ? 'دعم مباشر لبرامج الشباب والمجتمع'
      : 'Direct support for youth and community programs',

    transparency: isArabic
      ? 'الشفافية والمساءلة في الإدارة المالية'
      : 'Transparency and accountability in financial management',

    sustainableImpact: isArabic
      ? 'أثر مستدام على مستوى المجتمع المحلي'
      : 'Sustainable impact at the local community level',

    partnerships: isArabic
      ? 'شراكات قوية مع المؤسسات المحلية والدولية'
      : 'Strong partnerships with local and international organizations',

    howDonationUsed: isArabic
      ? 'كيف يتم استخدام تبرعك'
      : 'How Your Donation Is Used',

    contributionSupports: isArabic
      ? 'تساهم تبرعاتكم الكريمة في دعم:'
      : 'Your generous contribution supports:',

    youthPrograms: isArabic
      ? 'برامج تمكين الشباب والقيادة'
      : 'Youth empowerment and leadership programs',

    educationalActivities: isArabic
      ? 'الأنشطة التعليمية والتدريبية'
      : 'Educational and training activities',

    sportsInitiatives: isArabic
      ? 'المبادرات الرياضية والترفيهية للأطفال والشباب'
      : 'Sports and recreational initiatives for children and youth',

    communityProjects: isArabic
      ? 'مشاريع دعم المجتمع للأسر الأكثر احتياجًا'
      : 'Community support projects for vulnerable families',

    waysToDonate: isArabic
      ? 'طرق التبرع'
      : 'Ways to Donate',

    supportWork: isArabic
      ? 'يمكنكم دعم عملنا من خلال:'
      : 'You can support our work through:',

    bankTransfer: isArabic
      ? 'التحويل البنكي'
      : 'Bank transfer',

    onlineDonation: isArabic
      ? 'التبرع الإلكتروني (PayPal / بطاقة ائتمانية)'
      : 'Online donation (PayPal / Credit Card)',

    directDonations: isArabic
      ? 'التبرعات المباشرة للمؤسسة'
      : 'Direct donations to the organization',

    bePart: isArabic
      ? 'كن جزءًا من التغيير'
      : 'Be Part of the Change',

    supportDifference: isArabic
      ? 'دعمكم يحدث فرقًا حقيقيًا في بناء مستقبل أفضل للشباب والمجتمعات.'
      : 'Your support makes a real difference in building a better future for youth and communities.',

    lastingImpact: isArabic
      ? 'انضموا إلينا لإحداث أثر مستدام!'
      : 'Join us in making a lasting impact!',

    donateNow: isArabic
      ? 'تبرع الآن'
      : 'Donate Now',

    donationComingSoon: isArabic
      ? 'سيكون نظام معالجة التبرعات متاحًا قريبًا!'
      : 'Donation processing system coming soon!',

    supportFooter: isArabic
      ? 'ادعموا الشباب والتعليم وتنمية المجتمع.'
      : 'Support youth, education, and community development.',

    donateToday: isArabic
      ? 'تبرع اليوم وساعد في إحداث تغيير مستدام.'
      : 'Donate today and help create lasting change.',

    copyright: isArabic
      ? 'مبادرة تمكين الشباب. جميع الحقوق محفوظة. -2024–2026 فلسطين تعطي ©'
      : 'Youth Empowerment Initiative. All Rights Reserved. -2024–2026 PalGives ©',
  };

  return (
    <div
      dir={isArabic ? 'rtl' : 'ltr'}
      className="min-h-screen bg-slate-50 font-sans text-slate-800"
    >
      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 border-b border-slate-800 py-20 px-6 sm:px-12 text-center text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-4 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            {content.heroTitle}
          </h1>

          <div className="w-48 h-1.5 bg-[#F3D03E] mx-auto rounded-full" />
        </div>
      </section>

      {/* 2. INTRODUCTORY SECTION */}
      <section className="py-16 px-6 sm:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
            {content.intro}{' '}
            <strong
              className="text-slate-900 notranslate"
              translate="no"
            >
              {content.introOrganization}
            </strong>{' '}
            {content.introDescription}
          </p>
        </div>
      </section>

      {/* 3. WHY SUPPORT PALGIVES? */}
      <section className="bg-[#F3D03E] py-20 sm:py-24 px-6 sm:px-12 text-slate-900">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2
            className={`text-2xl sm:text-3xl font-black tracking-tight ${isArabic ? 'text-right' : 'text-left'
              }`}
          >
            {content.whySupport}
          </h2>

          <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-semibold list-disc list-inside">
            <li>{content.directSupport}</li>
            <li>{content.transparency}</li>
            <li>{content.sustainableImpact}</li>
            <li>{content.partnerships}</li>
          </ul>
        </div>
      </section>

      {/* 4. HOW YOUR DONATION IS USED */}
      <section className="py-20 sm:py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {content.howDonationUsed}
            </h2>

            <p className="text-slate-600 font-medium text-sm sm:text-base">
              {content.contributionSupports}
            </p>
          </div>

          <ul className="space-y-3 text-sm sm:text-base text-slate-700 font-medium list-disc list-inside bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <li>{content.youthPrograms}</li>
            <li>{content.educationalActivities}</li>
            <li>{content.sportsInitiatives}</li>
            <li>{content.communityProjects}</li>
          </ul>
        </div>
      </section>

      {/* 5. WAYS TO DONATE */}
      <section className="bg-[#F3D03E] py-20 sm:py-24 px-6 sm:px-12 text-slate-900">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {content.waysToDonate}
            </h2>

            <p className="text-slate-900 font-semibold text-sm sm:text-base">
              {content.supportWork}
            </p>
          </div>

          <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-semibold list-disc list-inside">
            <li>{content.bankTransfer}</li>
            <li>{content.onlineDonation}</li>
            <li>{content.directDonations}</li>
          </ul>
        </div>
      </section>

      {/* 6. BE PART OF THE CHANGE & CTA */}
      <section className="py-20 sm:py-24 px-6 sm:px-12 bg-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {content.bePart}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {content.supportDifference}
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-amber-600">
            {content.lastingImpact}
          </p>

          <div className="pt-2">
            <button
              onClick={() =>
                alert(content.donationComingSoon)
              }
              className="px-10 py-4 bg-[#F3D03E] text-slate-900 font-black uppercase tracking-wider text-sm rounded-lg border-2 border-slate-900 hover:bg-amber-400 transition-colors shadow-lg cursor-pointer"
            >
              {content.donateNow}
            </button>
          </div>
        </div>
      </section>

      {/* 7. FOOTER BANNER */}
      <section className="bg-[#F3D03E] py-12 px-6 text-center text-slate-900 font-bold text-sm sm:text-base border-t border-slate-900/10">
        <p>{content.supportFooter}</p>

        <p className="mt-1">{content.donateToday}</p>
      </section>

      {/* 8. FOOTER COPYRIGHT */}
      <footer className="py-8 bg-slate-100 border-t border-slate-200 text-center text-xs text-slate-500 font-medium">
        {content.copyright}
      </footer>
    </div>
  );
}

