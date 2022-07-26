import React from "react";

import "./SimpleForm.css";
import useForm from "./useForm";

const SimpleForm = () => {
  const formLogin = () => {
    console.log("Form values: ", values);
  };

  const { values, errors, handleChange, handleSubmit } = useForm(formLogin);

  // const handleCheckbox = (e) => {
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  //   console.log(e.target.checked);
  // };

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
          type="text"
          name="username"
          minLength="5"
          placeholder="Username"
          onChange={handleChange}
        />
        {errors.username && <h4>{errors.username}</h4>}
        <input
          type="password"
          name="password"
          minLength="8"
          placeholder="Password"
          onChange={handleChange}
        />
        {errors.password && <h4>{errors.password}</h4>}
        <select onChange={handleChange} name="dropdown">
          <option>Select</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>
        {errors.dropdown && <h4>{errors.dropdown}</h4>}
        <input type="checkbox" name="checkbox" onChange={handleChange} />
        <span>I agree to the terms and confident</span>
        {errors.checkbox && <h4>{errors.checkbox}</h4>}
        <input
          type="submit"
          value="Submit"
          className="submit"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SimpleForm;
