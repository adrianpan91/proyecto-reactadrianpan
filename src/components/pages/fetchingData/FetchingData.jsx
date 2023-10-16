import albums, { useEffect, useState } from "react";
import axios from "axios";

const FetchingData = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // const tarea = fetch ("https://jsonplaceholder.typicode.com/albums");

    // tarea
    // .then((res)=>res.json())
    // .then((res)=>setAlbums(res))
    // .catch((err)=> console.log(err));

    const tarea = axios.get("https://jsonplaceholder.typicode.com/albums");
    tarea.then((res) => console.log(res.data)).catch((err) => console.log(err));
  }, []);

  const crear = () => {
    // fetch("https://jsonplaceholder.typicode.com/albums/15", {
    //    method: "POST", //se puede colocar PUT o DELETE
    //    body: JSON.stringify ( {
    //     userId: 2,
    //     id: 2,
    //     title: "Nuevo Album"
    //    }),
    // });
    axios.post("https://jsonplaceholder.typicode.com/albums", {
      userId: 2,
      id: 2,
      title: "Nuevo Album",
    });
  };

  console.log({ albums });

  return <albums albums={albums} crear={crear} />;
};

export default FetchingData;
