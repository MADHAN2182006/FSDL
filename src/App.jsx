import { useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

import './App.css'
import Experiment1 from './pages/Experiment/Experiment1.jsx'
import Dashboard from './component/Dashboard.jsx'
import Experiment2 from './pages/Experiment2/Experiment2.jsx'
import Experiment3 from './pages/Experiment3/Experiment3.jsx'
import Experiment4 from './pages/Experiment4/Experiment4.jsx'
import Experiment5 from './pages/Experiment5/Experiment5.jsx'
import Experiment6 from './pages/Experiment6/Experiment6.jsx'
import Experiment7 from './pages/Experiment7/Experiment7.jsx'
import Experiment8 from './pages/Experiment8/Experiment8.jsx'
import Experiment9 from './pages/Experiment9/Experiment9.jsx'
import Experiment10 from './pages/Experiment10/Experiment10.jsx'
import Experiment11 from './pages/Experiment11/Experiment11.jsx'
import Experiment12 from './pages/Experiment12/Experiment12.jsx'
import Experiment13 from './pages/Experiment13/Experiment13.jsx'
import Experiment14 from './pages/Experiment14/Experiment14.jsx'
import Experiment15 from './pages/Experiment15/Experiment15.jsx'
import Activity from './pages/Activity1/Activity.jsx'

function App() {

  return (
    <>
       <BrowserRouter>
         <Routes>
             <Route path='/' element={<Dashboard/>} />
             {/* <Route path='/Activity' element={<Activity/>} /> */}
             <Route path='/Experiment1' element={<Experiment1/>} />
             <Route path="/Experiment2" element={<Experiment2/>} />
             <Route path="/Experiment3" element={<Experiment3/>} />
             <Route path="/Experiment4" element={<Experiment4/>} />
             <Route path="/Experiment5" element={<Experiment5/>} />
             <Route path="/Experiment6" element={<Experiment6/>} />
             <Route path="/Experiment7" element={<Experiment7/>} />
             <Route path="/Experiment8" element={<Experiment8/>} />
             <Route path="/Experiment9" element={<Experiment9/>} />
             <Route path="/Experiment10" element={<Experiment10/>} />
             <Route path="/Experiment11" element={<Experiment11/>} />
             <Route path="/Experiment12" element={<Experiment12/>} />
             <Route path="/Experiment13" element={<Experiment13/>} />
             <Route path="/Experiment14" element={<Experiment14/>} />
             <Route path="/Experiment15" element={<Experiment15/>} />
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
