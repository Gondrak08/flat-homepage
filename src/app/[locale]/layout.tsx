// 'use client'
//translations page
import { NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
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

export function generateStaticParams(){
  return [{locale:'en'}, {locale:'pt'}];
};


export default async function RootLayout({
  children,
  params:{locale}
}: {
  children: React.ReactNode,
  params:any
}) {

  let translations;
  try{
    translations = (await import(`../../translations/${locale}.json`)).default
  } catch(err){
    notFound()
  }
 
  return (
    <html lang={locale}>
       
      <body className={inter.className}>
        
        <NextIntlClientProvider locale={locale}  messages={translations} >
          {children}
        </NextIntlClientProvider>
        </body>
    </html>
  )
}
