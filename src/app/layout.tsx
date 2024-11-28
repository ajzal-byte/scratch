import "./globals.css";
import { Inter, Bungee_Spice } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const bungeeSpice = Bungee_Spice({ weight:["400"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-neutral-900/70 backdrop-blur-md z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link
                href="/"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                {/* <Image
                  src="https://img.freepik.com/free-psd/claw-mark-illustration_23-2151600217.jpg"
                  alt="logo"
                  height={20}
                  width={30}
                  className="rounded-lg"
                /> */}
                <span className={`${bungeeSpice.className} font-semibold text-lg`}>scratch</span>
              </Link>
              <div className="flex gap-6">
                <Link
                  href="/components"
                  className="px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors text-sm font-medium"
                >
                  Components
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
