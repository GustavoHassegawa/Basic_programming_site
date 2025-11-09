import { Block, CodePageTemplate } from "@/components/templates/CodePageTemplate";

export default function LoopPage() {
    const pageTitle = "Repetições";
    const pageSubtitle = "Às vezes, queremos que o computador repita uma tarefa muitas vezes — contar números, mostrar mensagens, somar valores de uma lista, verificar dados… Fazer isso linha por linha seria um pesadelo!\nAs estruturas de repetição existem justamente para isso: automatizar tarefas repetitivas e evitar código duplicado.\nCom comandos como for e while, você ensina o computador a repetir ações até uma condição ser atingida, economizando tempo e linhas de código.\n\nElas são o \"modo automático\" da programação — você explica o que fazer, e o computador cuida do resto.";
    const whileCard = 
        {
            title: "while(condição)",
            contentText: "O while é usado quando você quer repetir algo, mas não sabe quantas vezes vai precisar repetir.\nEle continua enquanto uma condição for verdadeira.\nNeste exemplo, o programa roda enquanto o valor de contador for menor que 5.\nQuando chegar em 5, ele para.",
            contentCode: `
contador = 0

while contador < 5:
    print("Contador:", contador)
    contador += 1
`,
            language: "python"
        }
    const forCard = 
        {
            title: "for(condição)",
            contentText: "O for é usado quando você quer repetir uma ação várias vezes, mas já sabe quantas vezes vai repetir.\nEle percorre uma sequência (como uma lista ou um intervalo de números).",
            contentCode: `
for i in range(5):
    print("Repetição número:", i)
            `,
            language: "python"
        }
    
    const cautionCard = {
        title:"Cuidado com loops infinitos!",
        text:"Se a condição nunca se tornar falsa, o programa nunca termina."
    }

    const blocksToSend: Block[] = [
        {
            cardType:"code",
            data: whileCard
        },
        {
            cardType:"code",
            data: forCard
        },
        {
            cardType:"text",
            data: cautionCard
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