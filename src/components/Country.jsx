import { useState } from "react";

function Country({ coutries, handleVisitedCountries, handleVistiedFlags }) {
  const { name, flags, capital, cca3 } = coutries;
  let [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div
      className={` m-4 p-6 rounded-xl ${
        visited ? "bg-slate-200" : "bg-white"
      } `}
    >
      <img src={flags.png} alt="" />
      <h3 className=" font-bold text-xl">Name : {name.common}</h3>
      <p>Capital : {capital}</p>
      <p>cca3 : {cca3}</p>
      <button
        onClick={handleVisited}
        className=" bg-green-500 py-2 px-4 my-3 rounded-xl text-white"
      >
        {visited ? "Visited" : "Visit"}
      </button>
      {visited ? "Already visited" : "I want to go this place"}
      <br />
      <button
        onClick={() => handleVisitedCountries(coutries)}
        className=" bg-red-500 py-2 px-4 rounded-xl text-white"
      >
        Mark Visited
      </button>
      <br />
      <button
        className=" bg-fuchsia-500 text-white py-2 px-4 rounded-xl my-3"
        onClick={() => handleVistiedFlags(coutries)}
      >
        Add flag
      </button>
    </div>
  );
}

export default Country;
