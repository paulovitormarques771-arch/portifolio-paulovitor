import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigation } from "@/lib/portfolio-data";
import portrait from "@/assets/paulo-vitor.png.asset.json";
import { SocialLinks } from "./shared";
export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    navigation.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header className="site-header">
      <div className="container-shell grid h-[76px] grid-cols-[minmax(0,1fr)_auto] items-center gap-5 lg:flex lg:justify-between">
        <a
          href="#inicio"
          aria-label="Paulo Vitor — início"
          className="flex min-w-0 items-center gap-3"
        >
          <span className="brand-mark">&lt;pv/&gt;</span>
          <span className="font-display text-xs font-medium">
            PAULO VITOR
            <span className="block mt-1 font-mono text-[8px] text-muted-foreground">
              FRONT-END DEVELOPER
            </span>
          </span>
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.id}
              className={`nav-link ${active === item.id ? "active" : ""}`}
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação no celular"
          className="grid border-t border-border px-5 pb-4 lg:hidden"
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`py-3 text-sm ${active === item.id ? "text-primary" : "text-muted-foreground"}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
export function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="tech-background" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <i className="particle" key={i} />
        ))}
      </div>
      <div className="container-shell">
        <div className="hero-grid">
          <div className="hero-enter min-w-0">
            <div className="eyebrow">Código. Criatividade. Evolução.</div>
            <h1 className="hero-title">
              Paulo Vitor
              <br />
              <span className="text-metallic">Marques.</span>
              <span className="hero-name-full">PAULO VITOR MARQUES DE ALMEIDA</span>
            </h1>
            <h2 className="hero-role">
              Desenvolvedor <span>Front-End</span>
              <br />
              <span className="text-muted-foreground text-[13px] font-normal">
                JavaScript | Tecnologia &amp; Inovação
              </span>
            </h2>
            <p className="hero-copy">
              Desenvolvedor apaixonado por tecnologia e programação, com foco em desenvolvimento
              Front-End, JavaScript e criação de experiências digitais modernas, funcionais e
              responsivas.
            </p>
            <p className="hero-tagline">// Transformando ideias em experiências digitais.</p>
            <div className="hero-actions">
              <Button asChild variant="portfolio">
                <a href="#projetos">
                  Ver meus projetos <ArrowUpRight />
                </a>
              </Button>
              <Button asChild variant="metallic">
                <a href="#contato">
                  Entrar em contato <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>
          <div className="portrait-scene hero-enter">
            <div className="portrait-frame">
              <img
                className="portrait-image"
                src={portrait.url}
                alt="Paulo Vitor Marques em seu ambiente de desenvolvimento"
                width="365"
                height="365"
                fetchPriority="high"
              />
            </div>
            {["</>", "{ }", "JS", "Git", "HTML", "CSS"].map((token, i) => (
              <span className={`floating-token token-${i}`} key={token} aria-hidden="true">
                {token}
              </span>
            ))}
            <div className="terminal-panel" aria-label="Trecho de código sobre o desenvolvedor">
              <div className="terminal-top">
                <i className="terminal-dot" />
                <i className="terminal-dot" />
                <i className="terminal-dot" />
                <span>developer.js</span>
                <Code2 size={11} className="text-muted-foreground" />
              </div>
              <pre>
                <span className="code-keyword">const</span>
                {" developer = {\n"}
                {"  focus: "}
                <span className="code-string">"Front-End"</span>
                {",\n  language: "}
                <span className="code-string">"JavaScript"</span>
                {",\n  passion: "}
                <span className="code-string">"Technology"</span>
                {"\n}; "}
                <span className="cursor" aria-hidden="true" />
              </pre>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="flex items-center gap-5">
            <span className="hidden font-mono text-[9px] text-muted-foreground sm:inline">
              CONECTE-SE
            </span>
            <SocialLinks />
          </div>
          <a href="#sobre" className="scroll-cue">
            EXPLORE O PORTFÓLIO <ArrowDown size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
