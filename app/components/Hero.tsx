"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import {Autoplay, FreeMode, Navigation, Thumbs, Virtual} from 'swiper/modules';
import Image from "next/image";

export const Hero = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const slides = [
        { image: '/images/hero/hero-1.jpeg', title: 'GetABat Regent Kitbag', content: 'Gear up like a champion, performance, comfort, and style' },
        { image:   '/images/hero/hero-2.jpeg', title: 'GetABat India\'s finest willow bat', content: 'Unleash your potential, unmatched performance on the pitch.' },
        { image:   '/images/hero/hero-3.jpeg', title: 'GetABat Combo Thigh pads', content: 'Defend your stance, offering unbeatable protection, flexibility, and agility in every step.' },
        { image:   '/images/hero/hero-4.jpeg', title: 'GetABat Combo Thigh pads', content: 'Defend your stance, offering unbeatable protection, flexibility, and agility in every step.' },
        { image:   '/images/hero/hero-5.jpeg', title: 'GetABat Test edition batting gloves', content: 'Get a grip on victory, crafted for ultimate comfort, control, and protection at the crease.' },
        { image:   '/images/hero/hero-6.jpeg', title: 'GetABat Cut Batting gloves', content: 'Get a grip on victory, crafted for ultimate comfort, control, and protection at the crease.'  },
        { image:   '/images/hero/hero-7.jpeg', title: 'GetABat Turbo-Grip Batting Gloves', content: 'Get a grip on victory, crafted for ultimate comfort, control, and protection at the crease.' },
        { image:   '/images/hero/hero-8.jpeg', title: 'GetABat Turbo-Grip Batting Gloves', content: 'Get a grip on victory, crafted for ultimate comfort, control, and protection at the crease.' },
        { image:   '/images/hero/hero-9.jpeg', title: 'GetABat Whirl Balls', content: 'Dominate every delivery,consistent bounce, durability, and game-changing spin.' },
        { image:   '/images/hero/hero-10.jpeg',title: 'GetABat Whirl Balls', content: 'Dominate every delivery,consistent bounce, durability, and game-changing spin.' },
    ];

    return (
        <div className={'h-[90vh] space-y-2'}>
            <Swiper
                style={{
                    // @ts-ignore
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    '--swiper-navigation-size': window.innerWidth < 500 ? '12px' : '30px',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay, Virtual]}
                className={'hero-swiper upper'}
            >
                {slides.map(({ image, title, content }, i) => (
                    <SwiperSlide className={'relative'} key={i} virtualIndex={i}>
                        <div className={'absolute inset-0 bg-black/60 -z-10'} />
                        <div className={'absolute inset-0 -z-20'}>
                            <Image alt={''} src={image} fill={true} />
                        </div>
                        <div className={'mt-[50%] ml-6 sm:mt-20 sm:ml-28 md:mt-40 md:ml-40 max-w-3xl space-y-10'}>
                            <h2 className={'text-white font-dm-sans'}>{title}</h2>
                            <h3 className={'text-white/90 font-dm-sans max-w-2xl'}>{content}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper as (swiper: any) => void}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs, Virtual]}
                className={'hero-swiper lower'}
            >
                {slides.map(({ image }, i) => (
                    <SwiperSlide key={i} virtualIndex={i}>
                        <Image alt={''} src={image} fill={true} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
