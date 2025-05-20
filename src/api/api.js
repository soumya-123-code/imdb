const BASE = "http://localhost:5000";

export const getMovies = () => fetch(`${BASE}/movies`).then(res => res.json());
export const addMovie = (data) =>
  fetch(`${BASE}/movies`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => {
    if (!res.ok) throw new Error("Failed to add movie");
    return res.json();
  });
export const editMovie = (id, data) => fetch(`${BASE}/movies/${id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then(res => res.json());
export const deleteMovie = (id) => fetch(`${BASE}/movies/${id}`, { method: "DELETE" }).then(res => res.json());

export const getActors = () => fetch(`${BASE}/actors`).then(res => res.json());
export const addActor = (data) => fetch(`${BASE}/actors`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then(res => res.json());
export const editActor = (id, data) => fetch(`${BASE}/actors/${id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then(res => res.json());
export const deleteActor = (id) => fetch(`${BASE}/actors/${id}`, { method: "DELETE" }).then(res => res.json());

export const getProducers = () => fetch(`${BASE}/producers`).then(res => res.json());
export const addProducer = (data) => fetch(`${BASE}/producers`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then(res => res.json());
export const editProducer = (id, data) => fetch(`${BASE}/producers/${id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then(res => res.json());
export const deleteProducer = (id) => fetch(`${BASE}/producers/${id}`, { method: "DELETE" }).then(res => res.json());
