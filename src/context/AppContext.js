import React, { createContext, useContext, useEffect, useState } from "react";
import * as api from "../api/api";

const AppContext = createContext();

export function useApp() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);
  const [producers, setProducers] = useState([]);

  const fetchAll = async () => {
    setMovies(await api.getMovies());
    setActors(await api.getActors());
    setProducers(await api.getProducers());
  };

  useEffect(() => { fetchAll(); }, []);

  // Movies CRUD
  const addMovie = async (movie) => { await api.addMovie(movie); await fetchAll(); };
  const editMovie = async (id, movie) => { await api.editMovie(id, movie); await fetchAll(); };
  const deleteMovie = async (id) => { await api.deleteMovie(id); await fetchAll(); };

  // Actors CRUD
  const addActor = async (actor) => { await api.addActor(actor); await fetchAll(); };
  const editActor = async (id, actor) => { await api.editActor(id, actor); await fetchAll(); };
  const deleteActor = async (id) => { await api.deleteActor(id); await fetchAll(); };

  // Producers CRUD
  const addProducer = async (producer) => { await api.addProducer(producer); await fetchAll(); };
  const editProducer = async (id, producer) => { await api.editProducer(id, producer); await fetchAll(); };
  const deleteProducer = async (id) => { await api.deleteProducer(id); await fetchAll(); };

  return (
    <AppContext.Provider value={{
      movies, actors, producers,
      addMovie, editMovie, deleteMovie,
      addActor, editActor, deleteActor,
      addProducer, editProducer, deleteProducer,
      fetchAll
    }}>
      {children}
    </AppContext.Provider>
  );
}
