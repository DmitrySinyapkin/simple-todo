import React, { useState } from "react";
import './Menu.css';

const Menu = ({newHandler, active, allHandler, activeHandler, doneHandler}) => {

    const handleAllClick = () => {
        allHandler();
    }

    const handleActiveClick = () => {
        activeHandler();
    }

    const handleDoneClick = () => {
        doneHandler();
    }

    return (
        <div className="menu">
            <div className="menu__new" onClick={newHandler}>+ New</div>
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
