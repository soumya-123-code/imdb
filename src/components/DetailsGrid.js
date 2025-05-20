import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { gridContainer, card } from "../styles";

export default function DetailsGrid() {
  const { movies } = useApp();
  const [search, setSearch] = useState("");
  const filtered = movies.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <input
        placeholder="Search movies..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          width: "100%", padding: 14, marginBottom: 24,
          borderRadius: 8, border: "1.5px solid #aaa", fontSize: 18
        }}
      />
      <div className="grid-container" style={gridContainer}>
        {filtered.map(m => (
          <div key={m.id} style={card}>
            <h3 style={{ margin: "8px 0 4px 0" }}>{m.name}</h3>
            <div><b>Year:</b> {m.year_of_release}</div>
            <div><b>Producer:</b> {m.Producer?.name || "-"}</div>
            <div><b>Actors:</b> {(m.Actors || []).map(a => a.name).join(", ")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
