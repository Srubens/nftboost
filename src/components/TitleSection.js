"use client"
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function TitleSection({subtitle, title}) {
    const titleRef = useRef(null)
    useEffect(() =>{
        const title = titleRef.current
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:title,
                // markers:true,
                start:'top-=400 center',
                scrub:true
            }
        })
        tl.fromTo(title,{
            opacity:0,
            x:50
        },{
            opacity:1,
            x:0,
            'ease':'power3.out',
            duration:2
        })
    },[])
    return (
        <div className="px-3 mb-8 @desktop:mb-14 space-y-1 @desktop:px-0" ref={titleRef} >
            <span className="text-sm @desktop:text-xl font-semibold text-white text-opacity-70" >{subtitle}</span>
            <h2 className="font-poppins text-3xl @desktop:text-5xl/tight" >{title}</h2>
        </div>
    );
}

export default TitleSection;