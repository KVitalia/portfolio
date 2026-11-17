import Link from "next/link";

const navLinks = [
  { label: "Works", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Contacts", href: "#contact" },
];

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 sm:px-10">
      <Link
        href="/"
        className="font-istok text-[40px] leading-none font-normal text-[#1e1e1e] sm:text-[64px]"
      >
        VITALIA KUMESKA
      </Link>

      <nav className="hidden items-center gap-10 font-sans text-base font-medium text-[#1e1e1e] md:flex">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:opacity-70">
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="#contact"
        className="border-2 border-[#e3464b] bg-white/50 px-4 py-2.5 font-sans text-base font-medium text-[#1e1e1e] transition-opacity hover:opacity-80"
      >
        Write Me
      </Link>
    </header>
  );
}
