import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<T[]>(endpoint, {signal: controller.signal})
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
      return () => controller.abort()
  }, [])

  return {data, error, isLoading}

};


export default useData;
