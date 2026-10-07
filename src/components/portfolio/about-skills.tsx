import {
  Code2,
  Workflow,
  Cpu,
  BookOpen,
  Monitor,
  Sparkles,
  Blocks,
  Figma,
  GitBranch,
  Coffee,
  Leaf,
  Hexagon,
  Braces,
  Atom,
} from "lucide-react";
import portrait from "@/assets/paulo-vitor.png.asset.json";
import { skills, mastery } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./shared";
const highlights = [
  { title: "Front-End", description: "JavaScript e desenvolvimento de interfaces", Icon: Code2 },
  { title: "Programação", description: "Lógica e resolução de problemas", Icon: Workflow },
  { title: "Tecnologia", description: "Ferramentas modernas de desenvolvimento", Icon: Cpu },
  { title: "Aprendizado contínuo", description: "Cursos e evolução profissional", Icon: BookOpen },
];
export function About() {
  return (
    <section id="sobre" className="section-band alternate-band">
      <div className="container-shell">
        <Reveal className="about-grid">
          <div className="about-photo">
            <img
              src={portrait.url}
              alt="Paulo Vitor Marques, desenvolvedor de software"
              width="340"
              height="365"
              loading="lazy"
            />
            <div className="photo-caption">
              <Code2 size={18} className="text-primary" />
              <div>
                Mais que código.
                <span className="block text-muted-foreground mt-1">Propósito em cada projeto.</span>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading number="01" eyebrow="Um pouco sobre mim" title="Sobre" accent="Mim" />
            <div className="about-text">
              <p>
                Sou <strong>Paulo Vitor Marques de Almeida</strong>, desenvolvedor com foco em
                Front-End e estudante de <strong>Engenharia de Software</strong>. Encontrei na
                programação uma forma de conectar criatividade, lógica e a vontade de construir algo
                que faça a diferença.
              </p>
              <p className="mt-4">
                Meu interesse está em transformar ideias em interfaces claras, funcionais e
                responsivas. Estou constantemente estudando, explorando novas ferramentas e
                colocando o aprendizado em prática em projetos próprios.
              </p>
              <p className="mt-4">
                Para mim, evoluir na tecnologia é um processo contínuo: aprender, experimentar,
                resolver problemas e aprimorar cada detalhe.
              </p>
            </div>
            <div className="about-highlights">
              {highlights.map(({ title, description, Icon }) => (
                <article key={title} className="mini-card">
                  <Icon size={19} className="text-metallic" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
const skillIcons: Record<string, typeof Code2> = {
  react: Atom,
  frontend: Monitor,
  logic: Workflow,
  claude: Sparkles,
  lovable: Blocks,
  figma: Figma,
  git: GitBranch,
  java: Coffee,
  spring: Leaf,
  node: Hexagon,
  json: Braces,
};
export function Skills() {
  return (
    <section id="habilidades" className="section-band">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            number="02"
            eyebrow="Minha stack"
            title="Tecnologias &"
            accent="Habilidades"
            description="As ferramentas que conectam ideias, código e experiências digitais."
          />
          <div className="skill-grid">
            {skills.map((skill) => {
              const Icon = skillIcons[skill.id];
              return (
                <article
                  tabIndex={0}
                  key={skill.id}
                  className={`skill-card skill-${skill.id}`}
                  aria-label={`${skill.name}: ${skill.description}`}
                >
                  <div className="skill-symbol" aria-hidden="true">
                    {skill.id === "js" ? (
                      <span>JS</span>
                    ) : Icon ? (
                      <Icon size={31} strokeWidth={1.3} />
                    ) : null}
                  </div>
                  <h3>{skill.name}</h3>
                  <p className="skill-description">{skill.description}</p>
                </article>
              );
            })}
          </div>
          <div className="mastery">
            <div className="mastery-header">
              <h3>Nível de conhecimento</h3>
              <span className="font-mono text-[8px] text-muted-foreground">
                NÍVEIS DE REFERÊNCIA • EM EVOLUÇÃO
              </span>
            </div>
            <div className="mastery-grid">
              {mastery.map((item) => (
                <div key={item.name}>
                  <div className="mastery-label">
                    <span>{item.name}</span>
                    <span>{item.level}</span>
                  </div>
                  <div
                    className="progress-track"
                    role="meter"
                    aria-label={item.name}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={item.level === "Avançado" ? 87 : 65}
                    aria-valuetext={item.level}
                  >
                    <div
                      className={`progress-fill ${item.level === "Avançado" ? "level-advanced" : "level-intermediate"}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
