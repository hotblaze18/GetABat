import {FC} from "react";
import Image from "next/image";

export const Navbar: FC = () => {
    return (
        <div className={'w-full bg-background-light'}>
            <div className={'flex justify-between items-center container h-14'}>
                <Image src={'/logo.png'} alt={'Logo'} width={100} height={30} />
                <div className={'flex items-center space-x-4'}>
                    {[
                        { name: 'Products', link: '#products'},
                        { name: 'Testimonials', link: '#testimonials' },
                        { name: 'Contact', link: '#contact' }
                    ].map(({ name, link }) => (
                        <a className={'text-sm hover:text-primary'} key={name} href={link}>{name}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}