import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../App.css"

function Detalle() {
  const { id } = useParams()
  const [personaje, setPersonaje] = useState(null)
  const navigate = useNavigate()

  useEffect(function() {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then(function(r) { return r.json() })
      .then(function(datos) { setPersonaje(datos) })
  }, [id])

  if (personaje === null) {
    return <p>Cargando...</p>
  }

  return (
    <div className="detalle">
      <button onClick={() => navigate("/")}>← Volver</button>
      <h1>{personaje.name}</h1>
      <img src={personaje.image} alt={personaje.name} width="200" />
      <p>Raza: {personaje.race}</p>
      <p>Ki: {personaje.ki}</p>
      <p>Género: {personaje.gender}</p>
    </div>
  )
}

export default Detalle