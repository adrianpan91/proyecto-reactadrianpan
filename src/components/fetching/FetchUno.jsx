import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useFetch } from "../../utils/hooks/useFetch";

export const FetchUno = () => {
  let { data } = useFetch("https://jsonplaceholder.typicode.com/users", []);
  console.log(data);

  return <div>FetchUno</div>;
};
