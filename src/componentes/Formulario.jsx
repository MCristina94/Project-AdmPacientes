import React from 'react'
import {useState, useEffect} from 'react'
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  
  const [fechaAtencion, setFechaAtencion] = useState('');
  const [nombrePaciente, setNombrePaciente] = useState('');
  const [apellidoPaciente, setApellidoPaciente] = useState('');
  const [idPaciente, setIdPaciente] = useState('');
  const [nombreAcudiente, setNombreAcudiente] = useState('');
  const [idAcudiente, setIdAcudiente] = useState('');
  const [contacto, setContacto] = useState('');
  const [email, setEmail] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(()=>{
    if ( Object.keys(paciente).length > 0){//esto comprueba si hay algo en el objeto
      setFechaAtencion(paciente.fechaAtencion);
      setNombrePaciente(paciente.nombrePaciente);
      setApellidoPaciente(paciente.apellidoPaciente);
      setIdPaciente(paciente.idPaciente)
      setNombreAcudiente(paciente.nombreAcudiente);
      setIdAcudiente(paciente.idAcudiente);
      setContacto(paciente.contacto);
      setEmail(paciente.email);
      setSintomas(paciente.sintomas);
    } 
  },[paciente])

  const generarId =() => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return fecha + random;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion del formulario
    if([fechaAtencion, nombreAcudiente, nombrePaciente, apellidoPaciente, idPaciente, 
      idPaciente, contacto, email, sintomas].includes('')){
        setError(true);
      }else{
        setError(false);
        
        //objeto de datos paciente
        const objetoPaciente ={
          fechaAtencion,
          nombrePaciente,
          apellidoPaciente,
          idPaciente,
          nombreAcudiente,
          idAcudiente,
          contacto,
          email,
          sintomas
        }

        if(paciente.id){//significa que estamos editando
          objetoPaciente.id = paciente.id //asigno el id al objeto paciente
          const pacientesActualizados = pacientes.map(pacienteState => 
            pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})
        }else{//genera un nuevo registro
          objetoPaciente.id=generarId()
          setPacientes([...pacientes, objetoPaciente])
        }

        //reiniciar el form
        setFechaAtencion("");
        setNombrePaciente("");
        setApellidoPaciente("");
        setIdPaciente("");
        setNombreAcudiente("");
        setIdAcudiente("");
        setContacto("");
        setEmail("");
        setSintomas("");

      }
  }
  return (
        
        <div className="md:w-1/2 lg:w-2/5">
          <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
          
          <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {" "}
          <span className="text-blue-600 font-bold">Administralo</span>
          </p>

          <form onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

          <div className="mb-5">
              <label htmlFor='fecha' className="block text-gray-700 uppercase font-bold">Fecha atención: </label>
              <input id='fecha' type="date" className="border-2 w-full 
              p-2 mt-2 placeholder-gray-400 rounded-md" value={fechaAtencion}
              onChange={(e) => setFechaAtencion(e.target.value) }/>
            </div>


            <div className="mb-5">
              <label htmlFor='nombre' className="block text-gray-700 uppercase font-bold">Nombre: </label>
              <input id='nombre' type="text" placeholder='Ingrese el nombre' className="border-2 w-full 
              p-2 mt-2 placeholder-gray-400 rounded-md" value={nombrePaciente}
              onChange={(e) => setNombrePaciente(e.target.value) }/>
            </div>

            <div className="mb-5">
              <label htmlFor='apellido' className="block text-gray-700 uppercase font-bold">Apellidos: </label>
              <input id='apellido' type="text" placeholder='Ingrese los apellidos' className="border-2 w-full 
              p-2 mt-2 placeholder-gray-400 rounded-md" value={apellidoPaciente}
              onChange={(e) => setApellidoPaciente(e.target.value) }/>
            </div>

            <div className="mb-5">
              <label htmlFor='identificacion' className="block text-gray-700 uppercase font-bold">Identificacion: </label>
              <input id='identificacion' type="number" placeholder='Ingrese numero de identificacion' className="border-2 w-full 
              p-2 mt-2 placeholder-gray-400 rounded-md" value={idPaciente}
              onChange={(e) => setIdPaciente(e.target.value) }/>
            </div>

            <div className="mb-5">
              <label htmlFor='acudiente' className="block text-gray-700 uppercase font-bold">Acudiente: </label>
              <input id='acudiente' type="text" placeholder='Ingrese nombre del acudiente' className="border-2 w-full 
              p-2 mt-2 placeholder-gray-400 rounded-md" value={nombreAcudiente}
              onChange={(e) => setNombreAcudiente(e.target.value) }/>
            </div>

            <div className="mb-5">
              <label htmlFor='identificacionAc' className="block text-gray-700 uppercase font-bold">Identificacion Acudiente: </label>
              <input id='identificacionAc' type="number" placeholder='Ingrese numero de identificacion' className="border-2 w-full 
              p-2 mt-2 placeholder-gray-400 rounded-md" value={idAcudiente}
              onChange={(e) => setIdAcudiente(e.target.value) }/>
            </div>

            <div className="mb-5">
              <label htmlFor='contacto' className="block text-gray-700 uppercase font-bold">Numero de contacto: </label>
              <input id='contacto' type="number" placeholder='Ingrese numero de contacto' className="border-2 w-full 
              p-2 mt-2 placeholder-gray-400 rounded-md" value={contacto}
              onChange={(e) => setContacto(e.target.value) }/>
            </div>

            <div className="mb-5">
              <label htmlFor='email' className="block text-gray-700 uppercase font-bold">Email: </label>
              <input id='email' type="email" placeholder='Ingrese Email' className="border-2 w-full 
              p-2 mt-2 placeholder-gray-400 rounded-md" value={email}
              onChange={(e) => setEmail(e.target.value) }/>
            </div>
            
            <div className="mb-5">
              <label htmlFor='sintomas' className="block text-gray-700 uppercase font-bold">Síntomas: </label>
              <textarea
              id='sintomas' className="border-2 w-full 
              p-2 mt-2 placeholder-gray-400 rounded-md" placeholder='Describe los síntomas'
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value) }/> 
            </div>
            
            {error && <Error mensaje={ "todos los datos son obligatorios"}/>}

            <input type="submit" className="bg-blue-600 w-full  text-white uppercase font-bold p-3
            hover:bg-blue-800 cursor-pointer transition-colors"
            value= {paciente.id ? "Editar Paciente" : "Agregar Paciente"} />

          </form>

        </div>
  )
}

export default Formulario
