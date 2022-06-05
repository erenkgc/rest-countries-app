import "./App.css";
import Header from "./Header/Header";
import Form from "./Form/Form";
import CountriesContainer from "./Countries/CountriesContainer";
import React, { useEffect, useState } from "react";
function App() {
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("europe");
  const selectValue = { value: "Bölge Seçiniz" };
  useEffect(() => {
    fetchDataHandler();
  }, []);

  useEffect(() => {
    fetchRegionDataHandler();
  }, [region]);
  const fetchRegionDataHandler = async () => {
    try {
      const fetched = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      ).then((data) => data.json());
      setCountry(fetched);
      console.log(region);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataHandler = async () => {
    try {
      const fetched = await fetch("https://restcountries.com/v3.1/all").then(
        (data) => data.json()
      );
      setCountry(fetched);
      console.log(country);
    } catch (error) {
      console.log(error);
    }
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const regionChangeHandler = (event) => {
    setRegion(event);
  };
  return (
    <div className="App">
      <Header />
      <Form
        searchHandler={searchHandler}
        regionChangeHandler={regionChangeHandler}
        region={region}
      />

      <div className="countries-container">
        {country
          ?.filter((item) => {
            if (search === "") {
              return item;
            } else if (
              item.name.common
                .trim()
                .toLowerCase()
                .includes(search.trim().toLowerCase())
            ) {
              return item;
            }
          })
          .map((item) => (
            <CountriesContainer
              key={Math.random()}
              flags={item.flags.png}
              name={item.name.common}
              population={item.population}
              region={item.region}
              capital={item.capital}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
