'use client';
import { useGlobalContext } from "@/app/context/store";
import About from "@/components/About";
import SocialContent from "@/components/SocialContent";
import Projects from "@/components/Projects";
export default function Home() {
  const{isheaderLodad} = useGlobalContext()
  return (
    
     <main className={`
     ${isheaderLodad ? "visible" : 'invisible' }
     flex min-h-screen  relative flex-col items-center justify-between 
    `} >
            
      <section className=" container mx-auto  h-full relative z-50 ">
        <About />
        <SocialContent />
        <Projects />
      </section>
    </main>
    
  )
};

