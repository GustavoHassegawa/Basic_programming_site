import { CodePageTemplate } from "@/components/templates/CodePageTemplate";

export default function InputPage() {
    const pageTitle = "input";
    const pageSubtitle = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem dignissimos reprehenderit minus cupiditate. Qui est expedita commodi rerum necessitatibus beatae ipsum debitis placeat tempora. Nemo aspernatur ipsa laborum aliquid beatae.";
    const codeTextCards = [
        {
            title: "input()",
            contentText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias error blanditiis deleniti rem dignissimos in id quis labore eveniet. Ducimus voluptatum quaerat officia itaque aliquid mollitia architecto at! Velit, temporibus.",
            contentCode: `
                entrada = input()
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