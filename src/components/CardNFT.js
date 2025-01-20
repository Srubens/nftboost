import Image from "next/image";

import IconHeart from '../../public/icon-heart.svg'
import verify from '../../public/verify.svg'
import IconETH from '../../public/icon-eth.svg'
import IconClock from '../../public/icon-clock.svg'

function CardNFT({thumbnail,name, value, value_brl}) {
    return (
        <div className="w-full max-w-card-nft overflow-hidden rounded-2xl border border-gray-border-card bg-gray-area-favorite" >
            <div className="relative w-full h-area-image-nft overflow-hidden" >
                <Image 
                  src={thumbnail} 
                  alt="img-nft"
                 />
                <div className="absolute top-2 right-2 z-10 flex items-center gap-2 py-3 px-6 bg-gray-area-favorite rounded-full border border-gray-border-card" >
                    <Image
                        src={IconHeart}
                        className="w-full h-full object-cover"
                        alt="icon-heart"
                    />
                    <small>0</small>
                </div>
            </div>
            <div className="w-full p-4" >
                <h4 className="flex items-center gap-1 text-xs mb-1" >Cartoon collection
                    <Image
                        src={verify}
                        alt="verify"
                    />
                </h4>
                <h3 className="text-lg/none font-semibold mb-4" >{name}</h3>
                
                <div className="flex justify-between items-end mb-4" >
                    <div className="space-y-1" >
                        <span className="text-xs text-white text-opacity-70" >preço atual</span>
                        <h3 className="flex items-center gap-1 text-lg font-semibold" >
                            <Image
                                src={IconETH}
                                alt="icon-eth"
                            />
                            {value} BTC
                        </h3>
                    </div>
                    <h5 className="relative bottom-1 text-xs font-medium" >R$ {value_brl}</h5>
                </div>
                <button className="w-full py-4 bg-blue-primary rounded-full mb-4 text-sm font-semibold hover:bg-blue-700 transition-all ease-linear" >
                    Buy now
                </button>
                <div className="flex items-center gap-1" >
                    <Image
                        src={IconClock}
                        alt="icon-clock"
                    />
                    <p className="text-xs" >Fim em 4h 8min 22s</p>
                </div>
                
            </div>
        </div>
    );
}

export default CardNFT;