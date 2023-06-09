
export default function About() {
    return (
        <section id="about" className="animation flex flex-col gap-2  justify-center w-full h-full pb-10 px-5 md:px-0">
            <h3 className=" text-xl md:text-2xl font-bold underline underline-offset-4 text-black" >About me</h3>
            <p className=" text-justify text-md md:text-xl ">
                Vitor is a freelancer and a passionate full-stack developer with a keen eye for bridging technology and art. With a strong focus on understanding client needs and requirements, he is dedicated to crafting visually stunning and user-friendly websites and applications. 
                <br/>
                to know more:
            </p>
            <a href="#projects" className=" relative top-2 px-5 py-1 place-self-center w-fit font-semibold  rounded-2xl  transition duration-300 text-white border-[1px] border-bgButton bg-bgButton  hover:bg-transparent hover:text-black " >
                My Projects
            </a>
        </section>
    )
}