import React from "react";
import "../section.css";
import { FaChevronDown } from "react-icons/fa";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
      <div className="ItemText">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      </Fade>
      <div className="Buttons">
        <Fade bottom>
        <div className="ButtonGroup">
          <button className="BtnLeft">{leftBtnText}</button>
          {rightBtnText &&
          <button className="BtnRight">{rightBtnText}</button>
          }
        </div>
        </Fade>
        <FaChevronDown className="DownArrow" />
      </div>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: orange;
  text-align: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: space-between;
  background-image: url("./images/model-s.jpg");
  background-image: ${props => `url("/images/${props.bgImage}") `};
`;
