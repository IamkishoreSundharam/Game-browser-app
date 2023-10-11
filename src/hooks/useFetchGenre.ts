import useGenericData from "./useGenericData";
import { Genre } from "../interfaces/interfaceCollection";

const useFetchGenre = () => {
  const endpoint = "/genres";
  const { data, isLoading, errorMSG } = useGenericData<Genre>({ endpoint });

  return { data, isLoading, errorMSG };
};

export default useFetchGenre;
