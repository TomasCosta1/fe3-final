import userImage from '../../assets/user.png'
import { Link, useNavigate } from 'react-router-dom'
import { BsHeartFill, BsHeart, BsInfoCircle } from 'react-icons/bs'

export default function Card(props) {
  const { odontologo, esFavorito, manejarFavoritos } = props

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/Dentis/${odontologo.id}`)
  }

  return (
    <li className='card' onClick={handleClick}>
      <div className='bigDisplay'>
        <div className='smallDisplay'>
          <img src={userImage} alt='Imagen de usuario' />
        </div>
        <span className='cardTitle'>{odontologo.name}</span>
        
      </div>
      <p>
        <span className='cardTitle'>User:</span> {odontologo.username}
      </p>
      <hr></hr>
      <div className='cardBtns'>
        <div>
          <Link to={`/Dentis/${odontologo.id}`}>
            <BsInfoCircle className='info' />
          </Link>
        </div>
        <div>
        {esFavorito ? (
          <BsHeartFill
            className='favorito'
            onClick={e => {
              e.stopPropagation()
              manejarFavoritos(odontologo)
            }}
          />
        ) : (
          <BsHeart
            className=''
            onClick={e => {
              e.stopPropagation()
              manejarFavoritos(odontologo)
            }}
          />
        )}
        </div>
      </div>
    </li>
  )
}
