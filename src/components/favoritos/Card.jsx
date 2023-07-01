import userImage from '../../assets/user.png'

import { BsFillTrashFill } from 'react-icons/bs'
export default function Card(props) {
  const { odontologoFavorito, eliminarOdontologoFavorito } = props

  return (
    <li className='card '>
      <div className='bigDisplay'>
        <div className='smallDisplay'>
          <img src={userImage} alt='Imagen de usuario' />
        </div>
        <span className='cardTitle'>{odontologoFavorito.name}</span>
      </div>
      <p>
        <span className='titulo'>User:</span> {odontologoFavorito.username}
      </p>
      <hr></hr>
      <BsFillTrashFill
        className='eliminar'
        onClick={() => eliminarOdontologoFavorito(odontologoFavorito)}
      />
    </li>
  )
}
