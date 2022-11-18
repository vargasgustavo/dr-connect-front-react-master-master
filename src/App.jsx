import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Routes, Route } from 'react-router-dom';
import CadastroMain from './Telas/CadastroMain';
import Header from './Telas/Header';
import HomeMain from './Telas/HomeMain';
import SobreNos from './Telas/SobreNos';
import Login from './Telas/Login';
import Agendamento from './Telas/Agendamento';
import Filtro from './Telas/Filtro'
import Agenda from './Telas/Agenda';
import HomeMedico from './Telas/HomeMedico';
import HomePaciente from './Telas/HomePaciente';
import PerfilPaciente from './Telas/PerfilPaciente';
import PerfilMedico from './Telas/PerfilMedico';
import Escolha from './Telas/Escolha';

const App = () => {

  const loggedIn = useSelector(state => state.loggedIn);

  return (
    <>
      <Routes>
        {loggedIn ?
        <>
        <Route path='/edit-profile-main' element={<><CadastroMain /></>} />
        <Route path='/edit-profile-patient' element={<><PerfilPaciente/></>} />
        <Route path='/edit-profile-medic' element={<><PerfilMedico/></>} />
        <Route path='/busca' element={<><Filtro/></>} />
        <Route path='/agendamento' element={<><Agendamento/></>} />
        <Route path='/calendar' element={<><Agenda/></>} />
        <Route path='/home-medico' element={<><HomeMedico/></>} />
        <Route path='/home-paciente' element={<><HomePaciente/></>} />
        <Route path='/choice' element={<><Escolha/></>}/>
        </>:
        <>
        <Route path='/' element={<><HomeMain /></>} />
        <Route path='/nossos-servicos' element={<><SobreNos /></>} />
        <Route path='/login' element={<><Login/></>} />
        </>
        }
      </Routes>
      <Outlet />
    </>
  )
}

export default App