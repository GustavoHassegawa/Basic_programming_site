import PythonRunnerComponent from "@/components/python/pythonRunnerComponent";
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

    const exerciseOneCard = {
        title: "Exercício 1",
        text: "Utilizando o laço for, exiba todos os números inteiros de 1 a 5.\n\nResultado esperado:\n1\n2\n3\n4\n5"
    }

    const exerciseTwoCard = {
        title: "Exercício 2",
        text: "Utilize um laço while para solicitar repetidamente a senha 'ufabc2025'. Pare apenas quando a senha correta for digitada.\n\nEntrada: 123\nSaída:\nSenha incorreta. Tente novamente.\n\nEntrada: ufabc2025\nSaída:\nAcesso liberado!"
    }

    const exerciseThreeCard = {
        title: "Exercício 3",
        text: "Percorra a lista ['FUV', 'GA', 'FEMEC'] com um laço for e exiba:\nEstou matriculado em: X\n\nResultado esperado:\nEstou matriculado em: FUV\nEstou matriculado em: GA\nEstou matriculado em: FEMEC"
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
        },
        {
            cardType:"text",
            data: exerciseOneCard
        },
        {
            cardType:"text",
            data: exerciseTwoCard
        },
        {
            cardType:"text",
            data: exerciseThreeCard
        },
    ] 

    return (
        <main>
            <CodePageTemplate 
                pageTitle={pageTitle} 
                pageSubtitle={pageSubtitle}
                blocks={blocksToSend}
            />

            <PythonRunnerComponent />
        </main>
    );
}