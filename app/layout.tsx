import "./globals.css";
import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils";
import localFont from 'next/font/local'
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/providers/theme-provider";

export const NotoSans = localFont({
  src: '../public/fonts/NotoSans.woff2',
  variable: '--font-sans',
})
export const Oswald = localFont({
  src: '../public/fonts/Oswald.woff2',
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: "Цифровое агентство полного цикла Rovno.dev",
  description: "Digital-агентство полного цикла Rovno.dev - дизайн, LLM, сайты, приложения, логотипы и айдентика, 3D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(NotoSans.className, "font-sans")}
      suppressHydrationWarning
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'system';
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (theme === 'system' && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>
          <TooltipProvider>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html >
  );
}
