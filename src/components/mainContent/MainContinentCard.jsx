import { useContext } from "react";
import { DataContext } from "../../context/Context";

import { MainCountryCard } from "./MainCountryCard";
export const MainContinentCard = ({ continent }) => {
  const { searchCountries, nameContinent } =
    useContext(DataContext);

    const showAllCountries=nameContinent==='inicio';
  const filteredCountriesInContinent = continent?.countries
    .filter((country) =>
      country.name.toLowerCase().includes(searchCountries.toLowerCase())
    )
    .filter((item) => showAllCountries || item.continent.name === nameContinent);
  return (
    <>
      {filteredCountriesInContinent.map((item) => (
        <MainCountryCard key={item.name} country={item} />
      ))}
    </>
  );
};
