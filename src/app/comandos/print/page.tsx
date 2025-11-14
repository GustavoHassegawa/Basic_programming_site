import PythonRunnerComponent from "@/components/python/pythonRunnerComponent";
import { CodePageTemplate, type Block } from "@/components/templates/CodePageTemplate";
import { Content } from "next/font/google";

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

    const exerciseOneCard = 
    {
        title: "Exercício 1",
        text:"Escreva um programa que exiba a frase: Olá! Sou estudante da UFABC e estou aprendendo Python.\n\n Resultado esperado: \n Olá! Sou estudante da UFABC e estou aprendendo Python.",
    }

    const exerciseTwoCard = {
        title: "Exercício 2",
        text: "Escreva um programa que exiba seu nome, RA e curso em três linhas separadas, usando apenas uma única chamada à função print().\n\nResultado esperado:\nNome: João Silva\nRA: 123456\nCurso: Ciência e Tecnologia"
    }

    const exerciseThreeCard = {
        title: "Exercício 3",
        text: "Exiba a frase: A área do círculo é pi * r^2 usando a função print(), substituindo pi e r^2 por 3.14159 e 4.0.\n\nResultado esperado:\nA área do círculo é 3.14159 * 4.0"
    }

    const blocksToSend: Block[] = [
        {
            cardType:"code",
            data: codeTextCard
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