import React from 'react';
import './Global.css';

import Header from './components/Header/Header';
import Search from './components/Shearch/Search';
import Perfil from './components/Perfil/Perfil';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Search />
      <Perfil />  
      <Footer /> 
   </>
  );
}
export default App;
