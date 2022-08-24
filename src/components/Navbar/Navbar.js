import React,{useState,useEffect} from 'react';
import './Navbar.css';
import Header from '../Header/header';
import NavigationLinks from '../NavigationLinks/NavigationLinks';

import Axios from 'axios';



function Navbar (){
    
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
      Axios.get('/data/servicio.json')
      .then((response) => setData(response.data.lista))
      .catch(() => setError(true));
  }, []);

  console.log(setData)

  return (
    <div className='navbarContainer'>
          <Header/>
          <div>
            {
              data.length > 0 ? <NavigationLinks data={data} /> : 
              <nav className='menu'>
                  <ul>
                      <li>{error ? 'Ha ocurrido un error inesperado.' : 'Cargando ...'}</li>
                  </ul>
              </nav>                    
            }
          </div>
    </div>
  )
}

export default Navbar;