
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`section-title ${centered ? 'mx-auto after:left-1/2 after:-translate-x-1/2' : ''}`}>{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-4 max-w-2xl">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
