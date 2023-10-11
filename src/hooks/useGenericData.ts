import { useEffect, useState } from "react";
import ApiClient from "../Services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { FetchData } from "../interfaces/interfaceCollection";

interface props {
  endpoint: string;
}
const useGenericData = <T>(
  { endpoint }: props,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [errorMSG, SetErrorMSG] = useState<string>("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      ApiClient.get<FetchData<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
        .then(({ data: { results } }) => {
          setLoading(false);
          setData(results);
        })
        .catch((error) => {
          if (error instanceof CanceledError) {
            console.log(error.message, "Cancelled as navigated outside");
          } else SetErrorMSG(error.message);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, errorMSG, isLoading };
};

export default useGenericData;
