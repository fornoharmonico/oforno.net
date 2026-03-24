import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

// Logo eliminated as requested. Returning null ensures safety if imported elsewhere.
const Logo: React.FC<LogoProps> = () => {
  return null;
};

export default Logo;