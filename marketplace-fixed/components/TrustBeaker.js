import React, { useEffect, useRef } from 'react';

export default function TrustBeaker({ score = 80, size = 120 }) {
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

  const color = score >= 85 ? 'green' : score >= 65 ? 'orange' : 'red';

  return (
    <div style={{ width: size, textAlign: 'center' }}>
      <svg viewBox="0 0 220 340" width={size} height={(size * 340) / 220}>
        <g>
          <rect ref={rectRef} x="40" y="280" width="140" height="0" fill={color} />
        </g>
      </svg>
      <div>{score}/100</div>
    </div>
  );
}
