import FormularioContacto from '../components/contact/FormularioContacto'
import { BsFillLightningChargeFill } from 'react-icons/bs'
export default function Contact() {
  return (
    <section classname='section-contact transition-element'>
      <h1>
        Ponte en contacto con los Maestros <BsFillLightningChargeFill className='h1' />{' '}
      </h1>
      <div className='contenedor-contact'>
        <FormularioContacto />
      </div>
    </section>
  )
}
