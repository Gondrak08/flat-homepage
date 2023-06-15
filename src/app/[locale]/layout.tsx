// 'use client'
import Header from '@/components/Header';
//translations page
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
//
import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flat-co',
  description: 'created by @VitorAlecrim',
  openGraph: {
    title: 'Flat-co',
    description: 'Vitor Alecrim personal Website',
    url: 'https://flat-co.netlify.app/',
    siteName: 'Flat-co',
    images: [
      {
        url: '../logo.gif',
        width: 800,
        height: 600,
      },
    ],

  },
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }];
};


export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode,
  params: any
}) {

  let translations;
  try {
    translations = (await import(`../../translations/${locale}.json`)).default
  } catch (err) {
    notFound()
  }

  var headerLoaded = false

  return (
    <html lang={locale}>
      <body className={`${inter.className},${!headerLoaded ? 'invisible' : 'visible'}`}>
        <NextIntlClientProvider locale={locale} messages={translations} >
          <Header onLoaded={headerLoaded} />
          {children}
        </NextIntlClientProvider>
        <footer className="w-full h-full px-2 py-5 flex 
        justify-center items-center text-gray-500" >
          © 2023 Vitor Alecrim. All Rights Reserved.
        </footer>
      </body>
    </html>
  )
}
