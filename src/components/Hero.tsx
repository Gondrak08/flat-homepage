import Image from 'next/image';

export default function Hero() {
    return (
        <section id="hero-container"
            className="relative flex box-border min-h-[600px]  w-full flex-col justify-between aling-center"
            style={{
                backgroundImage: "url('./wallpaper.gif')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>

            <div className="absolute left-0 right-0 top-0 md:top-32 bottom-0 
            flex justify-center gap-5 md:gap-8 w-fit mx-auto items-center   h-2/4" >

                <div id="avatar" className="w-[10em] md:w-48 h-[10em] md:h-48 rounded-full border-2 ">
                    <img src="./avatar.jpg" className="rounded-full w-full h-full object-contain " alt="A picture of myself" />
                </div>

                <div className=" mx-auto text-center text-white" >
                    <div>
                        <h1 className="text-2xl md:text-5xl font-medium HeroH1">Vitor Alecrim</h1>
                        <p className="my-1 text-xl md:text-2xl  text-opacity-0  HeroP text-center" style={{
                            color: 'hsla(0,0%,100%,.8)',
                        }} >A indie Fullstack Developer</p>
                    </div>
                    <div className="flex gap-2 items-center justify-center " >
                        <Image alt="react" src="/logo-react.png" width="35" height="100" />
                        <Image alt="node" src="/node.svg" width="50" height="50" />
                        <Image alt="javascript" src="/javascript.png" width="25" height="100" />
                        <Image alt="typescript" src="/typescript.svg" width="25" height="100" />
                        <Image alt="php" src="/php.svg" width="50" height="100" />
                        <Image alt="sql" src="/sql.png" width="50" height="100" />
                    </div>
                </div>
            </div>

        </section>
    )
}