import React from "react";
import styled from "@emotion/styled";

import Map from "./map";
import Logo from "./logo";
import Places from "./places";

import "sanitize.css";

const Header = styled.header`
  top: 1em;
  left: 2em;
  right: 2em;
  z-index: 99;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
`;

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <Header>
          <Places />
          <Logo />
        </Header>
        <Map />
      </>
    );
  }
}
