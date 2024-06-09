import {FC} from "react";

export const GrabGear: FC = () => {
    return (
        <div className={'relative'}>
            <div className={'absolute top-0 left-0 w-[30vw] h-full z-10'}>

            </div>
         <h1 className={'text-center text-primary mb-8'}>Grab Gear</h1>
            <p className={'text-center text-primary max-w-3xl mx-auto text-xl sm:text-2xl font-semibold'}>
                Welcome to GETABAT, the ultimate destination for cricket enthusiasts. Dive into the
                thrilling world of cricket equipment with us and ignite the champion within.
            </p>
        </div>
    )
}