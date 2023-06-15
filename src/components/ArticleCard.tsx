export interface IArticleCard {
    title: string,
    description: string | null,
    image: string,
    link: string,
};

export default function ArticleCard({ title, description, image, link }: IArticleCard) {
    return (
        <div id="article-card">
            <a className="flex flex-col gap-2 w-fit shadow-xl hover:shadow-2xl" href={link} target="_blank" rel="noopener noreferrer">
                <div className="image-container" >
                    <img src={image} alt={title} />
                </div>
                <div className="p-2" >
                    <h4 className="text-sm md:text-[15px]" >{title}</h4>
                    {description && (
                        <p className="my-2 mx-1 text-sm" >{description}</p>
                    )}
                </div>
            </a>
        </div>
    )
}