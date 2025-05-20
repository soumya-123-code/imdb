import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { gridContainer, card, addBtn } from "../styles";
import ProducerFormModal from "./ProducerFormModal";
import DeleteModal from "./DeleteModal"; // Make sure you have this!

export default function ProducerGrid() {
  const { producers, deleteProducer } = useApp();
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const producerToDelete = producers.find(p => p.id === deleteId);

  return (
    <div>
      <button
        style={addBtn}
        onClick={() => {
          setEdit(null);
          setShowForm(true);
        }}
      >
        Add Producer
      </button>
      <div className="grid-container" style={gridContainer}>
        {producers.map((p) => (
          <div key={p.id} style={card}>
            <h3 style={{ margin: "8px 0 4px 0", wordBreak: "break-word" }}>
              {p.name}
            </h3>
            <div style={{ wordBreak: "break-word" }}>
              Gender: {p.gender || "-"}
            </div>
            <div style={{ wordBreak: "break-word" }}>
              DOB: {p.dob?.substring(0, 10) || "-"}
            </div>
            <div
              style={{
                wordBreak: "break-word",
                maxHeight: 60,
                overflowY: "auto",
                margin: "5px 0 0 0",
                fontSize: 14,
                color: "#444",
              }}
            >
              {p.bio}
            </div>
            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              <button
                style={{ ...addBtn, background: "#FF9800" }}
                onClick={() => {
                  setEdit(p);
                  setShowForm(true);
                }}
              >
                Edit
              </button>
              <button
                style={{ ...addBtn, background: "#e53935" }}
                onClick={() => setDeleteId(p.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <ProducerFormModal
        open={showForm}
        producer={edit}
        onClose={() => setShowForm(false)}
      />
      <DeleteModal
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={() => {
          deleteProducer(deleteId);
          setDeleteId(null);
        }}
        label={
          producerToDelete
            ? `Are you sure you want to delete "${producerToDelete.name}"?`
            : "Are you sure?"
        }
      />
    </div>
  );
}
