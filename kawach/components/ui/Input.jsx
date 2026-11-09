import React from 'react';

export default function Input({ className = '', icon: Icon, ...props }) {
  return (
    <div className="relative flex items-center w-full">
      {Icon && (
        <div className="absolute left-4 text-gray-400">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <input
        className={`w-full h-14 pl-12 pr-4 bg-white border border-gray-200 rounded-xl text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm ${className}`}
        {...props}
      />
    </div>
  );
}