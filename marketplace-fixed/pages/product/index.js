import Link from 'next/link';

export default function ProductIndex() {
  return (
    <div style={{ padding: 28 }}>
      <h2>Products (fallback)</h2>
      <ul>
        <li><Link href="/product/1">Hand-poured Soy Candle (product/1)</Link></li>
      </ul>
    </div>
  );
}
