"use client"
import Image from "next/image";
import IconBoost from '../../../public/icon-boost.svg'
import nftsamll from '../../../public/nft-small.png'
import doublenft from '../../../public/double-nft.png'
import google from '../../../public/google.svg'
import apple from '../../../public/apple.svg'
import { useEffect, useRef } from "react";
import gsap from "gsap";

function AreaText() {
    const areaTextRef = useRef(null)
    const googleRef = useRef(null)
    const appleRef = useRef(null)
    const circleRef = useRef(null)

    useEffect(() =>{
        const areaText = areaTextRef.current
        const google = googleRef.current
        const apple = appleRef.current
        const circle = circleRef.current

        const tl = gsap.timeline()
        tl.fromTo(areaText,{
            opacity:0,
            y:20
        },{
            opacity:1,
            duration:1,
            y:0
        },'start').fromTo(google,{
            opacity:0,
            x:-30
        },{
            opacity:1,
            duration:1,
            x:0
        },">-0.5").fromTo(apple,{
            opacity:0,
            x:30
        },{
            opacity:1,
            duration:1,
            x:0
        },">-1").fromTo(circle,{
            opacity:0,
            xPercent:90
        },{
            xPercent:0,
            opacity:1,
            duration:1
        },'start+=1')
    },[])
    return (
        <>
            <div ref={areaTextRef} className="flex flex-col items-center opacity-0" >
                <h3 className="flex items-center gap-2 text-sm @tablet:text-base @desktop:text-xl mb-3" >
                    <Image
                        src={IconBoost}
                        alt="logo"
                    />
                    <span>Entre em um reino de possibilidades infinitas</span>
                </h3>
                <h1 className="text-5xl/normal @desktop:text-7xl/normal text-center font-poppins mb-4" >
                    Explore um Universo
                    <div className="inline-block align-middle mx-2 p-1 bg-white bg-opacity-5 border-white border-opacity-5 rounded-full w-24 @desktop:w-32" >
                        <Image
                            src={nftsamll}
                            alt="logo"
                            className="w-11 @desktop:w-auto opacity-0"
                            ref={circleRef}
                        />
                    </div>
                    Digital de 
                    <Image
                        src={doublenft}
                        alt="logo"
                        className="inline-block w-16 mx-2 @desktop:w-auto"
                    />
                    Colecionáveis Únicos!
                </h1>
                <p className="w-full text-center text-sm @tablet:text-base mb-6 @desktop:text-xl @desktop:max-w-content-desc-hero @desktop:mb-9" >Adentre um reino de possibilidades infinitas e mergulhe nas coleções de NFT, onde a arte, a cultura e a inovação se unem para criar experiências verdadeiramente exclusivas.</p>
            </div>
            <div className="flex flex-col @tablet:flex-row items-center gap-4 " >
                <Image
                    src={google}
                    alt="logo"
                    ref={googleRef}
                    className="opacity-0"
                />
                <Image
                    src={apple}
                    alt="logo"
                    ref={appleRef}
                    className="opacity-0"
                />
            </div>
        </>
    );
}

export default AreaText;