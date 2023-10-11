import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface props {
  onSelectOrder: (object: string) => void;
  selectOrder: string | null;
}
const SortBy = ({ onSelectOrder, selectOrder }: props) => {
  const labelArr = [
    { value: "", label: "Relevance" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Popularity" },
    { value: "-rating", label: "Rating" },
  ];
  const nameOrder = labelArr.find((order) => order.value === selectOrder);
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order By: {nameOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {labelArr.map((object) => (
            <MenuItem
              onClick={() => onSelectOrder(object.value)}
              key={object.value}
              value={object.value}
            >
              {object.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortBy;
