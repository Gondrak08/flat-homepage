import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Logo from "./Logo";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const linkeStyle = "hover:text-gray-light hover:underline underline-offset-4";
  const t = useTranslations("Navbar");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position: number = window.pageYOffset;
    setScrollPosition(position);
  };

  return (
    <section
      className={`
            flex 
            justify-center 
            items-center 
            h-16 
            w-full 
            transition-transitionBackground 
            transition-all 
            duration-500 
            z-[100]
            ${
              scrollPosition === 0
                ? "absolute  "
                : scrollPosition !== 0 && "shadow-xl bg-background fixed  z-50 "
            }
        `}
    >
      <nav
        className="
            flex 
            items-center
            animation
            md:justify-center 
            gap-10
            md:gap-20 
            py-2 
            transition-all 
            duration-500
            "
      >
        <div className="hidden md:flex  md:w-full md:h-full">
          <Logo />
        </div>
        <ul
          id="nav-links"
          className="
                    flex 
                    items-center 
                    gap-12
                    md:gap-14
                    text-white
                    text-md
                    md:text-[18px]
                    text-bold
                    "
        >
          {/* <li>
                        <Link href='#about' className={linkeStyle}>{t("about")}</Link>
                    </li> */}
          <li>
            <Link href="/posts" className={linkeStyle}>
              {t("articles")}
            </Link>
          </li>
          <li>
            <a href="/#projects" className={linkeStyle}>
              {t("works")}
            </a>
          </li>
          <li>
            <a href="/#social-contact">{t("contact")}</a>
            {/* <Link 
                            href={{pathname:"/", hash:"social-contact"}}
                            as={{pathname:"/", hash:"social-contact"}}
                            className={linkeStyle}>
                            {t("contact")}
                            
                        </Link> */}
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;

