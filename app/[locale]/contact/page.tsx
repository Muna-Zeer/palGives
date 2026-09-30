'use client';

import { useLanguage } from '../../../context/LanguageContext';

export default function ContactPage() {
  const { isArabic } = useLanguage();

  const content = {
    heroTitle: isArabic ? 'تواصل معنا' : 'CONTACT US',

    contactTitle: isArabic ? 'تواصل معنا' : 'Contact Us',

    contactIntro: isArabic
      ? 'يسعدنا التواصل معكم لأي استفسارات أو اقتراحات أو فرص للشراكة. يمكنكم التواصل معنا من خلال القنوات التالية:'
      : 'We are pleased to hear from you for any inquiries, suggestions, or partnership opportunities. You can reach us through the following channels:',

    emailAddresses: isArabic ? 'عناوين البريد الإلكتروني' : 'Email Addresses',

    socialMedia: isArabic ? 'وسائل التواصل الاجتماعي' : 'Social Media',

    facebook: 'Facebook',
    instagram: 'Instagram',

    officeLocations: isArabic
      ? 'مواقع مكاتبنا'
      : 'Our Office Locations',

    bethlehem: isArabic ? 'بيت لحم' : 'Bethlehem',

    nablus: isArabic ? 'نابلس' : 'Nablus',

    jerusalem: isArabic ? 'القدس' : 'Jerusalem',

    administrativeOffice: isArabic
      ? 'المكتب الإداري:'
      : 'Administrative Office:',

    trainingHalls: isArabic
      ? 'قاعات التدريب:'
      : 'Training Halls:',

    bethlehemAdministrativeAddress: isArabic
      ? 'شارع القدس-الخليل – مبنى النشاش – الطابق الأول'
      : 'Jerusalem-Hebron Street – Al-Natsheh Building – First Floor',

    bethlehemTrainingAddress: isArabic
      ? 'شارع القدس-الخليل – مبنى الرباط – الطابق الثالث'
      : 'Jerusalem-Hebron Street – Al-Ribat Building – Third Floor',

    nablusAddress: isArabic
      ? 'شارع رفيديا – مبنى البلد – الطابق الأول'
      : 'Rafidia Street – Al-Balad Building – First Floor',

    jerusalemAddress: isArabic
      ? 'شارع التل الفرنسي – مبنى الآفاق – الطابق الثاني- 404'
      : 'French Hill Street – Al-Afaq Building – Second Floor- 404',

    visitMessage: isArabic
      ? 'نرحب بزيارتكم خلال ساعات العمل الرسمية ونتطلع إلى التواصل معكم.'
      : 'We welcome your visit during official working hours and look forward to connecting with you.',

    copyright: isArabic
      ? 'مبادرة تمكين الشباب. جميع الحقوق محفوظة. -2024–2026 فلسطين تعطي ©'
      : 'Youth Empowerment Initiative. All Rights Reserved. -2024–2026 PalGives ©',
  };

  return (
    <div
      dir={isArabic ? 'rtl' : 'ltr'}
      className="min-h-screen bg-slate-50 font-sans text-slate-800"
    >
      {/* HERO BANNER */}
      <section className="bg-slate-900 border-b border-slate-800 py-20 px-6 sm:px-12 text-center text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-4 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            {content.heroTitle}
          </h1>

          <div className="w-48 h-1.5 bg-[#F3D03E] mx-auto rounded-full" />
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* INTRODUCTORY TEXT */}
          <div className="space-y-3 border-b border-slate-200 pb-8">
            <h2 className="text-2xl font-bold text-slate-900">
              {content.contactTitle}
            </h2>

            <p className="text-slate-600 leading-relaxed text-base">
              {content.contactIntro}
            </p>
          </div>

          {/* CONTACT DETAILS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* EMAIL ADDRESSES */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="p-2 bg-[#F3D03E] text-slate-900 rounded-lg text-sm">
                  ✉
                </span>

                {content.emailAddresses}
              </h3>

              <ul
                className="space-y-2 text-sm text-slate-700 font-medium"
                translate="no"
              >
                <li>
                  <a
                    href="mailto:PalGives@Outlook.com"
                    className="hover:text-amber-600 underline decoration-slate-300"
                  >
                    PalGives@Outlook.com
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:info@palgive.org"
                    className="hover:text-amber-600 underline decoration-slate-300"
                  >
                    info@palgive.org
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:khalil-kamel@yahoo.com"
                    className="hover:text-amber-600 underline decoration-slate-300"
                  >
                    khalil-kamel@yahoo.com
                  </a>
                </li>
              </ul>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="p-2 bg-[#F3D03E] text-slate-900 rounded-lg text-sm">
                  🌐
                </span>

                {content.socialMedia}
              </h3>

              <div className="space-y-3 text-sm text-slate-700 font-medium">

                {/* FACEBOOK */}
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">
                    {content.facebook}
                  </span>

                  <a
                    href="https://www.facebook.com/PalGive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-600 underline decoration-slate-300 break-all"
                    translate="no"
                  >
                    https://www.facebook.com/PalGive
                  </a>
                </div>

                {/* INSTAGRAM */}
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">
                    {content.instagram}
                  </span>

                  <a
                    href="https://www.instagram.com/palgives1?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-600 underline decoration-slate-300 break-all"
                    translate="no"
                  >
                    https://www.instagram.com/palgives1?hl=en
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* OFFICE LOCATIONS */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-6">

            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="p-2 bg-[#F3D03E] text-slate-900 rounded-lg text-sm">
                📍
              </span>

              {content.officeLocations}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">

              {/* BETHLEHEM */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
                <h4 className="font-extrabold text-slate-900 border-b border-slate-100 pb-2">
                  {content.bethlehem}
                </h4>

                <div className="text-slate-600 space-y-1">
                  <p className="font-semibold text-slate-800">
                    {content.administrativeOffice}
                  </p>

                  <p>{content.bethlehemAdministrativeAddress}</p>

                  <p className="font-semibold text-slate-800 pt-2">
                    {content.trainingHalls}
                  </p>

                  <p>{content.bethlehemTrainingAddress}</p>
                </div>
              </div>

              {/* NABLUS */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
                <h4 className="font-extrabold text-slate-900 border-b border-slate-100 pb-2">
                  {content.nablus}
                </h4>

                <div className="text-slate-600 space-y-1">
                  <p>{content.nablusAddress}</p>
                </div>
              </div>

              {/* JERUSALEM */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
                <h4 className="font-extrabold text-slate-900 border-b border-slate-100 pb-2">
                  {content.jerusalem}
                </h4>

                <div className="text-slate-600 space-y-1">
                  <p>{content.jerusalemAddress}</p>
                </div>
              </div>

            </div>

            <p className="text-center text-sm font-semibold text-slate-700 pt-4 border-t border-slate-200">
              {content.visitMessage}
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-slate-100 border-t border-slate-200 text-center text-xs text-slate-500 font-medium">
        {content.copyright}
      </footer>
    </div>
  );
}
