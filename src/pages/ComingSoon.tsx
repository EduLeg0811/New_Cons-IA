import { ArrowLeft, Construction } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";

const PAGE_NAMES: Record<string, string> = {
  "/mancia": "Bibliomancia Digital",
  "/biblio-wv": "Bibliografia de Livros",
  "/biblio-verbete": "Bibliografia de Verbetes",
  "/ragbot": "ConsBOT",
  "/search-book": "Busca em Livros & Tratados",
  "/search-verb": "Definologia de Verbetes",
  "/search-ccg": "Questões do Conscienciograma",
};

const ComingSoon = () => {
  const { pathname } = useLocation();
  const name = PAGE_NAMES[pathname] || "Página";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center gap-6 px-4 text-center">
        <Construction className="h-16 w-16 text-primary" />
        <h1 className="text-2xl font-bold text-foreground">{name}</h1>
        <p className="text-muted-foreground max-w-md">
          Este módulo está conectado ao seu backend Flask. Configure a URL da API para ativá-lo.
        </p>
        <Link
          to="/"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar ao Início
        </Link>
      </main>
    </div>
  );
};

export default ComingSoon;
