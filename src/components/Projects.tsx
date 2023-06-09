import Card from "./Card";
import Works from '@/data/works';

export default function Projects() {
    return (
        <section id="Works" className="flex flex-col gap-2  justify-center w-full h-full py-10">
            <h3 className=" text-2xl font-bold underline underline-offset-4 text-black" >Works</h3>
            <div id="works-display" className="grid grid-cols-2 gap-5" >
                {
                    Works.map((work)=>(
                         <Card 
                            key={work.id}
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