import Image from "next/image";
import verify from '../../public/verify.svg'
import ImageNFT01 from '../../public/img-neft/01.jpg'
import IconETH from '../../public/icon-eth.svg'
function Cardcollectors({image, name, valueBTC, percent, position}) {
    return (
        <div className="bg-white bg-opacity-[0.01] py-4 px-6 flex items-center justify-between rounded-full border border-white border-opacity-5 w-full max-w-card-collectors" >
            <div className="flex items-center gap-4 @desktop:gap-6" >
                <strong className="font-semibold" >{position}</strong>
                <div className="flex items-center gap-4" >
                    <div className="relative w-10 h-10" >
                        <div className=" w-full h-full rounded-full overflow-hidden flex items-center justify-center border-2 border-white border-opacity-5 " >
                            <Image 
                              src={image} 
                              alt="nft"
                              className="w-full h-full object-cover"
                            />
                        </div>
                        <Image 
                          src={verify} 
                          alt="verificado"
                          className="absolute -bottom-1 -right-1"
                        />
                    </div>
                    <div className="space-y-1" >
                        <h4>{name}</h4>
                        <p className="flex flex-col items-start @desktop:flex-row @desktop:items-center gap-1 text-sm text-white opacity-70" >
                        Preço mínimo 
                        <span className="flex items-center gap-1 font-semibold text-sm" >
                            <Image src={IconETH} alt="verificado"/>
                            {valueBTC} BTC
                        </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="space-y-1 text-right" >
                <strong className="text-green-primary font-bold" >{percent}</strong> 
                <span className="flex items-center gap-1 font-semibold text-sm" >
                    <Image src={IconETH} alt="verificado"/>
                    0.721 BTC
                </span>
            </div>
        </div>
    );
}

export default Cardcollectors;