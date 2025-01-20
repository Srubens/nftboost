import CarrouselCards from "./CarrouselCards";
import ContainerGrid from "./ContainerGrid";
import TitleSection from "./TitleSection";

function SectionCarrousel({subtitle, title, data}) {
    return (
        <section className="py-10 @desktop:py-28" >
            <ContainerGrid className="px-0 @desktop:px-3" >
                <TitleSection
                    title={title}
                    subtitle={subtitle}
                />
                <CarrouselCards data={data} />
            </ContainerGrid>
        </section>
    );
}

export default SectionCarrousel;