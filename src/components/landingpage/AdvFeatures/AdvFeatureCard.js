import React from "react";

function AdvFeatureCard(props) {
  return (
    <div
      key={props.id}
      className="col-lg-3 col-md-6 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="advanced-feature-item text-center rounded py-5 px-4">
        <i className={`${props.icon} fa-3x  text-primary mb-4`}></i>
        <h5 className="mb-3">{props.title}</h5>
        <p className="m-0">{props.content}</p>
      </div>
    </div>
  );
}

export default AdvFeatureCard;
