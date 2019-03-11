import React from "react";
import PropTypes from "prop-types";

export default class Info extends React.PureComponent {
  static propTypes = {
    icon: PropTypes.string,
    photo: PropTypes.string,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    vicinity: PropTypes.string.isRequired,
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    totalRatings: PropTypes.number.isRequired
  };

  static defaultProps = {
    icon: null,
    photo: null
  };

  render() {
    const {
      name,
      icon,
      color,
      photo,
      rating,
      vicinity,
      latitude,
      longitude,
      totalRatings
    } = this.props;

    return (
      <div style={{ backgroundColor: color }}>
        <p>
          {icon && <img width={24} height={24} alt="" src={icon} />}
          {name}
        </p>

        <div>{latitude}</div>
        <div>{longitude}</div>
        {photo && <img width={240} height={240} alt="" src={photo} />}
        <div>{vicinity}</div>
        <div>
          <p>{`Rating: ${rating} (${totalRatings} total ratings)`}</p>
        </div>
      </div>
    );
  }
}
