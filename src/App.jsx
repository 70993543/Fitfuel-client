import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './styles/App.css'
import { Home } from './pages/home/Home'
import { Navbar } from './components/navbar/Navbar'
import { About } from './pages/about/About'

function App() {

  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
