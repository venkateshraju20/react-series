import React from "react";
import "./dropdown.css";

function Dropdown() {
  const countries = ["India", "USA", "UK", "Australia", "Sweden"];

  return (
    <>
      <nav className="navbar">
        <h1 className="nav-brand">Countries</h1>
      </nav>

      <main className="container">
        <form>
          <label>Choose a country</label>
          <select>
            <option value="">Please select</option>
            {countries.map((country, index) => (
              <option key={index} value={country.toLowerCase()}>
                {country}
              </option>
            ))}
          </select>
        </form>
      </main>
    </>
  );
}

export default Dropdown;
