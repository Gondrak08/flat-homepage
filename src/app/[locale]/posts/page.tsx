'use client'
import {useState, useEffect} from 'react';
import { useTranslations } from "next-intl";
import ArticleCard,{IArticleCard} from "@/components/ArticleCard";
import {articles} from "@/data/articles";

export default function Posts(){
    const t = useTranslations("Articles");
    const [posts, setPosts] = useState<IArticleCard[]|null>(null);

    useEffect(()=>{
      if(posts == null) setPosts(articles)
    },[articles])

    return(
        <main className={` flex min-h-screen  relative flex-col items-center justify-between 
        `}>
          <section className="container animation mx-auto  h-full relative z-50 ">
            <h3 className=" text-xl md:text-2xl font-bold underline underline-offset-4 text-black" >{t("title")}
            </h3>

            <div className='mt-2 grid grid-cols-2 gap-2 md:gap-5'>
                {
                  posts && posts.map((post:IArticleCard, index:number)=>{return(
                    <ArticleCard  
                        key={index}
                        title={post.title}
                        description={post.description}
                        image={post.image}
                        link={post.link}
                    />
                  )}
                  )
                }
            </div>
          </section>
        </main>
    )
};
