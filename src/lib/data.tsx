import { Code2, Copy, Layout, MousePointerClick, Sparkles } from "lucide-react";

export const componentCategroies = [
  { icon: <Layout className="w-4 h-4" />, label: "Layout" },
  {
    icon: <MousePointerClick className="w-4 h-4" />,
    label: "Interactive",
  },
  { icon: <Sparkles className="w-4 h-4" />, label: "Animation" },
];

export const featureCards = [
  {
    icon: <Code2 className="w-8 h-8 text-orange-500" />,
    title: "Modern & Clean",
    description:
      "Carefully crafted components following modern design principles.",
  },
  {
    icon: <Copy className="w-8 h-8 text-orange-500" />,
    title: "Copy & Paste",
    description:
      "Simply copy the code and paste it into your project. No installation needed.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-orange-500" />,
    title: "Production Ready",
    description: "Built with TypeScript and fully tested for production use.",
  },
];

// Example components
const DummyButton = () => (
  <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
    Click me
  </button>
);

const DummyCard = () => (
  <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg hover:shadow-[0_4px_10px_rgba(255,255,255,0.05)] transition-all duration-300">
    <div className="flex justify-center mb-4">
      <Sparkles className="w-8 h-8 text-orange-500" />
    </div>
    <h3 className="text-xl font-semibold text-center mb-3 text-neutral-900 dark:text-neutral-100">
      Feature Card
    </h3>
    <p className="text-center text-neutral-600 dark:text-neutral-400">
      A beautiful and responsive card component with hover effects and gradient
      accents.
    </p>
  </div>
);

export const components = [
  {
    name: "Gradient Button",
    description: "A beautiful gradient button with hover effects",
    component: DummyButton,
    code: `const Button = () => (
  <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
    Click me
  </button>
);`,
  },
  {
    name: "Feature Card",
    description: "Elegant card component with icon and hover effects",
    component: DummyCard,
    code: `import { Sparkles } from "lucide-react";
    const Card = () => (
  <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg hover:shadow-[0_4px_10px_rgba(255,255,255,0.05)] transition-all duration-300">
    <div className="flex justify-center mb-4">
      <Sparkles className="w-8 h-8 text-orange-500" />
    </div>
    <h3 className="text-xl font-semibold text-center mb-3 text-neutral-900 dark:text-neutral-100">
      Feature Card
    </h3>
    <p className="text-center text-neutral-600 dark:text-neutral-400">
      A beautiful and responsive card component with hover effects and gradient accents.
    </p>
  </div>
);`,
  },
];
