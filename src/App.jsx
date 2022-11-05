import React from 'react'
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

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<><HomeMain /></>} />
        <Route path='/login' element={<><Login/></>}/>
        <Route path='/cadastrar' element={<><CadastroMain /></>} />
        <Route path='/busca' element={<><Filtro/></>}/>
        <Route path='/nossos-servicos' element={<><SobreNos /></>} />
        <Route path='/agendamento' element={<><Agendamento/></>}/>
        <Route path='/calendar' element={<><Agenda/></>}/>
        <Route path='/home-medico' element={<><HomeMedico/></>}/>
        <Route path='/home-paciente' element={<><HomePaciente/></>}/>
      </Routes>
      <Outlet />
    </>
  )
}

export default App