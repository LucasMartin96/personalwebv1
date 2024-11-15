interface JobPanelProps {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export default function JobPanel({ title, company, period, description }: JobPanelProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl text-lightest-slate">
        {title} <span className="text-green">@ {company}</span>
      </h3>
      <p className="font-mono text-sm text-light-slate">
        {period}
      </p>
      <ul className="space-y-4">
        {description.map((desc, index) => (
          <li key={index} className="flex gap-2 text-light-slate">
            <span className="text-green flex-shrink-0">▹</span>
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
} 