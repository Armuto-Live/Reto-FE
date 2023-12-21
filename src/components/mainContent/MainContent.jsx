import { useState, useContext } from "react";
import { DataContext } from "../../context/Context";
import {
  Main,
  MainHeader,
  MainSearch,
  MainLeft,
  MainRight,
  MainParraf,
  MainInput,
  MainRightImg,
  MainRightText,
  MainSection,
  MainIconMenu,
  MainIconMenuImg,
} from "../style";

import IconSearch from "../../assets/search.svg";
import IconMenu from "../../assets/menu.svg";

import { MainContinent } from "./MainContinent";

export const MainContent = () => {
  const { searchCountries, handleSearchCountries,handleOpenAside,openAside } = useContext(DataContext);

  return (  
    <Main>
      <MainHeader>
        <MainIconMenu onClick={handleOpenAside} >
          <MainIconMenuImg src={IconMenu}  style={{display: openAside? 'none':'flex'}}/>
        </MainIconMenu>

        <MainSearch>
          <MainLeft>
            <MainParraf>País</MainParraf>
            <MainInput
              type="text"
              placeholder="Escribe el país que deseas ver"
              value={searchCountries}
              onChange={(e) => handleSearchCountries(e.target.value)}
            />
          </MainLeft>
          <MainRight>
            <MainRightImg src={IconSearch} />
            <MainRightText>Buscar</MainRightText>
          </MainRight>
        </MainSearch>
      </MainHeader>
      <MainSection>
        <MainContinent />
      </MainSection>
    </Main>
  );
};
