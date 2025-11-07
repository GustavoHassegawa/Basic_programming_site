import { PageTitleBlock } from "@/components/molecule/PageTitleBlock";
import { SimpleTextCard } from "@/components/organism/SimpleTextCard";

export default function computerScienceFundamentals() {
    const pageTitle = "Fundamentos da computação";
    const pageSubtitle = "";
    
    const pageIntroText = {
        title: "Fundamentos da computação",
        text: "Computação é o campo dedicado ao estudo e à utilização de máquinas capazes de processar informações, reunindo hardware e software para a solução de diferentes tipos de problemas. Trata-se de uma área interdisciplinar que integra conhecimentos de ciência, engenharia, matemática e lógica, com o objetivo de desenvolver sistemas que executam tarefas de forma automática por meio de algoritmos.\n\n Entre seus principais ramos estão a ciência da computação, a engenharia da computação e a tecnologia da informação, cujas aplicações abrangem desde o desenvolvimento de programas e jogos até a construção de complexas infraestruturas digitais."
    }

    const interdisciplinarText = {
        title:"Programação é só na computação ?",
        text:"Não limitada à computação, os estudos de programação podem ser levados a diversos outros campos interdisciplinares como:\n\nBiologia Computacional (Bioinformática; Biomodelagem computacional; Genômica computacional; Simulação molecular; Biologia Sistêmica; Prognóstico de estruturas protéicas; Bioquímica e Biofísica)\n\nEngenharia (Mecatrônica; Controle e Automação; Telecomunicação)\n\nFísica computacional (Neurociência; Linguística; Mecânica, eletrodinâmica e química computacional; Estatística;Relatividade numérica; Física de partículas; Astrofísica)"
    }

    const dataText = {
        title:"O que são dados ?",
        text:"Dados são fatos brutos, como números, palavras ou medidas — por exemplo, a temperatura de um dia ou o número de alunos em uma sala. Sozinhos, eles ainda não têm muito significado."
    }

    const infoText = {
        title:"O que são informações ?",
        text:"As informações surgem quando os dados são organizados e interpretados. Por exemplo, dizer que “a temperatura média da semana foi de 25 °C” já é uma informação, pois dá sentido aos dados."
    }

    const simulText = {
        title:"O que são simulações ?",
        text:"Simulações são representações ou imitações de situações reais feitas em um ambiente controlado (como em um computador) para testar, prever ou entender como algo funciona. Por exemplo, simular o trânsito de uma cidade para planejar melhorias."
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-6 bg-background text-foreground">
            <PageTitleBlock title={pageTitle} subtitle={pageSubtitle}/>
            <SimpleTextCard titleAs="h2" data={pageIntroText}/>
            <SimpleTextCard titleAs="h2" data={interdisciplinarText}/>
            <SimpleTextCard titleAs="h2" data={dataText}/>
            <SimpleTextCard titleAs="h2" data={infoText}/>
            <SimpleTextCard titleAs="h2" data={simulText}/>
        </div>
    );
}