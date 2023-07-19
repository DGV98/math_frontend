import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
    count: number;
    data: T[]
}

const useData = <T>(endpoint: string) => {

};


export default useData;
