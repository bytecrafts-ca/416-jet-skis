import { Phone } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/site";

export function OnWaterRules() {
  const { safetyPage, contact } = siteConfig;

  return (
    <section className="section section-light" id="on-water-rules">
      <div className="container-jetti">
        <SectionHeader
          tag="Safety & rules"
          title={
            <>
              12 rules <span className="accent">on the water</span>
            </>
          }
          subtitle={safetyPage.onWaterRulesSubtitle}
        />

        <div className="safety-emergency" role="note">
          <span className="safety-emergency-label">{safetyPage.emergencyNote}</span>
          <span className="safety-emergency-divider" aria-hidden>
            ·
          </span>
          <a href={`tel:${contact.phoneTel}`} className="safety-emergency-phone">
            <Phone className="h-4 w-4 shrink-0" aria-hidden />
            {contact.phone}
          </a>
        </div>

        <ol className="water-rules-grid">
          {safetyPage.onWaterRules.map((rule, index) => (
            <li key={rule.title} className="water-rule-card">
              <span className="water-rule-num" aria-hidden>
                {index + 1}
              </span>
              <div>
                <h3>{rule.title}</h3>
                <p>{rule.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
