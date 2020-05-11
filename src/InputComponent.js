import React from "react";

function InputComponent(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="input-group mb-3">
        <input
          onChange={props.handleChange}
          name={props.name}
          type="text"
          className="form-control"
          placeholder="Global"
          aria-label="Search..."
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button className="btn btn-outline-dark" id="button-addon2">
            Button
          </button>
        </div>
      </div>
    </form>
  );
}

export default InputComponent;
