import { useState, useEffect, useContext } from "react";
import { DataContext } from "../../context/Context";
import axios from "axios";
import {
  MainSectionContinentTop,
  MainSectionContinentBottom,
  MainSectionContinent,
  MainSectionContinentBottomDescription,
  MainSectionContinentBottomSpan,
} from "../style";
import { CountryModal } from "./CountryModal";

export const MainCountryCard = ({ country }) => {
  const { openModal, closeModal } = useContext(DataContext);
  const [valor, setValor] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const buscarResultado = async () => {
      const URL = `https://restcountries.com/v3.1/name/${country.name}`;
      try {
        const response = await axios.get(URL, {
          params: {
            fields: "flags",
          },
        });
        setValor(response.data[0].flags.png);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log("Acceso a url no existente");
        }
      }
    };
    buscarResultado();
  }, [country.name]);

  const handleOpenModal = () => {
    if (!isOpenModal) {
      openModal(country);
      setIsOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    if (isOpenModal) {
      closeModal();
      setIsOpenModal(false);
    }
  };

  return (
    <>
      <MainSectionContinent key={country.code} onClick={handleOpenModal}>
        <MainSectionContinentTop>
          IMAGEN
        </MainSectionContinentTop>
        <MainSectionContinentBottom
          style={{backgroundColor: isOpenModal? '#E1F3F1' : ''}}
        >
          {valor && <img src={valor} width="70px" height="50px" />}
          <MainSectionContinentBottomDescription>
            {country.name}
            <MainSectionContinentBottomSpan>
              {country.continent.name}
            </MainSectionContinentBottomSpan>
          </MainSectionContinentBottomDescription>
        </MainSectionContinentBottom>
      </MainSectionContinent>
      {isOpenModal && <CountryModal handleCloseModal={handleCloseModal} image={valor} />}
    </>
  );
};
