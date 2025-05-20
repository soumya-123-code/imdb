import React, { useState, useEffect } from "react";
import ModalForm from "./ModalForm";
import { useApp } from "../context/AppContext";
import {
  inputStyle,
  selectStyle,
  labelStyle,
  actorChip,
  actorChipActive,
  section,
  primaryBtn,
  secondaryBtn,
} from "../styles";

export default function MovieFormModal({ open, onClose, movie }) {
  const { actors, producers, addMovie, editMovie } = useApp();

  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [actorIds, setActorIds] = useState([]);
  const [producerId, setProducerId] = useState("");

  useEffect(() => {
    setName(movie?.name || "");
    setYear(movie?.year_of_release || "");
    setActorIds(movie?.Actors?.map(a => a.id) || []);
    setProducerId(movie?.Producer?.id || "");
  }, [open, movie]);

  const handleActorChange = (id) => {
    setActorIds(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const handleSave = async () => {
    // Build the minimal payload the backend expects:
    const movieData = {
      name,
      year_of_release: year,
      producerId: producerId || null,
      actorIds,
    };
    if (movie) await editMovie(movie.id, movieData);
    else await addMovie(movieData);
    onClose();
  };

  return (
    <ModalForm open={open} onClose={onClose}>
      <h2 style={{ textAlign: "center", color: "#1976d2", margin: "0 0 18px 0" }}>
        {movie ? "Edit" : "Add"} Movie
      </h2>

      <label style={labelStyle}>Movie Name</label>
      <input
        style={inputStyle}
        placeholder="Movie name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <label style={labelStyle}>Year of Release</label>
      <input
        style={inputStyle}
        placeholder="Year"
        type="number"
        value={year}
        onChange={e => setYear(e.target.value)}
      />

      <label style={labelStyle}>Actors</label>
      <div
        style={{
          border: "1px solid #e3eafc",
          borderRadius: 8,
          maxHeight: 82,
          minHeight: 38,
          overflowY: "auto",
          background: "#fafbff",
          padding: "6px 2px 2px 7px",
          margin: "4px 0 10px 0",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {actors.length === 0 && <span style={{ color: "#aaa" }}>No actors found</span>}
        {actors.map(a => (
          <label
            key={a.id}
            style={actorIds.includes(a.id)
              ? { ...actorChip, ...actorChipActive }
              : actorChip
            }
          >
            <input
              type="checkbox"
              checked={actorIds.includes(a.id)}
              onChange={() => handleActorChange(a.id)}
              style={{ display: "none" }}
            />
            <span
              style={{
                display: "inline-block",
                width: 16,
                height: 16,
                marginRight: 6,
                borderRadius: "50%",
                border: actorIds.includes(a.id)
                  ? "6px solid #fff"
                  : "2px solid #1976d2",
                background: actorIds.includes(a.id) ? "#1976d2" : "#fff",
                boxShadow: actorIds.includes(a.id)
                  ? "0 1.5px 8px #1976d2aa"
                  : "0 1.5px 8px #e3eafc88",
              }}
            ></span>
            {a.name}
          </label>
        ))}
      </div>

      <label style={labelStyle}>Producer</label>
      <select
        style={selectStyle}
        value={producerId}
        onChange={e => setProducerId(Number(e.target.value))}
      >
        <option value="">Select producer</option>
        {producers.map(p => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>

      <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 8 }}>
        <button style={primaryBtn} onClick={handleSave}>
          {movie ? "Save" : "Add"}
        </button>
        <button style={secondaryBtn} onClick={onClose}>
          Cancel
        </button>
      </div>
    </ModalForm>
  );
}
