
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="h-full aspect-square flex items-center justify-center">
        {/* Using a high-quality Cloudinary-hosted logo placeholder or the actual one if known */}
        <img 
          src="https://res.cloudinary.com/dreamsavvy/image/upload/v1771939211/dream_savvy_logo_u7yb0w.png" 
          alt="Dream Savvy Logo" 
          className="h-full w-auto object-contain scale-110"
          onError={(e) => {
            // Fallback to SVG if image fails
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <svg viewBox="0 0 400 400" className="h-full w-full hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>
        </defs>
        {/* Simplified recreation of the provided multi-line "d" logo */}
        <g stroke="url(#logoGradient)" strokeWidth="12" strokeLinecap="round">
          {/* Vertical Lines */}
          <line x1="200" y1="60" x2="200" y2="340" />
          <line x1="225" y1="85" x2="225" y2="340" />
          <line x1="250" y1="110" x2="250" y2="340" />
          <line x1="275" y1="135" x2="275" y2="280" />
          
          {/* Curved Section */}
          <path d="M200,340 C120,340 60,280 60,200 C60,120 120,60 200,60" strokeWidth="12" />
          <path d="M200,315 C140,315 85,260 85,200 C85,140 140,85 200,85" strokeWidth="12" />
          <path d="M200,290 C160,290 110,240 110,200 C110,160 160,110 200,110" strokeWidth="12" />

          {/* Right Horizontal Streak Lines */}
          <line x1="250" y1="165" x2="340" y2="165" opacity="0.8" />
          <line x1="250" y1="190" x2="360" y2="190" opacity="0.6" />
          <line x1="250" y1="215" x2="380" y2="215" opacity="0.4" />
          <line x1="250" y1="240" x2="360" y2="240" opacity="0.2" />
        </g>
      </svg>
      </div>
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="font-extrabold text-2xl tracking-tight text-white">DREAM SAVVY</span>
          <span className="text-[12px] font-semibold tracking-[0.25em] text-teal-400">SOLUTIONS</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
