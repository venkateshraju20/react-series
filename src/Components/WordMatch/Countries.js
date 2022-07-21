import React, { useEffect, useState } from "react";

import "./Countries.css";

function Countries({}) {
  const data = { Germany: "Berlin", Azerbaijan: "Baku" };
  
  const [county, setCounty] = useState(data);
  const [countries, setCountries] = useState([]);

  const [countryName, setCountryName] = useState("");
  const [countryValue, setCountryValue] = useState("");

  useEffect(() => {
    const getShuffledArr = () => {
      const newArr = Object.entries(county).flat().slice();

      for (let i = newArr.length - 1; i > 0; i--) {
        console.log("i: ", i);
        const rand = Math.floor(Math.random() * (i + 1));
        console.log("rand: ", rand);
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
      }
      setCountries(newArr);
    };

    getShuffledArr();
  }, []);

  const handleCountry = (name) => {
    if (Object.keys(county).includes(name)) {
      let value = countries.filter((country) => country === name);
      setCountryName(name);
      setCountryValue(county[value]);
    }

    if (Object.values(county).includes(name)) {
      if (countryValue === name) {
        delete county[countryName];
        const newArr = Object.entries(county).flat();
        setCountries(newArr);
      } else {
        return;
      }
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {" "}
      {countries.length === 0
        ? "No countries found"
        : countries.map((country, index) => (
            <button
              className="btn"
              key={index}
              onClick={() => handleCountry(country)}
            >
              {country}
            </button>
          ))}
    </div>
  );
}

export default Countries;
