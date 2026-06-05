"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div key={faq.q} className="faq-item">
            <button
              type="button"
              className="faq-trigger"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
            >
              {faq.q}
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-cyan-dark transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            <div className={`faq-answer ${open ? "" : "faq-answer-collapsed"}`}>
              {faq.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
