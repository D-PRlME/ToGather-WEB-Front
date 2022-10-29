import axios from "axios";
import { useState } from "react";

type IFetchResponse = [
  fetchingType,
  { data: object; loading?: boolean; error?: object }
];
interface IFetchingConfig {
  method: string;
}
type fetchingType = (config: IFetchingConfig) => void;
function useFetch(url: string): IFetchResponse {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const fetchHandler: fetchingType = ({ method }: IFetchingConfig) => {
    axios({
      method,
      url: process.env.REACT_APP_BaseUrl + url,
    })
      .then((res) => setData(res))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };
  return [fetchHandler, { data, loading, error }];
}

export default useFetch;
