import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      background: "#0d0d0d",
      padding: "15px",
      display: "flex",
      gap: "20px",
      borderBottom: "1px solid #333"
    }}>
      <Link href="/">Home</Link>
      <Link href="/music">Music</Link>
      <Link href="/films">Films</Link>
      <Link href="/art">Art/NFTs</Link>
      <Link href="/social">Social</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/wallet">Wallet</Link>
    </nav>
  );
    }
