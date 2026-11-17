import Link from "next/link";

type CaseItem = {
  number: string;
  name: string;
  summary?: string;
  role?: string;
  achieved?: string;
};

const cases: CaseItem[] = [
  { number: "01", name: "NAME" },
  {
    number: "02",
    name: "APP for Students",
    summary: "App Design for students to get prepared to the entry maths exams",
    role: "Created a Teacher Persona, the Flow to assign a task, Persona's Dashboard",
    achieved: "Clear flow of a Teacher Persona, capability to complete the task",
  },
  { number: "03", name: "NAME" },
  { number: "04", name: "NAME" },
];

function PlaceholderThumb() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-10 w-10 text-[#1e1e1e]/60"
    >
      <rect x="5" y="5" width="38" height="38" rx="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="18" r="3.2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 34l10-10 8 8 6-6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Cases() {
  return (
    <section id="works" className="mx-auto w-full max-w-7xl px-6 pt-16 pb-10 sm:px-10">
      <h2 className="font-sans text-[48px] font-medium tracking-[0.03em] text-[#1e1e1e]">
        CASES
      </h2>

      <div className="mt-10 flex flex-col border-y border-[#1e1e1e]/15 sm:flex-row">
        {cases.map((item) => (
          <div
            key={item.number}
            className="group/card flex-1 overflow-hidden border-b border-[#1e1e1e]/15 px-6 py-10 transition-[flex-grow] duration-300 ease-out last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0 sm:hover:flex-[2.4]"
          >
            <div className="flex flex-col gap-1 sm:group-hover/card:flex-row sm:group-hover/card:items-baseline sm:group-hover/card:gap-4">
              <span className="font-sans text-sm font-normal text-[#1e1e1e]">
                {item.number}
              </span>
              <span className="font-sans text-[24px] font-semibold text-[#1e1e1e] transition-all duration-300 sm:group-hover/card:text-[32px]">
                {item.name}
              </span>
            </div>

            <div className="hidden sm:group-hover/card:block">
              <div className="mt-6 flex aspect-[322/204] w-full items-center justify-center bg-[#1e1e1e]/5">
                <PlaceholderThumb />
              </div>

              {item.summary && (
                <p className="mt-6 font-sans text-base font-normal tracking-[0.02em] text-[#4d4d4d]">
                  {item.summary}
                </p>
              )}

              {item.role && (
                <p className="mt-4 font-sans text-base tracking-[0.02em]">
                  <span className="font-medium text-[#1e1e1e]">Role: </span>
                  <span className="font-normal text-[#4d4d4d]">{item.role}</span>
                </p>
              )}

              {item.achieved && (
                <p className="mt-2 font-sans text-base tracking-[0.02em]">
                  <span className="font-medium text-[#1e1e1e]">
                    What Achieved:{" "}
                  </span>
                  <span className="font-normal text-[#4d4d4d]">{item.achieved}</span>
                </p>
              )}

              <Link
                href="#"
                className="mt-6 inline-flex items-center gap-2 border-b-2 border-[#e3464b] pb-1 font-sans text-base font-medium text-[#1e1e1e]"
              >
                View more <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
