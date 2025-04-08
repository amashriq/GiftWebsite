import Link from 'next/link';
export default function Home() {
  return (
    <main >
      <h1>Hello World</h1>
      <p>Welcome to my Next.js application!</p>
      <Link href="/picks" className = "block">Picks</Link>
      <Link href="/randmemories" className = "block">Random Memories</Link>
    </main>
  );
}
