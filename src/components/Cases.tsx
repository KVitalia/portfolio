"use client";

import { useState } from "react";
import Link from "next/link";

type CaseItem = {
  number: string;
  name: string;
  summary?: string;
  role?: string;
  achieved?: string;
};

const cases: CaseItem[] = [
  {
    number: "01",
    name: "NAME",
    summary: "Website redesign for a small business to simplify the booking journey",
    role: "Mapped the customer decision flow, redesigned the booking steps, built the prototype",
    achieved: "Shorter booking flow, clearer next steps, fewer drop-offs before checkout",
  },
  {
    number: "02",
    name: "APP for Students",
    summary: "App Design for students to get prepared to the entry maths exams",
    role: "Created a Teacher Persona, the Flow to assign a task, Persona's Dashboard",
    achieved: "Clear flow of a Teacher Persona, capability to complete the task",
  },
  {
    number: "03",
    name: "NAME",
    summary: "Online store redesign to make browsing and checkout easier on mobile",
    role: "Defined the information architecture, redesigned product pages and checkout",
    achieved: "Simplified navigation and a shorter, clearer checkout flow",
  },
  {
    number: "04",
    name: "NAME",
    summary: "Admin dashboard for managing bookings and daily schedules",
    role: "Designed the dashboard layout, appointment list, and scheduling flow",
    achieved: "Faster day-to-day scheduling with fewer manual errors",
  },
];

function PlaceholderThumb() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10 text-[#1e1e1e]/60">
      <rect x="5" y="5" width="38" height="38" rx="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="18" r="3.2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8 34l10-10 8 8 6-6 8 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Cases() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="works" className="mx-auto w-full max-w-[1512px] px-6 pt-16 pb-10 sm:px-10">
      <h2 className="font-sans text-[48px] font-medium tracking-[0.03em] text-[#1e1e1e]">
        CASES
      </h2>

      <div className="relative left-1/2 mt-10 w-screen -translate-x-1/2 border-t border-[#1e1e1e]/15" />

      <div className="flex flex-col sm:flex-row sm:items-stretch">
        {cases.map((item, index) => {
          const isOpen = hoveredIndex === index;

          return (
            <div
              key={item.number}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="overflow-hidden border-b border-[#1e1e1e]/15 px-6 py-10 last:border-b-0 sm:h-[700px] sm:border-r sm:border-b-0 sm:last:border-r-0"
              style={{
                transition: "flex-grow 300ms ease",
                flexGrow: isOpen ? 2 : 1,
                flexShrink: 1,
                flexBasis: "0%",
              }}
            >
              <div
                className={`flex gap-1 ${
                  isOpen ? "flex-row items-baseline gap-4" : "flex-col"
                }`}
              >
                <span
                  className="font-sans font-semibold text-[#1e1e1e] transition-all duration-300"
                  style={{ fontSize: isOpen ? 32 : 24 }}
                >
                  {item.number}
                </span>
                <span
                  className="font-sans font-semibold text-[#1e1e1e] transition-all duration-300"
                  style={{ fontSize: isOpen ? 32 : 24 }}
                >
                  {item.name}
                </span>
              </div>

              {isOpen && (
                <div>
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
                      <span className="font-normal text-[#4d4d4d]">
                        {item.achieved}
                      </span>
                    </p>
                  )}

                  <Link
                    href="#"
                    className="group/more mt-6 inline-flex items-center gap-2 font-sans text-base font-medium text-[#1e1e1e]"
                  >
                    <span className="relative">
                      View more
                      <span className="absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-100 bg-[#e3464b] transition-transform duration-300 ease-out group-hover/more:scale-x-0" />
                      <span className="absolute inset-x-0 -bottom-1 h-[2px] origin-right scale-x-0 bg-[#e3464b] transition-transform duration-300 ease-out group-hover/more:scale-x-100" />
                    </span>
                    <span
                      aria-hidden
                      className="transition-transform duration-300 ease-out group-hover/more:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
