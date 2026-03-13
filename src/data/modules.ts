import { BookOpen, List, Book, GraduationCap, Globe, Search, Sparkles, MessageSquare } from "lucide-react";
import React from "react";

export interface ModuleItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  external?: boolean;
  badge?: string;
}

export interface CategoryData {
  key: string;
  title: string;
  subtitle: string;
  accentVar: string;
  bgVar: string;
  landingLabel: string;
  landingDescription: string;
  landingIcon: React.ComponentType<{ className?: string }>;
  route: string;
  items: ModuleItem[];
}

export const categories: CategoryData[] = [
  {
    key: "busca",
    title: "Busca IA",
    subtitle: "Busca inteligente de palavras em livros, verbetes e questões",
    accentVar: "--search-primary",
    bgVar: "--search-bg",
    landingLabel: "Buscar em Livros e Verbetes",
    landingDescription: "Buscar palavras ou termos específicos nos livros, tratados e verbetes da Conscienciologia.",
    landingIcon: Search,
    route: "/busca",
    items: [
      {
        title: "Livros & Tratados",
        description: "Pesquise palavras e trechos em centenas de livros e tratados conscienciológicos.",
        icon: Search,
        href: "https://cons-ia.org/index_search_book.html",
        external: true,
        //badge: "★",
      },
      {
        title: "Definologia de Verbetes",
        description: "Busque definições em milhares de verbetes da Enciclopédia da Conscienciologia.",
        icon: Book,
        href: "https://cons-ia.org/index_search_verb.html",
        external: true,
        //badge: "★",
      },
      {
        title: "Conscienciograma",
        description: "Explore as questões do Conscienciograma para autoavaliação consciencial.",
        icon: Book,
        href: "https://cons-ia.org/index_search_ccg.html",
        external: true,
      },
    ],
  },
  {
    key: "biblio",
    title: "Biblio IA",
    subtitle: "Referências de livros, artigos e verbetes",
    accentVar: "--biblio-primary",
    bgVar: "--biblio-bg",
    landingLabel: "Consultar Bilbiografia",
    landingDescription: "Consultar referências bibliográficas completas de livros e verbetes conscienciológicos.",
    landingIcon: List,
    route: "/bibliografia",
    items: [
      {
        title: "Bibliografia de Livros",
        description: "Consulte referências bibliográficas completas de livros conscienciológicos.",
        icon: List,
        href: "https://cons-ia.org/index_biblio_wv.html",
        external: true,
        //badge: "★",
      },
      {
        title: "Bibliografia de Verbetes",
        description: "Referências bibliográficas de verbetes da Enciclopédia da Conscienciologia.",
        icon: Book,
        href: "https://cons-ia.org/index_biblio_verbete.html",
        external: true,
        //badge: "★",
      },
    ],
  },
  {
    key: "bots",
    title: "Bots IA",
    subtitle: "Assistentes inteligentes de conversação",
    accentVar: "--bots-primary",
    bgVar: "--bots-bg",
    landingLabel: "Conversar com Assistentes IA",
    landingDescription: "Tirar dúvidas e explorar temas conscienciológicos com assistentes de inteligência artificial.",
    landingIcon: MessageSquare,
    route: "/bots",
    items: [
      {
        title: "ConsGPT",
        description: "Assistente GPT especializado em Conscienciologia via ChatGPT.",
        icon: MessageSquare,
        href: "https://chatgpt.com/g/g-68a5d68b96c4819189dd1e6fb0def83f-consgpt",
        external: true,
      },
      {
        title: "ConsLM",
        description: "Notebook IA do Google treinado com fontes conscienciológicas.",
        icon: Sparkles,
        href: "https://notebooklm.google.com/notebook/c3528e65-0c2b-4a80-b3f2-2f22e3626b67",
        external: true,
      },
      {
        title: "ConsBOT",
        description: "Chatbot RAG com busca em documentos conscienciológicos.",
        icon: GraduationCap,
        href: "https://cons-ia.org/index_ragbot.html",
        external: true,
        //badge: "★",
      },
    ],
  },
  {
    key: "apps",
    title: "Apps IA",
    subtitle: "Aplicativos diversos com inteligência artificial",
    accentVar: "--apps-primary",
    bgVar: "--apps-bg",
    landingLabel: "Usar Aplicativos IA",
    landingDescription: "Bibliomancia digital, quizzes e flashcards para estudo conscienciológico.",
    landingIcon: Sparkles,
    route: "/apps",
    items: [
      {
        title: "Bibliomancia Digital",
        description: "Receba pensatas aleatórias do Léxico de Ortopensatas.",
        icon: BookOpen,
        href: "https://cons-ia.org/index_mancia.html",
        external: true,
      },
      {
        title: "Quiz Conscienciológico",
        description: "Teste seus conhecimentos em temas conscienciológicos.",
        icon: Sparkles,
        href: "https://notebooklm.google.com/notebook/c3528e65-0c2b-4a80-b3f2-2f22e3626b67?artifactId=8f6fc286-021f-4184-b572-7f17c8561539",
        external: true,
      },
      {
        title: "Flashcards",
        description: "Estude com flashcards gerados por IA sobre temas conscienciológicos.",
        icon: BookOpen,
        href: "https://notebooklm.google.com/notebook/c3528e65-0c2b-4a80-b3f2-2f22e3626b67?artifactId=2da2f57f-996c-4efd-b24c-c2f49ba8b452",
        external: true,
      },
    ],
  },
  {
    key: "links",
    title: "Links Externos",
    subtitle: "Páginas úteis da Conscienciologia",
    accentVar: "--utils-primary",
    bgVar: "--utils-bg",
    landingLabel: "Links Externos",
    landingDescription: "Acesse portais, enciclopédias e acervos da Conscienciologia.",
    landingIcon: Globe,
    route: "/links",
    items: [
      {
        title: "ICGE",
        description: "Instituto de Cognopolítica e Governança da Evolução.",
        icon: Globe,
        href: "https://www.icge.org.br/",
        external: true,
      },
      {
        title: "Enciclopédia",
        description: "Enciclopédia Digital da Conscienciologia.",
        icon: Globe,
        href: "https://enciclopediadaconscienciologia.org/",
        external: true,
      },
      {
        title: "Periódicos",
        description: "Portal de periódicos científicos conscienciológicos.",
        icon: Globe,
        href: "https://periodicos.conscienciologia.org.br/",
        external: true,
      },
      {
        title: "Livros em PDF",
        description: "Acervo de livros conscienciológicos em formato PDF.",
        icon: Globe,
        href: "https://drive.google.com/drive/folders/1Mp6Zfhq-peIYlo9Js0wYRX2DnRjFYyUj?usp=sharing",
        external: true,
      },
    ],
  },
];
