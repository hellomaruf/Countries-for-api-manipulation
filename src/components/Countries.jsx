import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

function Countries() {
  const [coutries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  let handleVisitedCountries = (country) => {
    // console.log(country);
    // console.log('added all visited country');
    let newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
    console.log(visitedCountries);
  };
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

      <ul>
        {visitedCountries.map((items) => {
          console.log(items.name.common);
          <li>{items.name.common}</li>;
        })}
      </ul>
      <p>Visited Country : {visitedCountries.length}</p>
      <div className=" grid grid-cols-3">
        {coutries.map((items, index) => (
          <Country
            coutries={items}
            key={index}
            handleVisitedCountries={handleVisitedCountries}
          />
        ))}
      </div>
    </div>
  );
}

export default Countries;
