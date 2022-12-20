import React from "react";
import process from "../img/process.jpg";
import ProccessStarCard from "./ProccessStarCard";

const processData = [
  {
    id: "e1",
    title: "Three Simple Steps To Start Working With",
    content: ` Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
    labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem
    sit clita duo justo eirmod magna dolore erat amet`,
    img: process,
    featureh1Icon: "fa fa-cog",
    featureh1: "Install the Software",
    featurep1: `Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
    Aliqu diam amet diam et eos erat ipsum et lorem et sit`,
    featureh2Icon: "fa fa-address-card",
    featureh2: "Setup Your Profile",
    featurep2: ` Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
    Clita erat ipsum et lorem et sit, sed stet lorem sit clita
    duo`,
    featureh3Icon: "fa fa-check",
    featureh3: "Enjoy The Features",
    featurep3: `Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
    sit, sed stet lorem sit clita duo justo magna`,
  },
];

function ProcessStart() {
  return (
    <>
      {processData.map((data) => (
        <ProccessStarCard
          title={data.title}
          content={data.content}
          img={data.img}
          featureh1Icon={data.featureh1Icon}
          featureh1={data.featureh1}
          featurep1={data.featurep1}
          featureh2Icon={data.featureh2Icon}
          featureh2={data.featureh2}
          featurep2={data.featurep2}
          featureh3Icon={data.featureh3Icon}
          featureh3={data.featureh3}
          featurep3={data.featurep3}
        />
      ))}
    </>
  );
}

export default ProcessStart;
