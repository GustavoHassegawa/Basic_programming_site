import { PageTitleBlock } from "@/components/molecule/PageTitleBlock";
import { CodeTextCard } from "@/components/organism/CodeTextCard";

export default function ComandsPage() {
    const title = "Comandos Básicos";
    const subtitle = "Aprenda comandos básicos"
    const card1 = {
        title: "Você entende este código?",
        contentText: "Se não conseguiu entender nada ou tem dúvidas, vamos te ajudar!",
        contentCode: 
                `
def fibonacci_iterativo(n):
    if n <= 0:
        return []
    if n == 1:
        return [0]

    a, b = 0, 1
    sequencia = [a, b]

    for _ in range(2, n):
        proximo = a + b
        sequencia.append(proximo)
        a = b
        b = proximo
        
    return sequencia

termos = 12
resultado = fibonacci_iterativo(termos)
print(f"Fibonacci de {termos} termos: {resultado}")
        `,
        language: 'python',
    }

    return(
        <main>
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-6 bg-background text-foreground">
                <PageTitleBlock title={title} subtitle={subtitle}/>
                <CodeTextCard data={card1} titleAs="h2" nextPage="/comandos/print"/>
            </div>
        </main>
    );
}