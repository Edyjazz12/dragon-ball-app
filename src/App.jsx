import './App.css'
import { useState, useEffect } from "react"

function App() {
  const [personajes, setPersonajes] = useState([])
  const [busqueda, setBusqueda] = useState("")
  const [raza, setRaza] = useState("Todos")

  const personajesFiltrados = personajes.filter(function(personaje){
    const coincideNombre = personaje.name.toLowerCase().includes(busqueda.toLowerCase())
    const coincideRaza = raza === "Todos" || personaje.race === raza
    return coincideNombre && coincideRaza
  })

  useEffect(function(){
    fetch("https://dragonball-api.com/api/characters?limit=60")
      .then(function(r) { return r.json()})
      .then(function(datos) { setPersonajes(datos.items)})
  }, [])

  return (
    <div>
      <h1>Dragon ball</h1>
      <div className="botones">
        <button onClick={() => setRaza("Todos")}>Todos</button>
        <button onClick={() => setRaza("Saiyan")}>Saiyan</button>
        <button onClick={() => setRaza("Human")}>Human</button>
        <button onClick={() => setRaza("Namekian")}>Namekian</button>
      </div>
      <div className="buscador">
        <input placeholder="Buscar personaje..."
          onChange={function(e) {setBusqueda(e.target.value)}} />
      </div>
      <div className="grid">
        {personajesFiltrados.map(function(personaje){
          return (
            <div key={personaje.id} className="card">
              <img src={personaje.image} alt={personaje.name} />
              <div className="card-info">
                <h2>{personaje.name}</h2>
                <p>{personaje.race}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App