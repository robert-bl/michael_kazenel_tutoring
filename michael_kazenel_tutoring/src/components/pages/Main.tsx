import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Tutoring } from './Tutoring';



export function Main () {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/tutoring' element={<Tutoring/>}/>
            </Routes>
        
        </div>
    );
}
