import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

function Countries() {
  const [coutries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      let res = await fetch("https://restcountries.com/v3.1/all");
      let data = await res.json();
      setCountries(data);
    };
    fetchCountries();
  }, []);
  return (
    <div className=" max-w-7xl mx-auto">
      <h1>Countries : {coutries.length}</h1>
      <div className=" grid grid-cols-3">
        {coutries.map((items, index) => (
          <Country coutries={items} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Countries;
