'use client';

import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { Footer } from '@/app/components/Footer';
import { Products } from '@/app/components/Products';
import { GrabGear } from '@/app/components/GrabGear';
import { Testimonials } from '@/app/components/Testimonials';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <Hero />
        </section>
        <section className={'py-section container md:pb-[160px]'}>
          <GrabGear />
        </section>
        <section id={'products'} className={'py-section bg-background-light'}>
          <div className={'container'}>
            <h2 className={'mb-14 text-center'}>Our Products</h2>
            <Products />
          </div>
        </section>
        <section id={'testimonials'} className={'py-section bg-primary'}>
          <div className={'px-4 md:px-8 lg:px-[36px] xl:px-[52px] mx-auto'}>
            <Testimonials />
          </div>
        </section>
      </main>
      <div id={'contact'} />
      <Footer />
    </>
  );
}
