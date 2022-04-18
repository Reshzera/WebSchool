import { createContext, useEffect, useState } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"

import Forgotpassword from "./Pages/LoginPages/forgotpassword"
import Login from "./Pages/LoginPages/login"
import DashboardRoute from "./Routes/DashboardRoute"
import PracticeRoute from "./Routes/PracticeRoutes"
import PracticeDetailRoute from  './Routes/PracticeDetailRoute'
import ScoresMeanRoutes from "./Routes/ScoresMeanRoutes"
import AgendaRoutes from "./Routes/AgendaRoutes"

function App() {
  const [isAuth, setAuth] = useState(false)

  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login isAuth={setAuth}/>}/>
            <Route path='/forgotpassword' element={<Forgotpassword/>}/>
            <Route path='/dashboard' element={<DashboardRoute/>}/>
            <Route path='/simulados' element={<PracticeRoute/>}/>
            <Route path='/simulados/:id' element={<PracticeDetailRoute/>}/> 
            <Route path='/notas' element={<ScoresMeanRoutes/>}/>
            <Route path='/agenda' element={<AgendaRoutes/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
