import { Navbar } from '../../ui'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Dc } from "../pages/Dc";
import { Marvel } from '../pages/Marvel';
import { Search } from '../pages/Search';
import { Heros } from '../pages/Heros';

export const HeroesRoutes = () => {
    return<>
        <Navbar></Navbar>
        <div className='container'>
        <Routes>
        <Route path="marvel" element={<Marvel />} />
                <Route path="dc" element={<Dc />} />
                <Route path="search" element={<Search />} />
                 <Route path="heroe/:id" element={<Heros />} />
        <Route path="/" element={<Navigate to="/marvel"></Navigate>} />
      </Routes>
     </div>
    </>
}
