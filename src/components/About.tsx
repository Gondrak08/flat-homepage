import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations("About");       
    return (
        <section id="about" className="animation flex flex-col gap-2  justify-center w-full h-full pb-10 px-5 md:px-0">
            <h3 className=" text-xl md:text-2xl font-bold underline underline-offset-4 text-black" >{t("title")}</h3>
            <p className=" text-justify text-md md:text-xl ">
                {t("text")} 
                <br/>
                to know more:
            </p>
            <a href="#projects" className=" relative top-2 px-5 py-1 place-self-center w-fit font-semibold  rounded-2xl  transition duration-300 text-white border-[1px] border-bgButton bg-bgButton  hover:bg-transparent hover:text-black " >
               {t("button")}
            </a>
        </section>
    )
}