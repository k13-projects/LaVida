interface WaveProps {
  position: 'top' | 'bottom';
  variant?: 'soft' | 'blobLeft' | 'blobRight' | 'deep' | 'plateSync';
  fillColor: string;
  className?: string;
  height?: string;
}

const Wave = ({ position, variant = 'soft', fillColor, className = '', height }: WaveProps) => {
  // plateSync variant: wave that syncs with plate position across all viewports
  // Uses consistent wave shape with height matching plate overlap
  if (variant === 'plateSync') {
    // Wave path: starts at left edge (y=200), curves up to meet plate on right (y=50), fills to bottom
    // The wave rises from left to right where the plate is positioned
    const path = "M0,180 C300,180 600,100 900,60 C1100,35 1300,30 1440,30 L1440,230 L0,230 Z";

    return (
      <>
        {/* Mobile: h-40 to match -mt-40 plate overlap */}
        <svg
          className={`absolute w-full h-40 sm:hidden ${className}`}
          viewBox="0 0 1440 230"
          preserveAspectRatio="none"
          style={{ bottom: '-2px', left: 0, right: 0 }}
        >
          <path d={path} fill={fillColor} />
        </svg>

        {/* SM: h-52 to match -mt-52 plate overlap */}
        <svg
          className={`absolute w-full hidden sm:block md:hidden h-52 ${className}`}
          viewBox="0 0 1440 230"
          preserveAspectRatio="none"
          style={{ bottom: '-2px', left: 0, right: 0 }}
        >
          <path d={path} fill={fillColor} />
        </svg>

        {/* MD: h-72 to match -mt-72 plate overlap */}
        <svg
          className={`absolute w-full hidden md:block lg:hidden h-72 ${className}`}
          viewBox="0 0 1440 230"
          preserveAspectRatio="none"
          style={{ bottom: '-2px', left: 0, right: 0 }}
        >
          <path d={path} fill={fillColor} />
        </svg>

        {/* LG+: h-88 to match -mt-88 plate overlap */}
        <svg
          className={`absolute w-full hidden lg:block h-88 ${className}`}
          viewBox="0 0 1440 230"
          preserveAspectRatio="none"
          style={{ bottom: '-2px', left: 0, right: 0 }}
        >
          <path d={path} fill={fillColor} />
        </svg>
      </>
    );
  }

  const getPath = () => {
    switch (variant) {
      case 'soft':
        // Gentle rolling curve
        return position === 'top'
          ? "M0,100 C480,100 960,0 1440,50 L1440,0 L0,0 Z"
          : "M0,0 C480,0 960,100 1440,50 L1440,100 L0,100 Z";

      case 'blobLeft':
        // Simple wave for bottom of olive section
        // Pink fills below the curve line all the way to viewBox bottom (230)
        // Wave: starts higher on left (y=150) for smoother curve, peak at y=50, ends at y=150
        return position === 'bottom'
          ? "M0,150 C200,80 400,50 600,50 C840,50 960,150 1440,150 L1440,230 L0,230 Z"
          : "M0,80 C200,150 400,180 600,180 C840,180 960,80 1440,80 L1440,0 L0,0 Z";

      case 'blobRight':
        // Organic blob that dips down on the RIGHT side
        return position === 'top'
          ? "M0,0 C590,0 740,10 890,80 C1040,150 1240,180 1440,150 L1440,0 Z"
          : "M0,50 C590,50 740,60 890,130 C1040,200 1240,230 1440,200 L1440,0 L0,0 Z";

      case 'deep':
        // Deeper symmetric curve
        return position === 'top'
          ? "M0,0 L0,100 Q720,200 1440,100 L1440,0 Z"
          : "M0,100 Q720,0 1440,100 L1440,200 L0,200 Z";

      default:
        return "M0,0 L1440,0 L1440,100 L0,100 Z";
    }
  };

  const getViewBox = () => {
    if (variant === 'blobLeft' || variant === 'blobRight') {
      return "0 0 1440 230";
    }
    if (variant === 'deep') {
      return "0 0 1440 200";
    }
    return "0 0 1440 100";
  };

  const getHeight = () => {
    if (height) return height;
    if (variant === 'blobLeft' || variant === 'blobRight') {
      return 'h-32 md:h-48 lg:h-56';
    }
    if (variant === 'deep') {
      return 'h-24 md:h-32 lg:h-40';
    }
    return 'h-16 md:h-24 lg:h-28';
  };

  const positionStyles: React.CSSProperties = position === 'top'
    ? { top: '-2px', left: 0, right: 0 }
    : { bottom: '-2px', left: 0, right: 0 };

  return (
    <svg
      className={`absolute w-full ${getHeight()} ${className}`}
      viewBox={getViewBox()}
      preserveAspectRatio="none"
      style={positionStyles}
    >
      <path d={getPath()} fill={fillColor} />
    </svg>
  );
};

export default Wave;
