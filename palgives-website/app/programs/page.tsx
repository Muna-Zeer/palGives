import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import YouthDevelopment from "@/app/programs/YouthDevelopment";

const availablePrograms = [
  { slug: "youth-development-entrepreneurship", title: "Youth Development & Entrepreneurship" },
  { slug: "education-program", title: "Education Program" },
  { slug: "womens-empowerment", title: "Women Empowerment" },
  { slug: "mental-health-family-support", title: "Mental Health & Family Support" },
  { slug: "child-preventive-health-program", title: "Child Preventive Health Program" },
];

const programComponents: Record<string, ComponentType> = {
  "youth-development-entrepreneurship": YouthDevelopment,

};

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const SelectedProgram = programComponents[slug];

  if (!SelectedProgram) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <SelectedProgram />
    </main>
  );
}