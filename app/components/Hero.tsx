"use client"

import React, {useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

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
        { image: '/images/hero/hero-1.jpeg', title: 'GETABAT Regent Kitbag', content: 'Gear up like a champion, performance, comfort, and style' },
        { image:   '/images/hero/hero-2.jpeg', title: 'GETABAT Player edition Grade 1 English Willow Bat', content: 'Unleash your potential, unmatched performance on the pitch.' },
        { image:   '/images/hero/hero-2.jpeg', title: 'GETABAT Power edition India\'s finest willow bat', content: 'Unleash your potential, unmatched performance on the pitch.' },
        { image:   '/images/hero/hero-3.jpeg', title: 'GETABAT Batting Pads and Combo Thigh pads.', content: 'Defend your stance, offering unbeatable protection, flexibility, and agility in every step.' },
        { image:   '/images/hero/hero-4.jpeg', title: 'GETABAT Batting Pads and Combo Thigh pads.', content: 'Defend your stance, offering unbeatable protection, flexibility, and agility in every step.' },
        { image:   '/images/hero/hero-5.jpeg', title: 'GETABAT Turbo-Grip Batting Gloves', content: 'Get a grip on victory, crafted for ultimate comfort, control, and protection at the crease.' },
        { image:   '/images/hero/hero-6.jpeg', title: 'GETABAT Test edition batting gloves', content: 'Get a grip on victory, crafted for ultimate comfort, control, and protection at the crease.'  },
        { image:   '/images/hero/hero-7.jpeg', title: 'GETABAT Cut edition Batting gloves', content: 'Get a grip on victory, crafted for ultimate comfort, control, and protection at the crease.' },
        { image:   '/images/hero/hero-8.jpeg', title: 'GETABAT Test pro batting gloves', content: 'Get a grip on victory, crafted for ultimate comfort, control, and protection at the crease.' },
        { image:   '/images/hero/hero-9.jpeg', title: 'GETABAT Supreme Balls', content: 'Dominate every delivery,consistent bounce, durability, and game-changing spin.' },
        { image:   '/images/hero/hero-10.jpeg',title: 'GETABAT Supreme Balls', content: 'Dominate every delivery,consistent bounce, durability, and game-changing spin.' },
    ];

    const windowSize = typeof window !== 'undefined' ? window.innerWidth : 0;

    return (
        <div className={'h-[90vh] space-y-2'}>
            <Swiper
                style={{
                    // @ts-ignore
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    '--swiper-navigation-size': windowSize < 500 ? '12px' : '30px',
                }}
                speed={600}
                loop={true}
                spaceBetween={10}
                navigation={true}
                autoplay={{
                    delay: 5000,
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
                    <SwiperSlide key={i} virtualIndex={i} className={'cursor-pointer'}>
                        <Image alt={''} src={image} fill={true} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
