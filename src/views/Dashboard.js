import React from 'react';
import './Dashboard.css';
import Emblem from '../media/Emblem.svg';

function Dashboard() {
  return (
    <div className='dashboardContainer'>
      <div className='dashboardBox'>
        <img src={Emblem} alt="emblem" />
      </div>
    </div>
  )
}

export default Dashboard