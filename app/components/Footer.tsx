import {FC} from "react";
import Image from "next/image";
import LogoImage from '@/public/logo.png';
import FacebookSvg from '@/public/svgs/facebook.svg';
import InstagramSvg from '@/public/svgs/insta.svg';

import {AiOutlineContacts, AiOutlineMail, AiOutlinePhone} from "react-icons/ai";


export const Footer: FC<{ hideLinks?: boolean }> = () => {
    return (
        <div className={'space-y-6 sm:space-y-12 p-5 sm:p-12 bg-background-light'}>
            <div className={'flex space-y-6 sm:space-y-0 flex-col sm:flex-row sm:space-x-6 sm:justify-between'}>
                <div className={'grid grid-cols-1 gap-y-6 self-center sm:self-start'}>
                    <Image src={LogoImage} alt={'Logo'} width={462} height={130} />
                    <div className={'sm:flex space-x-4 justify-end hidden'}>
                        {/*<a href={'#'}>*/}
                        {/*  <TwitterSvg className={'w-12 h-12'} />*/}
                        {/*</a>*/}
                        <a href={'https://www.facebook.com/share/apomGk7gsfiyPYwa/?mibextid=LQQJ4d'} target={'_blank'} rel="noreferrer">
                            <FacebookSvg className={'w-14 h-14'} />
                        </a>
                        <a href={'https://www.instagram.com/getabat.in/?hl=en'} target={'_blank'} rel="noreferrer">
                            <InstagramSvg className={'w-14 h-14'} />
                        </a>
                    </div>
                </div>

                <div className={'space-y-6'}>
                    <h4>Contact Us</h4>
                    <div className={'flex space-x-2'}>
                        <AiOutlineMail className={'w-4 h-4 text-primary'} />
                        <div className={'space-y-1'}>
                            <p className={'font-semibold'}>Email</p>
                            <p>getabat3110@gmail.com</p>
                        </div>
                    </div>

                    <div className={'flex space-x-2'}>
                        <AiOutlinePhone className={'w-4 h-4 text-primary'} />
                        <div className={'space-y-2'}>
                            <p className={'font-semibold'}>Phone</p>
                            <p>+91 9898555369</p>
                            <p>+91 9909148457</p>
                        </div>
                    </div>

                    <div className={'flex space-x-2'}>
                        <AiOutlineContacts className={'w-4 h-4 text-primary'} />
                        <div className={'space-y-1'}>
                            <p className={'font-semibold'}>Address</p>
                            <p>
                                Shop #12, Nirav Complex
                                <br />
                                Navrang Circle, Naranpura,
                                <br />
                                Ahmedabad, Gujarat, India,
                                <br/>
                                380014
                            </p>
                        </div>
                    </div>
                </div>

                <div className={'flex space-x-4 justify-center sm:hidden'}>
                    <a href={'https://www.facebook.com/share/apomGk7gsfiyPYwa/?mibextid=LQQJ4d'} target={'_blank'} rel="noreferrer">
                        <FacebookSvg className={'w-6 h-6'} />
                    </a>
                    <a href={'https://www.instagram.com/getabat.in/?hl=en'} target={'_blank'} rel="noreferrer">
                        <InstagramSvg className={'w-6 h-6'} />
                    </a>
                </div>
            </div>

            <span className={'block text-center font-medium'}>Copyright at GetABat 2024.</span>
        </div>
    );
};