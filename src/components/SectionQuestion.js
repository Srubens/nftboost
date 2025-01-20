import ContainerGrid from "./ContainerGrid";
import TitleSection from "./TitleSection";
import { Accordion,AccordionContent,  AccordionItem, 
    AccordionTrigger
} from "@/components/ui/accordion"
  

function SectionQuestion() {
    const questions = [
        {
            question:'O que são NFTs?',
            response:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero culpa reprehenderit quod assumenda nobis cum sed, delectus natus, id repellat ad soluta ex asperiores sequi dolore totam necessitatibus rerum nulla?'
        },
        {
            question:'Como funciona a compra de NFTS em seu site?',
            response:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero culpa reprehenderit quod assumenda nobis cum sed, delectus natus, id repellat ad soluta ex asperiores sequi dolore totam necessitatibus rerum nulla?'
        },
        {
            question:'Como posso vender meus próprios NFTs?',
            response:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero culpa reprehenderit quod assumenda nobis cum sed, delectus natus, id repellat ad soluta ex asperiores sequi dolore totam necessitatibus rerum nulla?'
        },
        {
            question:'O que são NFTs seguros e autênticos?',
            response:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero culpa reprehenderit quod assumenda nobis cum sed, delectus natus, id repellat ad soluta ex asperiores sequi dolore totam necessitatibus rerum nulla?'
        },
        {
            question:'Quais são as taxas envolvidas na compra e venda de NFTs em seu site?',
            response:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero culpa reprehenderit quod assumenda nobis cum sed, delectus natus, id repellat ad soluta ex asperiores sequi dolore totam necessitatibus rerum nulla?'
        },
    ]
    return (
        <section className="pt-10 @desktop:pt-28" >
            <ContainerGrid>
                <TitleSection
                    subtitle="Desvendando os Mistérios do NFTs"
                    title="Perguntas Frequentes"
                />
                <div>
                
                    <Accordion type="single" collapsible className="w-full">
                    {questions.map(({question, response}, index) =>(
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger>{question}</AccordionTrigger>
                            <AccordionContent>
                                {response}
                            </AccordionContent>
                        </AccordionItem>

                    ))}
                    </Accordion>

                </div>
            </ContainerGrid>
        </section>
    );
}

export default SectionQuestion;