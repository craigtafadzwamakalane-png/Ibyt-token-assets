import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      width: "100%",
      padding: "15px 25px",
      background: "#0a0a0a",
      borderBottom: "1px solid #222",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 50
    }}>
      
      {/* Logo */}
      <div style={{ color: "#8b5cf6", fontWeight: "bold", fontSize: "20px" }}>
        InterByte
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/"><span style={linkStyle}>Home</span></Link>
        <Link href="/music"><span style={linkStyle}>Music</span></Link>
        <Link href="/films"><span style={linkStyle}>Films</span></Link>
        <Link href="/art"><span style={linkStyle}>Art/NFTs</span></Link>
        <Link href="/social"><span style={linkStyle}>Social</span></Link>
        <Link href="/shop"><span style={linkStyle}>Shop</span></Link>
        <Link href="/wallet"><span style={linkStyle}>Wallet</span></Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "#e0e0e0",
  cursor: "pointer",
  fontSize: "16px"
};