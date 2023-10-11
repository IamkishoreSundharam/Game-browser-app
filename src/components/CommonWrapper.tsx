import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
const CommonWrapper = ({ children }: props) => {
  return (
    <>
      <Box borderRadius={"10px"} overflow={"hidden"} marginX={2} marginY={1}>
        {children}
      </Box>
    </>
  );
};

export default CommonWrapper;
