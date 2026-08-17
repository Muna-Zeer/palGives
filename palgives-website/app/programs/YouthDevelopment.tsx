'use client';
export default function YouthDevelopment() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-slate-900">Youth Development & Entrepreneurship</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-2">About the Program</h2>
        <p className="text-slate-600 leading-relaxed">
          At PalGives, we believe that youth are the driving force...
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">The Challenge</h2>
        <p className="text-slate-600">Young people in Palestine face significant challenges...</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-4 rounded-lg border">
            <h3 className="font-bold mb-2">1. Leadership & Life Skills</h3>
            <ul className="list-disc pl-5 text-sm space-y-1 text-slate-600">
              <li>Communication and public speaking</li>
              <li>Critical thinking and problem-solving</li>
              <li>Teamwork and collaboration</li>
            </ul>
          </div>
          {/* Add remaining approach blocks */}
        </div>
      </section>
      
      {/* Add Outcomes, Impact Vision, etc. */}
    </div>
  );
}