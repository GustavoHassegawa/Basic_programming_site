import { CodePageTemplate } from "@/components/templates/CodePageTemplate";

export default function TypesPage() {
    const pageTitle = "Tipos de Dados";
    const pageSubtitle = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem dignissimos reprehenderit minus cupiditate. Qui est expedita commodi rerum necessitatibus beatae ipsum debitis placeat tempora. Nemo aspernatur ipsa laborum aliquid beatae.";
    const TextCards = [
        {
            title: "Integer",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis incidunt, harum facilis in consequatur, quae distinctio adipisci repellendus eaque eos quam minima fugit magni, exercitationem porro tenetur accusamus iure maxime?"
        },
        {
            title: "Float",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis incidunt, harum facilis in consequatur, quae distinctio adipisci repellendus eaque eos quam minima fugit magni, exercitationem porro tenetur accusamus iure maxime?"
        },
       {
            title: "String",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis incidunt, harum facilis in consequatur, quae distinctio adipisci repellendus eaque eos quam minima fugit magni, exercitationem porro tenetur accusamus iure maxime?"
        },
        {
            title: "Boolean",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis incidunt, harum facilis in consequatur, quae distinctio adipisci repellendus eaque eos quam minima fugit magni, exercitationem porro tenetur accusamus iure maxime?"
        }
    ]

    return (
        <CodePageTemplate 
            pageTitle={pageTitle} 
            pageSubtitle={pageSubtitle}
            textCards={TextCards}
        />
    );
}