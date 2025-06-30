import React from 'react';
export default function AnimatedGradientBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-transparent">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#41F3B2] opacity-50 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute top-20 right-0 w-80 h-80 bg-[#D6D6D6] opacity-30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-[#00FFC3] opacity-40 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
    </div>
  );
}
