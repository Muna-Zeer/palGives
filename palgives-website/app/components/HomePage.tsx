'use client';

import Image from 'next/image';
import T from '../components/T';

interface Partner {
    id: number;
    alt: string;
    src: string;
}

export default function HomePage() {
    const partnerLogos: Partner[] = [
        { id: 0, alt: "Al Bustan Association Silwan", src: "/images/partners/salwan.jpg" },
        { id: 1, alt: "The Hope Flowers School", src: "/images/partners/The_hope_flowers_school.jpg" },
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
            <section
                className="relative w-full h-[75vh] min-h-[500px] flex flex-col justify-center items-center text-center bg-stone-900 bg-cover bg-center px-4 overflow-hidden shadow-xl"
                style={{ backgroundImage: "url('/images/palGives_Imgs/home-Img.jpeg')" }}
            >
                {/* Light subtle gradient overlay (NO BLUR) to keep text readable while showing the crisp photo */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Content Wrapper */}
                <div className="relative z-10 max-w-3xl mx-auto space-y-6 px-4">

                    {/* Brand Title */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.25em] uppercase text-white notranslate drop-shadow-md" translate="no">
                        PALGIVES
                    </h1>

                    {/* Subtitle */}
                    <p className="text-stone-100 text-sm sm:text-base md:text-lg font-medium tracking-wide max-w-xl mx-auto drop-shadow">
                        Empowering communities, spreading hope, and driving meaningful change together.
                    </p>

                    {/* Accent Divider */}
                    <div className="w-24 md:w-40 h-1 bg-yellow-400 mx-auto rounded-full shadow-md"></div>

                    {/* CTA Button */}
                    <div className="pt-2">
                        <button className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-stone-900 font-bold uppercase tracking-wider text-xs md:text-sm rounded-full transition-all duration-300 shadow-lg hover:shadow-yellow-400/20 hover:-translate-y-0.5 cursor-pointer">
                            <span className="relative z-10 flex items-center gap-2">
                                <T>Donate Now</T>
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </button>
                    </div>

                </div>
            </section>

            {/* 2. About Us */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    <T>About Us</T>
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    <span className="font-semibold notranslate" translate="no">PalGives</span> <T>is a non-profit youth organization that seeks to empower young people in various fields by promoting effective leadership, building capacity, and implementing meaningful community initiatives, with the aim of preparing a conscious young generation capable of bringing about positive change in their communities.</T>
                </p>
            </section>

            {/* 3. Vision & Mission (Yellow Banner) */}
            <section className="w-full bg-yellow-400 py-16 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
                    <div className="space-y-6 text-gray-900">
                        <div>
                            <h3 className="text-xl font-bold mb-2">
                                <T>Vision</T>
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed">
                                <T>Empowered youth leaders contributing to building just and sustainable societies.</T>
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">
                                <T>Mission</T>
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed">
                                <T>Empowering young people through training, informal education, community initiatives, and volunteer work to strengthen their role in social, economic, and political development.</T>
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden shadow-md">
                        <Image
                            src="/images/programs/youth2.jpg"
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
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                        <T>Strategic Objectives</T>
                    </h3>
                    <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-2.5">
                        <li><T>Developing leadership skills among young people</T></li>
                        <li><T>Promoting community participation and volunteer work</T></li>
                        <li><T>Supporting youth initiatives and social innovation</T></li>
                        <li><T>Promoting the rights of marginalized groups</T></li>
                        <li><T>Building local and international partnerships</T></li>
                    </ul>
                </div>
                <div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden shadow-md">
                    <Image
                        src="/images/programs/youth9.jpg"
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
                        <h3 className="text-xl font-bold mb-4 text-gray-900">
                            <T>Core Values</T>
                        </h3>
                        <ul className="list-disc list-inside text-sm md:text-base text-gray-900 space-y-2 font-medium">
                            <li><T>Participation</T></li>
                            <li><T>Social Justice</T></li>
                            <li><T>Youth Leadership</T></li>
                            <li><T>Transparency</T></li>
                            <li><T>Creativity and Innovation</T></li>
                            <li><T>Social Responsibility</T></li>
                        </ul>
                    </div>
                    <div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden shadow-md">
                        <Image
                            src="/images/programs/youth28.jpg"
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
                    <h3 className="text-xl font-bold uppercase mb-3 text-gray-900">
                        <T>DONATE</T>
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                        <T>With your support, we can empower more young people, implement leadership programs, and promote community initiatives. Every donation, no matter how small, makes a real difference.</T>
                    </p>
                    <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-xs uppercase tracking-wider rounded shadow transition-all cursor-pointer">
                        <T>Donate now</T>
                    </button>
                </div>
                <div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden shadow-md">
                    <Image
                        src="/images/programs/youth27.jpg"
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
                        <T>OUR PARTNERS</T>
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
                                    className="object-contain p-4 filter hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}