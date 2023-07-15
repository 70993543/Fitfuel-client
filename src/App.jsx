import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './styles/App.css'
import { Home } from './pages/home/Home'
import { Navbar } from './components/navbar/Navbar'
import { About } from './pages/about/About'
import {Service} from './pages/service/Service'
import { Detail } from './pages/detail/Detail'
import {Appointment} from './pages/appointment/Appointment'
import { Ticket } from './pages/ticket/Ticket'



function App() {

  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service' element={<Service></Service>}
        ></Route>
        <Route path='/service/detail/:id' element={<Detail></Detail>}></Route>
        <Route path='/servicios/detalle/cita' element={<Appointment></Appointment>}></Route>
        <Route path='/cita/ticket' element={<Ticket></Ticket>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
