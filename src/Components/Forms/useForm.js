import { useState } from "react";
import { omit } from "lodash";
import { emailReg, passwordReg } from "./RegExp";

const useForm = (callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      alert("There is an Error!");
    }
  };

  const validation = (event, name, value, checked) => {
    const omitErrors = (value) => {
      let newObj = omit(errors, value);
      setErrors(newObj);
    };

    switch (name) {
      case "username":
        if (value.length <= 4) {
          setErrors({
            ...errors,
            username: "Username atleast have 5 characters",
          });
        } else {
          omitErrors("username");
        }
        break;

      case "email":
        if (!emailReg.test(value)) {
          setErrors({
            ...errors,
            email: "Email address is not valid",
          });
        } else {
          omitErrors("email");
        }
        break;

      case "password":
        if (!passwordReg.test(value)) {
          setErrors({
            ...errors,
            password: "Password atleast have 8 characters",
          });
        } else {
          omitErrors("password");
        }
        break;
      case "dropdown":
        if (value === "Select") {
          setErrors({
            ...errors,
            dropdown: "Select value",
          });
        } else {
          omitErrors("dropdown");
        }
        break;
      case "checkbox":
        if (checked === false) {
          setErrors({
            ...errors,
            checkbox: "Select box",
          });
        } else {
          omitErrors("checkbox");
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    let checkbox = e.target.checked;

    validation(e, name, value, checkbox);

    setValues({ ...values, [name]: value });
    // setValues.push({ [name]: checkbox });
    console.log(checkbox);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
