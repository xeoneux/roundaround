import React from "react";
import { css, Global } from "@emotion/core";

import "sanitize.css";

export default () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css?family=Maven+Pro");
      @import url("https://fonts.googleapis.com/css?family=Major+Mono+Display");

      * {
        font-family: "Maven Pro";
      }

      h1 {
        font-family: "Major Mono Display";
      }
    `}
  />
);
