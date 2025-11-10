import { CodePageTemplate, type Block } from "@/components/templates/CodePageTemplate";

export default function PrintPage() {
    const pageTitle = "print";
    const pageSubtitle = "A maneira que o computador \"fala\"";
    const codeTextCard = 
    {
        title: "print()",
        contentText: "O comando print é utilizado para mostrar um texto na tela do computador, podemos pensar que ele é a forma em que um computador \“fala\”",
        contentCode: `
            print("Hello World!")
        `,
        language: "python"
    }

    const blocksToSend: Block[] = [
        {
            cardType:"code",
            data: codeTextCard
        }
    ] 

    return (
        <CodePageTemplate 
            pageTitle={pageTitle} 
            pageSubtitle={pageSubtitle}
            blocks={blocksToSend}
        />
    );
}