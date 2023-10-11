import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import {
  Game,
  Platform,
  imageResolver,
} from "../interfaces/interfaceCollection";
import PlatformIconList from "./platformIconList";
import CriticsDisplay from "./CriticsDisplay";
import EmojiRating from "./EmojiRating";

interface props {
  item: Game;
}
const GameCards = ({ item }: props) => {
  let ArrayOfPlatform: Platform[] | [];
  if (item.parent_platforms !== undefined) {
    ArrayOfPlatform = item.parent_platforms.map((obj) => obj.platform);
  } else {
    ArrayOfPlatform = [];
  }

  return (
    <>
      <Card>
        <Image src={imageResolver(item.background_image)}></Image>
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom={2}>
            <PlatformIconList platforms={ArrayOfPlatform} />
            <CriticsDisplay critics={item.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"}>{item.name}</Heading>
          <EmojiRating ratings={item.rating_top} />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCards;
