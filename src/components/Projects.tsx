import Card from "./Card";
import Works from '@/data/works';

export default function Projects() {
    return (
        <section id="projects" className="animation flex flex-col gap-2 justify-center w-full h-full px-5 md:px-0 ">
            <h3 className=" text-xl md:text-2xl font-bold underline underline-offset-4 text-black" >Works</h3>
            <div id="works-display" className="grid grid-cols-1 md:grid-cols-2 gap-5 py-4 md:mx-[-3em] " >
                {
                    Works.map((work, index:number)=>(
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