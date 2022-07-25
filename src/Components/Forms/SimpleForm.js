import React from "react";

import "./SimpleForm.css";
import useForm from "./useForm";

const SimpleForm = () => {
  const formLogin = () => {
    console.log("Callback function when form  is submitted");
    console.log("Form values: ", values);
  };

  const { values, errors, handleChange, handleSubmit } = useForm(formLogin);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        {errors.email && <h4>{errors.email}</h4>}
        <input
          type="password"
          name="password"
          minLength="8"
          placeholder="Password"
          onChange={handleChange}
        />
        {errors.password && <h4>{errors.password}</h4>}
        <input
          type="text"
          name="username"
          minLength="5"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Submit"
          className="submit"
          onChange={handleChange}
        />
        {errors.username && <h4>{errors.username}</h4>}
      </form>
    </div>
  );
};

export default SimpleForm;
