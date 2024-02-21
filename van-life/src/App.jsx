import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';

import './server';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element ={<Vans /> } />
      </Routes>
    </BrowserRouter>
  )
}





export default App
