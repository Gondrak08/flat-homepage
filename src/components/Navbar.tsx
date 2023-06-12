import React, { useState, useEffect } from 'react';
import { useTranslations } from "next-intl";
import Logo from './Logo';

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const linkeStyle = 'hover:text-gray-light hover:underline underline-offset-4'
    const t = useTranslations("Navbar")
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    }, []);

    const handleScroll = () => {
        const position: number = window.pageYOffset;
        setScrollPosition(position);
    };

    return (
        <section className={`
            flex 
            justify-center 
            items-center 
            h-20 
            w-full 
            transition-transitionBackground 
            transition-all 
            duration-500 
            z-[100]
            ${scrollPosition === 0 ? 'absolute ' :
                scrollPosition !== 0 && 'shadow-xl bg-background fixed  z-50 '
            }
        `}>
            <nav className='
            flex 
            items-center
            animation
            md:justify-center 
            gap-10
            md:gap-20 
            py-2 
            transition-all 
            duration-500
            
            '
            >
                <div className='w-[5em]  md:w-full md:h-full' >
                    <Logo />
                </div>
                <ul
                    id="nav-links"
                    className="
                    flex 
                    items-center 
                    gap-3
                    md:gap-14  
                    text-white
                    text-md
                    md:text-2xl
                    text-bold
                    
                    "
                >
                    <li>
                        <a href='#about' className={linkeStyle}>{t("about")}</a>
                    </li>
                    <li>
                        <a href='#projects' className={linkeStyle}> {t("works")}</a>
                    </li>
                    <li>
                        <a href='#social-contact' className={linkeStyle}> {t("contact")}</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Navbar;