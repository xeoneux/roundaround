import React from "react";
import { css, Global } from "@emotion/core";

export default () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css?family=Major+Mono+Display");

      h1 {
        font-family: "Major Mono Display";
      }
    `}
  />
);
