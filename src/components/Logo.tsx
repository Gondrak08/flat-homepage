import Image from 'next/image';
import Link from 'next/link';

export default function Logo(){
    return(
        <Link href='/' className='relative w-[2em] h-[2em] md:w-full md:h-full ' >
            <span className='absolute bottom-0 left-1 text-sm text-white shadow-2xl' >Flat-co</span>
            <Image 
                src="/logo.gif"
                alt="flat-co"
                width={"100"}
                height={"100"} 
            />
        </Link>
    )
}