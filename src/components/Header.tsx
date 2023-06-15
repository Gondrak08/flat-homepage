'use client';

import {useState, useEffect} from 'react';
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Wave from '@/components/Wave';

export const Header =({onLoaded}:{onLoaded:Boolean})=>{
    const [waveLoad, setWaveLoad] = useState<Boolean>(false);
    
    useEffect(()=>{
        if(waveLoad) onLoaded = true;
    },[waveLoad])       
    
    return(
        <header className="w-full h-fit  relative">
        <Navbar />
        <Hero />
        <div className="wave-display w-full absolute  bottom-0 " >
          <Wave onWaveLoaded={() => setWaveLoad(true)} />
        </div>
      </header>

    )
};

export default Header;