import React from "react";

function FeatureCard(props) {
  return (
    <div key={props.id} className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
      <div className="feature-item bg-light rounded text-center p-5">
        <i className="fa fa-4x fa-sync text-primary mb-4"></i>
        <h5 className="mb-3">{props.title}</h5>
        <p className="m-0">{props.content}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
