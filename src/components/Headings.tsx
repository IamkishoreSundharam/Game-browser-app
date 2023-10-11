import { Heading } from "@chakra-ui/react";
import { QueryObject } from "../App";
interface props {
  Forheader: QueryObject;
}
const Headings = ({ Forheader }: props) => {
  const Headings = `${Forheader.platform?.name || ""} ${
    Forheader.genre?.name || ""
  }`;
  return (
    <>
      <Heading fontSize={"5xl"}>{Headings} Games</Heading>
    </>
  );
};

export default Headings;
