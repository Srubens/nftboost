"use client"
import Image from 'next/image';
import CardLeft from '../../../public/cards-left.png'
import CardRight from '../../../public/cards-right.png'
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function CardsHero() {
    const cardsLeftRef = useRef(null)
    const cardsRightRef = useRef(null)
    const areaCardsRef = useRef(null)
    useEffect(() =>{
        const cardsLeft = cardsLeftRef.current
        const cardsRight = cardsRightRef.current
        const areaCards = areaCardsRef.current

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:areaCards,
                //markers:true,
                start:'-=50% center',
                scrub:true
            }
        })
        tl.to(cardsLeft,{
            left:0
        },0).to(cardsRight,{
            right:0
        },0)

    },[])
    return (
        <div className="relative w-area-cards-mobile h-area-cards-mobile mt-12 @desktop:w-full @desktop:h-area-cards-desk @desktop:mt-20"
         ref={areaCardsRef}
         >
            <Image
                src={CardLeft}
                alt="card-left"
                className='absolute w-1/2 @desktop:w-auto @desktop:left-[25%] top-0 left-8 z-10'
                ref={cardsLeftRef}
            />
            <Image
                src={CardRight}
                alt="card-left"
                className='absolute w-1/2 @desktop:w-auto @desktop:right-[25%] top-0 right-8'
                ref={cardsRightRef}
            />
        </div>
    );
}

export default CardsHero;