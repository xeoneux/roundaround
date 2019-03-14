import React from "react";
import PropTypes from "prop-types";
import UserCard from "react-ui-cards/src/UserCard";

import truncate from "../helpers/utilities";

export default class Info extends React.PureComponent {
  static propTypes = {
    icon: PropTypes.string,
    photo: PropTypes.string,
    rating: PropTypes.number,
    totalRatings: PropTypes.number,
    name: PropTypes.string.isRequired,
    vicinity: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  };

  static defaultProps = {
    icon: null,
    photo: null,
    rating: null,
    totalRatings: null
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
