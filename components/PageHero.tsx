interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <header className="page-header">
      <div className="container-jetti">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </header>
  );
}
