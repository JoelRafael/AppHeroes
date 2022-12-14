import React from 'react'
import { Routes, Route} from "react-router-dom";
import { Login } from '../auth/pages/Login';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {
  return (
    <>
        <Routes>
      
        <Route path='login' element={
          <PublicRoute><Login></Login>
          </PublicRoute>} />

        <Route path='/*' element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>} />
        
        {/*<Route path="/*" element={<HeroesRoutes />}/>*/}
        {/*<Route path="login" element={<Login />} />}/>*/}
        
        
      </Routes>
      </>
  )
}
