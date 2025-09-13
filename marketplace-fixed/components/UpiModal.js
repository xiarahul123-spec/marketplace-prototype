import React, { useState } from 'react';

export default function UpiModal({ open, onClose, orderId, sellerUpi, onMarkedPaid }) {
  const [proofName, setProofName] = useState(null);
  if (!open) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)' }}>
      <div style={{ background: '#fff', margin: '10% auto', padding: 20, width: 400 }}>
        <h3>Pay via UPI</h3>
        <p>Seller UPI: {sellerUpi}</p>
        <p>Order ID: {orderId}</p>

        <input type="file" onChange={(e) => setProofName(e.target.files?.[0]?.name ?? null)} />
        {proofName && <p>Selected: {proofName}</p>}

        <button onClick={onClose}>Cancel</button>
        <button onClick={() => { onMarkedPaid?.({ orderId, proof: proofName }); onClose(); }}>
          I have paid
        </button>
      </div>
    </div>
  );
}
