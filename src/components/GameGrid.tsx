import { SimpleGrid, Text } from "@chakra-ui/react";
import useFetchGames from "../hooks/useFetchGames";
import GameCards from "./gameCards";
import LoaderSkeletons from "./LoaderSkeletons";
import CommonWrapper from "./CommonWrapper";
import { QueryObject } from "../App";
interface props {
  querySelector: QueryObject;
}
const GameGrid = ({ querySelector }: props) => {
  const { errorMSG, data, isLoading } = useFetchGames({ querySelector });
  const countarr = [1, 2, 3, 4, 5, 6, 7, 8];
  if (data === undefined) return <Text>Data Not Found</Text>;
  return (
    <>
      {errorMSG && <Text>{errorMSG}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={3}>
        {isLoading &&
          countarr.map((count) => {
            return (
              <CommonWrapper key={count}>
                <LoaderSkeletons />
              </CommonWrapper>
            );
          })} 
        {/* Dummy Text */}
        {data.map((item) => (
          <CommonWrapper key={item.id}>
            <GameCards item={item} />
          </CommonWrapper>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
