import ContainerGrid from "./ContainerGrid";
import Logo from '../../public/logo.svg'
import Image from "next/image";

function Footer() {

    const footerNav = [
        {
            titleMenu:'NFT Boost',
            items:[
                'Download',
                'NFTs',
                'Rank',
                'FAQ'
            ]
        },
        {
            titleMenu:'Links Importants',
            items:[
                'About us',
                'Questions',
                'Press',
                'Contact us',
                'Legal',
            ]
        }

    ]

    return (
        <footer className="py-10 @laptop:pt-32 @laptop:pb-56" >
            <ContainerGrid className="flex flex-col @laptop:flex-row justify-between gap-10" >
                <div className="text-left max-w-full @laptop:max-w-left-cont-footer" >
                    <Image 
                        src={Logo}
                        alt="logo"
                    />
                    <p className="mt-4 mb-6 text-lg text-white text-opacity-70" >Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <button
                   className="w-full @tablet:w-auto bg-blue-primary py-4 px-7 rounded-full font-medium hover:bg-blue-900 transition-all ease-linear"
                 >Conectar Carteira</button>
                </div>
                <div className="gap-10 @laptop:gap-20 flex flex-col @laptop:flex-row" >
                    { footerNav.map(({titleMenu, items}) => (
                      <div key={`menu-${titleMenu}`} >
                        <strong className="block text-xl mb-4" >{titleMenu}</strong>
                        <ul className="space-y-4" >
                            { items.map((item, index) => (
                                <li key={index} >
                                    <a href="#" className="text-lg text-white text-opacity-70" >{item}</a>
                                </li>
                            )) }
                        </ul>
                      </div>
                    )) }
                </div>
            </ContainerGrid>
        </footer>
    );
}

export default Footer;