'use client';

import Image from 'next/image';
import { useLanguage } from '../../../context/LanguageContext';

export default function AboutPage() {
  const { isArabic } = useLanguage();

  const content = {
    heroTitle: isArabic ? 'من نحن' : 'ABOUT US',

    introduction: isArabic
      ? 'فلسطين تعطي هي منظمة شبابية غير ربحية تسعى إلى تمكين الشباب في مختلف المجالات من خلال تعزيز القيادة الفعالة، وبناء القدرات، وتنفيذ مبادرات مجتمعية هادفة، بهدف إعداد جيل شاب واعٍ وقادر على إحداث تغيير إيجابي في مجتمعاته.'
      : 'PalGives is a non-profit youth organization that seeks to empower young people in various fields by promoting effective leadership, building capacity, and implementing meaningful community initiatives, with the aim of preparing a conscious young generation capable of bringing about positive change in their communities.',

    visionTitle: isArabic ? 'الرؤية' : 'Vision',

    visionText: isArabic
      ? 'شباب وقادة شباب متمكنون يساهمون في بناء مجتمعات عادلة ومستدامة.'
      : 'Empowered youth leaders contributing to building just and sustainable societies.',

    missionTitle: isArabic ? 'الرسالة' : 'Mission',

    missionText: isArabic
      ? 'تمكين الشباب من خلال التدريب، والتعليم غير الرسمي، والمبادرات المجتمعية، والعمل التطوعي لتعزيز دورهم في التنمية الاجتماعية والاقتصادية والسياسية.'
      : 'Empowering young people through training, informal education, community initiatives, and volunteer work to strengthen their role in social, economic, and political development.',

    strategicObjectives: isArabic
      ? 'الأهداف الاستراتيجية'
      : 'Strategic Objectives',

    objectives: isArabic
      ? [
          'تنمية مهارات القيادة لدى الشباب',
          'تعزيز المشاركة المجتمعية والعمل التطوعي',
          'دعم المبادرات الشبابية والابتكار الاجتماعي',
          'تعزيز حقوق الفئات المهمشة',
          'بناء شراكات محلية ودولية',
        ]
      : [
          'Developing leadership skills among young people',
          'Promoting community participation and volunteer work',
          'Supporting youth initiatives and social innovation',
          'Promoting the rights of marginalized groups',
          'Building local and international partnerships',
        ],

    valuesTitle: isArabic ? 'القيم الأساسية' : 'Core Values',

    values: isArabic
      ? [
          'المشاركة',
          'العدالة الاجتماعية',
          'القيادة الشبابية',
          'الشفافية',
          'الإبداع والابتكار',
          'المسؤولية الاجتماعية',
        ]
      : [
          'Participation',
          'Social Justice',
          'Youth Leadership',
          'Transparency',
          'Creativity and Innovation',
          'Social Responsibility',
        ],

    getInvolved: isArabic ? 'شارك معنا' : 'GET INVOLVED',

    getInvolvedText: isArabic
      ? 'يمكنك أن تكون جزءًا من جهودنا من خلال التطوع، ودعم المبادرات الشبابية، والمشاركة في أنشطتنا وبرامجنا المجتمعية.'
      : 'You can be part of our efforts through volunteering, supporting youth initiatives, and participating in our community activities and programs.',

    volunteer: isArabic ? 'تطوع معنا' : 'Volunteer With Us',

    programs: isArabic ? 'استكشف برامجنا' : 'Explore Our Programs',
  };

  const volunteerHref = isArabic ? '/ar/volunteer' : '/en/volunteer';
  const programsHref = isArabic ? '/ar/programs' : '/en/programs';

  return (
    <div
      dir={isArabic ? 'rtl' : 'ltr'}
      className="min-h-screen bg-white text-gray-800"
    >
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 px-6 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            {content.heroTitle}
          </h1>

          <div className="w-32 sm:w-48 h-1.5 bg-yellow-400 mx-auto mt-6 rounded-full" />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            {isArabic ? 'فلسطين تعطي' : 'PalGives'}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            {content.introduction}
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-yellow-400 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8 text-gray-900">
            <div>
              <h2 className="text-2xl font-bold mb-3">
                {content.visionTitle}
              </h2>

              <p className="text-sm md:text-base leading-relaxed">
                {content.visionText}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">
                {content.missionTitle}
              </h2>

              <p className="text-sm md:text-base leading-relaxed">
                {content.missionText}
              </p>
            </div>
          </div>

          <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/programs/youth2.jpg"
              alt={
                isArabic
                  ? 'ورشة حول الرؤية والرسالة'
                  : 'Vision and Mission workshop'
              }
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {content.strategicObjectives}
            </h2>

            <ul className="list-disc list-inside space-y-3 text-sm md:text-base text-gray-700">
              {content.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </div>

          <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/programs/youth9.jpg"
              alt={
                isArabic
                  ? 'فعالية حول الأهداف الاستراتيجية'
                  : 'Strategic Objectives event'
              }
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-yellow-400 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {content.valuesTitle}
            </h2>

            <ul className="list-disc list-inside space-y-3 text-sm md:text-base text-gray-900 font-medium">
              {content.values.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>

          <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/programs/youth28.jpg"
              alt={
                isArabic
                  ? 'نشاط حول القيم الأساسية'
                  : 'Core Values activity'
              }
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
            {content.getInvolved}
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8">
            {content.getInvolvedText}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={volunteerHref}
              className="px-7 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-colors"
            >
              {content.volunteer}
            </a>

            <a
              href={programsHref}
              className="px-7 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-colors"
            >
              {content.programs}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

