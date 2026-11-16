import Link from "next/link";

const navLinks = [
  { label: "Works", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Contacts", href: "#contact" },
];

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 sm:px-10">
      <Link href="/" className="text-xl font-medium tracking-wide uppercase">
        Vitalia Kumeska
      </Link>

      <nav className="hidden items-center gap-10 text-sm text-neutral-700 md:flex">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-neutral-950">
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="#contact"
        className="rounded-md border border-[#e8502f] px-4 py-2 text-sm text-[#e8502f] transition-colors hover:bg-[#e8502f] hover:text-white"
      >
        Write Me
      </Link>
    </header>
  );
}
