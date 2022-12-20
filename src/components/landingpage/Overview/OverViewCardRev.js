import React from "react";

function OverViewCardRev(props) {
  return (
    <div className="row g-5 py-5 align-items-center flex-column-reverse flex-lg-row">
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="d-flex align-items-center mb-4">
          <h1 className="mb-0">{props.num}</h1>
          <span
            className="bg-primary mx-2"
            style={{ width: 30, height: 2 }}
          ></span>
          <h5 className="mb-0">{props.title}</h5>
        </div>
        <p className="mb-4">{props.description}</p>
        <p>
          <i className="fa fa-check-circle text-primary me-3"></i>
          {props.fact1}
        </p>
        <p>
          <i className="fa fa-check-circle text-primary me-3"></i>
          {props.fact2}
        </p>
        <p className="mb-0">
          <i className="fa fa-check-circle text-primary me-3"></i>
          {props.fact3}
        </p>
      </div>
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
        <img className="img-fluid rounded" src={props.img} alt="" />
      </div>
    </div>
  );
}

export default OverViewCardRev;
