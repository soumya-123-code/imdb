export const topNav = {
  position: "sticky",
  top: 0,
  left: 0,
  width: "100vw",
  background: "#fff",
  boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
  display: "flex",
  justifyContent: "center",
  gap: 16,
  padding: "16px 0 14px 0",
  zIndex: 99,
};

export const chip = {
  padding: "10px 26px",
  borderRadius: "30px",
  border: "none",
  background: "#e3eafc",
  color: "#1976d2",
  fontWeight: 600,
  fontSize: 16,
  boxShadow: "0 1.5px 6px rgba(25, 118, 210, 0.08)",
  cursor: "pointer",
  outline: "none",
  margin: "0 2px",
  transition: "all .15s"
};

export const chipActive = {
  background: "#1976d2",
  color: "#fff",
  boxShadow: "0 4px 18px #1976d299",
};

export const gridContainer = {
  display: "grid",
  gap: "20px",
  gridTemplateColumns: "repeat(5, 1fr)",
  marginTop: 30,
  marginBottom: 30,
};

export const card = {
  background: "#fff",
  borderRadius: "14px",
  boxShadow: "0 2px 18px rgba(0,0,0,0.10)",
  padding: 18,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

export const section = {
  background: "#f6f8fa",
  padding: "18px 14px 10px 14px",
  borderRadius: 12,
  marginBottom: 18,
  boxShadow: "0 1px 6px #d1d8e6aa"
};

export const inputStyle = {
  width: "90%",
  padding: "12px 15px",
  marginBottom: 10,
  border: "1.5px solid #b0b8c1",
  borderRadius: "8px",
  fontSize: 17,
  outline: "none",
  background: "#f9fafb",
  transition: "border 0.2s, box-shadow 0.2s",
  boxShadow: "0 1.5px 5px #eef3fa",
};

export const selectStyle = {
  width: "100%",
  padding: "12px 15px",
  marginBottom: 10,
  border: "1.5px solid #b0b8c1",
  borderRadius: "8px",
  fontSize: 17,
  outline: "none",
  background: "#f9fafb",
  transition: "border 0.2s, box-shadow 0.2s",
  boxShadow: "0 1.5px 5px #eef3fa",
};

export const labelStyle = {
  fontWeight: 600,
  color: "#1976d2",
  marginBottom: 4,
  display: "block"
};

export const actorChip = {
  display: "inline-flex",
  alignItems: "center",
  padding: "7px 14px 7px 8px",
  borderRadius: 22,
  margin: "3px 9px 7px 0",
  fontWeight: 600,
  fontSize: 15,
  cursor: "pointer",
  background: "#f6f8fd",
  color: "#1976d2",
  border: "1.5px solid #e3eafc",
  boxShadow: "0 2px 8px #e3eafc99",
  transition: "all .18s"
};
export const actorChipActive = {
  background: "#1976d2",
  color: "#fff",
  border: "1.5px solid #1976d2",
  boxShadow: "0 2px 12px #1976d266"
};

export const addBtn = {
  background: "#1976d2",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  padding: "9px 18px",
  fontWeight: 600,
  fontSize: 16,
  cursor: "pointer",
  marginBottom: 12
};

export const primaryBtn = {
  background: "#1976d2",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  padding: "11px 28px",
  fontWeight: 700,
  fontSize: 16,
  cursor: "pointer",
  marginRight: 10,
  boxShadow: "0 2px 12px #1976d288"
};

export const secondaryBtn = {
  background: "#b0b8c1",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  padding: "11px 28px",
  fontWeight: 600,
  fontSize: 16,
  cursor: "pointer",
};

export const responsive = `
  @media (max-width: 900px) {
    .grid-container { grid-template-columns: repeat(2, 1fr) !important; }
  }
`;
