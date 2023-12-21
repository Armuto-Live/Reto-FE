import { useContext } from "react";
import { DataContext } from "../../context/Context";
import { AsideListItems,AsideListItem } from "../style";
export const AsideItem = () => {
  const {
    data,
    filterByContinent,
  } = useContext(DataContext);

  return (
    <AsideListItems>
      {data?.continents?.map(({ name, code }) => {
        return (
          <AsideListItem
            key={code}
            value={name}
            onClick={()=>filterByContinent(name)}
          >
            {name}
          </AsideListItem>
        );
      })}
    </AsideListItems>
  );
};
