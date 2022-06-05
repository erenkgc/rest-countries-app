import React from "react";
import "./Form.css";

const Form = (props) => {
  const selectChangeHandler = (event) => {
    console.log(event.target.value);
    props.regionChangeHandler(event.target.value);
  };
  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={props.searchHandler}
      ></input>
      <form className="form">
        <div>
          <select className="select" onChange={selectChangeHandler}>
            <option value="asia">Asia</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
          <button>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
