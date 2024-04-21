import React from 'react';
import './BurgerMenu.sass';
import AccordeonHead from '../Accordeon/AccordeonHead/AccordeonHead';

function BurgerMenu({ isActive, handleConnectPopup }) {
  return (
    <div className="burger-menu">
      <AccordeonHead
        isActive={isActive}
        handleConnectPopup={handleConnectPopup}
      />
    </div>
  );
}

export default BurgerMenu;
