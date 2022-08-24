import { useState } from 'react';

function Dropdown(props) {
    const [display, setDisplay] = useState(false);
    return (
        <li onMouseEnter={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)} className='submenu'>
            <p className='label'>{props.label}</p>
            <div className={`content bg-white ${display ? 'active' : ''}`}>
                <ul>
                    {props.children}
                </ul>
            </div>
        </li>
  )
}

export default Dropdown