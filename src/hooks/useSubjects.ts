import useData from "./useData";

const useSubjects = () => useData<string>("/categories")

export default useSubjects;