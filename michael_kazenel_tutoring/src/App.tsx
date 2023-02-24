import React from 'react';
import { NavBar } from './components/header/NavBar';
import { Header } from './components/header/Header';
import { Main } from './components/pages/Main';

function App() {
  return (
    <div className='font-roboto scroll-smooth'>
      <NavBar/>
      <Header/>
      <Main/>
    </div>
    
  );
}

export default App;
