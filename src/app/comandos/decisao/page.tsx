import { Block, CodePageTemplate } from "@/components/templates/CodePageTemplate";

export default function DecisionsPage() {
    const pageTitle = "Decisão";
    const pageSubtitle = "Nem sempre o programa deve fazer a mesma coisa — às vezes, ele precisa tomar decisões, assim como a gente faz o tempo todo.\nAs estruturas de decisão (if, elif, else) permitem que o computador pense por conta própria, seguindo condições que você define.\nCom elas, o programa escolhe diferentes caminhos dependendo das situações: se uma condição for verdadeira, faz uma coisa; se não, faz outra.\n\nEsses comandos dão inteligência ao seu código, permitindo que ele se adapte, reaja e escolha o que fazer em cada caso — como um cérebro digital que segue sua lógica.";
    const ifCard = 
        {
            title: "if(condição)",
            contentText: "Como um computador escolhe o que ele irá fazer? O if é usado quando o computador precisa tomar uma decisão!\nPodemos pensar nele como uma pergunta lógica:\n\n\“Se isso for verdade, então faça aquilo.\”\n\nSe a condição dentro do if for verdadeira, o bloco de código é executado. Se for falsa, ele ignora e segue o programa.",
            contentCode: `
idade = int(input("Digite sua idade: "))

if idade >= 18:
    print("Você é maior de idade!")
            `,
            language: "python"
        }
    const elseCard = 
        {
            title: "else",
            contentText: "O else serve para casos alternativos — quando a condição do if não é verdadeira.\nOu seja, \“se não for isso, faça aquilo\”.\nO else não tem condição, ele executa quando nenhum if anterior for verdadeiro.",
            contentCode: `
idade = int(input("Digite sua idade: "))

if idade >= 18:
    print("Você é maior de idade!")
else:
    print("Você ainda é menor de idade.")
            `,
            language: "python"
        }
    
    const elifCard = 
        {
            title: "elif(condição)",
            contentText: "O elif é o meio-termo entre if e else.\nServe para testar outras possibilidades, criando vários caminhos.\nPense nele como um \“senão se\”.\n\nO Python lê de cima pra baixo:\nPrimeiro testa o if,\ndepois o elif (se o if for falso),\ne por último o else (se todos os anteriores forem falsos).",
            contentCode: `
if nota >= 6:
    print("Aprovado!")
elif nota >= 4:
    print("Recuperação")
else:
    print("Reprovado")
            `,
            language: "python"
        }

    const blocksToSend: Block[] = [
        {
            cardType:"code",
            data: ifCard
        },
        {
            cardType:"code",
            data: elseCard
        },
        {
            cardType:"code",
            data: elifCard
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