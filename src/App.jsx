import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from '../src/pages/home/Home'
import About from '../src/pages/about/About'
import { Vans, loader as vansLoader} from '../src/pages/vans/Vans'
import VanDetail from '../src/pages/vandetail/VanDetail'
import Layout from './components/layout/Layout'
import Dashboard from './pages/host/Dashboard/Dashboard'
import Reviews from './pages/host/Reviews/Reviews'
import Income from './pages/host/Income/Income'
import HostVanDetail from './pages/host/vandetail/HostVanDetail'
import HostVans from './pages/host/vans/HostVans'
import Details from './pages/host/vandetail/details/Details'
import Photos from './pages/host/vandetail/photos/Photos'
import Pricing from './pages/host/vandetail/price/Pricing'
import Page404 from './pages/page404/Page404'
import Error from './components/error/Error'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import HostNav from './components/hostnav/HostNav'

const routes = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Layout />} errorElement={<Error />}> 
          <Route index element={<Home />}/>
          <Route path='about' element={<About/>}/>
          <Route path='vans' element={<Vans />} loader={vansLoader}/>
          <Route path='vans/:id' element={<VanDetail />} />
          <Route path='host' element={<HostNav />}>
            <Route index element={<Dashboard />}/>
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVanDetail />}>
              <Route index element={<Details />}/>
              <Route path='pricing' element={<Pricing />}/>
              <Route path='photos' element={<Photos />}/>
            </Route>
            <Route path='income' element={<Income />} />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Route>
))

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
