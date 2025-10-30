import { CodePageTemplate } from "@/components/templates/CodePageTemplate";

export default function DecisionsPage() {
    const pageTitle = "Decisão";
    const pageSubtitle = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem dignissimos reprehenderit minus cupiditate. Qui est expedita commodi rerum necessitatibus beatae ipsum debitis placeat tempora. Nemo aspernatur ipsa laborum aliquid beatae.";
    const codeTextCards = [
        {
            title: "if(condição)",
            contentText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias error blanditiis deleniti rem dignissimos in id quis labore eveniet. Ducimus voluptatum quaerat officia itaque aliquid mollitia architecto at! Velit, temporibus.",
            contentCode: `
if(valor == 10):
    return "O valor é 10"
            `,
            language: "python"
        },
        {
            title: "else",
            contentText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias error blanditiis deleniti rem dignissimos in id quis labore eveniet. Ducimus voluptatum quaerat officia itaque aliquid mollitia architecto at! Velit, temporibus.",
            contentCode: `
if(valor == 10):
    return "O valor é 10"
else:
    return "O valor não é 10"
            `,
            language: "python"
        },
        {
            title: "elif(condição)",
            contentText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias error blanditiis deleniti rem dignissimos in id quis labore eveniet. Ducimus voluptatum quaerat officia itaque aliquid mollitia architecto at! Velit, temporibus.",
            contentCode: `
if (valor == 10):
    return "O valor é 10"
elif (valor == 20):
    return "O valor é 20"
else:
    return "O valor não é 10 nem 20"
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