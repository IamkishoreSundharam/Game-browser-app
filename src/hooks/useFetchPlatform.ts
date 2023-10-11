import useGenericData from "./useGenericData";
import { Platform } from "../interfaces/interfaceCollection";

const useFetchPlatform = () => {
  const endpoint = "/platforms/lists/parents";

  const { data, errorMSG } = useGenericData<Platform>({ endpoint });
  return { data, errorMSG };
};

export default useFetchPlatform;
