import React from 'react';
import './BurgerMenu.sass';
import AccordeonHead from '../Accordeon/AccordeonHead/AccordeonHead';
import Header from '../Header/Header';

function BurgerMenu(props) {
    return (
        <div className='burger-menu'>
            <div className='burger-menu__container-empty'></div>
            <div className='burger-menu__container'>
                <AccordeonHead isActive={props.isActive} />
            </div>
        </div>
    );
}

export default BurgerMenu;
