"use client"
import CardNFT from "./CardNFT";
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper/modules'
import Thumb01 from '../../public/img-neft/01.jpg'
import arrow from '../../public/arrow.svg'
import 'swiper/css'
import Image from "next/image";
import { useRef } from "react";

function CarrouselCards({data}) {

    const swiperRef = useRef()

    return (
        <>
        <div className="w-full relative" >
        <button className="hidden w-12 h-12 bg-blue-primary rounded-full items-center justify-center absolute z-10 top-1/2 -mt-6 -left-6 hover:bg-gray-hover-btn-slide transition-all ease-linear border border-white border-opacity-5 @desktop:flex"
         onClick={(() =>swiperRef.current?.slidePrev())}
        >
            <Image

                src={arrow}
                alt="seta"
            />

        </button>
            <Swiper
                slidesPerView={4}
                spaceBetween={32}
                speed={800}
                loop={true}
                modules={[Navigation]}
                navigation={true}
                onBeforeInit={((swiper) => swiperRef.current = swiper)}
                breakpoints={{ 
                    320:{
                        slidesPerView:1.3,
                        spaceBetween:24
                    },
                    640:{
                        slidesPerView:2.5,
                    },
                    1024:{
                        slidesPerView:3.3,
                    },
                    1250:{
                        slidesPerView:4,
                        spaceBetween:32
                    },
                 }}
                 className="!px-3"
            >
                {data.map(({name,
thumbnail,
value,
value_brl}, index) => (

                    <SwiperSlide key={index}>
                        <CardNFT

                            name={name}
                            thumbnail={thumbnail}
                            value={value}
                            value_brl={value_brl}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="rotate-180 w-12 h-12 bg-blue-primary rounded-full hidden items-center justify-center absolute z-10 top-1/2 -mt-6 -right-6 hover:bg-gray-hover-btn-slide transition-all ease-linear border border-white border-opacity-5 @desktop:flex"
                onClick={(() =>swiperRef.current?.slideNext())}
             >
                <Image

                    src={arrow}
                    alt="seta"
                />

            </button>
            </div>
        </>
    );
}

export default CarrouselCards;