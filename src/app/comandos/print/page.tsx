import { CodePageTemplate, type Block } from "@/components/templates/CodePageTemplate";

export default function PrintPage() {
    const pageTitle = "print";
    const pageSubtitle = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem dignissimos reprehenderit minus cupiditate. Qui est expedita commodi rerum necessitatibus beatae ipsum debitis placeat tempora. Nemo aspernatur ipsa laborum aliquid beatae.";
    const codeTextCard = 
    {
        title: "print()",
        contentText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias error blanditiis deleniti rem dignissimos in id quis labore eveniet. Ducimus voluptatum quaerat officia itaque aliquid mollitia architecto at! Velit, temporibus.",
        contentCode: `
            print("Hello World!")
        `,
        language: "python"
    }

    const blocksToSend: Block[] = [
        {
            cardType:"code",
            data: codeTextCard
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