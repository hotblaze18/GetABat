import {FC} from "react";
import CircleDecoration from '@/public/images/decoration.png';
import Image from "next/image";

export const GrabGear: FC = () => {
    return (
        <div className={'relative'}>
            <div className={'absolute top-0 left-0 w-[30vw] h-full z-10'}>

            </div>
         <h1 className={'text-center text-primary mb-8'}>Grab Gear</h1>
            <p className={'text-center text-primary max-w-3xl mx-auto text-xl'}>
                Welcome to GetABat, the ultimate destination for sports enthusiasts. Dive into the
                thrilling world of sports equipment with us and ignite the champion within.
            </p>
        </div>
    )
}