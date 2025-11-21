export default function Home() {
  return (
    <div style={{
      background: "#0A0F1F",
      minHeight: "100vh",
      padding: "40px",
      color: "white",
      fontFamily: "Arial, sans-serif"
    }}>
      
      <h1 style={{ 
        fontSize: "40px", 
        color: "#6A5ACD", 
        textAlign: "center",
        marginBottom: "20px"
      }}>
        InterByte
      </h1>

      <p style={{ 
        textAlign: "center", 
        fontSize: "18px", 
        opacity: 0.8 
      }}>
        Decentralized Streaming • NFTs • Social • ByteShop
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        marginTop: "40px"
      }}>
        
        <a href="/music" style={cardStyle}>Music</a>
        <a href="/films" style={cardStyle}>Films</a>
        <a href="/art" style={cardStyle}>Art / NFTs</a>
        <a href="/social" style={cardStyle}>ByteSocial</a>
        <a href="/shop" style={cardStyle}>ByteShop</a>
        <a href="/wallet" style={cardStyle}>Wallet</a>

      </div>

    </div>
  );
}

const cardStyle = {
  background: "#111729",
  borderRadius: "12px",
  padding: "24px",
  textAlign: "center",
  color: "white",
  textDecoration: "none",
  fontSize: "20px",
  border: "1px solid #6