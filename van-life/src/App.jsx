import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Review from './pages/Host/Review';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/Vans/HostVans';
import HostVanDetail from './pages/Host/Vans/HostVanDetail';
import HostVanLayout from './components/HostVanLayout';
import Photos from './pages/Host/Vans/Photos';
import Pricing from './pages/Host/Vans/Pricing';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import AuthRequired from './components/AuthRequired';

import './server';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans /> } />
          <Route path='/vans/:id' element={<VanDetail />} />
          <Route path="login" element={<Login />} />

          <Route element={<AuthRequired />}>
            <Route path='/host' element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='review' element={<Review />} />
              <Route path='vans' element={<HostVans />} />
              <Route path='vans/:id' element={<HostVanLayout />}>
                <Route index element={<HostVanDetail />} />
                <Route path='pricing' element={<Pricing />} />
                <Route path='photos' element={<Photos />} />
              </Route>
            </Route>
          </Route>


          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}





export default App
