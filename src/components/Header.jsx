import React, { useState } from "react";
import "../header.css";
import { HiMenu } from "react-icons/hi";
import { BiX } from "react-icons/bi";
import styled from "styled-components";

function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <div className="Header">
      <a href="#!">
        <img src="../images/logo.png" alt="logo" style={{ width: "120px" }} />
      </a>

      <ul className="Menu">
        <li>
          <a href="#!">MODEL S</a>
        </li>
        <li>
          <a href="#!">MODEL 3</a>
        </li>
        <li>
          <a href="#!">MODEL X</a>
        </li>
        <li>
          <a href="#!">MODEL Y</a>
        </li>
      </ul>

      <ul className="SideMenu">
        <li>
          <a href="#!">SHOP</a>
        </li>
        <li>
          <a href="#!">TESLA ACCOUNT</a>
        </li>
        <HiMenu className="MenuIcon" onClick={()=>setBurgerStatus(true)}/>
      </ul>

      <BurgerNav show={burgerStatus}>
        <div className="BurgerX">
          <b>MENU</b>
          <BiX className="BtnX" onClick={()=>setBurgerStatus(false)}/>
        </div>
        <li className="BurgerItem">
          <a href="#!">Model S</a>
        </li>
        <li className="BurgerItem">
          <a href="#!">Model 3</a>
        </li>
        <li className="BurgerItem">
          <a href="#!">Model X</a>
        </li>
        <li className="BurgerItem">
          <a href="#!">Model Y</a>
        </li>
        <li className="BurgerItem">
          <a href="#!">Existing Inventory</a>
        </li>
        <li className="BurgerItem">
          <a href="#!">Used Inventory</a>
        </li>
        <li className="BurgerItem">
          <a href="#!">Trade-in</a>
        </li>
        <li className="BurgerItem">
          <a href="#!">Cybertruck</a>
        </li>
        <li className="BurgerItem">
          <a href="#!">Roadster</a>
        </li>
      
      </BurgerNav>
    </div>
  );
}

export default Header;


const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 150;
    background-color: #fff;
    width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: 0.5s;
`