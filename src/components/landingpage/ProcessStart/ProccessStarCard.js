import React from "react";

function ProccessStarCard(props) {
  return (
    <div className="container-xxl bg-white py-6">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <img className="img-fluid rounded" src={props.img} alt="" />
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <h1 className="mb-4">{props.title}</h1>
            <p className="mb-4">{props.content}</p>
            <ul className="process mb-0">
              <li>
                <span>
                  <i className={`${props.featureh1Icon}`}></i>
                </span>
                <div>
                  <h5>{props.featureh1}</h5>
                  <p>{props.featurep1}</p>
                </div>
              </li>
              <li>
                <span>
                  <i className={`${props.featureh2Icon}`}></i>
                </span>
                <div>
                  <h5>{props.featureh2}</h5>
                  <p>{props.featurep2}</p>
                </div>
              </li>
              <li>
                <span>
                  <i className={`${props.featureh3Icon}`}></i>
                </span>
                <div>
                  <h5>{props.featureh3}</h5>
                  <p>{props.featurep3}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProccessStarCard;
