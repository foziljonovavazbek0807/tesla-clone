import React from 'react';
import "../section.css";
import {FaChevronDown} from "react-icons/fa";

function Section() {

  return (
    <div className='Wrap'>
        <div className='ItemText'>
            <h1>Model S</h1>
            <p>Order Online for touuchless Delivery</p>
        </div>
        <div className="Buttons">
            <div className="ButtonGroup">
                <button className="BtnLeft">Custom Order</button>
                <button className="BtnRight">Existing Inventory</button>
            </div>
            <FaChevronDown className='DownArrow'/>
        </div>
    </div>
  )

}

export default Section
