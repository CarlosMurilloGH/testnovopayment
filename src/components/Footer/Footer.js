import React from 'react';
import './Footer.css';
import logo from '../../media/Logo.svg';
import pci from '../../media/Private-CEO.svg';

function Footer() {
  return (
    <footer className='footerContainer'>
      <div className='footerBox'>
        <div>
          <img src={logo} alt="novopayment logo"/>
        </div>

        <div>
          <p>&copy; 2022 Novopayment Inc. All rights reserved</p>
        </div>

        <div>
          <img src={pci} alt="pci logo"/>
        </div>

      </div>
    </footer>
  )
}

export default Footer