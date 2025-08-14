type HeaderProps = {
  onHomeClick: () => void;
};

export const Header = ({ onHomeClick }: HeaderProps) => {
  return (
    <header className="w-full py-4 px-2 fixed top-0 left-0 bg-gradient-to-br from-blue-900 to-purple-900 z-10 shadow-lg">
      <button
        onClick={onHomeClick}
        className="flex items-center gap-3 text-white focus:outline-none rounded-lg p-2 cursor-pointer transition-colors"
      >
        {/* Traffic Light Icon */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="text-yellow-300"
        >
          {/* Traffic Light Body */}
          <rect
            x="30"
            y="20"
            width="40"
            height="60"
            rx="8"
            fill="currentColor"
            stroke="#1f2937"
            strokeWidth="2"
          />
          {/* Red Light */}
          <circle cx="50" cy="32" r="6" fill="#ef4444" />
          {/* Yellow Light */}
          <circle cx="50" cy="50" r="6" fill="#fbbf24" />
          {/* Green Light */}
          <circle cx="50" cy="68" r="6" fill="#10b981" />
          {/* Pole */}
          <rect x="47" y="80" width="6" height="15" fill="#6b7280" />
        </svg>

        <div className="text-left">
          <div className="text-2xl font-bold">Señales de Tránsito</div>
          <div className="text-sm text-purple-200 -mt-1">
            Vicente López - Argentina
          </div>
        </div>
      </button>
    </header>
  );
};
