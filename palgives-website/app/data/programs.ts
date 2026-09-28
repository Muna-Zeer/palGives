export interface Program {
  title: {
    en: string;
    ar: string;
  };
  slug: string;
  summary: {
    en: string;
    ar: string;
  };
  image: string;
  badge: {
    en: string;
    ar: string;
  };
}

export const programs: Program[] = [
  {
    title: {
      en: 'Youth Development & Entrepreneurship',
      ar: 'تنمية الشباب وريادة الأعمال',
    },
    slug: 'youth-development-entrepreneurship',
    summary: {
      en: 'Empowering young leaders with business skills, mentorship, and career opportunities.',
      ar: 'تمكين القادة الشباب بالمهارات التجارية، الإرشاد، وفرص التطور المهني.',
    },
    image: '/images/youth.jpg',
    badge: {
      en: 'Youth & Future',
      ar: 'الشباب والمستقبل',
    },
  },
  {
    title: {
      en: 'Education Program',
      ar: 'برنامج التعليم',
    },
    slug: 'education-program',
    summary: {
      en: 'Scholarships, academic support, and modern learning tools for students.',
      ar: 'المنح الدراسية، الدعم الأكاديمي، وأدوات التعلم الحديثة للطلاب.',
    },
    image: '/images/education.jpg',
    badge: {
      en: 'Education',
      ar: 'التعليم',
    },
  },
  {
    title: {
      en: "Women's Empowerment",
      ar: 'تمكين المرأة',
    },
    slug: 'womens-empowerment',
    summary: {
      en: 'Vocational training, economic independence, and advocacy programs for women.',
      ar: 'التدريب المهني، الاستقلال الاقتصادي، وبرامج الدعم والتمكين للنساء.',
    },
    image: '/images/women.jpg',
    badge: {
      en: 'Empowerment',
      ar: 'التمكين',
    },
  },
  {
    title: {
      en: 'Mental Health & Family Support',
      ar: 'الصحة النفسية ودعم الأسرة',
    },
    slug: 'mental-health-family-support',
    summary: {
      en: 'Psychosocial support, counseling, and wellness workshops for families.',
      ar: 'الدعم النفسي والاجتماعي، الاستشارات، وورش عمل العافية للعائلات.',
    },
    image: '/images/mental-health.jpg',
    badge: {
      en: 'Wellness',
      ar: 'العافية',
    },
  },
  {
    title: {
      en: 'Child Preventive Health Program',
      ar: 'برنامج صحة الطفل الوقائية',
    },
    slug: 'child-preventive-health-program',
    summary: {
      en: 'Healthcare checkups, nutrition support, and preventative care for children.',
      ar: 'الفحوصات الطبية، دعم التغذية، والرعاية الوقائية للأطفال.',
    },
    image: '/images/child-health.jpg',
    badge: {
      en: 'Healthcare',
      ar: 'الرعاية الصحية',
    },
  },
];