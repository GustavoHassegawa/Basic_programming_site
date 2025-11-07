import { SimpleTextCard } from '@/components/organism/SimpleTextCard';
import styles from './page.module.css';
import { PageTitleBlock } from '@/components/molecule/PageTitleBlock';

export default function HomePage() {
  const title = "Bem-vindo!"
  const subtitle = "Sua jornada no mundo Python começa aqui, de forma simples e descontraída."
  const introText = {
    title: "O que você vai encontrar neste site",
    text: "O propósito desse projeto é auxiliar os alunos da Universidade Federal do ABC (UFABC) que possuem dificuldade nas matérias do ciclo básico voltadas ao estudo de programação. Explicação das disciplinas ofertadas:",
  }
  const bccText = {
    title: "Bases computacionais da ciência",
    text: "Essa matéria busca introduzir a lógica de programação e apresentar ferramentas computacionais básicas ao aluno. Nela você aprende a relação da computação com a matemática de forma prática, se familiarizando com a programação."
  }
  const piText = {
    title: "Processamento da Informação",
    text: "Essa matéria apresenta os fundamentos da manipulação e tratamento de dados através da lógica de programação. Introduz algoritmos, operadores e estruturas, junto com melhores práticas de programação."
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-6 bg-background text-foreground">
      <PageTitleBlock title={title} subtitle={subtitle}/>
      <SimpleTextCard titleAs='h2' data={introText}/>

      <SimpleTextCard titleAs='h2' data={bccText}/>
      <SimpleTextCard titleAs='h2' data={piText}/>
    </div>
  );
}