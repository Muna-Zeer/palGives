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
        'General Director of PalGives, leading the organization’s overall management, strategic planning, program development, and partnerships while strengthening its impact in youth empowerment and community development.',
      descriptionAr:
        'يقود الإدارة العامة لمؤسسة PalGives، ويشرف على التخطيط الاستراتيجي وتطوير البرامج والمبادرات، وبناء الشراكات، وتعزيز أثر المؤسسة في مجال تمكين الشباب والتنمية المجتمعية.',
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
      name: 'Dr. Halima Malsh',
      nameAr: 'د. حليمة ملش',
      role: 'Medical Committee Volunteer',
      roleAr: 'متطوعة في اللجنة الطبية',
      description:
        'Contributes her medical expertise as a volunteer with the Medical Committee at PalGives, supporting the organization’s health initiatives and activities for youth and the community.',
      descriptionAr:
        'تساهم بخبرتها الطبية كمتطوعة ضمن اللجنة الطبية في مؤسسة PalGives – لتمكين الشباب، وتدعم المبادرات والأنشطة الصحية التي تنفذها المؤسسة لخدمة الشباب والمجتمع.',
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
      nameAr: 'ضحى إبراهيم',
      role: 'Public Relations Officer',
      roleAr: 'مسؤولة العلاقات العامة',
      description:
        'Contributes to building and strengthening PalGives’ relationships with partners, institutions, and the local community, coordinating communication and engagement to support the organization’s programs and initiatives and strengthen its community presence.',
      descriptionAr:
        'تساهم في بناء وتعزيز علاقات مؤسسة PalGives – لتمكين الشباب مع الشركاء والمؤسسات والمجتمع المحلي، والتنسيق والتواصل بما يدعم برامج المؤسسة ومبادراتها ويعزز حضورها المجتمعي.',
      image: '/images/teamMembers/Duha.png',
    },



    {
      id: 9,
      name: 'Mr. Baher Obeidieh',
      nameAr: 'السيد بحر عبيدية',
      role: 'Program Director',
      roleAr: 'مدير البرامج',
      description: 'Program Director at PalGives, supporting the planning and implementation of its programs and initiatives.',
      descriptionAr: 'مدير البرامج في مؤسسة فلسطين تعطي، ويساهم في التخطيط وتنفيذ برامج المؤسسة ومبادراتها.',
      image: '/images/teamMembers/Baher.png',
    },


    {
      id: 10,
      name: 'Mr. Imad Shakhtour',
      nameAr: 'عماد شختور',
      role: 'Director of the Cultural Committee',
      roleAr: 'مدير اللجنة الثقافية',
      description:
        'Leads and follows up on the work of the Cultural Committee at PalGives, contributing to the development and implementation of cultural programs and activities and encouraging youth participation in cultural and community initiatives.',
      descriptionAr:
        'يتولى إدارة ومتابعة أعمال اللجنة الثقافية في مؤسسة PalGives – لتمكين الشباب، والمساهمة في إعداد وتنفيذ الأنشطة والبرامج الثقافية، وتعزيز مشاركة الشباب في المبادرات الثقافية والمجتمعية.',
      image: '/images/teamMembers/Imad.jpeg',
    },


    {
      id: 11,
      name: 'Mr. Omar Abu Mayyaleh',
      nameAr: 'عمر أبو ميالة',
      role: 'Youth Groups Coordinator',
      roleAr: 'منسق المجموعات الشبابية',
      description:
        'Coordinates and follows up with youth groups at PalGives, organizing their participation in programs and initiatives while promoting teamwork, leadership, and community engagement among young people.',
      descriptionAr:
        'يساهم في تنسيق ومتابعة المجموعات الشبابية في مؤسسة PalGives – لتمكين الشباب، وتنظيم مشاركتهم في البرامج والمبادرات، وتعزيز روح العمل الجماعي والقيادة والمشاركة المجتمعية لدى الشباب.',
      image: '/images/teamMembers/Omar.jpeg',
    },

    {
      id: 12,
      name: 'Mr. Naji Sobha',
      nameAr: 'ناجي صبحة',
      role: 'Software & Digital Networks Developer',
      roleAr: 'مطور البرمجيات والشبكات الرقمية',
      description:
        'Contributes to developing and managing software solutions and digital networks at PalGives, supporting the organization’s digital transformation and strengthening its technical infrastructure and programs.',
      descriptionAr:
        'يساهم في تطوير وإدارة الحلول البرمجية والشبكات الرقمية في مؤسسة PalGives – لتمكين الشباب، ودعم التحول الرقمي وتعزيز البنية التقنية للمؤسسة وبرامجها.',
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
      nameAr: 'ريم السلايمة',
      role: 'Project Coordinator',
      roleAr: 'منسقة المشاريع',
      description:
        'Coordinates and follows up on PalGives projects and programs, contributing to the organization and implementation of activities and following up with teams and partners to strengthen the quality and impact of programs for the community and youth.',
      descriptionAr:
        'تتولى السيدة ريم السلايمة تنسيق ومتابعة مشاريع وبرامج مؤسسة PalGives – لتمكين الشباب، والمساهمة في تنظيم وتنفيذ الأنشطة، ومتابعة فرق العمل والشركاء، بما يعزز جودة البرامج وأثرها في المجتمع والشباب.',
      image: '/images/teamMembers/Reem.jpeg',
    },



    {
      id: 15,
      name: 'Mr. Mahmoud Abu Rmeis',
      nameAr: 'السيد محمود أبو رميس',
      role: 'Volunteer Coordinator',
      roleAr: 'منسق المتطوعين',
      description:
        'Volunteer Coordinator at PalGives, responsible for recruiting, organizing, and following up with volunteers. He supports youth engagement in programs, activities, and community initiatives, helping strengthen a culture of volunteering, giving, and youth empowerment.',
      descriptionAr:
        'منسق المتطوعين في مؤسسة فلسطين تعطي، ويساهم في استقطاب وتنظيم ومتابعة المتطوعين، وتعزيز مشاركتهم في البرامج والأنشطة والمبادرات المجتمعية، بما يدعم ثقافة التطوع والعطاء وتمكين الشباب.',
      image: '/images/teamMembers/Mahmoud.jpg',
    },

    {
      id: 16,
      name: 'Mr. Amjad Al-Shuweiki',
      nameAr: 'السيد أمجد الشويكي',
      role: 'Media & Digital Production Officer',
      roleAr: 'مسؤول الإنتاج الإعلامي والرقمي',
      description:
        'Media & Digital Production Officer at PalGives, contributing to the management and production of the organization’s media and digital content, documenting its activities and initiatives, and strengthening PalGives’ presence and mission of youth empowerment across digital platforms.',
      descriptionAr:
        'مسؤول الإنتاج الإعلامي والرقمي في مؤسسة فلسطين تعطي، ويساهم في إدارة وإنتاج المحتوى الإعلامي والرقمي للمؤسسة، وتوثيق أنشطتها ومبادراتها، وتعزيز حضور مؤسسة فلسطين تعطي ورسالتها في تمكين الشباب عبر المنصات الرقمية.',
      image: '/images/teamMembers/Amjad.jpg',
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
          backgroundImage: "url('/images/palgives_imgs/about_image.jpg')",
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
          className={`mx-auto max-w-4xl space-y-6 text-gray-900 ${isArabic ? 'text-right' : 'text-center'
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
                    className={`${isArabic ? 'text-right' : 'text-left'
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
