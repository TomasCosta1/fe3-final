import { useState } from 'react'
import Card from './Card'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import { BsFillSlashCircleFill } from 'react-icons/bs'

export default function ListarOdontologosFavoritos() {
  const [odontologosFavoritos, setOdontologosFavoritos] = useState(
    JSON.parse(localStorage.getItem('odontologosFavoritos') || '[]')
  )

  function eliminarOdontologoFavorito(odontologoAEliminar) {
    const nuevosFavoritos = odontologosFavoritos.filter(
      odontologo => odontologo.id !== odontologoAEliminar.id
    )

    setOdontologosFavoritos(nuevosFavoritos)
    localStorage.setItem(
      'odontologosFavoritos',
      JSON.stringify(nuevosFavoritos)
    )
  }
  return (
    <>
      {odontologosFavoritos.length === 0 ? (
        <h1>
          No existen PokeDentistas favoritos. Prueba agregando uno!{' '}
          <BsFillLightningChargeFill className='h1' />
          <section className='not-found transition-element'>
            <BsFillSlashCircleFill />
          </section>
        </h1>
      ) : (
        <h1 className='sin-favoritos'>
          La mejor seleccion de PokeDentistas en un mismo lugar!{' '}
          <BsFillLightningChargeFill className='h1' />{' '}
        </h1>
      )}

      <section className='section-cards-favoritos transition-element'>
        <ul className='covers'>
          {odontologosFavoritos.map(odontologoFavorito => (
            <Card
              key={odontologoFavorito.id}
              odontologoFavorito={odontologoFavorito}
              eliminarOdontologoFavorito={eliminarOdontologoFavorito}
            />
          ))}
        </ul>
      </section>
    </>
  )
}
