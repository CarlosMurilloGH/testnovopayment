import { Fragment, useState, useEffect } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './NavigationLinks.css';

const NavigationLinks =(props) =>{

    const { data } = props;
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        const formatData = (list) => {
            const tree = [];
            list.forEach((listValue) => {
                const keys = Object.keys(listValue);
                keys.forEach((keysValue) => {
                    if(listValue[keysValue].length > 0){
                        const isIncluded = tree.includes(keysValue);
                        if(!isIncluded){
                            const wrapper = (
                                <Dropdown key={`${keysValue}-submenu`} label={keysValue}>
                                    {formatData(listValue[keysValue])}
                                </Dropdown>
                            );
                            tree.push(wrapper);
                        }
                    }else{
                        const isIncluded = tree.includes(keysValue);
                        if(!isIncluded) tree.push(<li key={`${keysValue}-link`}><a className={`${keysValue}-link`} href={`/${keysValue}/`}>{keysValue}</a></li>);
                    }
                });
            });
            return tree;
        };
        setMenu(formatData(data));
    }, [data]);
    return (
        <Fragment>
            <nav className='menu'>
                <ul>
                    {menu}
                </ul>
            </nav>
        </Fragment>
    )
}

export default NavigationLinks;