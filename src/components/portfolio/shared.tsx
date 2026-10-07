import { useEffect, useRef, type ReactNode } from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
export function WhatsAppIcon({ className = "", size = 18 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.7 7.4L3 20.5l1.4-4.7a8.5 8.5 0 1 1 16.1-4.1Z" />
      <path d="m8.6 7.3 1.3 2.5-1.1 1.1c.8 1.5 1.8 2.5 3.4 3.3l1.1-1.1 2.5 1.2c.5.3.4 1.5-.3 2-2 1.3-5.4-.7-7.2-2.5-1.9-2-3.4-4.8-2-6.3.6-.6 1.9-.7 2.3-.2Z" />
    </svg>
  );
}
export const socialItems = [
  { name: "GitHub", href: profile.github, Icon: Github },
  { name: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
  { name: "WhatsApp", href: profile.whatsapp, Icon: WhatsAppIcon },
  { name: "E-mail", href: `mailto:${profile.email}`, Icon: Mail },
];
export function SocialLinks() {
  return (
    <div className="social-links">
      {socialItems.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          className="social-link"
          aria-label={name}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
        >
          <Icon size={15} />
          <span className="social-tooltip" role="tooltip">
            {name}
          </span>
        </a>
      ))}
    </div>
  );
}
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
export function SectionHeading({
  number,
  eyebrow,
  title,
  accent,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div className="eyebrow">
        {number} / {eyebrow}
      </div>
      <h2>
        {title}
        {accent && (
          <>
            {" "}
            <span>{accent}</span>
          </>
        )}
      </h2>
      {description && <p className="section-intro">{description}</p>}
    </div>
  );
}
export { ArrowUpRight };
