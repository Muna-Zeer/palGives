import Image from 'next/image';
export default function TeamPage() {
   const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Bisan Sarahneh",
    role: "Director of the Medical Committee",
    description: "Director of the Medical Committee at PalGives, overseeing all medical and health-related activities, ensuring quality healthcare and support for children, youth, and the local community.",
    image: "/images/teamMembers/Bisan.png"
  },
  {
    id: 2,
    name: "Mr. Khalil Abu Kamel",
    role: "General Director",
    description: "General Director of PalGives, overseeing the organization's management and strategies, and leading the team to implement programs and initiatives that empower children, youth, and women in the Palestinian community.",
    image: "/images/teamMembers/khalil-abu-kamel.png"
  },
  {
    id: 3,
    name: "Ms. Aya Jomaa",
    role: "Northern Area Coordinator",
    description: "Northern Area Coordinator at PalGives, responsible for coordinating activities and initiatives in the northern region, supporting children, youth, and the local community to ensure programs reach all beneficiaries effectively.",
    image: "/images/teamMembers/Aya.png"
  },
  {
    id: 4,
    name: "Mr. Anas Abu Joudeh",
    role: "Executive Director",
    description: "Executive Director of PalGives, leading the organization's daily operations and ensuring effective implementation of programs and initiatives to fulfill the organization's mission of empowering children, youth, and women in the Palestinian community.",
    image: "/images/teamMembers/Anas.png"
  },
  {
    id: 5,
    name: "Dr. Ammar Al-Wahidi",
    role: "Training & Supervision Volunteer",
    description: "A volunteer at PalGives specializing in training and team supervision, contributing his expertise to develop the skills of children and youth and support teams implementing projects.",
    image: "/images/teamMembers/Ammar.png"
  },
  {
    id: 6,
    name: "Dr. Halima Malash",
    role: "Medical Committee Volunteer",
    description: "Is a volunteer with the Medical Committee at PalGives, providing healthcare guidance and raising health awareness among children, youth, and the community.",
    image: "/images/teamMembers/Halimah.png"
  },
  {
    id: 7,
    name: "Mr. Khalil Radwan",
    role: "Community Committee Volunteer",
    description: "An ambitious young Jerusalemite, volunteering with the Community Committee at PalGives. He contributes his energy and skills to support community projects and empower youth and children locally.",
    image: "/images/teamMembers/khalil.png"
  },
  {
    id: 8,
    name: "Ms. Duha Ibrahim",
    role: "Director of Media and Communications",
    description: "Director of the Media and Communications Unit at PalGives, overseeing all media activities, coverage, and communication to highlight the organization's programs and initiatives.",
    image: "/images/teamMembers/Duha.png"
  },
  {
    id: 9,
    name: "Mr. Baher Obeidieh",
    role: "Program Director",
    description: "Program Director at PalGives, overseeing the design and implementation of programs and initiatives that empower children and youth and enhance their role in the community.",
    image: "/images/teamMembers/baher.png"
  }
];
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      
      {/* Hero Header */}
      <section className="relative w-full h-[50vh] min-h-[350px] flex flex-col justify-center items-center text-center bg-slate-200 bg-cover bg-center px-4" style={{ backgroundImage: "url('/images/team-hero.jpg')" }}>
        <div className="absolute inset-0 bg-gray/50" /> 
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-widest uppercase text-black">
            OUR TEAM
          </h1>
          <div className="w-32 md:w-56 h-1 bg-yellow-400 my-4 mx-auto rounded-full" />
        </div>
      </section>

      {/* Intro Banner */}
      <section className="w-full bg-yellow-400 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4 text-gray-900 font-medium text-sm md:text-base leading-relaxed">
          <p>
            Our team at <span className="italic font-semibold">PalGives</span> is made up of passionate and committed individuals dedicated to empowering children, youth, and women in Palestine.
          </p>
          <p>
            We welcome team members who are curious, empathetic, and driven by integrity, with a genuine desire to make a positive impact in the community every single day. At <span className="italic font-semibold">PalGives</span>, we strive to be humble, hardworking, and—above all—collaborative, working together to create opportunities and meaningful change.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col group">
              
              {/* Image Frame */}
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-md shadow-sm bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title & Name */}
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {member.name}
              </h3>

              {/* Bio / Description */}
              <p className="text-xs text-gray-600 leading-relaxed">
                {member.description}
              </p>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}