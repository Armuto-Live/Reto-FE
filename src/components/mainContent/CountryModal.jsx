import React, { useContext } from "react";
import { DataContext } from "../../context/Context";
import {
  MainSectionContentModal,
  MainSectionModal,
  MainSectionModalImg,
  MainSectionModalTitle,
  MainSectionModalSpan,
  MainSectionModalButton,
  MainSectionModalSubTitle,
  MainSectionModalBox,
  MainSectionModalContentSubTitle,
} from "../style";

export const CountryModal = ({ handleCloseModal, image }) => {
  const { selectedCountry } = useContext(DataContext);
  const { name, continent, currencies, languages, capital,states } = selectedCountry;
  return (
    <MainSectionContentModal>
      <MainSectionModal key={Date.now()}>
        <MainSectionModalImg src={image} />
        <MainSectionModalTitle style={{ marginBottom: ".5rem" }}>
          {name} <MainSectionModalSpan> {continent.name} </MainSectionModalSpan>
        </MainSectionModalTitle>
        <MainSectionModalBox>
          <MainSectionModalTitle>Capital: </MainSectionModalTitle>
          <MainSectionModalSubTitle>{capital}</MainSectionModalSubTitle>
        </MainSectionModalBox>
        <MainSectionModalBox>
          <MainSectionModalTitle>Language :</MainSectionModalTitle>
          <MainSectionModalContentSubTitle>
            {languages.map((language, id) => (
              <MainSectionModalSubTitle key={id}>
                {id + 1}: {language.native}
              </MainSectionModalSubTitle>
            ))}
          </MainSectionModalContentSubTitle>
        </MainSectionModalBox>
        <MainSectionModalBox>
          <MainSectionModalTitle>Currency:</MainSectionModalTitle>
          <MainSectionModalContentSubTitle>
            {currencies.map((currency, id) => (
              <MainSectionModalSubTitle key={id}>
                {id + 1}: {currency}
              </MainSectionModalSubTitle>
            ))}
          </MainSectionModalContentSubTitle>
        </MainSectionModalBox>
        <MainSectionModalBox>
          <MainSectionModalTitle>Region :</MainSectionModalTitle>
          <MainSectionModalContentSubTitle>
            {states?.map((item, id) => (
              <MainSectionModalSubTitle key={id}>
                {id + 1}: {item.name}
              </MainSectionModalSubTitle>
            ))}
          </MainSectionModalContentSubTitle>
        </MainSectionModalBox>
        <MainSectionModalButton onClick={handleCloseModal}>
          X
        </MainSectionModalButton>
      </MainSectionModal>
    </MainSectionContentModal>
  );
};
