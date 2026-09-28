import { notFound } from 'next/navigation';
// تعديل المسار ليصبح نسبياً وصحيحاً من داخل مجلد slugs
import { programs } from '../data/programs';
import ProgramDetailsCard from '../components/ProgramDetailsCard';

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.id === slug);

  if (!program) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <ProgramDetailsCard program={program} />
    </main>
  );
}