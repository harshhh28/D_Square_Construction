import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProvider } from "@/components/scroll-context";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css"; // Make sure this line is here and at the top
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DSquare Construction | Professional Construction Services",
  description:
    "DSquare Construction offers professional construction services including residential, commercial, and industrial projects with a focus on quality and client satisfaction.",
  keywords:
    "construction, building, renovation, commercial construction, residential construction, contractors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <ScrollProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
