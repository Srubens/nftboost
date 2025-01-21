"use client"
import ContainerGrid from "./ContainerGrid";
import google from '../../public/google.svg'
import apple from '../../public/apple.svg'
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

function SectionBanner() {
    const bannerRef = useRef(null)
    useEffect(()=>{
        const banner = bannerRef.current 
        const tl = gsap.timeline()
        tl.fromTo(banner,{
            opacity:0,
            scale:0.7
        },{
            opacity:1,
            scale:1,
            duration:1.5,
            ease:'power3.out',
            scrollTrigger:{
                trigger:banner,
                // markers:true,
                start:'top-=300 center',
                scrub:true
            }
        })
    },[])

    return (
        <section  >
            <ContainerGrid>
                <div className="w-full h-auto @laptop:h-area-banner bg-banner bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center rounded-xl py-10 px-2 @laptop:py-0 @laptop:px-0" 
                ref={bannerRef}
                >
                    <h2 className="text-4xl @laptop:text-6xl/snug font-poppins text-center mb-4" >Abra as portas para a próxima revolução digital!</h2>
                    <p className="text-center text-base @laptop:text-xl mb-6 max-w-xl" >Descubra, adquira e possua os NFTs mais valiosos do universo digital. Sua oportunidade, sua história.</p>
                    <div className="flex flex-col @laptop:flex-row items-center gap-6" >
                        <Image
                            src={google}
                            alt="logo"
                        />
                        <Image
                            src={apple}
                            alt="logo"
                        />
                    </div>
                </div>
            </ContainerGrid>
        </section>
    );
}

export default SectionBanner;