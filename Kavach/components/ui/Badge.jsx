import React from 'react';

export default function Badge({ 
  children, 
  variant = 'blue', 
  icon: Icon,
  className = '' 
}) {
  const variants = {
    blue: "bg-blue-50 text-blue-700 border border-blue-200",
    red: "bg-red-50 text-red-600 border border-red-200",
    gray: "bg-gray-50 text-gray-600 border border-gray-200",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
}