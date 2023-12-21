import {NavLink} from 'react-router-dom'
import { useContext } from "react";
import { DataContext } from "../../context/Context";
import { AsideItem } from "./AsideItem";
import closeIcon from "../../assets/close.svg";

import {
  Aside,
  Logo,
  AsideIcon,
  AsideMenu,
  AsideList,
  AsideFooter,
  AsideListItem,
} from "../style";

export const Sidebar = () => {
  const {openAside,handleCloseAside,filterByContinent} = useContext(DataContext);
  return (
    <Aside style={{display: openAside ? 'flex' : ''}}>
      <AsideListItem to={"/"} onClick={()=>filterByContinent('inicio')} style={{marginTop:"2rem"}}>Inicio</AsideListItem>
      <AsideIcon src={closeIcon} onClick={handleCloseAside} />
      <AsideMenu>
        <AsideList>
          <Logo>Continentes</Logo>
          <AsideItem />
        </AsideList>
      </AsideMenu>
      <AsideFooter>© 2023</AsideFooter>
    </Aside>
  );
};
