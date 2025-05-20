import React, { useState } from "react";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import MovieGrid from "./components/MovieGrid";
import ActorGrid from "./components/ActorGrid";
import ProducerGrid from "./components/ProducerGrid";
import DetailsGrid from "./components/DetailsGrid";
import { responsive } from "./styles";

function App() {
  const [tab, setTab] = useState("Movies");

  let Content;
  if (tab === "Movies") Content = <MovieGrid />;
  if (tab === "Actors") Content = <ActorGrid />;
  if (tab === "Producers") Content = <ProducerGrid />;
  if (tab === "Details") Content = <DetailsGrid />;

  return (
    <AppProvider>
      <style>{responsive}</style>
      <Navbar tab={tab} setTab={setTab} />
      <div style={{ maxWidth: 1200, margin: "30px auto", padding: 16 }}>
        {Content}
      </div>
    </AppProvider>
  );
}
export default App;
