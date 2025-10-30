import { CodePageTemplate } from "@/components/templates/CodePageTemplate";

export default function DecisionsPage() {
    const pageTitle = "Loops e Repetições";
    const pageSubtitle = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem dignissimos reprehenderit minus cupiditate. Qui est expedita commodi rerum necessitatibus beatae ipsum debitis placeat tempora. Nemo aspernatur ipsa laborum aliquid beatae.";
    const codeTextCards = [
        {
            title: "while(condição)",
            contentText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias error blanditiis deleniti rem dignissimos in id quis labore eveniet. Ducimus voluptatum quaerat officia itaque aliquid mollitia architecto at! Velit, temporibus.",
            contentCode: `
while(valor < 10):
    print(valor)
    valor = valor + 1
            `,
            language: "python"
        },
        {
            title: "for(condição)",
            contentText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias error blanditiis deleniti rem dignissimos in id quis labore eveniet. Ducimus voluptatum quaerat officia itaque aliquid mollitia architecto at! Velit, temporibus.",
            contentCode: `
for i in range(5):
    print(i)
            `,
            language: "python"
        }
    ]

    return (
        <CodePageTemplate 
            pageTitle={pageTitle} 
            pageSubtitle={pageSubtitle}
            codeCards={codeTextCards}
        />
    );
}