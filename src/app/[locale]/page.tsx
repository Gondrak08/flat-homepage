'use client';
import { useGlobalContext } from "@/app/context/store";
import About from "@/components/About";
import SocialContent from "@/components/SocialContent";
import Projects from "@/components/Projects";


export default function Home() {
  const{isheaderLodad} = useGlobalContext()
  return (
             
      <section className={`${isheaderLodad ? "visible" : 'invisible'}
        container mx-auto  h-full relative z-50`} >
        <About />
        <SocialContent />
        <Projects />
      </section>
       
  )
};

