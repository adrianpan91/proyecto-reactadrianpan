import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (endpoint, initial) => {
  const [data, setData] = useState(initial);

  useEffect(() => {
    const getData = axios.get(endpoint);
    getData.then((res) => setData(res.data));
  }, [endpoint]);

  return { data: data };
};
