'use client';
import { useState } from "react";
import { DefaultSeo } from "next-seo";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Wave from '@/components/Wave';
import About from "@/components/About";
import SocialContent from "@/components/SocialContent";
import Projects from "@/components/Projects";


export default function Home() {
  const [waveLoad, setWaveLoad] = useState<Boolean>(false);

  return (
    <main className={`flex min-h-screen  relative flex-col items-center justify-between 
      ${!waveLoad ? 'invisible' : 'visible'}
    `}>
      <DefaultSeo
        title="Flat-CO"
        description="Vitor Alecrim personal website"
        openGraph={{
          images: [
            {
              url: 'https://www.test.ie/images/cover.jpg',
              width: 850,
              height: 650,
              alt: 'Photo of text',
            }
          ],
          site_name: 'flat-co'
        }}
      />
      <header className="w-full h-fit  relative">
        <Navbar />
        <Hero />
        <div className="wave-display w-full absolute  bottom-0 " >
          <Wave onWaveLoaded={() => setWaveLoad(true)} />
        </div>
      </header>
      <section className=" container mx-auto  h-full relative z-50 ">

        <About />
        <SocialContent />
        <Projects />

      </section>
      <footer className="w-full h-full px-2 py-5 flex justify-center items-center text-gray-500" >
        © 2023 Vitor Alecrim. All Rights Reserved.
      </footer>

    </main>
  )
};

