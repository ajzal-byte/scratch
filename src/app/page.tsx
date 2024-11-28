import { Search } from "lucide-react";
import { componentCategroies, featureCards } from "@/lib/data";
import { Lacquer, Bricolage_Grotesque } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scratch",
  description:
    "A growing library of beautiful and responsive React/Next.js components. Simply find a component you like, copy the code, and paste it into your project.",
};

const lacquer = Lacquer({ weight: ["400"], subsets: ["latin"] });
const bricolageGrotesque = Bricolage_Grotesque({ weight: ["400", "700"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdf4f8] dark:bg-neutral-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-white rounded-full blur-xl opacity-50" />
      <div className="absolute top-40 right-40 w-16 h-16 bg-white rounded-full blur-xl opacity-50" />
      <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-white rounded-full blur-xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-center mb-16">
          {/* <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-4xl">
              uncover <span className="font-bold">2.0</span>
            </span>
            <Image
              src="https://framerusercontent.com/images/KK2UtPCTqDRXrAalKbwAgOWoiZM.svg"
              alt="logo"
              height={23}
              width={23}
            />
          </div> */}

          <div
            className={`${lacquer.className} text-neutral-600 dark:text-neutral-400 mb-4`}
          >
            👋 Hello, fellow developer!
          </div>

          <h1 className={`${bricolageGrotesque.className} text-5xl sm:text-7xl font-bold text-neutral-900 dark:text-white mb-6 max-w-4xl mx-auto leading-tight`}>
            Don't start from blank components ever again
          </h1>

          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
            A growing library of beautiful and responsive React/Next.js
            components. Simply find a component you like, copy the code, and
            paste it into your project.
          </p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search components (spoiler alert: it doesn't work)"
                className="w-full px-6 py-4 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-neutral-900 dark:bg-orange-500 text-white rounded-lg">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Component categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {componentCategroies.map((item, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm flex items-center gap-2 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 opacity-0 transition-opacity duration-300 group-hover:opacity-20 rounded-full"></span>
                <span className="absolute -inset-1 rounded-full border border-transparent group-hover:border-orange-400 dark:group-hover:border-orange-500 transition-all duration-300"></span>
                {item.icon}
                <span className="relative">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Feature cards */}
          <div className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg hover:shadow-[0_4px_10px_rgba(255,255,255,0.05)] transition-shadow"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-2 text-neutral-900 dark:text-neutral-100">
                  {item.title}
                </h3>
                <p className="text-center text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

{
  /* Preview cards */
}
{
  /* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-6 text-left">
              <h3 className="text-lg font-semibold mb-2">Headers</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Beautiful and responsive header components for your website.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-6 text-left">
              <h3 className="text-lg font-semibold mb-2">Hero Sections</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Eye-catching hero sections to grab your visitors' attention.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-6 text-left">
              <h3 className="text-lg font-semibold mb-2">Forms</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                User-friendly form components with validation and styling.
              </p>
            </div>
          </div> */
}
