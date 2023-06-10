import Image from 'next/image';

interface ICard {
    title: string,
    description: string,
    image: string,
    stacks: string[]
    link: string,
    repo: string | null
};



export default function Card({ 
    title, 
    description, 
    image, 
    stacks, 
    link, 
    repo }: ICard) {
    return (
        <div id="card">
            <a className="flex  flex-col gap-2 w-full shadow-md 
            hover:shadow-2xl rounded-xl" href={link.length > 0  ? link : repo ?? ''} target="_blank" rel="noopener noreferrer">
                <div className="image-container relative z-10" >
                    <Image src={`/` +  image}  alt={title} layout="fill" quality={100}  
                     className="rounded-t-md object-contain"  />
                </div>
                <div className="p-2 md:px-4 flex flex-col gap-1" >
                    <h4 className="text-[14px] md:text-lg" >{title}</h4>
                    {description && (<p className='text-sm md:text-[14px] font-justify' >{description}</p>)}
                </div>
                <div className='p-2 md:px-4 md:pb-5 w-full flex flex-wrap items-center justify-start gap-2 text-[12px]' >
                    {stacks && stacks.map((stack:string, index:number) => {
                        return <span key={index} className='py-1 px-2 border border-gray-400 hover:bg-black 
                        hover:text-white rounded-sm' >{stack}</span>
                    })}
                </div>
            </a>
        </div>
    );
};
