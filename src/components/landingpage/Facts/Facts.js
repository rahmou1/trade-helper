import React from "react";
import FactsCard from "./FactsCard";

function Facts() {
  const factsData = [
    {
      id: "e1",
      title: "Active Install",
      number: 7530,
      icon: "fa fa-cogs",
    },
    {
      id: "e2",
      title: "Satisfied Clients",
      number: 9800,
      icon: "fa fa-users",
    },
    {
      id: "e3",
      title: "Award Wins",
      number: 150000,
      icon: "fa fa-certificate",
    },
    {
      id: "e4",
      title: "Clients Reviews",
      number: 1000000,
      icon: "fa fa-quote-left",
    },
  ];

  return (
    <div
      className="container-xxl bg-primary my-6 py-6 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div className="row g-4">
          {factsData.map((fact) => (
            <FactsCard
              key={fact.id}
              title={fact.title}
              number={fact.number}
              icon={fact.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Facts;
