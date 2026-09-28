'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function DonatePage() {
  const { locale } = useLanguage();
  const isArabic = locale === 'ar';

  return (
    <div
      className="w-full min-h-screen bg-slate-50 font-sans text-slate-800"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      
      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 border-b border-slate-800 py-20 px-6 sm:px-12 text-center text-white relative overflow-hidden shadow-md">
        <div className="max-w-5xl mx-auto space-y-4 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            {isArabic ? 'تبرعك يصنع فرقاً حقيقياً' : 'YOUR DONATION MAKES A REAL DIFFERENCE'}
          </h1>
          <div className="w-48 h-1.5 bg-[#F3D03E] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* 2. INTRODUCTORY SECTION */}
      <section className="py-16 px-6 sm:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
            {isArabic ? (
              <>
                في مؤسسة{' '}
                <strong className="text-slate-900 notranslate" translate="no">
                  فلسطين تعطي – تناغم، عمل، ريادة
                </strong>
                ، نؤمن بأن كل مسهمة، مهما كانت صغرى، قادرة على خلق تغيير ذي معنى. يساعدنا تبرعك في تمكين الشباب، دعم التعليم، تعزيز المبادرات المجتمعية، ودعم التنمية المستدامة.
              </>
            ) : (
              <>
                At{' '}
                <strong className="text-slate-900 notranslate" translate="no">
                  PalGives – Harmony, Action, Leading
                </strong>
                , we believe that every contribution, no matter how small, can create meaningful change. Your donation helps us empower youth, support education, strengthen community initiatives, and promote sustainable development.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-[#F3D03E] py-20 sm:py-24 px-6 sm:px-12 text-slate-900">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-center sm:text-left">
            {isArabic ? 'لماذا تدعم فلسطين تعطي؟' : 'WHY SUPPORT PALGIVES?'}
          </h2>
          <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-semibold list-disc list-inside">
            <li>
              {isArabic ? 'دعم مباشر لبرامج الشباب والمجتمع' : 'Direct support for youth and community programs'}
            </li>
            <li>
              {isArabic ? 'الشفافية والمساءلة في الإدارة المالية' : 'Transparency and accountability in financial management'}
            </li>
            <li>
              {isArabic ? 'أثر مستدام على مستوى المجتمع المحلي' : 'Sustainable impact at the local community level'}
            </li>
            <li>
              {isArabic ? 'شراكات قوية مع منظمات محلية ودولية' : 'Strong partnerships with local and international organizations'}
            </li>
          </ul>
        </div>
      </section>

      {/* 4. HOW YOUR DONATION IS USED */}
      <section className="py-20 sm:py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {isArabic ? 'كيف يتم استخدام تبرعك؟' : 'How Your Donation Is Used'}
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base">
              {isArabic ? 'مساهمتك الكريمة تدعم:' : 'Your generous contribution supports:'}
            </p>
          </div>
          <ul className="space-y-3 text-sm sm:text-base text-slate-700 font-medium list-disc list-inside bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <li>
              {isArabic ? 'برامج تمكين الشباب والقيادة' : 'Youth empowerment and leadership programs'}
            </li>
            <li>
              {isArabic ? 'الأنشطة التعليمية والتدريبية' : 'Educational and training activities'}
            </li>
            <li>
              {isArabic ? 'المبادرات الرياضية والترفيهية للأطفال والشباب' : 'Sports and recreational initiatives for children and youth'}
            </li>
            <li>
              {isArabic ? 'مشاريع الدعم المجتمعي للعائلات المحتاجة' : 'Community support projects for vulnerable families'}
            </li>
          </ul>
        </div>
      </section>

      {/* 5. WAYS TO DONATE (YELLOW BANNER) */}
      <section className="bg-[#F3D03E] py-20 sm:py-24 px-6 sm:px-12 text-slate-900">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {isArabic ? 'طرق التبرع' : 'Ways to Donate'}
            </h2>
            <p className="text-slate-900 font-semibold text-sm sm:text-base">
              {isArabic ? 'يمكنك دعم عملنا من خلال:' : 'You can support our work through:'}
            </p>
          </div>
          <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-semibold list-disc list-inside">
            <li>
              {isArabic ? 'التحويل المصرفي' : 'Bank transfer'}
            </li>
            <li>
              {isArabic ? 'التبرع عبر الإنترنت (باي بال / بطاقة ائتمانية)' : 'Online donation (PayPal / Credit Card)'}
            </li>
            <li>
              {isArabic ? 'التبرع المباشر للمؤسسة' : 'Direct donations to the organization'}
            </li>
          </ul>
        </div>
      </section>

      <section className="py-20 sm:py-24 px-6 sm:px-12 bg-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {isArabic ? 'كن جزءاً من التغيير' : 'Be Part of the Change'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {isArabic 
              ? 'دعمك يحدث فرقاً حقيقياً في بناء مستقبل أفضل للشباب والمجتمعات.'
              : 'Your support makes a real difference in building a better future for youth and communities.'}
          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-amber-600">
            {isArabic ? 'انضم إلينا في احداث أثر مستدام!' : 'Join us in making a lasting impact!'}
          </p>
          <div className="pt-2">
            <button
              onClick={() => alert(isArabic ? 'نظام معالجة التبرعات قريباً!' : 'Donation processing system coming soon!')}
              className="px-10 py-4 bg-[#F3D03E] text-slate-900 font-black uppercase tracking-wider text-sm rounded-lg border-2 border-slate-900 hover:bg-amber-400 transition-colors shadow-lg cursor-pointer"
            >
              {isArabic ? 'تبرع الآن' : 'Donate Now'}
            </button>
          </div>
        </div>
      </section>

      {/* 7. FOOTER BANNER */}
      <section className="bg-[#F3D03E] py-12 px-6 text-center text-slate-900 font-bold text-sm sm:text-base border-t border-slate-900/10">
        <p>
          {isArabic ? 'ادعم الشباب، التعليم، وتنمية المجتمع.' : 'Support youth, education, and community development.'}
        </p>
        <p className="mt-1">
          {isArabic ? 'تبرع اليوم وساهم في خلق تغيير مستدام.' : 'Donate today and help create lasting change.'}
        </p>
      </section>

      <footer className="py-8 bg-slate-100 border-t border-slate-200 text-center text-xs text-slate-500 font-medium">
        {isArabic 
          ? 'مبادرة تمكين الشباب. جميع الحقوق محفوظة. 2024–2026 فلسطين تعطي ©' 
          : 'Youth Empowerment Initiative. All Rights Reserved. -2024–2026 PalGives ©'}
      </footer>

    </div>
  );
}