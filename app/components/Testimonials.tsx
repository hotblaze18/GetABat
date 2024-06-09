import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination, Virtual} from "swiper/modules";
import {NavigationOptions, PaginationOptions} from "swiper/types";
import {useRef} from "react";
import 'swiper/css';
import Image from 'next/image';
import LogoImage from '@/public/logo.png';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";

export const Testimonials = () => {

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const paginationRef = useRef(null);

    const TestimonialsContent = [{
        content: 'Exceptional quality, unparalleled performance, and unwavering durability - this is what defines GetABat. As an avid cricketer, I\'ve had the privilege of experiencing their top-notch equipment firsthand, and I can confidently say that it\'s a game-changer.',
        name: 'Deep Rajgor',
        img: '/images/testimonials/person-1.png',
        designation: 'Professional player in Top leagues held in the UAE',
        driveLink: 'https://drive.google.com/file/d/16P3SP2JEXU1RJqLbcRDW4L3X35M7o1D0/preview'
    }];

    return (
        <div className={'my-section mx-6 sm:mx-10 relative'}>
            <h2 className={'mb-16 text-center'}>What our Clients Say.</h2>
            <Swiper
                autoplay={{
                    delay: 8000,
                }}
                // className={'lg:!overflow-visible'}
                modules={[Virtual, Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                rewind={true}
                virtual
                pagination={{
                    el: paginationRef.current,
                    clickable: true,
                    bulletElement: 'div',
                }}
                onBeforeInit={(swiper) => {
                    (swiper.params.navigation as NavigationOptions).prevEl = navigationPrevRef.current;
                    (swiper.params.navigation as NavigationOptions).nextEl = navigationNextRef.current;
                    (swiper.params.pagination as PaginationOptions).el = paginationRef.current;
                }}
            >
                {TestimonialsContent.map(({ content,  name, img, designation, driveLink }, index) => (
                    <SwiperSlide key={name} virtualIndex={index}>
                        <div className={'space-y-10'}>
                            <div className={'flex space-x-0 lg:space-x-5 justify-center'}>
                                {/*<div className={'w-[100px] h-[100px] rounded-full overflow-hidden hidden lg:block'}>*/}
                                {/*    <Image src={img} alt={name} width={100} height={100} />*/}
                                {/*</div>*/}
                                <div className={'flex-1 max-w-3xl space-y-4 mb-3'}>
                                    <div className={'flex space-x-5 lg:space-x-0'}>
                                        <div className={'w-[75px] h-[75px] rounded-full overflow-hidden lg:hidden'}>
                                            <Image src={img} alt={name} width={100} height={100} />
                                        </div>
                                        <div>
                                            <h3 className={'text-white'}>{name}</h3>
                                            <p className={'text-white/70'}>{designation}</p>
                                        </div>
                                    </div>
                                    <p className={'mb-6 text-lg'}>{content}</p>
                                    <div className={'flex space-x-2 items-center space-y-1'}>
                                        <Image src={LogoImage} alt={'GetABat Logo'} width={86} height={48} />
                                        <p className={'text-white/80'}>Customer</p>
                                    </div>
                                </div>
                            </div>
                            <div className={'mx-auto max-w-2xl'}>
                                <iframe src={driveLink} width="640" height="480" allow="autoplay"></iframe>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                <div
                    className={
                        'hidden md:block bg-[#FFFAFA] shadow-carousel-button-left rounded-3xl z-10 absolute left-1 top-[40%] -translate-y-1/2'
                    }
                    ref={navigationPrevRef}
                >
                        <AiOutlineArrowLeft className={'w-4 h-4'} />
                </div>

                <div
                    className={
                        'hidden md:block bg-[#FFFAFA] shadow-carousel-button-right rounded-3xl z-10 absolute right-1  top-[40%] -translate-y-1/2'
                    }
                    ref={navigationNextRef}
                >
                    <AiOutlineArrowRight className={'w-4 h-4'} />
                </div>

                <div className={'mt-4 flex items-center justify-center space-x-2 md:hidden'} ref={paginationRef} />
            </Swiper>
        </div>
    )
}