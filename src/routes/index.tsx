import { createFileRoute } from "@tanstack/react-router";
import { Header, Hero } from "@/components/portfolio/header-hero";
import { About, Skills } from "@/components/portfolio/about-skills";
import { Projects, Certificates } from "@/components/portfolio/projects-certificates";
import { Education, Contact, Footer } from "@/components/portfolio/education-contact";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paulo Vitor Marques | Desenvolvedor Front-End & JavaScript" },
      {
        name: "description",
        content:
          "Conheça Paulo Vitor Marques de Almeida: desenvolvedor Front-End e estudante de Engenharia de Software. Projetos, tecnologias e contato.",
      },
      { property: "og:title", content: "Paulo Vitor Marques — Código, criatividade e inovação" },
      {
        property: "og:description",
        content:
          "Portfólio de desenvolvimento web, JavaScript e experiências digitais. Explore meus projetos e vamos conversar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});
function Index() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:p-3"
      >
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
