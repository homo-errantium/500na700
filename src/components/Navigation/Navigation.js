import './Navigation.sass';
import AccordeonHead from '../Accordeon/AccordeonHead/AccordeonHead';

function Navigation({ isActive, handleConnectPopup }) {
    return (
        <div className='navigation' id='header-navigation'>
            <AccordeonHead
                isActive={isActive}
                handleConnectPopup={handleConnectPopup}
            />
        </div>
    );
}

export default Navigation;
