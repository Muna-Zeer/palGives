import Image from 'next/image';

export default function HomePage() {
    const partnerLogos: partner[] = [
        { id: 0, alt: "Al Bustan Association Silwan", src: "/images/partners/salwan.jpg" },
        { id: 1, alt: "The Hope Flowers School", src: "/images/partners/The_hope_flowers_school.jpg" }, // Added leading '/'
        { id: 2, alt: "Al-Quds University", src: "/images/partners/AlQuds.png" },
        { id: 3, alt: "Partner Logo", src: "/images/partners/partner-logo.png" },
        { id: 4, alt: "Palestine Ahliya University", src: "/images/partners/PAU_logo.png" },
        { id: 5, alt: "Bethlehem Mosaic Center", src: "/images/partners/Mosiac_Center.jpg" },
        { id: 6, alt: "Ministry of Culture", src: "/images/partners/Ministry_of_culture.jpg" },
        { id: 7, alt: "Top Clinic", src: "/images/partners/Top_Clinic.jpg" },
        { id: 8, alt: "An-Najah National University", src: "/images/partners/Najah.png" },
        { id: 9, alt: "Camp Sons Charitable Society", src: "/images/partners/Camp_Sons_Charity_Society.jpg" },
    ];

    return (
        <div className="w-full min-h-screen bg-white text-gray-800">

            {/* 1. Hero Section */}
            <section className="relative w-full h-[70vh] min-h-[450px] flex flex-col justify-center items-center text-center bg-stone-100 bg-cover bg-center px-4" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
                <h1 className="text-4xl md:text-6xl font-black tracking-widest uppercase text-gray-900">
                    PALGIVES
                </h1>
                <div className="w-32 md:w-56 h-1 bg-yellow-400 my-4 rounded-full"></div>
                <button className="mt-4 px-8 py-2.5 border-2 border-gray-900 text-gray-900 font-semibold uppercase tracking-wider text-xs md:text-sm hover:bg-gray-900 hover:text-white transition-all duration-200 shadow-sm">
                    Donate now
                </button>
            </section>

            {/* 2. About Us */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">About Us</h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    PalGives is a non-profit youth organization that seeks to empower young people in various fields by promoting effective leadership,
                    building capacity, and implementing meaningful community initiatives, with the aim of preparing a conscious young generation
                    capable of bringing about positive change in their communities.
                </p>
            </section>

            {/* 3. Vision & Mission (Yellow Banner) */}
            <section className="w-full bg-yellow-400 py-16 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
                    <div className="space-y-6 text-gray-900">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Vision</h3>
                            <p className="text-sm md:text-base leading-relaxed">
                                Empowered youth leaders contributing to building just and sustainable societies.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Mission</h3>
                            <p className="text-sm md:text-base leading-relaxed">
                                Empowering young people through training, informal education, community initiatives, and volunteer work to strengthen their role in social, economic, and political development.
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden shadow-md">
                        <Image
                            src="/images/vision-mission.jpg"
                            alt="Vision and Mission workshop"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* 4. Strategic Objectives */}
            <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
                <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Strategic Objectives</h3>
                    <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-2.5">
                        <li>Developing leadership skills among young people</li>
                        <li>Promoting community participation and volunteer work</li>
                        <li>Supporting youth initiatives and social innovation</li>
                        <li>Promoting the rights of marginalized groups</li>
                        <li>Building local and international partnerships</li>
                    </ul>
                </div>
                <div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden shadow-md">
                    <Image
                        src="/images/strategic-objectives.jpg"
                        alt="Strategic Objectives event"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>

            {/* 5. Core Values (Yellow Banner) */}
            <section className="w-full bg-yellow-400 py-16 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Core Values</h3>
                        <ul className="list-disc list-inside text-sm md:text-base text-gray-900 space-y-2 font-medium">
                            <li>Participation</li>
                            <li>Social Justice</li>
                            <li>Youth Leadership</li>
                            <li>Transparency</li>
                            <li>Creativity and Innovation</li>
                            <li>Social Responsibility</li>
                        </ul>
                    </div>
                    <div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden shadow-md">
                        <Image
                            src="/images/core-values.jpg"
                            alt="Core Values activity"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* 6. Donate Section */}
            <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
                <div>
                    <h3 className="text-xl font-bold uppercase mb-3 text-gray-900">DONATE</h3>
                    <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                        With your support, we can empower more young people, implement leadership programs, and promote community initiatives. Every donation, no matter how small, makes a real difference.
                    </p>
                    <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-xs uppercase tracking-wider rounded shadow transition-all">
                        Donate now
                    </button>
                </div>
                <div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden shadow-md">
                    <Image
                        src="/images/donate-section.jpg"
                        alt="Community Support"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>

            {/* 7. Professional Partners Section */}
            <section className="w-full bg-gray-50 py-16 px-6 border-t border-gray-200">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-lg font-extrabold uppercase tracking-widest text-center mb-10 text-gray-900">
                        OUR PARTNERS
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
                        {partnerLogos.map((partner) => (
                            <div
                                key={partner.id}
                                className="relative w-full h-32 p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                            >
                                <Image
                                    src={partner.src}
                                    alt={partner.alt}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                                    className="object-contain p-4 filter  hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}