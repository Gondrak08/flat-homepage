// 'RootLayout'
// context
import { GlobalContextProvider } from "../context/store";
//translations page
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
// plugings
// GoogleAnalytics.
import GoogleAnalytics from "@/components/GoogleAnalytics";
//
import "../globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vitor Alecrim Homepage",
  description: "created by @VitorAlecrim",
  openGraph: {
    title: "Vitor Alecrim Homepage",
    description: "Vitor Alecrim personal Website",
    url: "https://craftz-vitor.netlify.app/",
    siteName: "Vitor Alecrim Homepage",
    images: [
      {
        url: "../logo.gif",
        width: 800,
        height: 600,
      },
    ],
  },
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  let translations;
  try {
    translations = (await import(`../../translations/${locale}.json`)).default;
  } catch (err) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${inter.className}`}>
        <NextIntlClientProvider locale={locale} messages={translations}>
          <GlobalContextProvider>
            <Header />
            <main
              className={`flex min-h-screen  relative flex-col
             items-center justify-between `}
            >
              {children}
              <GoogleAnalytics GA_MEASUREMENT_ID="G-6G0KDKJTWW " />
            </main>
          </GlobalContextProvider>
        </NextIntlClientProvider>
        <footer
          className="w-full h-full px-2 py-5 flex 
        justify-center items-center text-gray-500"
        >
          © 2023 Vitor Alecrim. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
