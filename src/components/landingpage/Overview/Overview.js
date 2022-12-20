import React from "react";
import "../style.css";
import overview1 from "../img/overview-1.jpg";
import overview2 from "../img/overview-2.jpg";
import overview3 from "../img/overview-3.jpg";
import OverViewCard from "./OverViewCard";

const overViewCard = [
  {
    id: "e1",
    num: "01",
    title: `App Integration`,
    description: `Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
    labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit
    clita duo justo eirmod magna dolore erat amet`,
    fact1: "Fully customizable",
    fact2: "User friendly interface",
    fact3: "More effective & poerwfull",
    img: overview1,
  },
  {
    id: "e2",
    num: "02",
    title: `App Customization`,
    description: `Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
    labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit
    clita duo justo eirmod magna dolore erat amet`,
    fact1: "Fully customizable",
    fact2: "User friendly interface",
    fact3: "More effective & poerwfull",
    img: overview2,
  },
  {
    id: "e3",
    num: "03",
    title: `App Customization`,
    description: `Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
    labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit
    clita duo justo eirmod magna dolore erat amet`,
    fact1: "Fully customizable",
    fact2: "User friendly interface",
    fact3: "More effective & poerwfull",
    img: overview3,
  },
];

function Overview() {
  return (
    <div className="container-xxl bg-light my-6 py-5" id="overview">
      <div className="container">
        {overViewCard.map((overView) => (
          <OverViewCard
            key={overView.id}
            num={overView.num}
            title={overView.title}
            description={overView.description}
            fact1={overView.fact1}
            fact2={overView.fact2}
            fact3={overView.fact3}
            img={overView.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Overview;
