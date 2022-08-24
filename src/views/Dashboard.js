import React from 'react';
import './Dashboard.css';
import Emblem from '../media/Emblem.svg';

function Dashboard() {
  return (
    <div className='dashboardContainer'>
      <img src={Emblem} alt="emblem" />
    </div>
  )
}

export default Dashboard