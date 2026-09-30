'use client';

import Image from 'next/image';
import { useLanguage } from '../../../context/LanguageContext';

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
  const { isArabic } = useLanguage();

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Dr. Bisan Sarahneh',
      nameAr: 'د. بيسان سرحانه',
      role: 'Director of the Medical Committee',
      roleAr: 'مديرة اللجنة الطبية',
      description:
        'Director of the Medical Committee at PalGives, overseeing medical and health-related activities and supporting quality healthcare services for children, youth, and the local community.',
      descriptionAr:
        'مديرة اللجنة الطبية في مؤسسة فلسطين تعطي، وتشرف على الأنشطة الطبية والصحية، وتساهم في توفير خدمات رعاية صحية عالية الجودة للأطفال والشباب والمجتمع المحلي.',
      image: '/images/teamMembers/Bisan.png',
    },

    {
      id: 2,
      name: 'Mr. Khalil Abu Kamel',
      nameAr: 'السيد خليل أبو كامل',
      role: 'General Director',
      roleAr: 'المدير العام',
      description:
        "General Director of PalGives, overseeing the organization's management and strategic direction while leading the team in implementing programs and initiatives that support children, youth, and women in the Palestinian community.",
      descriptionAr:
        'المدير العام في مؤسسة فلسطين تعطي، ويشرف على إدارة المؤسسة وتوجهها الاستراتيجي، ويقود الفريق في تنفيذ البرامج والمبادرات التي تدعم الأطفال والشباب والنساء في المجتمع الفلسطيني.',
      image: '/images/teamMembers/Khalil-abu-kamel.png',
    },

    {
      id: 3,
      name: 'Ms. Aya Jomaa',
      nameAr: 'السيدة آية جمعة',
      role: 'Northern Area Coordinator',
      roleAr: 'منسقة المنطقة الشمالية',
      description:
        'Northern Area Coordinator at PalGives, responsible for coordinating activities and initiatives in the northern region and supporting children, youth, and local communities to ensure programs reach beneficiaries effectively.',
      descriptionAr:
        'منسقة المنطقة الشمالية في مؤسسة فلسطين تعطي، وهي مسؤولة عن تنسيق الأنشطة والمبادرات في المنطقة الشمالية، ودعم الأطفال والشباب والمجتمعات المحلية، وضمان وصول البرامج إلى المستفيدين بفعالية.',
      image: '/images/teamMembers/Aya.png',
    },

    {
      id: 4,
      name: 'Mr. Anas Abu Joudeh',
      nameAr: 'السيد أنس أبو جودة',
      role: 'Executive Director',
      roleAr: 'المدير التنفيذي',
      description:
        "Executive Director of PalGives, leading the organization's daily operations and ensuring the effective implementation of programs and initiatives that advance its mission of empowering children, youth, and women in the Palestinian community.",
      descriptionAr:
        'المدير التنفيذي في مؤسسة فلسطين تعطي، ويقود العمليات اليومية للمؤسسة ويضمن التنفيذ الفعال للبرامج والمبادرات التي تدعم رسالتها في تمكين الأطفال والشباب والنساء في المجتمع الفلسطيني.',
      image: '/images/teamMembers/Anas.png',
    },

    {
      id: 5,
      name: 'Dr. Ammar Al-Wahidi',
      nameAr: 'د. عمار الوحيدي',
      role: 'Training & Supervision Volunteer',
      roleAr: 'متطوع في التدريب والإشراف',
      description:
        'A volunteer at PalGives specializing in training and team supervision, contributing his experience to developing the skills of children and youth and supporting teams implementing projects.',
      descriptionAr:
        'متطوع في مؤسسة فلسطين تعطي متخصص في التدريب والإشراف على الفرق، ويساهم بخبرته في تطوير مهارات الأطفال والشباب ودعم الفرق التي تنفذ المشاريع.',
      image: '/images/teamMembers/Ammar.png',
    },

    {
      id: 6,
      name: 'Dr. Halima Malash',
      nameAr: 'د. حليمة ملاش',
      role: 'Medical Committee Volunteer',
      roleAr: 'متطوعة في اللجنة الطبية',
      description:
        'A volunteer with the Medical Committee at PalGives, providing healthcare guidance and contributing to health awareness initiatives for children, youth, and the wider community.',
      descriptionAr:
        'متطوعة في اللجنة الطبية في مؤسسة فلسطين تعطي، وتقدم الإرشادات الصحية وتساهم في مبادرات التوعية الصحية للأطفال والشباب والمجتمع بشكل عام.',
      image: '/images/teamMembers/Halimah.png',
    },

    {
      id: 7,
      name: 'Mr. Khalil Radwan',
      nameAr: 'السيد خليل رضوان',
      role: 'Community Committee Volunteer',
      roleAr: 'متطوع في لجنة المجتمع المحلي',
      description:
        'An ambitious young Jerusalemite volunteering with the Community Committee at PalGives. He contributes his energy and skills to community projects and initiatives that support and empower youth and children locally.',
      descriptionAr:
        'شاب مقدسي طموح يتطوع في لجنة المجتمع المحلي في مؤسسة فلسطين تعطي، ويساهم بجهده ومهاراته في دعم المشاريع والمبادرات المجتمعية وتمكين الشباب والأطفال على المستوى المحلي.',
      image: '/images/teamMembers/Khalil.png',
    },

    {
      id: 8,
      name: 'Ms. Duha Ibrahim',
      nameAr: 'السيدة ضحى إبراهيم',
      role: 'Director of Media and Communications',
      roleAr: 'مديرة الإعلام والاتصال',
      description:
        "Director of the Media and Communications Unit at PalGives, overseeing media activities, coverage, and communication efforts that highlight the organization's programs and initiatives.",
      descriptionAr:
        'مديرة وحدة الإعلام والاتصال في مؤسسة فلسطين تعطي، وتشرف على الأنشطة الإعلامية والتغطية والتواصل بهدف إبراز برامج المؤسسة ومبادراتها.',
      image: '/images/teamMembers/Duha.png',
    },

    {
      id: 9,
      name: 'Mr. Baher Obeidieh',
      nameAr: 'السيد باهر عبيدية',
      role: 'Program Director',
      roleAr: 'مدير البرامج',
      description:
        'Program Director at PalGives, overseeing the design and implementation of programs and initiatives that empower children and youth and strengthen their role in the community.',
      descriptionAr:
        'مدير البرامج في مؤسسة فلسطين تعطي، ويشرف على تصميم وتنفيذ البرامج والمبادرات التي تهدف إلى تمكين الأطفال والشباب وتعزيز دورهم في المجتمع.',
      image: '/images/teamMembers/Baher.png',
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
        'يدير البرامج والأنشطة الثقافية في مؤسسة فلسطين تعطي، ويساهم في تعزيز الإبداع والحوار بين الشباب وتمكين المجتمع من خلال المبادرات الثقافية.',
      image: '/images/teamMembers/Imad.jpeg',
    },

    {
      id: 11,
      name: 'Mr. Omar Abu Mayyaleh',
      nameAr: 'السيد عمر أبو ميالة',
      role: 'Program Director',
      roleAr: 'مدير البرامج',
      description:
        'Leads the design, implementation, and evaluation of youth empowerment projects while coordinating teams and partners to deliver meaningful community programs.',
      descriptionAr:
        'يقود تصميم وتنفيذ وتقييم مشاريع تمكين الشباب، وينسق الفرق والشركاء لتقديم برامج مجتمعية هادفة وذات أثر ملموس.',
      image: '/images/teamMembers/Omar.jpeg',
    },

    {
      id: 12,
      name: 'Mr. Naji Sobha',
      nameAr: 'السيد ناجي صبحة',
      role: 'Software Developer & Digital Specialist',
      roleAr: 'مطور برمجيات وأخصائي رقمي',
      description:
        'Software engineer responsible for digital solutions, platform development, and social media content management to strengthen PalGives digital presence and outreach.',
      descriptionAr:
        'مهندس برمجيات مسؤول عن تطوير الحلول الرقمية والمنصات وإدارة محتوى وسائل التواصل الاجتماعي لتعزيز الحضور الرقمي لمؤسسة فلسطين تعطي والوصول إلى جمهور أوسع.',
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
        "Holds a Master's degree in Project Management (MICAD) and a B.Sc. in Agricultural Engineering. She coordinates and monitors PalGives projects, working with teams, partners, and community programs to maximize their impact.",
      descriptionAr:
        'تحمل درجة الماجستير في إدارة المشاريع (MICAD) ودرجة البكالوريوس في الهندسة الزراعية. تنسق وتتابع مشاريع مؤسسة فلسطين تعطي، وتعمل مع الفرق والشركاء والبرامج المجتمعية لتحقيق أكبر أثر ممكن.',
      image: '/images/teamMembers/Reem.jpeg',
    },
  ];

  return (
    <div
      className="min-h-screen w-full bg-white text-gray-800"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* =========================
          HERO SECTION
      ========================== */}
      <section
        className="relative flex min-h-[380px] h-[50vh] w-full items-center justify-center overflow-hidden bg-slate-900 bg-cover bg-center px-4 shadow-md sm:h-[55vh] sm:px-6"
        style={{
          backgroundImage: "url('/images/PalGives_Imgs/about_image.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1
            className="text-3xl font-black tracking-[0.12em] text-white drop-shadow-lg sm:text-5xl md:text-6xl"
            translate="no"
          >
            {isArabic ? 'فريقنا' : 'OUR TEAM'}
          </h1>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-yellow-400 shadow-md sm:w-36 md:w-48" />
        </div>
      </section>

      {/* =========================
          INTRODUCTION SECTION
      ========================== */}
      <section className="w-full bg-yellow-400 px-5 py-12 shadow-inner sm:px-8 sm:py-16">
        <div
          className={`mx-auto max-w-4xl space-y-6 text-gray-900 ${
            isArabic ? 'text-right' : 'text-center'
          }`}
        >
          <p className="text-base font-medium leading-relaxed sm:text-lg">
            {isArabic ? (
              <>
                يتكون فريقنا في{' '}
                <span
                  className="font-semibold italic"
                  translate="no"
                >
                  فلسطين تعطي
                </span>{' '}
                من أفراد شغوفين وملتزمين، يكرسون جهودهم لتمكين الأطفال والشباب
                والنساء في فلسطين.
              </>
            ) : (
              <>
                Our team at{' '}
                <span
                  className="font-semibold italic"
                  translate="no"
                >
                  PalGives
                </span>{' '}
                is made up of passionate and committed individuals dedicated
                to empowering children, youth, and women in Palestine.
              </>
            )}
          </p>

          <p className="text-sm leading-relaxed text-gray-800/90 sm:text-base">
            {isArabic ? (
              <>
                نرحب بأعضاء الفريق الذين يتمتعون بالفضول والتعاطف والنزاهة،
                ولديهم رغبة حقيقية في إحداث أثر إيجابي في المجتمع كل يوم. في{' '}
                <span
                  className="font-semibold italic"
                  translate="no"
                >
                  فلسطين تعطي
                </span>
                ، نسعى لأن نكون متواضعين ومجتهدين، وفوق كل شيء متعاونين، ونعمل
                معًا لخلق الفرص وإحداث تغيير هادف.
              </>
            ) : (
              <>
                We welcome team members who are curious, empathetic, and driven
                by integrity, with a genuine desire to make a positive impact
                in the community every day. At{' '}
                <span
                  className="font-semibold italic"
                  translate="no"
                >
                  PalGives
                </span>
                , we strive to be humble, hardworking, and, above all,
                collaborative, working together to create opportunities and
                meaningful change.
              </>
            )}
          </p>
        </div>
      </section>

      {/* =========================
          TEAM SECTION
      ========================== */}
      <section className="w-full px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-14">
            {teamMembers.map((member) => {
              const displayName = isArabic ? member.nameAr : member.name;
              const displayRole = isArabic ? member.roleAr : member.role;
              const displayDescription = isArabic
                ? member.descriptionAr
                : member.description;

              return (
                <article
                  key={member.id}
                  className="group flex flex-col"
                  dir={isArabic ? 'rtl' : 'ltr'}
                >
                  {/* Member Image */}
                  <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-lg bg-gray-100 shadow-sm">
                    <Image
                      src={member.image}
                      alt={displayName}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Member Information */}
                  <div
                    className={`${
                      isArabic ? 'text-right' : 'text-left'
                    }`}
                  >
                    <h3
                      className="mb-1 text-base font-bold leading-snug text-gray-900 sm:text-lg"
                      translate="no"
                    >
                      {displayName}
                    </h3>

                    <p className="mb-2 text-xs font-semibold leading-relaxed text-amber-600 sm:text-sm">
                      {displayRole}
                    </p>

                    <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                      {displayDescription}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
