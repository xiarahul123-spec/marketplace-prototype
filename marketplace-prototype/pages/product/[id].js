
import { useRouter } from 'next/router';
import { useState } from 'react';
import TrustBeaker from '../../components/TrustBeaker';
import UpiModal from '../../components/UpiModal';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const product = { id: id ?? 'p1', title: 'Hand-poured Soy Candle', price: 499, seller: { name: 'Sita Store', upi: 'sita@upi', trust: 87 } };

  const [upiOpen, setUpiOpen] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [status, setStatus] = useState(null);

  const createOrder = () => {
    const oid = `ORD${Math.floor(Math.random() * 90000) + 10000}`;
    setOrderId(oid);
    setUpiOpen(true);
  };

  return (
    <div style={{ padding: 28, maxWidth: 980, margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: 24 }}>
        <div style={{ flex: 1 }}>
          <img src="/sample-product.jpg" alt="" style={{ width: '100%', borderRadius: 8 }} />
        </div>

        <div style={{ width: 360 }}>
          <h1 style={{ marginTop: 0 }}>{product.title}</h1>
          <p style={{ fontWeight: 700, marginTop: 6 }}>₹{product.price}</p>

          <div style={{ marginTop: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 96 }}>
                <TrustBeaker score={product.seller.trust} size={96} onClick={() => { /* open seller */ }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700 }}>{product.seller.name}</div>
                <div style={{ color: '#6b7280', fontSize: 13 }}>Ships in 24–48 hrs</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <button onClick={createOrder} style={{ padding: '12px 16px', background: '#07B26A', color: '#fff', borderRadius: 8, border: 0, fontWeight: 700 }}>
              Buy via UPI
            </button>
            <div style={{ marginTop: 12, color: '#6b7280' }}>
              Or contact seller: <strong>{product.seller.upi}</strong>
            </div>
          </div>

          {orderId && <div style={{ marginTop: 12, background: '#f8fafc', padding: 10, borderRadius: 8 }}>
            <div style={{ fontSize: 13 }}>Order created: <strong>{orderId}</strong></div>
            <div style={{ fontSize: 13, color: '#6b7280' }}>Follow the modal to complete payment and click “I have paid”.</div>
          </div>}
        </div>
      </div>

      <UpiModal open={upiOpen} onClose={() => setUpiOpen(false)} orderId={orderId ?? ''} sellerUpi={product.seller.upi} onMarkedPaid={({ orderId, proof }) => {
        setStatus(`Payment noted for ${orderId}. Seller will confirm within 6 hours.`);
      }} />
      {status && <div style={{ marginTop: 18, padding: 12, background: '#ecfdf5', borderRadius: 8 }}>{status}</div>}
    </div>
  );
}
