import SectionHero from "@/components/section-hero";
import SectionCarrousel from "@/components/SectionCarrousel";
import Thumb01 from '../../public/img-neft/01.jpg'
import Thumb02 from '../../public/img-neft/02.jpg'
import Thumb03 from '../../public/img-neft/03.jpg'
import Thumb04 from '../../public/img-neft/04.jpg'
import Thumb05 from '../../public/img-neft/05.jpg'
import Thumb06 from '../../public/img-neft/06.jpg'
import Thumb07 from '../../public/img-neft/07.jpg'
import Thumb08 from '../../public/img-neft/08.jpg'
import Thumb09 from '../../public/img-neft/09.jpg'
import Thumb10 from '../../public/img-neft/10.jpg'
import Thumb11 from '../../public/img-neft/11.jpg'
import Thumb12 from '../../public/img-neft/12.jpg'
import SectionCollectors from "@/components/SectionCollectors";
import SectionBanner from "@/components/SectionBanner";
import SectionQuestion from "@/components/SectionQuestion";

export default function Home() {

  const featuredCollection = [
    {
      name:'Cat #221',
      thumbnail:Thumb01,
      value:'0.0721',
      value_brl:'602,02'
    },
    {
      name:'Cat #2331',
      thumbnail:Thumb02,
      value:'0.0725',
      value_brl:'604,00'
    },
    {
      name:'Skull Hatter #2311',
      thumbnail:Thumb03,
      value:'0.0718',
      value_brl:'590,00'
    },
    {
      name:'Nox #2611',
      thumbnail:Thumb04,
      value:'0.0719',
      value_brl:'600,00'
    },
    {
      name:'Cat #221',
      thumbnail:Thumb05,
      value:'0.0721',
      value_brl:'602,02'
    },
  ]

  const featuredMonth = [
    {
      name:'Cat #221',
      thumbnail:Thumb06,
      value:'0.0721',
      value_brl:'602,02'
    },
    {
      name:'Cat #2331',
      thumbnail:Thumb07,
      value:'0.0725',
      value_brl:'604,00'
    },
    {
      name:'Skull Hatter #2311',
      thumbnail:Thumb08,
      value:'0.0718',
      value_brl:'590,00'
    },
    {
      name:'Nox #2611',
      thumbnail:Thumb09,
      value:'0.0719',
      value_brl:'600,00'
    },
    {
      name:'Cat #221',
      thumbnail:Thumb10,
      value:'0.0721',
      value_brl:'602,02'
    },
  ]

  const tendencies = [
    {
      name:'Cat #221',
      thumbnail:Thumb10,
      value:'0.0721',
      value_brl:'602,02'
    },
    {
      name:'Cat #2331',
      thumbnail:Thumb11,
      value:'0.0725',
      value_brl:'604,00'
    },
    {
      name:'Skull Hatter #2311',
      thumbnail:Thumb12,
      value:'0.0718',
      value_brl:'590,00'
    },
    {
      name:'Nox #2611',
      thumbnail:Thumb05,
      value:'0.0719',
      value_brl:'600,00'
    },
    {
      name:'Cat #221',
      thumbnail:Thumb06,
      value:'0.0721',
      value_brl:'602,02'
    },
  ]

  return (
    <>
     <SectionHero/>
     <SectionCarrousel
      title="Destaque em coleções"
      subtitle="Coleções notáveis"
      data={featuredCollection}
     />
     <hr className="border-t border-white border-opacity-5 max-w-grid mx-auto" />
     <SectionCarrousel

      title="Seleção Mensal"
      subtitle="Destaque do Mês"
      data={featuredMonth}
     />
     <hr className="border-t border-white border-opacity-5 max-w-grid mx-auto" />
     
      
     <SectionCollectors/>

     <hr className="border-t border-white border-opacity-5 max-w-grid mx-auto" />
     <SectionCarrousel

      title="Em Tendência"
      subtitle="Principais"
      data={tendencies}
     />
     <SectionBanner/>
     <SectionQuestion/>
    </>
  );
}
