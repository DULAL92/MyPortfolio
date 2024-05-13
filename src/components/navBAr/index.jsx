import React, { useState } from "react";
import {FaBars, FaReact} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {HiX} from 'react-icons/hi';
import './styles.scss';


const data = [
    {
        label : 'Home',
        to : '/'
    },

    {
        label : 'About',
        to : '/about'
    },
    {
        label : 'Skills',
        to : '/skills'
    },
    {
        label : 'Resume',
        to : '/resume'
    },
   
    {
        label : 'Portfolio',
        to : '/portfolio'
    },
    
    {
        label : 'Contact',
        to : '/contact'
    },
    
]

const NavBar = () =>
{
    const [toggleIcon, setToggleIcon] = useState(false);
   
    const handleToggleIcon = () =>
    {
        setToggleIcon(!toggleIcon);
        
    };
    return(
        <div>
            <nav className="navbar">
                <div className="navbar_containers">
                    <Link to={'/'} className="navbar_containers_logo">
                      <FaReact size={30} />
                    </Link>
                </div>
                <ul className= {`navbar_containers_menu ${toggleIcon ? 'active' : ''} `}>
                {
                    data.map((item, key)=>(
                        <li key= {key} className="navbar_containers_menu_items">
                            <Link className="navbar_containers_menu_items_links" to={item.to}>
                               {item.label}
                            </Link>

                        </li>
                    )
                )
                }

                 </ul> 
                 <div className="nav-icons" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
                    }

                 </div>
            </nav>
            
        </div>
    )
}
export default NavBar;