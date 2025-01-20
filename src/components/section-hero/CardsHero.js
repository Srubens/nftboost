import Image from 'next/image';
import CardLeft from '../../../public/cards-left.png'
import CardRight from '../../../public/cards-right.png'

function CardsHero() {
    return (
        <div className="relative w-area-cards-mobile h-area-cards-mobile mt-12 @desktop:w-full @desktop:h-area-cards-desk @desktop:mt-20" >
            <Image
                src={CardLeft}
                alt="card-left"
                className='absolute w-1/2 @desktop:w-auto @desktop:left-0 top-0 left-8 z-10'
            />
            <Image
                src={CardRight}
                alt="card-left"
                className='absolute w-1/2 @desktop:w-auto @desktop:right-0 top-0 right-8'
            />
        </div>
    );
}

export default CardsHero;