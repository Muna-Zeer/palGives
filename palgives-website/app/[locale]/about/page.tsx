'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

interface TeamMember {
  id: number;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  description: string;
  descriptionAr: string;
  image: string;
}

export default function TeamPage() {
  const { locale } = useLanguage();

  const isArabic = locale === 'ar';

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Dr. Bisan Sarahneh',
      nameAr: 'د. بيسان سرحانه',
      role: 'Director of the Medical Committee',
      roleAr: 'مديرة اللجنة الطبية',
      description:
        'Director of the Medical Committee at PalGives, overseeing all medical and health-related activities, ensuring quality healthcare and support for children, youth, and the local community.',
      descriptionAr:
        'مديرة اللجنة الطبية في فلسطين تعطي، وتشرف على جميع الأنشطة الطبية والصحية، وتضمن جودة الرعاية الصحية والدعم للأطفال والشباب والمجتمع المحلي.',
      image: '/images/teamMembers/Bisan.png',
    },
    {
      id: 2,
      name: 'Mr. Khalil Abu Kamel',
      nameAr: 'السيد خليل أبو كامل',
      role: 'General Director',
      roleAr: 'المدير العام',
      description:
        "General Director of PalGives, overseeing the organization's management and strategies, and leading the team to implement programs and initiatives that empower children, youth, and women in the Palestinian community.",
      descriptionAr:
        'المدير العام في فلسطين تعطي، ويشرف على إدارة المؤسسة واستراتيجياتها، ويقود الفريق لتنفيذ البرامج والمبادرات التي تهدف إلى تمكين الأطفال والشباب والنساء في المجتمع الفلسطيني.',
      image: '/images/teamMembers/khalil-abu-kamel.png',
    },
    {
      id: 3,
      name: 'Ms. Aya Jomaa',
      nameAr: 'السيدة آية جمعة',
      role: 'Northern Area Coordinator',
      roleAr: 'منسقة المنطقة الشمالية',
      description:
        'Northern Area Coordinator at PalGives, responsible for coordinating activities and initiatives in the northern region, supporting children, youth, and the local community to ensure programs reach all beneficiaries effectively.',
      descriptionAr:
        'منسقة المنطقة الشمالية في فلسطين تعطي، وهي مسؤولة عن تنسيق الأنشطة والمبادرات في المنطقة الشمالية، ودعم الأطفال والشباب والمجتمع المحلي، وضمان وصول البرامج إلى جميع المستفيدين بفعالية.',
      image: '/images/teamMembers/Aya.png',
    },
    {
      id: 4,
      name: 'Mr. Anas Abu Joudeh',
      nameAr: 'السيد أنس أبو جودة',
      role: 'Executive Director',
      roleAr: 'المدير التنفيذي',
      description:
        "Executive Director of PalGives, leading the organization's daily operations and ensuring effective implementation of programs and initiatives to fulfill the organization's mission of empowering children, youth, and women in the Palestinian community.",
      descriptionAr:
        'المدير التنفيذي في فلسطين تعطي، ويقود العمليات اليومية للمؤسسة ويضمن التنفيذ الفعال للبرامج والمبادرات لتحقيق رسالتها في تمكين الأطفال والشباب والنساء في المجتمع الفلسطيني.',
      image: '/images/teamMembers/Anas.png',
    },
    {
      id: 5,
      name: 'Dr. Ammar Al-Wahidi',
      nameAr: 'د. عمار الوحيدي',
      role: 'Training & Supervision Volunteer',
      roleAr: 'متطوع في التدريب والإشراف',
      description:
        'A volunteer at PalGives specializing in training and team supervision, contributing his expertise to develop the skills of children and youth and support teams implementing projects.',
      descriptionAr:
        'متطوع في فلسطين تعطي متخصص في التدريب والإشراف على الفرق، ويساهم بخبرته في تطوير مهارات الأطفال والشباب ودعم الفرق التي تنفذ المشاريع.',
      image: '/images/teamMembers/Ammar.png',
    },
    {
      id: 6,
      name: 'Dr. Halima Malash',
      nameAr: 'د. حليمة ملاش',
      role: 'Medical Committee Volunteer',
      roleAr: 'متطوعة في اللجنة الطبية',
      description:
        'A volunteer with the Medical Committee at PalGives, providing healthcare guidance and raising health awareness among children, youth, and the community.',
      descriptionAr:
        'متطوعة في اللجنة الطبية في فلسطين تعطي، تقدم الإرشادات الصحية وتساهم في رفع الوعي الصحي لدى الأطفال والشباب والمجتمع.',
      image: '/images/teamMembers/Halimah.png',
    },
    {
      id: 7,
      name: 'Mr. Khalil Radwan',
      nameAr: 'السيد خليل رضوان',
      role: 'Community Committee Volunteer',
      roleAr: 'متطوع في لجنة المجتمع المحلي',
      description:
        'An ambitious young Jerusalemite, volunteering with the Community Committee at PalGives. He contributes his energy and skills to support community projects and empower youth and children locally.',
      descriptionAr:
        'شاب مقدسي طموح، يتطوع في لجنة المجتمع المحلي في فلسطين تعطي. ويساهم بجهده ومهاراته في دعم المشاريع المجتمعية وتمكين الشباب والأطفال على المستوى المحلي.',
      image: '/images/teamMembers/khalil.png',
    },
    {
      id: 8,
      name: 'Ms. Duha Ibrahim',
      nameAr: 'السيدة ضحى إبراهيم',
      role: 'Director of Media and Communications',
      roleAr: 'مديرة الإعلام والاتصال',
      description:
        "Director of the Media and Communications Unit at PalGives, overseeing all media activities, coverage, and communication to highlight the organization's programs and initiatives.",
      descriptionAr:
        'مديرة وحدة الإعلام والاتصال في فلسطين تعطي، وتشرف على جميع الأنشطة الإعلامية والتغطية الإعلامية والتواصل، بهدف إبراز برامج المؤسسة ومبادراتها.',
      image: '/images/teamMembers/Duha.png',
    },
    {
      id: 9,
      name: 'Mr. Baher Obeidieh',
      nameAr: 'السيد باهر عبيدية',
      role: 'Program Director',
      roleAr: 'مدير البرامج',
      description:
        'Program Director at PalGives, overseeing the design and implementation of programs and initiatives that empower children and youth and enhance their role in the community.',
      descriptionAr:
        'مدير البرامج في فلسطين تعطي، ويشرف على تصميم وتنفيذ البرامج والمبادرات التي تهدف إلى تمكين الأطفال والشباب وتعزيز دورهم في المجتمع.',
      image: '/images/teamMembers/baher.png',
    },
    {
      id: 10,
      name: 'Mr. Imad Shakhtour',
      nameAr: 'السيد عماد شختور',
      role: 'Director of the Cultural Committee',
      roleAr: 'مدير اللجنة الثقافية',
      description:
        'Directs cultural programs and activities at PalGives, fostering creativity, youth dialogue, and community empowerment through cultural initiatives.',
      descriptionAr:
        'يدير البرامج والأنشطة الثقافية في فلسطين تعطي، ويساهم في تعزيز الإبداع والحوار بين الشباب وتمكين المجتمع من خلال المبادرات الثقافية.',
      image: '/images/teamMembers/Imad.jpeg',
    },
    {
      id: 11,
      name: 'Mr. Omar Abu Mayyaleh',
      nameAr: 'السيد عمر أبو ميالة',
      role: 'Program Director',
      roleAr: 'مدير البرامج',
      description:
        'Leads the design, execution, and evaluation of youth empowerment projects, coordinating teams and partners to deliver impactful community programs.',
      descriptionAr:
        'يقود تصميم وتنفيذ وتقييم مشاريع تمكين الشباب، وينسق الفرق والشركاء لتقديم برامج مجتمعية ذات أثر ملموس.',
      image: '/images/teamMembers/Omar.jpeg',
    },
    {
      id: 12,
      name: 'Mr. Naji Sobha',
      nameAr: 'السيد ناجي صبحة',
      role: 'Software Developer & Digital Specialist',
      roleAr: 'مطور برمجيات وأخصائي رقمي',
      description:
        'Software engineer responsible for digital solutions, platform development, and social media content management to strengthen digital outreach.',
      descriptionAr:
        'مهندس برمجيات مسؤول عن الحلول الرقمية وتطوير المنصات وإدارة محتوى وسائل التواصل الاجتماعي لتعزيز الوصول الرقمي.',
      image: '/images/teamMembers/Naji.jpeg',
    },
    {
      id: 13,
      name: 'Mr. Khalil Basil Radwan',
      nameAr: 'السيد خليل باسل رضوان',
      role: 'Administrative Board Member',
      roleAr: 'عضو مجلس الإدارة',
      description:
        'Holds a B.A. in Business Administration and contributes to strategic planning, administrative operations, and organizational development.',
      descriptionAr:
        'يحمل درجة البكالوريوس في إدارة الأعمال، ويساهم في التخطيط الاستراتيجي والعمليات الإدارية والتطوير المؤسسي.',
      image: '/images/teamMembers/Khalil-Basil.jpeg',
    },
    {
      id: 14,
      name: 'Ms. Reem Al-Salaymeh',
      nameAr: 'السيدة ريم السلايمة',
      role: 'Project Coordinator',
      roleAr: 'منسقة المشاريع',
      description:
        "Holds a Master's degree in Project Management (MICAD) and a B.Sc. in Agricultural Engineering. Coordinates and monitors PalGives projects, aligning teams, partners, and community programs for maximum impact.",
      descriptionAr:
        'تحمل درجة الماجستير في إدارة المشاريع (MICAD) ودرجة البكالوريوس في الهندسة الزراعية. تنسق وتتابع مشاريع فلسطين تعطي، وتعمل على تنسيق الفرق والشركاء والبرامج المجتمعية لتحقيق أكبر أثر ممكن.',
      image: '/images/teamMembers/Reem.jpeg',
    },
  ];

  return (
    <div
      className="w-full min-h-screen bg-white text-gray-800"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* =========================
          HERO SECTION
      ========================== */}
      <section
        className="relative w-full h-[50vh] sm:h-[55vh] min-h-[380px] flex flex-col justify-center items-center text-center bg-slate-900 bg-cover bg-center px-4 sm:px-6 overflow-hidden shadow-md"
        style={{
          backgroundImage: "url('/images/about_image.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-3 px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[0.2em] uppercase text-white drop-shadow-lg">
            {isArabic ? 'فريقنا' : 'OUR TEAM'}
          </h1>

          <div className="w-24 sm:w-36 md:w-48 h-1 bg-yellow-400 mx-auto rounded-full shadow-md" />
        </div>
      </section>

      {/* =========================
          INTRODUCTION SECTION
      ========================== */}
      <section className="w-full bg-yellow-400 py-12 sm:py-16 px-4 sm:px-8 shadow-inner">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-gray-900 font-medium text-base sm:text-lg leading-relaxed">
          {/* First paragraph */}
          <p className="drop-shadow-sm">
            {isArabic ? (
              <>
                يتكون فريقنا في{' '}
                <span className="italic font-semibold">فلسطين تعطي</span>{' '}
                من أفراد شغوفين وملتزمين، يكرسون جهودهم لتمكين الأطفال والشباب
                والنساء في فلسطين.
              </>
            ) : (
              <>
                Our team at{' '}
                <span className="italic font-semibold">PalGives</span> is made
                up of passionate and committed individuals dedicated to
                empowering children, youth, and women in Palestine.
              </>
            )}
          </p>

          {/* Second paragraph */}
          <p className="text-gray-800/90 text-sm sm:text-base">
            {isArabic ? (
              <>
                نرحب بأعضاء الفريق الذين يتمتعون بالفضول والتعاطف والنزاهة،
                ولديهم رغبة حقيقية في إحداث أثر إيجابي في المجتمع كل يوم. في{' '}
                <span className="italic font-semibold">فلسطين تعطي</span>،
                نسعى لأن نكون متواضعين ومجتهدين، وفوق كل شيء متعاونين، ونعمل
                معًا لخلق الفرص وإحداث تغيير هادف.
              </>
            ) : (
              <>
                We welcome team members who are curious, empathetic, and driven
                by integrity, with a genuine desire to make a positive impact
                in the community every single day. At{' '}
                <span className="italic font-semibold">PalGives</span>, we
                strive to be humble, hardworking, and—above all—collaborative,
                working together to create opportunities and meaningful change.
              </>
            )}
          </p>
        </div>
      </section>

      {/* =========================
          TEAM SECTION
      ========================== */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {teamMembers.map((member) => {
            const displayName = isArabic ? member.nameAr : member.name;
            const displayRole = isArabic ? member.roleAr : member.role;
            const displayDescription = isArabic
              ? member.descriptionAr
              : member.description;

            return (
              <article
                key={member.id}
                className="flex flex-col group"
                dir={isArabic ? 'rtl' : 'ltr'}
              >
                {/* =========================
                    TEAM MEMBER IMAGE
                ========================== */}
                <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-md shadow-sm bg-gray-100">
                  <Image
                    src={member.image}
                    alt={displayName}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* =========================
                    TEAM MEMBER NAME
                ========================== */}
                <h3
                  className="text-base font-bold text-gray-900 mb-1"
                  translate="no"
                >
                  {displayName}
                </h3>

                {/* =========================
                    TEAM MEMBER ROLE
                ========================== */}
                <p className="text-xs font-semibold text-amber-600 mb-2">
                  {displayRole}
                </p>

                {/* =========================
                    TEAM MEMBER DESCRIPTION
                ========================== */}
                <p className="text-xs text-gray-600 leading-relaxed">
                  {displayDescription}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}