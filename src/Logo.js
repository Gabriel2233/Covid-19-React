import React from "react";

import virus from "./bacteria.png";

function Logo() {
  return (
    <div>
      <h1>
        C
        <img src={virus} alt="v" height="70" />
        vid-19
      </h1>
    </div>
  );
}

export default Logo;
