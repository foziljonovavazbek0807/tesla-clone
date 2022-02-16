import React from "react";
import "../home.css";
import Section from "./Section";

function Home() {
  return (
    <div className="Home">
      <Section
        title="Modal S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Modal Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Modal 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Modal X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />

      <Section
        title="Solar for New Roofs"
        description="Solar Roofs Costs Less Then a New Roof Plus Solar Panels"
        backgroundImg="solar-roofs.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />

      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
        rightBtnText=""
      />
    </div>
  );
}

export default Home;
