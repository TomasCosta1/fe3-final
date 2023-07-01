import { Link } from 'react-router-dom'
import BotonCambiarTema from './BotonCambiarTema'
import pokeLogo from '../assets/pokeLogo.png'
export default function Header() {
  return (
    <header>
      <h1>
        <img className='pokeLogo' src={pokeLogo} alt="PokeLogo" />
        <span className='titulo'> DENTAL</span>DEX{' '}
      </h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/Contact'>Contacto</Link>
        <Link to='/Favs'>Favoritos</Link>
        <BotonCambiarTema />
      </nav>
    </header>
  )
}
