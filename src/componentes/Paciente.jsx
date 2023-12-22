import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const handleEliminar = () => {
    const respuesta = confirm("¿Desea eliminar ese paciente?")
    if(respuesta){
      eliminarPaciente(paciente.id)
    }
  }

  return (
    <div className="m-3 bg-white px-5 py-10 shadow-md rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {" "}
          <span className="font-normal normal-case">{paciente.nombrePaciente}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Apelidos: {" "}
          <span className="font-normal normal-case">{paciente.apellidoPaciente}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Identificación: {" "}
          <span className="font-normal normal-case">{paciente.idPaciente}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Acudiente: {" "}
          <span className="font-normal normal-case">{paciente.nombreAcudiente}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Identificación acudiente: {" "}
          <span className="font-normal normal-case">{paciente.idAcudiente}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Numero Contacto: {" "}
          <span className="font-normal normal-case">{paciente.contacto}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {" "}
          <span className="font-normal normal-case">{paciente.email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {" "}
          <span className="font-normal normal-case">{paciente.sintomas}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Atención: {" "}
          <span className="font-normal normal-case">{paciente.fechaAtencion}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button type='button' 
          className="py-2 px-10 bg-blue-600 hover:bg-blue-900 text-white font-bold uppercase rounded-lg"
          onClick={() => {setPaciente(paciente)}}>
            Editar
          </button>

          <button type='button'
          className="py-2 px-10 bg-red-600 hover:bg-red-900 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}>
            Eliminar
          </button>
        </div>

      </div>
  )
}

export default Paciente