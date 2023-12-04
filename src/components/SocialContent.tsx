import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import ArticleCard from "./ArticleCard";

export default function SocialContent() {
  const t = useTranslations("Social");
  return (
    <section
      id="social-contact"
      className="animation w-full h-fit flex flex-col gap-2 py-10 px-5 md:px-0"
    >
      <h3 className=" text-xl md:text-2xl font-bold underline underline-offset-4">
        {t("title")}
      </h3>
      <div
        id="social-links"
        className="flex flex-wrap items-center justify-start gap-5"
      >
        <a
          className="flex items-center justify-center gap-1 hover:underline underline-offset-4 "
          href="https://github.com/Gondrak08"
        >
          <AiFillGithub />
          @Gondrak08
        </a>
        <a
          className="flex items-center justify-center gap-1 hover:underline underline-offset-4 "
          href="https://twitter.com/vitoralecrim"
        >
          <AiFillTwitterCircle />
          @vitoralecim
        </a>
        <a
          className="flex items-center justify-center gap-1 hover:underline underline-offset-4 "
          href="https://www.linkedin.com/in/vitor-alecrim-0a588b145/"
        >
          <AiFillLinkedin />
          @vitor-alecim
        </a>
      </div>

      <div
        id="blog-articles"
        className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2 items-start justify-center"
      >
        <ArticleCard
          key={1}
          title="Tutorial: Desenvolvendo seu próprio Blog com Next.js e Node.js"
          description={null}
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--1R3AwPZf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9sg1fim65xum3gpebsyt.jpg"
          link="https://dev.to/vitoralecrim/desenvolvendo-seu-proprio-blog-com-nextjs-e-nodejs-2p1h"
        />

        <ArticleCard
          key={2}
          title="Tutorial: Criando um sistema de paginação em react.js"
          description={null}
          image="https://media.licdn.com/dms/image/D4E12AQENnsatwjXP7A/article-cover_image-shrink_720_1280/0/1686769696262?e=1707350400&v=beta&t=pbwLtuDOyCXPV88EWmGOaoXfCjkBAZUp5c3BR5sP8c0"
          link="https://www.linkedin.com/pulse/tutorial-criando-um-sistema-de-pagina%2525C3%2525A7%2525C3%2525A3o-em-reactjs-vitor-alecrim%3FtrackingId=CXc%252Br%252FqBQJmt35ctPII9tA%253D%253D/?trackingId=CXc%2Br%2FqBQJmt35ctPII9tA%3D%3D"
        />
        <ArticleCard
          key={3}
          title="Node.js - Como o registro de uma array de objetos?"
          description={null}
          image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*3DM-pfH6qDcaLyuEIqviLA.png"
          link="https://barao-tech.medium.com/como-fazer-uma-rota-post-para-o-registro-de-uma-array-de-objetos-b7216b8fdef7"
        />
      </div>

      <Link
        href={{ pathname: "/posts" }}
        className="
                    relative
                    top-2
                    md:top-3  
                    px-5
                    py-1 
                    place-self-start 
                    w-fit font-semibold 
                    text-black 
                    transition duration-300 
                    hover:underline
                    underline-offset-4
            "
      >
        {t("button")}
      </Link>
    </section>
  );
}

