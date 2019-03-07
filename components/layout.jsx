import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";

import Map from "./map";
import Logo from "./logo";
import Places from "./places";
import Location from "./location";
import Global from "../styles/global";

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

export default () => (
  <>
    <Global />
    <Head>
      <title>roundAround</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script
        type="text/javascript"
        src={`https://maps.googleapis.com/maps/api/js?key=${
          process.env.GOOGLE
        }&libraries=places`}
      />
    </Head>
    <Header>
      <Places />
      <Logo />
    </Header>
    <Map />
    <Location />
  </>
);
