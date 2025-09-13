import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 28 }}>
      <h1>Marketplace (prototype)</h1>
      <ul>
        <li><Link href="/product/1">Hand-poured Soy Candle (product/1)</Link></li>
      </ul>
    </div>
  );
}
