import {useContext} from 'react'
import { DataContext } from "../../context/Context";

import { MainContinentCard } from "./MainContinentCard";

export const MainContinent = () => {
  const {loading,error,data} = useContext(DataContext);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error </p>;

  return (
    <>
      {data.continents.map((continent) => (
        <MainContinentCard key={continent.code} continent={continent}/>
      ))}
    </>
  );
};
