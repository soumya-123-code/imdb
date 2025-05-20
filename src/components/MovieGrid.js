import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { gridContainer, card, addBtn } from "../styles";
import MovieFormModal from "./MovieFormModal";
import DeleteModal from "./DeleteModal";

export default function MovieGrid() {
  const { movies, deleteMovie } = useApp();
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  // Find the movie being deleted for label
  const movieToDelete = movies.find(m => m.id === deleteId);

  return (
    <div>
      <button style={addBtn} onClick={() => { setEdit(null); setShowForm(true); }}>Add Movie</button>
      <div className="grid-container" style={gridContainer}>
        {movies.map(m => (
          <div key={m.id} style={card}>
            <h3 style={{margin:"8px 0 4px 0"}}>{m.name}</h3>
            <div>Year: {m.year_of_release}</div>
            <div>Producer: {m.Producer?.name || "-"}</div>
            <div>Actors: {(m.Actors || []).map(a => a.name).join(", ")}</div>
            <div style={{marginTop:10}}>
              <button style={{...addBtn, background: "#FF9800"}} onClick={() => { setEdit(m); setShowForm(true); }}>Edit</button>
              <button
                style={{...addBtn, background: "#e53935"}}
                onClick={() => setDeleteId(m.id)}
              >Delete</button>
            </div>
          </div>
        ))}
      </div>
      <MovieFormModal open={showForm} movie={edit} onClose={() => setShowForm(false)} />
      <DeleteModal
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={() => {
          deleteMovie(deleteId);
          setDeleteId(null);
        }}
        label={movieToDelete ? `Are you sure you want to delete "${movieToDelete.name}"?` : "Are you sure?"}
      />
    </div>
  );
}
