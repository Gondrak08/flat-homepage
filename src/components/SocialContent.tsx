import { useTranslations } from "next-intl";
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import ArticleCard from './ArticleCard';

export default function SocialContent() {
    const t = useTranslations("Social")
    return (
        <section id="social-contact" className='animation w-full h-fit flex flex-col gap-2 py-10 px-5 md:px-0' >
            <h3 className=" text-xl md:text-2xl font-bold underline underline-offset-4">
                {t('title')}
            </h3>
            <div id="social-links" className='flex flex-wrap items-center justify-start gap-5' >
                <a className='flex items-center justify-center gap-1 hover:underline underline-offset-4 '
                    href="https://github.com/Gondrak08">
                    <AiFillGithub />
                    @Gondrak08
                </a>
                <a className='flex items-center justify-center gap-1 hover:underline underline-offset-4 '
                    href="https://twitter.com/vitoralecrim">
                    <AiFillTwitterCircle />
                    @vitoralecim
                </a>
                <a className='flex items-center justify-center gap-1 hover:underline underline-offset-4 '
                    href="https://www.linkedin.com/in/vitor-alecrim-0a588b145/">
                    <AiFillLinkedin />
                    @vitor-alecim
                </a>
            </div>
            <div id="blog-articles" className='mt-2 grid grid-cols-2 md:grid-cols-3 gap-2 items-start justify-center' >
                <ArticleCard
                    key={1}
                    title="Tutorial: Criando um sistema de paginação em react.js"
                    description={null}
                    image='https://media.licdn.com/dms/image/D4E12AQENnsatwjXP7A/article-cover_image-shrink_600_2000/0/1686769696261?e=1692230400&v=beta&t=oNXpUQdwRBc6dCu2HR6JdTQ_rh8pLGJ5aZ7w6ijFb00'
                    link="https://www.linkedin.com/pulse/tutorial-criando-um-sistema-de-pagina%2525C3%2525A7%2525C3%2525A3o-em-reactjs-vitor-alecrim%3FtrackingId=CXc%252Br%252FqBQJmt35ctPII9tA%253D%253D/?trackingId=CXc%2Br%2FqBQJmt35ctPII9tA%3D%3D"
                />
                <ArticleCard
                    key={2}
                    title="Node.js - Como o registro de uma array de objetos?"
                    description={null}
                    image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*3DM-pfH6qDcaLyuEIqviLA.png"
                    link="https://barao-tech.medium.com/como-fazer-uma-rota-post-para-o-registro-de-uma-array-de-objetos-b7216b8fdef7"
                />

                <ArticleCard
                    key={3}
                    title="Criando um servidor Node.js de forma rápida e prática"
                    description={null}
                    image='https://microexato.com.br/wp-content/uploads/2018/10/Servidores-conheca-as-caracteristicas-ideais-para-cada-tipo-de-empresa.png'
                    link="https://gist.github.com/Gondrak08/b082d3679f7ca9240d89ace8292a7854"
                />

            </div>
            <a href="https://barao-tech.medium.com/"
                target="_blank"
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
            " >
                {t('button')}
            </a>
        </section>
    )
}