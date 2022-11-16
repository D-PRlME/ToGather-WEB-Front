import { useState } from "react";
import { customAxios } from "../lib/axios";

type IFetchResponse<T> = [IFetchHandler, IFetchStates<T>];
export interface IFetchStates<T> {
  data?: T;
  loading?: boolean;
  error?: object;
}
interface IFetchingConfig {
  method: "get" | "post" | "patch" | "delete" | "put";
  headers?: {
    [key: string]: any;
  };
  data?: {
    [key: string]: any;
  };
}

type IFetchHandler = (config: IFetchingConfig) => void;

/**
 * loading, error, data를 반환하는 Fetch Hook
 * @param {string} url 통신할 url
 * @return {[function, {any, boolean, object}]} [fetchHandler, {data, loading, error}]
 * @return {function} fetchHandler : fetch 함수
 * @return {any} data : response 데이터
 * @return {boolean} loading : loading 중이면 true, 아니면 false
 * @return {error} error : error
 */

async function useFetch<T = any>(url: string): Promise<IFetchResponse<T>> {
  const [state, setState] = useState<IFetchStates<T>>({
    data: undefined,
    loading: false,
    error: undefined,
  });
  const fetchHandler: IFetchHandler = async ({ method, headers, data }) => {
    setState((current) => ({ ...current, loading: true }));
    await customAxios(url, {
      method,
      headers: {
        ...headers,
      },
      data: JSON.stringify(data),
    })
      .then((response) =>
        setState((prev) => ({ ...prev, data: response.data }))
      )
      .catch((error) => setState((current) => ({ ...current, error: error })))
      .finally(() => setState((current) => ({ ...current, loading: false })));
  };
  return [fetchHandler, { ...state }];
}

export default useFetch;
