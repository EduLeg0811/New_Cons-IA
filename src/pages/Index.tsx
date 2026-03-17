import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoIntro from "@/components/LogoIntro";
import BentoCard from "@/components/BentoCard";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { BookOpen, List, Book, GraduationCap, Globe, Search, Sparkles, MessageSquare } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <>
      <LogoIntro />
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />

        <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Ferramentas de IA para <span className="text-primary">Conscienciologia</span>
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground leading-relaxed">
              Aplicativos, bots, buscas e referências inteligentes para pesquisa e estudo conscienciológico.
            </p>
          </motion.div>

          <section className="mb-10">
            <SectionHeader
              title="Busca IA"
              subtitle="Busca inteligente de palavras em livros, verbetes e questões"
              accentVar="--search-primary"
            />
            <div className="flex gap-3 overflow-x-auto pb-2">
              {[
                {
                  title: "Livros & Tratados",
                  description: "Pesquise palavras e trechos em livros e tratados de autoria de Waldo Vieira.",
                  icon: <Search className="h-4.5 w-4.5" />,
                  href: "/search-book",
                  badge: "★",
                },
                {
                  title: "Definologia de Verbetes",
                  description: "Busque palavras na Definologia dos verbetes da Enciclopédia da Conscienciologia.",
                  icon: <Book className="h-4.5 w-4.5" />,
                  href: "/search-verb",
                  badge: "★",
                },
                {
                  title: "Questões do Conscienciograma",
                  description: "Explore as questões do Conscienciograma para autoavaliação consciencial.",
                  icon: <Book className="h-4.5 w-4.5" />,
                  href: "/search-ccg",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="min-w-[260px] flex-1"
                >
                  <BentoCard {...item} accentVar="--search-primary" bgVar="--search-bg" />
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <SectionHeader
              title="Biblio IA"
              subtitle="Referências de livros, artigos e verbetes"
              accentVar="--biblio-primary"
            />
            <div className="flex gap-3 overflow-x-auto pb-2">
              {[
                {
                  title: "Bibliografia de Livros",
                  description: "Consulte referências bibliográficas completas dos livros e tratados de autoria de Waldo Vieira.",
                  icon: <List className="h-4.5 w-4.5" />,
                  href: "/biblio-wv",
                  badge: "★",
                },
                {
                  title: "Bibliografia de Verbetes",
                  description: "Referências bibliográficas de verbetes da Enciclopédia da Conscienciologia.",
                  icon: <Book className="h-4.5 w-4.5" />,
                  href: "/biblio-verbete",
                  badge: "★",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="min-w-[260px] flex-1"
                >
                  <BentoCard {...item} accentVar="--biblio-primary" bgVar="--biblio-bg" />
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <SectionHeader
              title="Bots IA"
              subtitle="Assistentes inteligentes de conversação"
              accentVar="--bots-primary"
            />
            <div className="flex gap-3 overflow-x-auto pb-2">
              {[
                {
                  title: "ConsGPT",
                  description: "Assistente ChatGPT especialista em Conscienciologia.",
                  icon: <MessageSquare className="h-4.5 w-4.5" />,
                  href: "https://chatgpt.com/g/g-68a5d68b96c4819189dd1e6fb0def83f-consgpt",
                  external: true,
                },
                {
                  title: "ConsLM",
                  description: "Notebook IA do Google treinado com fontes conscienciológicas.",
                  icon: <Sparkles className="h-4.5 w-4.5" />,
                  href: "https://notebooklm.google.com/notebook/c3528e65-0c2b-4a80-b3f2-2f22e3626b67",
                  external: true,
                },
                {
                  title: "ConsBOT",
                  description: "Chatbot RAG desenvolvido pela Conscienciologia.",
                  icon: <GraduationCap className="h-4.5 w-4.5" />,
                  href: "/ragbot",
                  badge: "★",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="min-w-[260px] flex-1"
                >
                  <BentoCard {...item} accentVar="--bots-primary" bgVar="--bots-bg" />
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <SectionHeader
              title="Apps IA"
              subtitle="Aplicativos diversos com Inteligência Artificial"
              accentVar="--apps-primary"
            />
            <div className="flex gap-3 overflow-x-auto pb-2">
              {[
                {
                  title: "Bibliomancia Digital",
                  description: "Sorteie pensatas aleatórias do Léxico de Ortopensatas.",
                  icon: <BookOpen className="h-4.5 w-4.5" />,
                  href: "/mancia",
                },
                {
                  title: "Quiz Conscienciológico",
                  description: "Teste seus conhecimentos em temas conscienciológicos.",
                  icon: <Sparkles className="h-4.5 w-4.5" />,
                  href: "https://notebooklm.google.com/notebook/c3528e65-0c2b-4a80-b3f2-2f22e3626b67?artifactId=8f6fc286-021f-4184-b572-7f17c8561539",
                  external: true,
                },
                {
                  title: "Flashcards de Temas",
                  description: "Estude com flashcards gerados por IA sobre temas conscienciológicos.",
                  icon: <BookOpen className="h-4.5 w-4.5" />,
                  href: "https://notebooklm.google.com/notebook/c3528e65-0c2b-4a80-b3f2-2f22e3626b67?artifactId=2da2f57f-996c-4efd-b24c-c2f49ba8b452",
                  external: true,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="min-w-[260px] flex-1"
                >
                  <BentoCard {...item} accentVar="--apps-primary" bgVar="--apps-bg" />
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <SectionHeader
              title="Links Externos"
              subtitle="Páginas úteis da Conscienciologia"
              accentVar="--utils-primary"
            />
            <div className="flex gap-3 overflow-x-auto pb-2">
              {[
                {
                  title: "ICGE",
                  description: "Instituto Cognopolitano de Geografia e Estatística.",
                  icon: <Globe className="h-4.5 w-4.5" />,
                  href: "https://www.icge.org.br/",
                  external: true,
                },
                {
                  title: "Enciclopédia",
                  description: "Enciclopédia da Conscienciologia Digital",
                  icon: <Globe className="h-4.5 w-4.5" />,
                  href: "https://enciclopediadaconscienciologia.org/",
                  external: true,
                },
                {
                  title: "Periódicos",
                  description: "Portal de periódicos científicos da Conscienciologia.",
                  icon: <Globe className="h-4.5 w-4.5" />,
                  href: "https://periodicos.conscienciologia.org.br/",
                  external: true,
                },
                {
                  title: "Livros em PDF",
                  description: "Acervo de livros de Conscienciologia em formato PDF.",
                  icon: <Globe className="h-4.5 w-4.5" />,
                  href: "https://drive.google.com/drive/folders/1Mp6Zfhq-peIYlo9Js0wYRX2DnRjFYyUj?usp=sharing",
                  external: true,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="min-w-[260px] flex-1"
                >
                  <BentoCard {...item} accentVar="--utils-primary" bgVar="--utils-bg" />
                </motion.div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
