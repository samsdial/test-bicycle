import React from 'react';

import { 
    Header as HeaderSM, 
    Container,
    H5, 
    Nav,
    NavItem,
    NavLink
  } from '@bootstrap-styled/v4';


interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    
    return (
        <HeaderSM className="d-flex justify-content-between pb-2 pt-2 mb-2 bg-white">
            <H5 className="mx-5 my-2">Bikes</H5>
            <Nav pills>
                <NavItem>
                    <NavLink disabled >Active</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink >Contact</NavLink>
                </NavItem>
            </Nav>
        </HeaderSM>
    );
};

export default Header


