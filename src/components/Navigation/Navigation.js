import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Navigation.sass';
import Accordeon from '../Accordeon/Accordeon';

function Navigation() {
    // const [isClicked, setIsClicked] = useState(false);

    // function handleOpen() {
    //     setIsClicked(true);
    // }

    // function handleClose() {
    //     setIsClicked(false);
    // }
    return (
        <div className='navigation'>
            <>
                <nav className='navigation__links'>
                    <Accordeon />
                </nav>

                {/* <button
                    type='button'
                    className='navigation__burger-button'
                    onClick={handleOpen}
                >
                    <span className='navigation__burger-button-element'></span>
                </button>
                {isClicked ? <BurgerMenu handleClose={handleClose} /> : ''} */}
            </>
        </div>
    );
}

export default Navigation;
