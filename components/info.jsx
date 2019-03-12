import React from "react";
import PropTypes from "prop-types";
import UserCard from "react-ui-cards/src/UserCard";

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

  componentDidMount() {
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

    this.setState({
      node: (
        <UserCard
          name={name}
          avatar={icon}
          header={photo}
          positionName={vicinity}
          stats={[
            { name: "stars", value: rating },
            { name: "reviews", value: totalRatings },
            {
              name: "location",
              value: `${parseInt(latitude, 10)} | ${parseInt(longitude, 10)}`
            }
          ]}
        />
      )
    });
  }

  render() {
    const { node } = this.state;
    return <>{node}</>;
  }
}
