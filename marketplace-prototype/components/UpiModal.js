
import React, { useState } from 'react';

export default function UpiModal({ open, onClose, orderId, sellerUpi, onMarkedPaid }) {
  const [proofName, setProofName] = useState(null);

  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(2,6,23,0.4)', zIndex: 40
    }}>
      <div style={{ width: 520, background: '#fff', borderRadius: 12, padding: 18 }}>
        <h3>Pay via UPI — pay seller directly</h3>
        <p style={{ color: '#374151' }}>Seller UPI: <strong>{sellerUpi}</strong></p>

        <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
          <button onClick={() => { navigator.clipboard?.writeText(orderId); }} style={{ padding: '8px 12px', borderRadius: 8, background: '#111827', color: '#fff' }}>
            Copy Order ID: {orderId}
          </button>
          <button onClick={() => { navigator.clipboard?.writeText(sellerUpi); }} style={{ padding: '8px 12px', borderRadius: 8 }}>
            Copy UPI
          </button>
        </div>

        <p style={{ marginTop: 12, color: '#6b7280' }}>
          After paying in your UPI app, click <strong>I have paid</strong> and optionally upload the payment screenshot to help verification.
        </p>

        <div style={{ marginTop: 12 }}>
          <input type="file" accept="image/*" onChange={(e) => setProofName(e.target.files?.[0]?.name ?? null)} />
          {proofName && <div style={{ marginTop: 8, color: '#111827' }}>Selected: {proofName}</div>}
        </div>

        <div style={{ marginTop: 16, display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <button onClick={onClose} style={{ padding: '8px 12px', borderRadius: 8 }}>Cancel</button>
          <button onClick={() => { onMarkedPaid?.({ orderId, proof: proofName }); onClose(); }} style={{ padding: '8px 12px', borderRadius: 8, background: '#07B26A', color: '#fff' }}>
            I have paid
          </button>
        </div>
      </div>
    </div>
  );
}
