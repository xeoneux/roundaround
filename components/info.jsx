import React from "react";
import PropTypes from "prop-types";
import UserCard from "react-ui-cards/src/UserCard";

const truncate = string => {
  const length = 75;
  return string.length > length ? `${string.substring(0, length)}...` : string;
};

export default class Info extends React.PureComponent {
  static propTypes = {
    icon: PropTypes.string,
    photo: PropTypes.string,
    name: PropTypes.string.isRequired,
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
      photo,
      rating,
      vicinity,
      latitude,
      longitude,
      totalRatings
    } = this.props;

    return (
      <UserCard
        name={name}
        avatar={icon}
        header={photo}
        positionName={truncate(vicinity)}
        stats={[
          { name: "stars", value: rating },
          { name: "reviews", value: totalRatings },
          {
            name: "location",
            value: `${parseInt(latitude, 10)} | ${parseInt(longitude, 10)}`
          }
        ]}
      />
    );
  }
}
