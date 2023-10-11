import { Platform } from "../interfaces/interfaceCollection";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaApple,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface props {
  platforms: Platform[] | [];
}

const PlatformIconList = ({ platforms }: props) => {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconsMap[platform.slug]}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
