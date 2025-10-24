export function CareerAgentsLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Career Agents Logo"
    >
      {/* Background circle with UTD Green */}
      <circle cx="100" cy="100" r="95" fill="#124734" />

      {/* Network nodes representing AI agents */}
      <circle cx="100" cy="60" r="12" fill="#E87500" />
      <circle cx="70" cy="100" r="12" fill="#E87500" />
      <circle cx="130" cy="100" r="12" fill="#E87500" />
      <circle cx="85" cy="140" r="12" fill="#E87500" />
      <circle cx="115" cy="140" r="12" fill="#E87500" />

      {/* Connection lines */}
      <line x1="100" y1="60" x2="70" y2="100" stroke="#E87500" strokeWidth="3" opacity="0.6" />
      <line x1="100" y1="60" x2="130" y2="100" stroke="#E87500" strokeWidth="3" opacity="0.6" />
      <line x1="70" y1="100" x2="85" y2="140" stroke="#E87500" strokeWidth="3" opacity="0.6" />
      <line x1="130" y1="100" x2="115" y2="140" stroke="#E87500" strokeWidth="3" opacity="0.6" />
      <line x1="70" y1="100" x2="130" y2="100" stroke="#E87500" strokeWidth="3" opacity="0.6" />

      {/* Central sparkle/star icon */}
      <path d="M100 75 L102 82 L109 82 L103 87 L105 94 L100 89 L95 94 L97 87 L91 82 L98 82 Z" fill="white" />

      {/* Letter 'CA' in white */}
      <text x="100" y="180" fontSize="32" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="sans-serif">
        CA
      </text>
    </svg>
  )
}
