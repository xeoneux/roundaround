import React from "react";
import PropTypes from "prop-types";

const PinIcon = ({ color, onClick }) => (
  <svg width="25" height="25" viewBox="0 0 426.667 426.667" onClick={onClick}>
    <path
      style={{ fill: color }}
      d="M213.342,0C126.763,0,56.478,70.293,56.478,156.817c0,36.151,13.15,68.48,32.495,95.633
	c124.369,174.217,124.369,174.217,124.369,174.217s0,0,124.382-174.238c19.332-27.145,32.465-59.554,32.465-95.612
	C370.193,70.293,300.006,0,213.342,0z"
    />
    <path
      style={{ fill: "white" }}
      d="M311.258,156.817c0,54.182-43.793,97.916-97.916,97.916c-54.046,0-97.929-43.733-97.929-97.916
	c0-54.042,43.883-97.899,97.929-97.899C267.469,58.918,311.258,102.775,311.258,156.817z"
    />
  </svg>
);

PinIcon.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PinIcon;
