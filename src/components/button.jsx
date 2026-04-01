import React from 'react';

function Button({ btnName, className = '' }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-full bg-linear-to-r from-violet-700 via-violet-600 to-fuchsia-500 px-6 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(124,58,237,0.28)] transition hover:scale-[1.02] hover:from-violet-800 hover:to-fuchsia-600 ${className}`}
    >
      {btnName}
    </button>
  );
}

export default Button;
