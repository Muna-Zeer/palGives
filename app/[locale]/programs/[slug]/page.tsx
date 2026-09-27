import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import YouthDevelopment from "@/app/[locale]/programs/YouthDevelopment";
import EducationProgram from "@/app/[locale]/programs/EducationProgram";
import WomensEmpowerment from "@/app/[locale]/programs/WomensEmpowerment";
import MentalHealthFamilySupport from "@/app/[locale]/programs/MentalHealthFamilySupport";
import ChildPreventiveHealthProgram from "@/app/[locale]/programs/ChildPreventiveHealthProgram";
const programComponents: Record<string, ComponentType> = {
  "youth-development-entrepreneurship": YouthDevelopment,
  "education-program": EducationProgram,
  "womens-empowerment": WomensEmpowerment,
  "mental-health-family-support":MentalHealthFamilySupport,
  "child-preventive-health-program":ChildPreventiveHealthProgram,
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