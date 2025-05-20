import React from "react";

export default function DeleteModal({ open, onClose, onConfirm, label = "Are you sure?" }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0, left: 0, width: "100vw", height: "100vh",
        background: "rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10
      }}
    >
      <div
        onClick={e => e.stopPropagation()} // Prevent closing when clicking modal itself
        style={{
          background: "#fff",
          padding: 32,
          borderRadius: 16,
          minWidth: 280,
          maxWidth: 400,
          boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
          textAlign: "center"
        }}
      >
        <h3 style={{ marginBottom: 20 }}>{label}</h3>
        <button
          onClick={onConfirm}
          style={{
            background: "#e53935",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "8px 22px",
            margin: "0 10px",
            fontWeight: 600,
            cursor: "pointer"
          }}
        >Delete</button>
        <button
          onClick={onClose}
          style={{
            background: "#888",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "8px 22px",
            fontWeight: 600,
            cursor: "pointer"
          }}
        >Cancel</button>
      </div>
    </div>
  );
}
