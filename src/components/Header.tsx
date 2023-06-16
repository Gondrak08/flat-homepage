'use client';

import { useEffect, useState } from 'react';
import { useGlobalContext } from '@/app/context/store';
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Wave from '@/components/Wave';

export const Header = () => {
  const { isheaderLodad, setIsHeaderLoaded } = useGlobalContext()
  const [waveLoad, setWaveLoad] = useState<Boolean>(false);

  useEffect(() => {
    if (waveLoad) setIsHeaderLoaded(true)
  }, [waveLoad])
  
  return (
    <header className={`
          ${isheaderLodad ? "visible" : 'invisible'} w-full h-fit relative`}
    >
      <Navbar />
      <Hero />
      <div className="wave-display w-full absolute  bottom-0 " >
        <Wave onWaveLoaded={() => setWaveLoad(true)} />
      </div>
    </header>

  )
};

export default Header;