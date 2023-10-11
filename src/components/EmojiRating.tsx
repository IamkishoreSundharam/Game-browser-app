import ThumbsUp from "../assets/thumbs-up.webp";
import BullsEye from "../assets/bulls-eye.webp";
import Meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface props {
  ratings: number;
}

const EmojiRating = ({ ratings }: props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: Meh, alt: "Boaring", boxSize: "25px" },
    4: { src: ThumbsUp, alt: "Recomend", boxSize: "25px" },
    5: { src: BullsEye, alt: "Worth it", boxSize: "35px" },
  };
  return (
    <>
      <Image {...emojiMap[ratings]} marginTop={3}></Image>
    </>
  );
};

export default EmojiRating;
