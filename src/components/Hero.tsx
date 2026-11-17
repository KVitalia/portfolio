import Image from "next/image";
import Link from "next/link";

const capabilities = ["Research", "Design", "Implement"];

export default function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:py-20">
      <div className="max-w-xl">
        <h1 className="font-sans text-[36px] leading-tight font-normal tracking-[0.02em] text-[#1e1e1e]">
          Design built on how
          <br />
          people choose
        </h1>

        <p className="mt-6 max-w-md font-sans text-[20px] leading-relaxed font-normal tracking-[0.03em] text-[#4d4d4d]">
          I research how people decide to choose a small business, then
          structure the site around that decision, so owners convert more
          visitors into customers — bookings, foot traffic, or online
          enquiries alike.
        </p>

        <Link
          href="#works"
          className="mt-8 inline-block border-2 border-[#e3464b] bg-white/50 px-4 py-2.5 font-sans text-base font-medium text-[#1e1e1e] transition-opacity hover:opacity-80"
        >
          View Cases
        </Link>
      </div>

      <div
        className="relative mx-auto w-full max-w-[555px]"
        style={{ aspectRatio: "555 / 433" }}
      >
        <div
          className="absolute bottom-0 left-0 flex w-full flex-col justify-center gap-3 pl-8"
          style={{
            height: "69.3%",
            backgroundImage:
              "url('/gradient-card.png'), linear-gradient(135deg, #fbbf24, #f97316, #dc2626)",
            backgroundSize: "cover, cover",
            backgroundPosition: "center, center",
          }}
        >
          {capabilities.map((item) => (
            <span
              key={item}
              className="font-sans text-base font-medium tracking-[0.01em] text-[#1e1e1e]"
            >
              {item}
            </span>
          ))}
        </div>

        <div
          className="absolute top-0 overflow-hidden bg-neutral-300"
          style={{ left: "27.2%", width: "68.5%", aspectRatio: "1 / 1" }}
        >
          <Image
            src="/photo.png"
            alt="Vitalia Kumeska"
            fill
            sizes="380px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
