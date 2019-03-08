import React from "react";
import styled from "@emotion/styled";

const LogoWrapper = styled.div`
  padding-left: 1em;
`;

const Logo = styled.h1`
  font-weight: 100;
`;

export default () => (
  <LogoWrapper>
    <Logo>roundAround</Logo>
  </LogoWrapper>
);
