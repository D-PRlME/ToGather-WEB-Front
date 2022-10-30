import axios from "axios";
import { useState } from "react";

type IFetchResponse = [
  fetchingType,
  { data: object; loading?: boolean; error?: object }
];
interface IFetchingConfig {
  method: string;
  headers?: {
    [key: string]: string;
  };
}
type fetchingType = (config: IFetchingConfig) => void;
function useFetch(url: string): IFetchResponse {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const fetchHandler = ({ method, headers }: IFetchingConfig) => {
    fetch("http://.24409.75.36:8080/posts", {
      method,
      headers,
    })
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };
  return [fetchHandler, { data, loading, error }];
}

export default useFetch;
