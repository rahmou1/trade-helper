import React from "react";
import { useSpring, animated } from "react-spring";

function FactsCard(props) {
  const Number = ({ n }) => {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  };

  return (
    <div
      key={props.id}
      className="col-md-6 col-lg-3 text-center wow fadeIn"
      data-wow-delay="0.1s"
    >
      <i className={`${props.icon} fa-3x text-white mb-3`}></i>
      <h1 className="mb-2">
        <Number n={props.number} />
      </h1>
      <p className="text-white mb-0">{props.title}</p>
    </div>
  );
}

export default FactsCard;
