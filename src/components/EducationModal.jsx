import React from 'react';
import { X } from 'lucide-react';

const EducationModal = ({ onClose }) => {
  React.useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Modal header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100 px-8 py-4 flex justify-between items-center">
        <div className="text-sm font-medium text-gray-400">Education</div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="h-[calc(100%-4rem)] overflow-y-auto px-8 py-10">
        <div className="max-w-4xl mx-auto">
          <header className="mb-16">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              Educational Background
            </h1>
            <p className="text-lg text-gray-600">
              Business Administration with focus on Information Systems
            </p>
          </header>
        </div>
      </div>
    </div>
  );
};

export default EducationModal;