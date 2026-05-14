import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = ({ size = 'md', color = 'white' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-10 h-10',
  };

  const colorClasses = {
    white: 'text-white',
    primary: 'text-primary',
    gray: 'text-gray-500',
  };

  return (
    <div className="flex items-center justify-center">
      <Loader2 className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`} />
    </div>
  );
};

export default LoadingSpinner;
