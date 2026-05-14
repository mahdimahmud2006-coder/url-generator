import React, { useEffect } from 'react';
import { AlertCircle, CheckCircle, X } from 'lucide-react';

const ToastNotification = ({ message, type = 'error', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    error: <AlertCircle className="w-5 h-5 text-red-400" />,
    success: <CheckCircle className="w-5 h-5 text-green-400" />,
  };

  const bgClasses = {
    error: 'bg-red-500/10 border-red-500/20',
    success: 'bg-green-500/10 border-green-500/20',
  };

  return (
    <div className={`fixed bottom-8 right-8 z-[100] flex items-center gap-3 p-4 rounded-2xl border backdrop-blur-xl animate-slide-up ${bgClasses[type]}`}>
      {icons[type]}
      <span className="text-sm font-medium text-white">{message}</span>
      <button 
        onClick={onClose}
        className="ml-2 p-1 hover:bg-white/10 rounded-lg transition-colors"
      >
        <X className="w-4 h-4 text-gray-500" />
      </button>
    </div>
  );
};

export default ToastNotification;
