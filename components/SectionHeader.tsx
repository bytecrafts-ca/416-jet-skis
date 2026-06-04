interface SectionHeaderProps {
  tag: string;
  title: React.ReactNode;
  subtitle?: string;
}

export function SectionHeader({ tag, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <p className="section-tag">{tag}</p>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
