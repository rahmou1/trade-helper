import React from "react";
import AdvFeatureCard from "./AdvFeatureCard";

const advFeatures = [
  {
    id: "01",
    title: "Advanced Features",
    content: `Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
    sed diam stet.`,
    icon: "fa fa-edit",
  },
  {
    id: "02",
    title: "App Integration",
    content: `Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
    sed diam stet.`,
    icon: "fa fa-sync",
  },
  {
    id: "03",
    title: "High Resolution",
    content: `Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
    sed diam stet.`,
    icon: "fa fa-laptop",
  },
  {
    id: "04",
    title: "Drag And Drop",
    content: `Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
    sed diam stet.`,
    icon: "fa fa-draw-polygon",
  },
];

function AdvFeatures() {
  return (
    <div className="container-xxl bg-white py-6" id="features">
      <div className="container">
        <div
          className="mx-auto text-center wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxwidth: 600 }}
        >
          <h1 className="mb-3">Advanced Features</h1>
          <p className="mb-5">
            Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
            labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem
            sit clita duo justo
          </p>
        </div>
        <div className="row g-4">
          {advFeatures.map((feature) => (
            <AdvFeatureCard
              key={feature.id}
              title={feature.title}
              content={feature.content}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdvFeatures;
