import { components } from "@/lib/data";
import ComponentTab from "./_components/ComponentTab";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components",
  description:
    "Browse our collection of beautiful and responsive components. Copy and paste into your projects.",
};

export default function ComponentsPage() {
  return (
    <main className="min-h-screen bg-[#fdf4f8] dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Components
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Browse our collection of beautiful and responsive components. Copy
            and paste into your projects.
          </p>
        </div>

        <div className="grid gap-8">
          {components.map((comp) => (
            <ComponentTab comp={comp} key={comp.name} />
          ))}
        </div>
      </div>
    </main>
  );
}
