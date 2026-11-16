import Link from "next/link";

const capabilities = ["Research", "Design", "Implement"];

export default function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:py-20">
      <div className="max-w-xl">
        <h1 className="text-4xl leading-tight font-normal text-neutral-950 sm:text-5xl">
          Design built on how
          <br />
          people choose
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-600">
          I research how people decide to choose a small business, then
          structure the site around that decision, so owners convert more
          visitors into customers — bookings, foot traffic, or online
          enquiries alike.
        </p>

        <Link
          href="#works"
          className="mt-8 inline-block rounded-md border border-[#e8502f] px-5 py-2.5 text-sm text-[#e8502f] transition-colors hover:bg-[#e8502f] hover:text-white"
        >
          View Cases
        </Link>
      </div>

      <div className="relative mx-auto h-[380px] w-full max-w-md sm:h-[460px] lg:h-[520px]">
        <div className="absolute bottom-0 left-0 flex h-[82%] w-[72%] flex-col justify-center gap-3 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 p-8">
          {capabilities.map((item) => (
            <span key={item} className="text-base font-medium text-white">
              {item}
            </span>
          ))}
        </div>

        <div className="absolute top-0 right-0 h-[88%] w-[62%] overflow-hidden bg-neutral-300">
          <div className="flex h-full w-full items-center justify-center text-sm text-neutral-500">
            Photo
          </div>
        </div>
      </div>
    </section>
  );
}
