import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import userImage from '../assets/user.png'

export default function DentistId() {
  const navigate = useNavigate()
  const params = useParams()
  const [dentista, setDentista] = useState()
  const [loading, setLoading] = useState(true)

  const volverALosDentistas = () => {
    navigate(-1)
  }

  async function getdentista() {
    setLoading(true)
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    )
    const data = await response.json()
    setDentista(data)
    setLoading(false)
  }
  useEffect(() => {
    getdentista()
  }, [])

  return (
    <section className='section-dentista-especifico'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>PokeDentista n° {dentista.id}</h1>
          <article>
            <div className='bigDisplay'>
            <div className='smallDisplay'>
              <img src={userImage} alt='Imagen de usuario' />
            </div>
            <span className='cardTitle'>{dentista.name}</span>
            </div>
            <p>
              <span className='cardTitle'>User:</span> {dentista.username}
            </p>
            <hr></hr>
            <p>
              <span className='cardTitle'>Matricula:</span> {dentista.id}
            </p>
          </article>
          
        </>
      )}
      <button onClick={volverALosDentistas}>
        Volver al listado
      </button>
    </section>
  )
}
