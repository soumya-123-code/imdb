import React, { useRef, useEffect } from "react";

export default function ModalForm({ open, onClose, children }) {
  const modalRef = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
    }
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("mousedown", handleClick);
      document.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100vw", height: "100vh",
        background: "rgba(0,0,0,0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100
      }}
    >
      <div
        ref={modalRef}
        style={{
          background: "#fff",
          padding: "30px 18px 20px 18px",
          borderRadius: 16,
          minWidth: 0,
          width: "96vw",
          maxWidth: 400,
          boxShadow: "0 8px 32px 4px #b4c5de77",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 13, right: 17,
            background: "none",
            border: "none",
            fontSize: 23,
            color: "#1976d2",
            cursor: "pointer"
          }}
        >×</button>
        {children}
      </div>
    </div>
  );
}
