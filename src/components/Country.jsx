import { useState } from "react";

function Country({ coutries }) {
  console.log(coutries);
  const { name, flags, capital, cca3 } = coutries;
  let [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(true);
  };

  return (
    <div className=" bg-slate-200 m-4 p-6 rounded-xl">
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
    </div>
  );
}

export default Country;
