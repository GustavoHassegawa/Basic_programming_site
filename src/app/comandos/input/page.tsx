import PythonRunnerComponent from "@/components/python/pythonRunnerComponent";
import { CodePageTemplate, type Block } from "@/components/templates/CodePageTemplate";

export default function InputPage() {
    const pageTitle = "input";
    const pageSubtitle = "A maneira que o computador \"escuta\"";
    const introductionCard =
        {
            title: "input()",
            contentText: "Se o print() é a maneira que o computador “fala” o input() é como ele \“escuta\”. input comunica ao computador \“você vai receber uma informação\”, por padrão no python, a informação recebida tem como tipo String.",
            contentCode: 
            `
                nome = input(“Qual é o seu nome? ”)
print(nome)
            `,
            language: "python"
        }
    
    const importantPointCard = 
        {
            title: "PONTO IMPORTANTE !",
            text: "Para receber a informação em outro tipo de dado, Int, float etc é necessário encapsular o input dentro de um comando que converte para o tipo desejado. "
        }

    const howToReadAnInt = {
        title: "Como ler um Int?",
        contentText: "Para receber um int basta fazer isso:",
        contentCode: `
            #Aqui você está dizendo "Vou inserir um int"
numero = int(input(“Insira um número inteiro: ”))

print(type(numero)) #Mostra o tipo de numero
print(numero)       #Mostra o valor de numero
        `
    }

    const howToReadAnFloat = {
        title: "Como ler um float?",
        contentText: "Para receber um float basta fazer isso:\n\n obs: lembre que os números decimais são determinados com ponto e não com vírgula em python",
        contentCode: `
            #Aqui você está dizendo "Vou inserir um float"
numero = float(input(“Insira um número com ponto”)) 

print(type(numero)) #Mostra o tipo de numero
print(numero)       #Mostra o valor de numero
        `
    }

    const blocksToSend: Block[] = [
        {
            cardType: "code",
            data: introductionCard
        },
        {
            cardType: "text",
            data: importantPointCard
        },
        {
            cardType: "code",
            data: howToReadAnInt
        },
        {
            cardType: "code",
            data: howToReadAnFloat
        }
    ]

    return (
        <div>
            <CodePageTemplate 
                pageTitle={pageTitle} 
                pageSubtitle={pageSubtitle}
                blocks={blocksToSend}
            />

            <PythonRunnerComponent />
        </div>
    );
}