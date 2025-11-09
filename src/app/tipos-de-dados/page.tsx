import { Block, CodePageTemplate } from "@/components/templates/CodePageTemplate";

export default function TypesPage() {
    const pageTitle = "Tipos de Dados";
    const pageSubtitle = "Quando você conversa com o computador, precisa deixar claro que tipo de informação está passando pra ele.\nPense assim: o computador é super-rápido, mas não tem bom senso — se você disser “5 + 5” ele soma, mas se disser “gato + cachorro” ele vai ficar confuso (ou tentar juntar as palavras).\nÉ por isso que existem os tipos de dados: eles dizem ao Python como tratar as informações que você dá.\nVamos conhecer os principais tipos:";
    const intCard = 
        {
            title: "Integer",
            text: "Os inteiros são os números sem vírgula — positivos, negativos ou zero.\nEsse tipo de dado é usado sempre que o programa precisa contar, calcular quantidades ou representar algo que não tenha frações.\nÉ o tipo ideal para idades, anos, quantidade de itens, e tudo que envolva valores exatos."
        }
    
    const floatCard = 
        {
            title: "Float",
            text: "O tipo float representa números com parte decimal, ou seja, valores que não são inteiros.\nEle é usado em situações que exigem precisão, como notas escolares, medidas, preços ou cálculos científicos.\nEnquanto os inteiros lidam com “quantidades”, os floats lidam com “valores contínuos”."
        }
    
    const stringCard = 
       {
            title: "String",
            text: "As strings representam textos — tudo o que pode ser lido, escrito ou exibido em palavras.\nElas são usadas para armazenar nomes, frases, mensagens e qualquer sequência de letras, números ou símbolos.\nPodemos pensar nas strings como a forma que o computador tem de lidar com linguagem humana.\nSempre que você quiser que o programa “fale” algo ou guarde um texto, usará esse tipo de dado."
        }
    
    const boolCard = 
        {
            title: "Boolean",
            text: "O tipo booleano é o mais simples, mas também um dos mais importantes.\nEle só pode ter dois valores: verdadeiro ou falso.\nÉ usado sempre que o programa precisa tomar decisões, verificar condições ou responder perguntas do tipo “sim ou não”.\nOs booleanos são a base da lógica nos programas — é com eles que o computador decide o que deve ou não fazer."
        }
    
    const blocksToSend: Block[] = [
        {
            cardType: "text",
            data: intCard
        },
        {
            cardType: "text",
            data: floatCard
        },
        {
            cardType: "text",
            data: stringCard
        },
        {
            cardType: "text",
            data: boolCard
        },
    ]

    return (
        <CodePageTemplate 
            pageTitle={pageTitle} 
            pageSubtitle={pageSubtitle}
            blocks={blocksToSend}
        />
    );
}