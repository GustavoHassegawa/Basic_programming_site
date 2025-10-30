import { SimpleTextCard } from '@/components/organism/SimpleTextCard';
import styles from './page.module.css';
import { PageTitleBlock } from '@/components/molecule/PageTitleBlock';

export default function HomePage() {
  const title = "Bem-vindo!"
  const subtitle = "Sua jornada no mundo Python começa aqui, de forma simples e descontraída."
  const texto1 = {
    title: "O que você vai encontrar neste site",
    text: "Este é um espaço dedicado a iniciantes e a todos que desejam dar os primeiros passos na programação. Nosso foco é o Python, uma das linguagens mais amigáveis para quem está começando. Você aprenderá a utilizar os comandos mais básicos de Python de uma maneira fácil, prática e sem complicação.",
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-6 bg-background text-foreground">
      <PageTitleBlock title={title} subtitle={subtitle}/>
      <SimpleTextCard titleAs='h2' data={texto1}/>
    </div>
  );
}