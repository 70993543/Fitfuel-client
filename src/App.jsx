import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './styles/App.css'
import { Home } from './pages/home/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
