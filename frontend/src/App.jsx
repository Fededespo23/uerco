
import React, { useState } from "react";

const PASSWORD = "miaPassword123";

export default function App() {
  const [input, setInput] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PASSWORD) {
      setAccessGranted(true);
      fetchScores();
    } else {
      alert("Password errata");
    }
  };

  const fetchScores = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://uerco.onrender.com");
      const data = await res.json();
      setScores(data);
    } catch (err) {
      alert("Errore nel caricamento dati");
    }
    setLoading(false);
  };

  if (!accessGranted) {
    return (
      <div style={{ maxWidth: 300, margin: "auto", padding: 20, textAlign: "center" }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Inserisci password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ width: "100%", padding: 8, marginBottom: 10 }}
          />
          <button type="submit" style={{ width: "100%", padding: 8 }}>Entra</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 700, margin: "auto", padding: 20 }}>
      <h1>Dashboard Macro Trading</h1>
      <button onClick={fetchScores} disabled={loading}>
        {loading ? "Caricamento..." : "Aggiorna Score"}
      </button>
      <ul>
        {scores.map((s, i) => (
          <li key={i}>
            {s.asset}: {s.score}%
          </li>
        ))}
      </ul>
    </div>
  );
}
