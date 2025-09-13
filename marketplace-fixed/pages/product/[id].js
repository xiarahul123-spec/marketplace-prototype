import { useRouter } from 'next/router';
import { useState } from 'react';
import TrustBeaker from '../../components/TrustBeaker';
import UpiModal from '../../components/UpiModal';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <div style={{ padding: 28 }}>Loading...</div>;

  const product = {
    id: String(id),
    title: 'Hand-poured Soy Candle',
    price: 499,
    seller: { name: 'Sita Store', upi: 'sita@upi', trust: 87 }
  };

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
      <h1>{product.title}</h1>
      <p>₹{product.price}</p>

      <TrustBeaker score={product.seller.trust} size={96} />
      <p>Seller: {product.seller.name} (UPI: {product.seller.upi})</p>

      <button onClick={createOrder}>Buy via UPI</button>

      {orderId && <p>Order created: {orderId}</p>}

      <UpiModal
        open={upiOpen}
        onClose={() => setUpiOpen(false)}
        orderId={orderId ?? ''}
        sellerUpi={product.seller.upi}
        onMarkedPaid={({ orderId }) => {
          setStatus(`Payment noted for ${orderId}. Seller will confirm soon.`);
        }}
      />

      {status && <p>{status}</p>}
    </div>
  );
}
