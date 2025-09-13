
import React, { useEffect, useRef } from 'react';

export default function TrustBeaker({ score = 80, size = 120, onClick }) {
  const rectRef = useRef(null);

  useEffect(() => {
    const el = rectRef.current;
    if (!el) return;
    const totalHeight = 220;
    const topY = 60;
    const clamped = Math.max(0, Math.min(100, score));
    const fillHeight = (totalHeight * clamped) / 100;
    const newY = topY + (totalHeight - fillHeight);
    el.setAttribute('y', String(newY));
    el.setAttribute('height', String(fillHeight));
  }, [score]);

  const color = score >= 85 ? '#07B26A' : score >= 65 ? '#F59E0B' : '#EF4444';

  return (
    <div style={{ width: size, textAlign: 'center', cursor: onClick ? 'pointer' : 'default' }} onClick={onClick}>
      <svg viewBox="0 0 220 340" width={size} height={(size * 340) / 220} role="img" aria-label={`Trust ${score} out of 100`}>
        <defs>
          <clipPath id="bClip">
            <path d="M70 30 q40 -18 80 0 l6 10 q2 6 -4 8 l-6 3 v150 q0 18 -18 28 h-80 q-18 0 -18 -28 v-150 l-6 -3 q-6 -2 -4 -8 l6 -10 z" />
          </clipPath>
        </defs>

        <g transform="translate(0,6)">
          <path d="M64 36 q44 -20 92 0 l8 12 q3 9 -3 11 l-6 3 v160 q0 20 -22 30 h-84 q-22 -10 -22 -30 v-160 l-6 -3 q-6 -2 -3 -11 l8 -12 z" fill="#fff" stroke="#e6eef6" strokeWidth="2.5" />
          <path d="M78 48 q36 -15 68 0 v150 q0 12 -12 20 h-92 q-12 -8 -12 -20 v-150 z" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />

          <g clipPath="url(#bClip)">
            <rect ref={rectRef} id="liquidRect" x="40" y="280" width="140" height="0" fill={color} opacity="0.95" />
            <path id="liquidWave" d="M40 260 q40 -12 70 0 t70 0 v0 h-140 z" fill="rgba(255,255,255,0.12)" />
          </g>

          <rect x="40" y="280" width="140" height="10" rx="6" fill="#f1f5f9" stroke="#e6eef6" />
        </g>
      </svg>
      <div style={{ marginTop: 6, fontWeight: 700, color: color }}>
        {score >= 85 ? 'Excellent' : score >= 65 ? 'Reliable' : 'Caution'} • {Math.round(score)}/100
      </div>
    </div>
  );
}
