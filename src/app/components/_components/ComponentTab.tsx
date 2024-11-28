"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";

const ComponentTab = ({ comp }: { comp: ComponentData }) => {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>(
    {}
  );

  const copyToClipboard = async (code: string, componentName: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedStates({ ...copiedStates, [componentName]: true });
    setTimeout(() => {
      setCopiedStates({ ...copiedStates, [componentName]: false });
    }, 2000);
  };
  return (
    <div
      key={comp.name}
      className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden border border-neutral-200/50 dark:border-neutral-700/50"
    >
      <div className="p-6 border-b border-neutral-200/50 dark:border-neutral-700/50">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
          {comp.name}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          {comp.description}
        </p>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <div className="px-6 border-b border-neutral-200/50 dark:border-neutral-700/50">
          <TabsList className="bg-transparent border-b-0">
            <TabsTrigger
              value="preview"
              className="data-[state=active]:bg-neutral-100 dark:data-[state=active]:bg-neutral-700"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="data-[state=active]:bg-neutral-100 dark:data-[state=active]:bg-neutral-700"
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent
          value="preview"
          className="p-8 flex justify-center items-center bg-neutral-50 dark:bg-neutral-900/50"
        >
          {comp.component}
        </TabsContent>

        <TabsContent value="code" className="relative">
          <button
            onClick={() => copyToClipboard(comp.code, comp.name)}
            className="absolute right-4 top-4 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
          >
            {copiedStates[comp.name] ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <Copy className="w-5 h-5 group-hover:text-orange-500 transition-colors" />
            )}
          </button>
          <Highlight
            theme={themes.gruvboxMaterialDark}
            code={comp.code}
            language="tsx"
          >
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre className="p-6 overflow-x-auto" style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComponentTab;
