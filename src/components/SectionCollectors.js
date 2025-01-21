"use client"
import Cardcollectors from "./CardCollectors";
import ContainerGrid from "./ContainerGrid";
import TitleSection from "./TitleSection";
import Thumb01 from '../../public/img-neft/01.jpg'
import Thumb02 from '../../public/img-neft/02.jpg'
import Thumb03 from '../../public/img-neft/03.jpg'
import Thumb04 from '../../public/img-neft/04.jpg'
import Thumb05 from '../../public/img-neft/05.jpg'
import Thumb06 from '../../public/img-neft/06.jpg'
import Thumb07 from '../../public/img-neft/07.jpg'
import Thumb08 from '../../public/img-neft/08.jpg'
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

function SectionCollectors() {

  const areaCollectorsRef = useRef(null)

    useEffect(()=>{
        const areaCollectors = areaCollectorsRef.current
        const tl = gsap.timeline()

        tl.fromTo(areaCollectors,{
            opacity:0,
            y:50
        },{
            opacity:1,
            y:0,
            ease:'power3.out',
            duration:2,
            scrollTrigger:{
                trigger:areaCollectors,
                // markers:true,
                start:'top-=300 center',
                scrub:true
            }
        })
    },[])

    const featuredCollection = [
        {
          name:'Cat #221',
          thumbnail:Thumb01,
          percent:'20%',
          valueBTC:'R$ 602,02'
        },
        {
          name:'Cat #2331',
          thumbnail:Thumb02,
          percent:'25%',
          valueBTC:'R$ 604,00'
        },
        {
          name:'Skull Hatter #2311',
          thumbnail:Thumb03,
          percent:'30%',
          valueBTC:'R$ 590,00'
        },
        {
          name:'Nox #2611',
          thumbnail:Thumb04,
          percent:'31%',
          valueBTC:'R$ 600,00'
        },
        {
          name:'Cat #221',
          thumbnail:Thumb05,
          percent:'28%',
          valueBTC:'R$ 602,02'
        },
        {
          name:'Cat #221',
          thumbnail:Thumb05,
          percent:'27%',
          valueBTC:'R$ 602,02'
        },
        {
          name:'Cat #221',
          thumbnail:Thumb07,
          percent:'34%',
          valueBTC:'R$ 489,90'
        },
        {
          name:'Cat #221',
          thumbnail:Thumb08,
          percent:'23%',
          valueBTC:'R$ 590'
        },
      ]

    return (
        <section className="py-10 @desktop:py-28" >
            <ContainerGrid>
                <TitleSection
                    title="Colecionadores em foco"
                    subtitle="Principais Colecionadores"
                />
                <div className="grid grid-cols-1 gap-x-4 @tablet:grid-cols-2 @desktop:gap-x-8 gap-y-4"
                  ref={areaCollectorsRef}
                 >
                {featuredCollection.map(({name, thumbnail, percent,valueBTC},index)=>(
                    <Cardcollectors 
                        key={index}
                        position={index + 1}
                        image={thumbnail}
                        name={name}
                        percent={percent}
                        valueBTC={valueBTC}
                    />
                ))}
                </div>
            </ContainerGrid>
        </section>
    );
}

export default SectionCollectors;