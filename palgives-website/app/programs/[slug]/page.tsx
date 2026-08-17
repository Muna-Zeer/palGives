import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import YouthDevelopment from "@/app/programs/YouthDevelopment";
const programComponents: Record<string, ComponentType> = {
  "youth-development-entrepreneurship": YouthDevelopment,
};

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ProgramSelect = programComponents[slug];

  if (!ProgramSelect) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <ProgramSelect />
    </main>
  );
}