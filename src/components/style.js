import styled from "styled-components";
const FONT_SIZE_MOBILE_ITEMS = 1.5;
const FONT_SIZE_MOBILE_LOGO = 1.5;
const BACKGROUND_COLOR_ASIDE = "#656565";
const BACKGROUND_COLOR_MAIN = "#E1F3FF";
const COLOR_WHITE = "#fff";
const COLOR_GRAY = "#8A8C8C";
const COLOR_AQUA = "#009EFF";

const FONT_SIZE_TITLE_CONTINENT = 1.3;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  @media (max-width: 850px) {
    grid-template-columns: 1fr 4fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const HeaderMobile = styled.div`
  display: none;
`;

export const Aside = styled.aside`
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;
  justify-content: space-between;

  background-color: ${BACKGROUND_COLOR_ASIDE};
  color: ${COLOR_WHITE};

  @media (max-width: 850px) {
    z-index: 999;
    left: 0;
  }

  @media (max-width: 600px) {
    z-index: 999;
    left: 0;
    display: none;
  }
`;

export const Logo = styled.h1`
  font-size: ${FONT_SIZE_MOBILE_LOGO}rem;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }
`;

export const AsideMenu = styled.nav`
  display: flex;
  flex-direction: column;
`;
export const AsideIcon = styled.img`
  width: 2rem;
  display: none;

  @media (max-width: 600px) {
    display: block;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`;

export const AsideList = styled.ul`
  font-size: ${FONT_SIZE_MOBILE_ITEMS}rem;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  margin: auto;
  @media (max-width: 850px) {
    justify-content: center;
    align-content: center;
  }
`;
export const AsideListItems = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AsideListItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR_AQUA};
  padding: 0.5rem 1rem;
  cursor: pointer;
  width: 200px;
  border: none;
  color: ${COLOR_WHITE};
  font-size: 1rem;
  margin: 0.5rem 0;
  border-radius: 0.7rem;

  @media (max-width: 1024px) {
    width: 150px;
  }
`;

export const AsideFooter = styled.footer``;

// MAIN
export const Main = styled.main`
  margin-left: 0;
  padding: 2rem;
  background-color: ${BACKGROUND_COLOR_MAIN};
  min-height: 100vh;
`;
export const MainHeader = styled.main`
  position: relative;
`;
export const MainSearch = styled.header`
  width: 50vw;
  min-width: 250px;
  height: 60px;
  border-radius: 3rem;
  background-color: ${COLOR_WHITE};
  padding: 0.2rem 2rem;
  padding-right: 1rem;
  margin: auto;
  font-size: 1.5rem;
  color: ${COLOR_GRAY};
  box-shadow: 0px 7px 2px ${COLOR_GRAY};

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;
export const MainIconMenu = styled.button`
  display:none;
  @media (max-width: 600px) {
    display: block;
  }
`;
export const MainIconMenuImg = styled.img`
    position: fixed;
  display: none;
  right: 1rem;
  top: 0.5rem;
  border: none;
  background-color: transparent;
  z-index: 98;
  @media (max-width: 600px) {
    display: block;
  }
`;

export const MainLeft = styled.div`
  width: 40px;
`;
export const MainRight = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR_AQUA};
  color: ${COLOR_WHITE};
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  column-gap: 0.5rem;

  @media (max-width: 850px) {
    padding: 0.3rem 0.5rem;
  }
  @media (max-width: 665px) {
  }
  @media (max-width: 600px) {
    padding: 0;
  }
`;
export const MainParraf = styled.p`
  @media (max-width: 850px) {
    font-size: 1.2rem;
  }
`;

export const MainInput = styled.input`
  cursor: pointer;
  border: none;
  width: 200px;
  outline: none;
  font-size: 0.8rem;
  color: ${COLOR_GRAY};
  &:active,
  &:focus {
    border-bottom: 1px solid aqua;
  }
  @media (max-width: 850px) {
    font-size: 0.7rem;
  }
`;

export const MainRightImg = styled.img`
  filter: invert(1);
  width: 1.7rem;
  height: 1.7rem;
`;

export const MainRightText = styled.figcaption`
  font-size: ${FONT_SIZE_TITLE_CONTINENT}rem;
  @media (max-width: 665px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

// MAIN CONTINENTS

export const MainSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;
export const MainSectionContinent = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  background-color: #f7f7f7;
  border-radius: 2rem;
  box-shadow: 0px 0px 7px 0.2px #000;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 350px) {
    width: 220px;
    height: 220px;
  }
`;
export const MainSectionContinentTop = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MainSectionContinentBottom = styled.figure`
  flex: 1;
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
  padding: 0 1.5rem;
  border-radius: 0 0 2rem 2rem;
`;

export const MainSectionContinentBottomImage = styled.img`
  height: 100%;
`;
export const MainSectionContinentBottomDescription = styled.p`
  color: ${COLOR_AQUA};
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
`;
export const MainSectionContinentBottomSpan = styled.span`
  color: #000;
  font-size: 1rem;
`;

export const MainSectionContentModal = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 998;
`;

export const MainSectionModal = styled.div`
  position: relative;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow:0px 0px 7px 2px #000;
`;

export const MainSectionModalImg = styled.img`
  width:200px;
  background-color:red;
`;

export const MainSectionModalTitle = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${COLOR_AQUA};
`;
export const MainSectionModalContentSubTitle=styled.div`
  width:200px;
  max-height:90px;
  text-align:left;
  overflow-y:scroll;
`
export const MainSectionModalSubTitle = styled.p`
  color:#000;
  font-size:1.3rem;
  padding-left:.5rem;
  display:flex;
  flex-direction:column;
`;
export const MainSectionModalBox=styled.div`
  display:flex;
  align-items:center;
  margin-top:.3rem;
`
export const MainSectionModalSpan = styled.span`
  color: #000;
`;
export const MainSectionModalButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  background-color: #fff;
`;
