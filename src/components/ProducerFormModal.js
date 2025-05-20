import React, { useState, useEffect } from "react";
import ModalForm from "./ModalForm";
import { useApp } from "../context/AppContext";
import {
  inputStyle,
  labelStyle,
  section,
  primaryBtn,
  secondaryBtn,
} from "../styles";

export default function ProducerFormModal({ open, onClose, producer }) {
  const { addProducer, editProducer } = useApp();
  const [form, setForm] = useState({
    name: "",
    gender: "",
    dob: "",
    bio: "",
  });

  useEffect(() => {
    setForm(
      producer
        ? {
            name: producer.name || "",
            gender: producer.gender || "",
            dob: producer.dob ? producer.dob.substring(0, 10) : "",
            bio: producer.bio || "",
          }
        : {
            name: "",
            gender: "",
            dob: "",
            bio: "",
          }
    );
  }, [open, producer]);

  const handleChange = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  const handleSave = async () => {
    if (producer) await editProducer(producer.id, form);
    else await addProducer(form);
    onClose();
  };

  return (
    <ModalForm open={open} onClose={onClose}>
      <h2 style={{ margin: "0 0 18px 0", textAlign: "center", color: "#1976d2" }}>
        {producer ? "Edit" : "Add"} Producer
      </h2>
      <div style={section}>
        <label style={labelStyle}>Name</label>
        <input
          style={inputStyle}
          placeholder="Full Name"
          value={form.name}
          onChange={e => handleChange("name", e.target.value)}
        />

        <label style={labelStyle}>Gender</label>
        <select
          style={inputStyle}
          value={form.gender}
          onChange={e => handleChange("gender", e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label style={labelStyle}>Date of Birth</label>
        <input
          style={inputStyle}
          type="date"
          value={form.dob}
          onChange={e => handleChange("dob", e.target.value)}
        />

        <label style={labelStyle}>Bio</label>
        <textarea
          style={{ ...inputStyle, minHeight: 60, resize: "vertical" }}
          placeholder="Short bio"
          value={form.bio}
          onChange={e => handleChange("bio", e.target.value)}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          marginTop: 4,
        }}
      >
        <button style={primaryBtn} onClick={handleSave}>
          {producer ? "Save" : "Add"}
        </button>
        <button style={secondaryBtn} onClick={onClose}>
          Cancel
        </button>
      </div>
    </ModalForm>
  );
}
