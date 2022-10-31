import { useState } from "react";

type IFetchResponse<T> = [IfetchHandler, IFetchStates<T>];
interface IFetchStates<T> {
  data?: T;
  loading?: boolean;
  error?: object;
}
interface IFetchingConfig {
  method: string;
  headers?: {
    [key: string]: string;
  };
  data?: {
    [key: string]: string | number;
  };
}

type IfetchHandler = (config: IFetchingConfig) => void;

/**
 * loading, error, data를 반환하는 Fetch Hook
 * @param {string} url 통신할 url
 * @return {[function, {any, boolean, object}]} [fetchHandler, {data, loading, error}]
 * @return {function} fetchHandler : fetch 함수
 * @return {any} data : response 데이터
 * @return {boolean} loading : loading 중이면 true, 아니면 false
 * @return {error} error : error
 */
function useFetch<T = any>(url: string): IFetchResponse<T> {
  const [state, setState] = useState<IFetchStates<T>>({
    data: undefined,
    loading: false,
    error: undefined,
  });
  const fetchHandler = ({ method, headers, data }: IFetchingConfig): void => {
    setState((current) => ({ ...current, loading: true }));
    fetch(process.env.REACT_APP_BaseUrl + url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then((data) => setState((prev) => ({ ...prev, data })))
      .catch((error) => setState((current) => ({ ...current, error: error })))
      .finally(() => setState((current) => ({ ...current, loading: false })));
  };
  return [fetchHandler, { ...state }];
}

export default useFetch;
