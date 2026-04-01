import React from 'react';

function Button({ btnName, className = '', variant = 'gradient' }) {
  const variantClasses = {
    gradient:
      'bg-linear-to-r from-violet-700 via-violet-600 to-fuchsia-500 text-white shadow-[0_12px_30px_rgba(124,58,237,0.28)] hover:from-violet-800 hover:to-fuchsia-600',
    light:
      'bg-white text-violet-600 shadow-none hover:bg-slate-100 hover:text-violet-700',
    outline:
      'border border-white/70 bg-transparent text-white shadow-none hover:bg-white/10'
  };

  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition hover:scale-[1.02] ${variantClasses[variant]} ${className}`}
    >
      {btnName}
    </button>
  );
}

export default Button;
