import React from "react";

function Form(props) {
  const userRegisetered = props.userIsRegistered;
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!userRegisetered && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">
        {userRegisetered === true ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
