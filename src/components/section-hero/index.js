import Image from "next/image";
import ContainerGrid from "../ContainerGrid";
import IconBoost from '../../../public/icon-boost.svg'
import nftsamll from '../../../public/nft-small.png'
import doublenft from '../../../public/double-nft.png'
import google from '../../../public/google.svg'
import apple from '../../../public/apple.svg'
import CardsHero from "./CardsHero";

function SectionHero() {
    return (
        <section className="overflow-hidden pt-36 bg-hero-pattern bg-no-repeat" >
            <ContainerGrid className='flex flex-col items-center' >
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
                            className="w-11 @desktop:w-auto"
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

                <div className="flex flex-col @tablet:flex-row items-center gap-4" >
                    <Image
                        src={google}
                        alt="logo"
                    />
                    <Image
                        src={apple}
                        alt="logo"
                    />
                </div>
                <CardsHero/>
                <div className="w-full border-t border-white border-opacity-5 mt-10 @desktop:mt-36" ></div>
            </ContainerGrid>
        </section>
    );
}

export default SectionHero;