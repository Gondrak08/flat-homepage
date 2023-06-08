interface IArticleCard {
    title: string,
    description: string | null,
    image: string,
    link: string
}

export default function ArticleCard({ title, description, image, link }: IArticleCard) {
    return (
        <div id="article-card">
            <a className="flex flex-col gap-2 w-fit hover:shadow"  href={link} target="_blank" rel="noopener noreferrer">
                <div className="image-container" >
                    <img src={image} alt={title} />
                </div>
                <div className="p-2" >
                <h4 className="text-sm" >{title}</h4>
                {description && (<p>{description}</p>)}
                </div>
            </a>
        </div>
    )
}