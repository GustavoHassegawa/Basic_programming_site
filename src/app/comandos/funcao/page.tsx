import PythonRunnerComponent from "@/components/python/pythonRunnerComponent";
import { Block, CodePageTemplate } from "@/components/templates/CodePageTemplate";

export default function FunctionsPage() {
    const pageTitle = "Funções";
    const pageSubtitle = "As funções são como mini programas dentro do seu programa.\nElas servem para organizar o código, evitar repetição e tornar o programa mais fácil de entender.\nPense assim:\nse você precisa fazer algo várias vezes — como somar números, mostrar mensagens ou calcular médias —, em vez de repetir o mesmo código várias vezes, você cria uma função e chama ela quando quiser.";
    const defCard = 
        {
            title: "Funções",
            contentText: "As funções são como pequenos programas dentro do seu programa.\nElas servem para organizar o código, evitar repetições e deixar tudo mais fácil de entender.\nPense nelas como “tarefas nomeadas” que o computador pode executar sempre que você pedir.",
            contentCode: `
def saudacao():
    print("Olá! Seja bem-vindo ao meu programa!")
            `,
            language: "python"
        }
    const callFunctionCard = 
        {
            title: "Usando a função",
            contentText: "Criar uma função é como ensinar o computador uma nova palavra.\nMas ela só é executada quando você chama essa palavra com parênteses.",
            contentCode: `
saudacao()
            `,
            language: "python"
        }
    
    const whyFunctionsCard = 
        {
            title: "Por que usar Funções?",
            text: "Funções ajudam a reutilizar código sem precisar reescrever tudo várias vezes.\nElas também tornam o programa mais organizado: cada função tem uma função específica, e o código principal apenas combina essas partes.",
        }

    const parametersCard = {
        title: "Parâmetros",
        contentText: "Funções podem receber informações de fora, chamadas de parâmetros.\nIsso permite que a mesma função funcione com valores diferentes, tornando-a mais flexível e inteligente.",
        contentCode: `
def saudacao_personalizada(nome):
    print("Olá,", nome, "! Seja bem-vindo!")
        `,
        language:"python"
    }

    const callFunctionParametersCard = {
        title:"Chamando uma função com parâmetro",
        contentText:"Quando chamamos a função, podemos enviar os dados que queremos usar.\nAssim, o mesmo código se adapta a diferentes situações.",
        contentCode:`
saudacao_personalizada("Gustavo")
saudacao_personalizada("Maria")
        `,
        language: "python"
    }

    const returnCard = {
        title:"Return",
        contentText:"Nem sempre queremos que a função apenas mostre algo na tela.\nÀs vezes, queremos que ela calcule ou gere um resultado e devolva o valor para o programa.\nPara isso, usamos o comando return.",
        contentCode:`
def somar(a, b):
    resultado = a + b
    return resultado
        `,
        language: "python"
    }

    const resultCard = {
        title:"Guardando o resultado",
        contentText:"Quando uma função usa return, podemos guardar o valor devolvido em uma variável e usá-lo depois.\nIsso é essencial em cálculos e tomadas de decisão.",
        contentCode:`
soma = somar(5, 3)
print("O resultado é:", soma)        
        `,
        language:"python"
    }

    const whyReturncard = {
        title: "Por que o return é importante?",
        text: "O return transforma a função em algo independente e reaproveitável.\nEm vez de apenas executar uma ação, ela entrega um valor que pode ser usado em outras partes do código.\n'Isso deixa o programa modular, organizado e mais profissional — cada função faz sua parte, e o conjunto forma o programa completo."
    }

    const exerciseOneCard = {
        title: "Exercício Q5.1",
        text: "Defina uma função saudacao_ufabc() que exibe 'Seja bem-vindo(a) à UFABC!'. Depois, chame a função.\n\nResultado esperado:\nSeja bem-vindo(a) à UFABC!"
    }

    const exerciseTwoCard = {
        title: "Exercício Q5.2",
        text: "Defina uma função dobro(numero) que retorna o dobro do número. Chame a função com 15.\n\nResultado esperado:\n30"
    }

    const exerciseThreeCard = {
        title: "Exercício Q5.3",
        text: "Defina uma função calcula_media(n1, n2) que retorna a média de duas notas. Chame a função com 8.0 e 7.0.\n\nResultado esperado:\n7.5"
    }


    const blocksToSend: Block[] = [
        {
            cardType:"code",
            data: defCard
        },
        {
            cardType:"code",
            data: callFunctionCard
        },
        {
            cardType:"text",
            data: whyFunctionsCard
        },
        {
            cardType:"code",
            data: parametersCard
        },
        {
            cardType:"code",
            data: callFunctionParametersCard
        },
        {
            cardType:"code",
            data: returnCard
        },
        {
            cardType:"code",
            data: resultCard
        },
        {
            cardType:"text",
            data: whyReturncard
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