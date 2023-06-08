import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import ArticleCard from './ArticleCard';

export default function SocialContent() {
    return (
        <section id="social-container" className='w-full h-fit flex flex-col gap-2 py-10' >
            <h3 className=" text-2xl font-bold underline underline-offset-4">
                On the web
            </h3>
            <div id="social-links" className='flex items-center justify-start gap-5' >
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
            <div id="blog-articles" className='mt-2 grid grid-cols-3 gap-2 items-start justify-center' >
                <ArticleCard
                    title="Node.js - Como o registro de uma array de objetos?"
                    description={null}
                    image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*3DM-pfH6qDcaLyuEIqviLA.png"
                    link="https://barao-tech.medium.com/como-fazer-uma-rota-post-para-o-registro-de-uma-array-de-objetos-b7216b8fdef7"
                />
                <ArticleCard
                    title="Criando login form em javascript"
                    description={null}
                  
                    image='https://miro.medium.com/v2/resize:fit:640/format:webp/1*DK9D2mZVo9vsvIxR8QX2Tw.png'
                    link="https://barao-tech.medium.com/criando-login-form-em-javascript-6be5a7e0c975"
                />

                <ArticleCard
                    title="Criando um servidor Node.js de forma rápida e prática"
                    description={null}
                
                    image='https://microexato.com.br/wp-content/uploads/2018/10/Servidores-conheca-as-caracteristicas-ideais-para-cada-tipo-de-empresa.png'
                    link="https://gist.github.com/Gondrak08/b082d3679f7ca9240d89ace8292a7854"
                />
            </div>
            <a href="#projects" className="
            relative
            top-[-5px]  
            px-5
            py-1 
            place-self-start 
            w-fit font-semibold 
            text-black 
            transition duration-300 
            hover:underline
            underline-offset-4
            " >
                More articles
            </a>
        </section>
    )
}