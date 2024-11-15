interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export default function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 font-mono text-sm text-left border-b-2 sm:border-b-0 sm:border-l-2 
        ${active 
          ? 'text-green border-green bg-light-navy/50' 
          : 'text-slate border-light-navy hover:text-green hover:bg-light-navy/30'
        } transition-all duration-300`}
    >
      {children}
    </button>
  );
} 