import React, { useState } from "react";
import './Menu.css';

const Menu = (props) => {
    const [active, setActive] = useState('all');

    const handleAllClick = () => {
        setActive('all');
    }

    const handleActiveClick = () => {
        setActive('active');
    }

    const handleDoneClick = () => {
        setActive('done');
    }

    return (
        <div className="menu">
            <div className="menu__new">+ New</div>
            <div className="menu__filter">
                <ul>
                    <li className={`menu__item ${active === 'all' && 'current'}`} onClick={handleAllClick}>All</li>
                    <li className={`menu__item ${active === 'active' && 'current'}`} onClick={handleActiveClick}>Active</li>
                    <li className={`menu__item ${active === 'done' && 'current'}`} onClick={handleDoneClick}>Done</li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;
