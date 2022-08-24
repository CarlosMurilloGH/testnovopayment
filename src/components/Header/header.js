import React from 'react';
import './header.css';
import Tuprutec from '../../media/Tu PruTec.svg';
import Arrow from '../../media/Arrow Down.svg';

function header() {
  return (
    <div className='headerContainer'>
        <div className='headerBox'>
            <div>
                <img src={Tuprutec} alt="tuprutec logo" />
            </div>
            <div className='usernameContainer'>
                <div className='usernameBox'>
                    <p>USER NAME</p>
                    <img src={Arrow} alt="arrow menu" className='arrow'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default header;