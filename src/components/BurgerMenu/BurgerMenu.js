import React from 'react';
import './BurgerMenu.sass';
import AccordeonHead from '../Accordeon/AccordeonHead/AccordeonHead';

function BurgerMenu(props) {
    return (
        <div className='burger-menu'>
            <div className='burger-menu__container-empty'></div>
            <div className='burger-menu__container'>
                <AccordeonHead
                    isActive={props.isActive}
                    handleConnectPopup={props.handleConnectPopup}
                />
            </div>
        </div>
    );
}

export default BurgerMenu;
