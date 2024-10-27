import React from 'react';

export default function Equalizer() {
  return (
    <div className="flex gap-1 h-12 items-end">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="equalizer-bar"
          style={{
            animationDelay: `${i * 0.2}s`
          }}
        />
      ))}
    </div>
  );
}