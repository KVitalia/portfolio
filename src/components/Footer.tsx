const links = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "Resume", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="mx-auto w-full max-w-7xl px-6 pt-10 pb-20 sm:px-10">
      <div className="mx-auto w-full max-w-[530px] border-t border-[#1e1e1e]/20" />

      <div className="mt-16 flex flex-col items-center gap-4 text-center">
        <h3 className="font-sans text-[24px] font-medium tracking-[0.02em] text-[#1e1e1e]">
          Let&apos;s Connect
        </h3>

        <a
          href="mailto:vitalia@gmail.com"
          className="font-sans text-[20px] font-medium tracking-[0.01em] text-[#1e1e1e]"
        >
          vitalia@gmail.com
        </a>

        <div className="mt-2 flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-base font-normal tracking-[0.01em] text-[#e3464b] underline underline-offset-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
