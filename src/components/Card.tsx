import Image from 'next/image';

interface ICard {
    title: string,
    description: string,
    image: string,
    stacks: string[]
    link: string,
    repo: string | null
}

export default function Card({ title, description, image, stacks, link, repo }: ICard) {
    return (
        <div id="card">
            <a className="flex  flex-col gap-2 w-fit shadow-md 
            hover:shadow-2xl rounded-xl" href={link} target="_blank" rel="noopener noreferrer">
                <div className="image-container z-10" >
                    <Image src={`/` +  image}  alt={title} 
                     className="rounded-t-md" width="100" height="100" />
                </div>
                <div className="p-2 flex flex-col gap-1" >
                    <h4 className="text-[14px]" >{title}</h4>
                    {description && (<p className='text-sm font-justify' >{description}</p>)}
                </div>
                <div className='p-2 w-full flex flex-wrap items-center justify-start gap-2 text-[12px]' >
                    {stacks && stacks.map((stack) => {
                        return <span className='py-1 px-2 border border-gray-400 hover:bg-black 
                        hover:text-white rounded-sm' >{stack}</span>
                    })}
                </div>
            </a>
        </div>
    )

}