import React from "react";

function InfoCards(props) {
  return (
    <div className="info-box">
      <div className="confirmed">
        <i className="fas fa-head-side-cough fa-2x" />
        <h3>Confirmed Cases:</h3>
        <h2>{props.confirmed}</h2>
      </div>

      <div className="deaths">
        <i className="fas fa-skull fa-2x" />
        <h3>Confirmed Deaths:</h3>
        <h2>{props.deaths}</h2>
      </div>

      <div className="recovered">
        <i className="fas fa-smile fa-2x" />
        <h3>Recovered:</h3>
        <h2>{props.recovered}</h2>
      </div>
    </div>
  );
}

export default InfoCards;
