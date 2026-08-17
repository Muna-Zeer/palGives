// import { notFound } from "next/navigation";
// import { programs } from "../data/programs";

// export defualt fuction ProgramPage({params,}{params:Promise<{slug:string}>;}){const {slug} = await params;
// const program = programs.find((p)=>p.slug === slug);

// if(!program){
//     notFound();
// }
// return (
// <div className="max-w-7xl mx-auto px-6 py-12">
//       <div className="mb-8">
//         <ProgramDropdown programs={programsData} currentSlug={slug} />
//       </div>

//       <h1 className="text-4xl font-bold text-slate-900 mb-4">{program.title}</h1>
//       <p className="text-lg text-slate-600">{program.description}</p>
//     </div>
// )
// }