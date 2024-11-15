interface SectionHeadingProps {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-2xl font-semibold text-lightest-slate flex items-center gap-2">
        <span className="font-mono text-green text-xl">{number}</span>
        {title}
      </h2>
      <div className="h-px bg-lightest-navy flex-grow"></div>
    </div>
  );
} 