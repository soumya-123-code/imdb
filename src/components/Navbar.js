import React from "react";
import { topNav, chip, chipActive } from "../styles";

export default function Navbar({ tab, setTab }) {
  const tabs = ["Movies", "Actors", "Producers", "Details"];
  return (
    <div style={topNav}>
      {tabs.map(t => (
        <button
          key={t}
          onClick={() => setTab(t)}
          style={tab === t ? { ...chip, ...chipActive } : chip}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
