import { Badge } from "@chakra-ui/react";

interface props {
  critics: number;
}
const CriticsDisplay = ({ critics }: props) => {
  const color = critics > 90 ? "green" : critics > 75 ? "yellow" : "red";
  return (
    <Badge
      colorScheme={color}
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"5px"}
    >
      {critics}
    </Badge>
  );
};

export default CriticsDisplay;
