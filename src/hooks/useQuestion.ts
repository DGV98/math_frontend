import apiClient from "../services/api-client";
import { useEffect, useState } from "react";
import { CanceledError } from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export const useQuestion = (
  endpoint: string,
  category: string,
  difficulty: string,
  refetch: boolean
) => {
  const [data, setData] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .post<string[]>(
        endpoint,
        {
          category: category,
          difficulty: difficulty,
          signal: controller.signal,
        },
        config
      )
      .then((res) => {
        // console.log(res.data);
        setData([...res.data]);
        // console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, [category, difficulty, refetch]);
  return { data, error, isLoading };
};
