import React from "react";
import "./CountriesContainer.css";

const CountriesContainer = (props) => {
  return (
    <React.Fragment>
      <div className="country">
        <img src={props.flags} className="flag" />
        <div>
          <p className="name">{props.name}</p>
          <p className="population">
            <strong>Population</strong> : {props.population}
          </p>
          <p className="region">
            <strong>Region</strong> : {props.region}
          </p>
          <p className="capital">
            <strong>Capital</strong> : {props.capital}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CountriesContainer;
