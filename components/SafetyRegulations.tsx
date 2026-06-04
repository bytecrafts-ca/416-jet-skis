import { siteConfig } from "@/lib/site";

export function SafetyRegulations() {
  const { safetyPage } = siteConfig;

  return (
    <div className="safety-reg-wrap">
      {safetyPage.groups.map((group, i) => (
        <section
          key={group.title}
          className={i % 2 === 0 ? "section section-light" : "section section-white"}
        >
          <div className="container-jetti">
            <h2 className="safety-reg-heading">{group.title}</h2>
            <ul className="safety-reg-list">
              {group.bullets.map((item) => (
                <li key={item.slice(0, 40)}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}
