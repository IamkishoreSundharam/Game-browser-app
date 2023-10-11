import { QueryObject } from "../App";
import { Game } from "../interfaces/interfaceCollection";
import useGenericData from "./useGenericData";
interface props {
  querySelector: QueryObject;
}
const useFetchGames = ({ querySelector }: props) => {
  const endpoint = "/games";
  const { data, errorMSG, isLoading } = useGenericData<Game>(
    { endpoint },
    {
      params: {
        genres: querySelector.genre?.id,
        platforms: querySelector.platform?.id,
        ordering: querySelector.selectOrder,
        search: querySelector.searchResult,
      },
    },
    [querySelector]
  );

  return { data, errorMSG, isLoading };
};

export default useFetchGames;
