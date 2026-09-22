'use client';

import Image from 'next/image';
import T from '../../components/T';

export default function YouthDevelopment() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

            {/* 1. HERO SECTION */}
            <section className="bg-white border-b border-slate-200 py-20 px-6 sm:px-12">
                <div className="max-w-5xl mx-auto text-center space-y-4">
                    <span className="inline-block px-3 py-1 bg-[#F3D03E] text-slate-900 text-xs font-extrabold tracking-widest uppercase rounded">
                        <T>Impact Program</T>
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                        <T>Youth Development & Entrepreneurship</T>
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        <T>Empowering Palestine&apos;s youth with essential business skills, leadership training, mentorship, and career-building networks to shape a sustainable future.</T>
                    </p>
                </div>
            </section>

            {/* 2. ABOUT THE PROGRAM */}
            <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        <T>Overview</T>
                    </h2>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                        <T>ABOUT THE PROGRAM</T>
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                        <T>At</T> <strong className="text-slate-900 notranslate" translate="no">PalGives</strong>, <T>we believe that youth are the driving force of sustainable development and social transformation. Our Youth Development & Entrepreneurship Program is designed to equip young people with the skills, confidence, and opportunities they need to become economically independent and socially responsible leaders.</T>
                    </p>
                    <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                        <T>Through structured training, mentorship, and practical engagement, we support youth in transforming their potential into tangible impact within their communities.</T>
                    </p>
                </div>
            </section>

            {/* 3. THE CHALLENGE (YELLOW BANNER) */}
            <section className="bg-[#F3D03E] py-20 sm:py-28 px-6 sm:px-12 text-slate-900">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                        <Image
                            src="/images/programs/youth11.jpg" 
                            alt="Youth workshop"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="space-y-6">
                        <span className="text-xs font-bold tracking-widest uppercase text-slate-800">
                            <T>The Context</T>
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black">
                            <T>THE CHALLENGE</T>
                        </h2>
                        <p className="leading-relaxed font-medium text-slate-800">
                            <T>Young people in Palestine face significant challenges, including high unemployment rates, limited access to economic opportunities, and restricted exposure to entrepreneurial ecosystems. Many lack access to structured mentorship, professional networks, and startup support systems.</T>
                        </p>
                        <p className="leading-relaxed font-medium text-slate-800">
                            <span className="notranslate" translate="no">PalGives</span> <T>addresses these gaps through an integrated, youth-centered development model built for tangible long-term impact.</T>
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
                                <T>Strategy</T>
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                                <T>OUR APPROACH</T>
                            </h2>
                            <p className="text-slate-600 mt-2">
                                <T>Our program combines practical learning with real-world application:</T>
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="p-5 bg-slate-50 border-l-4 border-[#F3D03E] rounded-r-lg shadow-sm">
                                <h3 className="font-bold text-slate-900 text-base">
                                    <T>1. Leadership & Life Skills Development</T>
                                </h3>
                                <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
                                    <li><T>Communication and public speaking</T></li>
                                    <li><T>Critical thinking and problem-solving</T></li>
                                    <li><T>Teamwork and collaboration</T></li>
                                    <li><T>Self-confidence and personal development</T></li>
                                </ul>
                            </div>

                            <div className="p-5 bg-slate-50 border-l-4 border-[#F3D03E] rounded-r-lg shadow-sm">
                                <h3 className="font-bold text-slate-900 text-base">
                                    <T>2. Entrepreneurship & Innovation</T>
                                </h3>
                                <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
                                    <li><T>Business model generation & market testing</T></li>
                                    <li><T>Financial literacy and budgeting</T></li>
                                    <li><T>Pitching and fundraising fundamentals</T></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 order-1 md:order-2">
                        <Image
                            src="/images/programs/youth20.jpg" 
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
                            src="/images/programs/youth18.jpg" 
                            alt="Classroom interactive workshop"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="p-5 bg-white border-l-4 border-[#F3D03E] rounded-r-lg shadow-sm">
                            <h3 className="font-bold text-slate-900 text-base">
                                <T>3. Digital & Employability Skills</T>
                            </h3>
                            <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
                                <li><T>Digital literacy and online tools</T></li>
                                <li><T>CV writing and interview preparation</T></li>
                                <li><T>Freelancing and remote work readiness</T></li>
                            </ul>
                        </div>

                        <div className="p-5 bg-white border-l-4 border-[#F3D03E] rounded-r-lg shadow-sm">
                            <h3 className="font-bold text-slate-900 text-base">
                                <T>4. Mentorship & Startup Support</T>
                            </h3>
                            <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
                                <li><T>Individual coaching sessions</T></li>
                                <li><T>Expert-led workshops</T></li>
                                <li><T>Networking opportunities</T></li>
                                <li><T>Support for youth-led initiatives</T></li>
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
                                src="/images/programs/youth6.jpg"
                                alt="Group table discussion"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                                <T>EXPECTED OUTCOMES</T>
                            </h2>
                            <p className="text-base font-bold text-slate-800">
                                <T>Through this program,</T> <span className="notranslate" translate="no">PalGives</span> <T>aims to:</T>
                            </p>
                            <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                                <li><T>Increase youth employability and job readiness</T></li>
                                <li><T>Support the creation of youth-led micro and small enterprises</T></li>
                                <li><T>Strengthen leadership and civic engagement skills</T></li>
                                <li><T>Foster economic resilience among vulnerable youth</T></li>
                                <li><T>Build a sustainable network of young changemakers</T></li>
                            </ul>
                        </div>
                    </div>

                    {/* Impact Vision Block (Separated with major top padding & margin) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center pt-20 sm:pt-28 border-t border-slate-900/20">
                        <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white order-2 md:order-1">
                            <Image
                                src="/images/programs/youth5.jpg"
                                alt="Presentation and lecture hall"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-6 order-1 md:order-2">
                            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                                <T>IMPACT VISION</T>
                            </h2>
                            <p className="text-base font-bold text-slate-800">
                                <T>By investing in youth capacity and entrepreneurship,</T> <span className="notranslate" translate="no">PalGives</span> <T>contributes to:</T>
                            </p>
                            <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                                <li><T>Reducing youth unemployment</T></li>
                                <li><T>Strengthening local economic participation</T></li>
                                <li><T>Promoting innovation and self-reliance</T></li>
                                <li><T>Advancing inclusive and sustainable community development</T></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* 7. CALL TO ACTION */}
            <section className="py-20 sm:py-24 px-6 bg-slate-900 text-white text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-black">
                        <T>Support Palestine&apos;s Next Generation of Leaders</T>
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base">
                        <T>Your support provides direct funding for training programs, seed grants, and mentorship for young entrepreneurs.</T>
                    </p>
                    <div className="pt-2">
                        <a
                            href="/donate"
                            className="inline-block px-8 py-3.5 bg-[#F3D03E] text-slate-900 font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber-400 transition-colors shadow-md cursor-pointer"
                        >
                            <T>Support This Program</T>
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}