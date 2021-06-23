import React, { useState } from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";


const Example = (props) => {
  return (
    <div>
      <Navbar color="dark" dark expand="md">

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/eth">Eth-Weth</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/nfts">Uniswap NFTS</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Example;
