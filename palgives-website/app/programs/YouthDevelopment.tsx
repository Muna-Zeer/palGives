'use client';

import Image from 'next/image';

export default function YouthDevelopment() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

            {/* 1. HERO SECTION */}
            <section className="bg-white border-b border-slate-200 py-20 px-6 sm:px-12">
                <div className="max-w-5xl mx-auto text-center space-y-4">
                    <span className="inline-block px-3 py-1 bg-[#F3D03E] text-slate-900 text-xs font-extrabold tracking-widest uppercase rounded">
                        Impact Program
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                        Youth Development & Entrepreneurship
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Empowering Palestine&apos;s youth with essential business skills, leadership training, mentorship, and career-building networks to shape a sustainable future.
                    </p>
                </div>
            </section>

            {/* 2. ABOUT THE PROGRAM */}
            <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        Overview
                    </h2>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                        ABOUT THE PROGRAM
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                        At PalGives, we believe that youth are the driving force of sustainable development and social transformation. Our Youth Development & Entrepreneurship Program is designed to equip young people with the skills, confidence, and opportunities they need to become economically independent and socially responsible leaders.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                        Through structured training, mentorship, and practical engagement, we support youth in transforming their potential into tangible impact within their communities.
                    </p>
                </div>
            </section>

            {/* 3. THE CHALLENGE (YELLOW BANNER) */}
            <section className="bg-[#F3D03E] py-20 sm:py-28 px-6 sm:px-12 text-slate-900">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                        <Image
                            src="/images/youth-1.jpg" // Update with your actual image path
                            alt="Youth workshop"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="space-y-6">
                        <span className="text-xs font-bold tracking-widest uppercase text-slate-800">
                            The Context
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black">
                            THE CHALLENGE
                        </h2>
                        <p className="leading-relaxed font-medium text-slate-800">
                            Young people in Palestine face significant challenges, including high unemployment rates, limited access to economic opportunities, and restricted exposure to entrepreneurial ecosystems. Many lack access to structured mentorship, professional networks, and startup support systems.
                        </p>
                        <p className="leading-relaxed font-medium text-slate-800">
                            PalGives addresses these gaps through an integrated, youth-centered development model built for tangible long-term impact.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. OUR APPROACH (PILLARS 1 & 2) */}
            <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 order-2 md:order-1">
                        <div>
                            <span className="text-xs font-bold tracking-widest uppercase text-amber-600">
                                Strategy
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                                OUR APPROACH
                            </h2>
                            <p className="text-slate-600 mt-2">
                                Our program combines practical learning with real-world application:
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="p-5 bg-slate-50 border-l-4 border-[#F3D03E] rounded-r-lg shadow-sm">
                                <h3 className="font-bold text-slate-900 text-base">
                                    1. Leadership & Life Skills Development
                                </h3>
                                <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
                                    <li>Communication and public speaking</li>
                                    <li>Critical thinking and problem-solving</li>
                                    <li>Teamwork and collaboration</li>
                                    <li>Self-confidence and personal development</li>
                                </ul>
                            </div>

                            <div className="p-5 bg-slate-50 border-l-4 border-[#F3D03E] rounded-r-lg shadow-sm">
                                <h3 className="font-bold text-slate-900 text-base">
                                    2. Entrepreneurship & Innovation
                                </h3>
                                <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
                                    <li>Business model generation & market testing</li>
                                    <li>Financial literacy and budgeting</li>
                                    <li>Pitching and fundraising fundamentals</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 order-1 md:order-2">
                        <Image
                            src="/images/youth-2.jpg" // Update with your actual image path
                            alt="Youth training session"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* 5. OUR APPROACH CONTINUED (PILLARS 3 & 4) */}
            <section className="py-20 sm:py-28 px-6 sm:px-12 bg-slate-100 border-t border-slate-200">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                        <Image
                            src="/images/youth-3.jpg" // Update with your actual image path
                            alt="Classroom interactive workshop"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="p-5 bg-white border-l-4 border-[#F3D03E] rounded-r-lg shadow-sm">
                            <h3 className="font-bold text-slate-900 text-base">
                                3. Digital & Employability Skills
                            </h3>
                            <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
                                <li>Digital literacy and online tools</li>
                                <li>CV writing and interview preparation</li>
                                <li>Freelancing and remote work readiness</li>
                            </ul>
                        </div>

                        <div className="p-5 bg-white border-l-4 border-[#F3D03E] rounded-r-lg shadow-sm">
                            <h3 className="font-bold text-slate-900 text-base">
                                4. Mentorship & Startup Support
                            </h3>
                            <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
                                <li>Individual coaching sessions</li>
                                <li>Expert-led workshops</li>
                                <li>Networking opportunities</li>
                                <li>Support for youth-led initiatives</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. EXPECTED OUTCOMES & IMPACT VISION (YELLOW BANNER WITH EXPANDED SPACING) */}
            <section className="bg-[#F3D03E] py-24 sm:py-32 px-6 sm:px-12 text-slate-900">
                <div className="max-w-5xl mx-auto space-y-24 sm:space-y-32">

                    {/* Expected Outcomes Block */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
                        <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                            <Image
                                src="/images/youth-4.jpg"
                                alt="Group table discussion"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                                EXPECTED OUTCOMES
                            </h2>
                            <p className="text-base font-bold text-slate-800">
                                Through this program, PalGives aims to:
                            </p>
                            <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                                <li>Increase youth employability and job readiness</li>
                                <li>Support the creation of youth-led micro and small enterprises</li>
                                <li>Strengthen leadership and civic engagement skills</li>
                                <li>Foster economic resilience among vulnerable youth</li>
                                <li>Build a sustainable network of young changemakers</li>
                            </ul>
                        </div>
                    </div>

                    {/* Impact Vision Block (Separated with major top padding & margin) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center pt-20 sm:pt-28 border-t border-slate-900/20">
                        <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white order-2 md:order-1">
                            <Image
                                src="/images/youth-5.jpg"
                                alt="Presentation and lecture hall"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-6 order-1 md:order-2">
                            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                                IMPACT VISION
                            </h2>
                            <p className="text-base font-bold text-slate-800">
                                By investing in youth capacity and entrepreneurship, PalGives contributes to:
                            </p>
                            <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                                <li>Reducing youth unemployment</li>
                                <li>Strengthening local economic participation</li>
                                <li>Promoting innovation and self-reliance</li>
                                <li>Advancing inclusive and sustainable community development</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* 7. CALL TO ACTION */}
            <section className="py-20 sm:py-24 px-6 bg-slate-900 text-white text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-black">
                        Support Palestine&apos;s Next Generation of Leaders
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base">
                        Your support provides direct funding for training programs, seed grants, and mentorship for young entrepreneurs.
                    </p>
                    <div className="pt-2">
                        <a
                            href="/donate"
                            className="inline-block px-8 py-3.5 bg-[#F3D03E] text-slate-900 font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber-400 transition-colors shadow-md"
                        >
                            Support This Program
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}