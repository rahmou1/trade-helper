import React from "react";
import FeatureCard from "./FeatureCard";

function Features() {
  const featuresData = [
    {
      id: "e1",
      title: "Good choice",
      content: ` Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
      sed diam stet diam sed stet.`,
    },
    {
      id: "e2",
      title: "App Integration",
      content: ` Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
      sed diam stet diam sed stet.`,
    },
    {
      id: "e3",
      title: "Drag And Drop",
      content: ` Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
      sed diam stet diam sed stet.`,
    },
  ];

  return (
    <div className="container-xxl bg-white py-6">
      <div className="container">
        <div className="row g-4">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              content={feature.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
