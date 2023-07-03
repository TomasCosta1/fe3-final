import logoDigital from '../assets/logoDigitalHouse.png'
export default function Footer() {
  return (
    <footer>
      <p>
        <span className='titulo'>Maestro Pokemon: </span><a href="https://tomascosta.tech" target='_blank'>Tomas Costa</a>
      </p>
      <p className="frontText">Frontend III</p>
      <img className="logoDigital" src={logoDigital} alt="Logo digital house" />
    </footer>
  )
}
