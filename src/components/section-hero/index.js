import ContainerGrid from "../ContainerGrid";
import AreaText from "./Areatext";

import CardsHero from "./CardsHero";

function SectionHero() {
    return (
        <section className="overflow-hidden pt-36 bg-hero-pattern bg-no-repeat" >
            <ContainerGrid className='flex flex-col items-center' >
                <AreaText/>
                <CardsHero/>
                <div className="w-full border-t border-white border-opacity-5 mt-10 @desktop:mt-36" ></div>
            </ContainerGrid>
        </section>
    );
}

export default SectionHero;