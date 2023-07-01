import { useState } from 'react'
import ListaErrores from './ListaErrores'
import generarId from './Autoid.js'
export default function FormularioContacto() {
  const [nombre, setNombre] = useState('')
  const [mail, setMail] = useState('')
  const [error, setError] = useState([])
  const [exito, setExito] = useState(false)

  const agregarError = errorNuevo => {
    setError(prevErrors => [
      ...prevErrors,
      { nombreError: errorNuevo, id: generarId() }
    ])
  }
  function esCorreoElectronico(cadena) {
    var patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return patron.test(cadena)
  }

  const validarFormulario = () => {
    let resultado = true
    setError([])

    if (nombre.trim().length < 5) {
      agregarError('El nombre debe tener al menos 5 caracteres')
      resultado = false
    }
    if (!esCorreoElectronico(mail)) {
      agregarError('El mail no es valido')
      resultado = false
    }
    setExito(resultado)
    return resultado
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (validarFormulario()) {
      setExito(true)
      setMail('')
      setNombre('')
    }
  }

  const changeNombre = e => {
    setNombre(e.target.value)
  }

  const changeMail = e => {
    setMail(e.target.value)
  }

  return (
    <section className='section-form transition-element'>
      <h2>Dejanos una nota. Pronto nos comunicaremos contigo</h2>

      <form onSubmit={handleSubmit}>
        {' '}
        <label htmlFor='nombre'>Nombre</label>
        <input type='text' id='nombre' value={nombre} onChange={changeNombre} />
        <label htmlFor='mail'>Mail</label>
        <input type='text' id='mail' value={mail} onChange={changeMail} />
        <label htmlFor="msj">Mensaje:</label>
        <textarea name="msj" id="msj" cols="30" rows="10"></textarea>
        <button type='submit'>Enviar</button>
        {exito && (
          <p className='exito transition-element'>
            Gracias por escribirnos. Espera nuestra pronta respuesta
          </p>
        )}
        {error.length === 0 ? undefined : <ListaErrores errores={error} />}
      </form>
    </section>
  )
}
