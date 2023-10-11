import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useFetchPlatform from "../hooks/useFetchPlatform";
import { Platform } from "../interfaces/interfaceCollection";
interface props {
  platformSelector: (data: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformList = ({ platformSelector, selectedPlatform }: props) => {
  const { data, errorMSG } = useFetchPlatform();
  if (errorMSG) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform ? selectedPlatform.name : "Platform"}
        </MenuButton>
        <MenuList>
          {data.map((platform) => {
            return (
              <MenuItem
                onClick={() => platformSelector(platform)}
                key={platform.id}
              >
                {platform.name}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformList;
