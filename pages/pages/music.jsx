export default function Music() {
  return (
    <div style={{
      background: "#0A0F1F",
      minHeight: "100vh",
      padding: "40px",
      color: "white",
      fontFamily: "Arial, sans-serif"
    }}>
      
      <h1 style={{ fontSize: "36px", color: "#6A5ACD", marginBottom: "20px" }}>
        InterByte Music
      </h1>

      <p style={{ opacity: 0.7 }}>
        Upload music to IPFS (future), stream tracks, and support creators using IBYTE.
      </p>

      <div style={{ marginTop: "30px", padding: "20px", background: "#111729", borderRadius: "12px" }}>
        <h3>Upload Music (UI only)</h3>
        <input type="file" accept="audio/*" style={{ marginTop: "12px" }} />
        <button style={btn}>Upload</button>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h3>Music Library (Sample)</h3>

        <div style={trackCard}>
          <p>Sample Track — Artist</p>
          <audio controls>
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
          </audio>
        </div>

      </div>

    </div>
  );
}

const btn = {
  marginTop: "12px",
  padding: "10px 20px",
  background: "#6A5ACD",
  border: "none",
  borderRadius: "6px",
  color: "white",
  cursor: "pointer"
};

const trackCard = {
  background: "#111729",
  padding: "20px",
  borderRadius: "12px",
  marginTop: "20px",
  border: "1px solid #6A5ACD"
};