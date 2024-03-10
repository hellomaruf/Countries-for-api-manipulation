function Country({ coutries }) {
  console.log(coutries);
  const { name, flags } = coutries;

  return (
    <div>
      <h3 className="">Name : {name.common}</h3>
      <img src={flags.png} alt="" />
    </div>
  );
}

export default Country;
