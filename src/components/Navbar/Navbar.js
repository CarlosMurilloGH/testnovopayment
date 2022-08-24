import React from 'react';
import './Navbar.css';
import Header from '../Header/header';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import NavigationData from '../../api/servicio.json';

import data from '../../api/servicio.json';


function Navbar (){
    
    console.log(NavigationData.lista[0].pays_transfer)

  return (
    <div className='navbarContainer'>
          <Header/>
          <NavigationLinks NavigationData={NavigationData}/>
    </div>
  )
}

export default Navbar;