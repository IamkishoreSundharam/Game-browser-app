import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import Darkmodeswitch from "./Darkmode";
import SearchBar from "./SearchBar";

interface props {
  onSearchBarValue: (value: string) => void;
}
const Navbar = ({ onSearchBarValue }: props) => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"60px"}></Image>
      <SearchBar onSearchBarValue={onSearchBarValue} />
      <Darkmodeswitch />
    </HStack>
  );
};

export default Navbar;
