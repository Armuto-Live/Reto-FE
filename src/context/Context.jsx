import { createContext, useState } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CONTINENTS = gql`
  query {
    continents{
      code
      countries{
        name
        continent{
          name
          
        }
        states{
          name
        }
        languages{
          native
        }
        currency
        currencies
        capital
        states{
          name
        }
      }
      name
    }
  }
`;

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const { loading, error, data } = useQuery(GET_CONTINENTS);
  const [searchCountries, setSearchCountries] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [openAside, setOpenAside] = useState(false);

  const [nameContinent, setNameContinent] = useState('inicio')

  const handleSearchCountries = (valueInput) => {
    setSearchCountries(valueInput);
  };

  const openModal = (country) => {
    setSelectedCountry(country);
  };

  const closeModal = () => {
    setSelectedCountry("");
  };

  const handleOpenAside=()=>{
    setOpenAside(true);
  }
  const handleCloseAside=()=>{
    setOpenAside(false);
  }
  const filterByContinent=(name)=>{
    setNameContinent(name);
    setOpenAside(false);
  }

  const value = {
    loading,
    error,
    data,
    searchCountries,
    setSearchCountries,
    handleSearchCountries,
    selectedCountry,
    setSelectedCountry,
    openModal,
    closeModal,
    handleOpenAside,
    handleCloseAside,
    setOpenAside,
    openAside,
    filterByContinent,
    nameContinent,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};