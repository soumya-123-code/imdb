import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { gridContainer, card, addBtn } from "../styles";
import ActorFormModal from "./ActorFormModal";
import DeleteModal from "./DeleteModal"; // You need the DeleteModal component!

export default function ActorGrid() {
  const { actors, deleteActor } = useApp();
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const actorToDelete = actors.find(a => a.id === deleteId);

  return (
    <div>
      <button style={addBtn} onClick={() => { setEdit(null); setShowForm(true); }}>
        Add Actor
      </button>
      <div className="grid-container" style={gridContainer}>
        {actors.map(a => (
          <div key={a.id} style={card}>
            <h3 style={{ margin: "8px 0 4px 0", wordBreak: "break-word" }}>{a.name}</h3>
            <div style={{ wordBreak: "break-word" }}>Gender: {a.gender || "-"}</div>
            <div style={{ wordBreak: "break-word" }}>DOB: {a.dob?.substring(0, 10) || "-"}</div>
            <div style={{
              wordBreak: "break-word",
              maxHeight: 60,
              overflowY: "auto",
              margin: "5px 0 0 0",
              fontSize: 14,
              color: "#444"
            }}>
              {a.bio}
            </div>
            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              <button
                style={{ ...addBtn, background: "#FF9800" }}
                onClick={() => { setEdit(a); setShowForm(true); }}
              >Edit</button>
              <button
                style={{ ...addBtn, background: "#e53935" }}
                onClick={() => setDeleteId(a.id)}
              >Delete</button>
            </div>
          </div>
        ))}
      </div>
      <ActorFormModal open={showForm} actor={edit} onClose={() => setShowForm(false)} />
      <DeleteModal
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={() => {
          deleteActor(deleteId);
          setDeleteId(null);
        }}
        label={actorToDelete ? `Are you sure you want to delete "${actorToDelete.name}"?` : "Are you sure?"}
      />
    </div>
  );
}
