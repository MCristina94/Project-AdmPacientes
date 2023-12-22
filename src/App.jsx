import { useEffect, useState } from "react"
import Formulario from "./componentes/Formulario"
import Header from "./componentes/Header"
import ListadoPacientes from "./componentes/ListadoPacientes"


function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);

  const agregarPaciente = (paciente) => {
    const pacientesAgregados = [...pacientes, paciente]
    setPacientes(pacientesAgregados)
    localStorage.setItem('pacientes', JSON.stringify(pacientesAgregados));
  }

  const actualizarPacientes = (pacientes) => {
    setPacientes(pacientes);
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
    localStorage.setItem('pacientes', JSON.stringify( pacientesActualizados ));
  }
  
  return (
    <div className="container mx-auto mt-20">
    <Header/>

    <div className="mt-12 md:flex">
    <Formulario
    pacientes = {pacientes} paciente = {paciente} setPaciente={setPaciente}
    agregarPaciente={agregarPaciente} actualizarPacientes={actualizarPacientes}/>
    <ListadoPacientes
    pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
    </div>
    </div>
  )
}

export default App
