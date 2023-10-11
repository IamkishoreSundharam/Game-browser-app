import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useFetchGenre from "../hooks/useFetchGenre";
import { Genre, imageResolver } from "../interfaces/interfaceCollection";
interface props {
  sendGenre: (item: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ sendGenre, selectedGenre }: props) => {
  const { data, isLoading, errorMSG } = useFetchGenre();
  if (errorMSG) return <Spinner />;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"3xl"}>Genres</Heading>
      <List marginTop={3}>
        {data.map((item) => {
          return (
            <ListItem key={item.id} paddingY={"10px"}>
              <HStack>
                <Image
                objectFit={'fill'}
                  src={imageResolver(item.image_background)}
                  boxSize={"32px"}
                  borderRadius={"10px"}
                ></Image>
                <Button
                  whiteSpace={"normal"}
                  textAlign={"left"}
                  fontWeight={item.id === selectedGenre?.id ? "bold" : "normal"}
                  onClick={() => sendGenre(item)}
                  variant={"link"}
                  fontSize={"md"}
                >
                  {item.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
