import { useState } from 'react';
import { useTranslations } from "next-intl";
import Card from "./Card";
import Works from '@/data/works';
import ProjectsData from '@/data/projects';

export default function Projects() {
    const [tab, setTab] = useState<string>('projects');
    const t = useTranslations("Projects")

    return (
        <section id="projects"
            className="animation flex flex-col  gap-5  w-full h-full px-5 md:px-0 ">
            <div className='flex w-full items-center gap-5 border border-b-black '>
                <h3 className={`text-xl md:text-2xl font-bold 
              border border-black border-b-[0]  rounded-t-xl p-2 relative hover:cursor-pointer ${tab !=='projects' ? 'text-gray-700 hover:text-black': 'text-black' }`} onClick={() => { setTab('projects') }} >
                    {t("title one")}
                    {tab == 'projects' && <span className='absolute left-0 bottom-[-2px] w-full border border-[rgb(225 229 230)]' />}
                </h3>

                <h3 className={`text-xl md:text-2xl font-bold 
              border border-black border-b-[0]  rounded-t-xl p-2 relative hover:cursor-pointer ${tab !=='collabs' ? 'text-gray-700 hover:text-black': 'text-black' }`} onClick={() => { setTab('collabs') }} >
                    {t("title two")}
                    {tab == 'collabs' && <span className='absolute left-0 bottom-[-2px] w-full border border-[rgb(225 229 230)]' />}
                </h3>
            </div>
            <div id="works-display" className="grid grid-cols-1 md:grid-cols-2
             gap-5 py-4 md:mx-[-3em] " >
                {tab == 'projects' &&
                    ProjectsData.map((work: any, index: number) => (
                        <Card
                            key={index}
                            title={work.Title}
                            description={work.description}
                            image={work.img}
                            stacks={work.stacks}
                            link={work.demo}
                            repo={work.code}
                        />
                    ))

                }
                {tab == 'collabs' &&
                    Works.map((work: any, index: number) => (
                        <Card
                            key={index}
                            title={work.Title}
                            description={work.description}
                            image={work.img}
                            stacks={work.stacks}
                            link={work.demo}
                            repo={work.code}
                        />
                    ))

                }

            </div>
        </section>
    )
};
