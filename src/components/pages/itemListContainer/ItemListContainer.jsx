// import { useState, useEffect } from "react";
// import { products } from "../../../productsMock";
// import ItemList from "./ItemList";

// const ItemListContainer = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     // const tarea2 = fetch("api")
//     // tarea2.then().catch()

//     const tarea = new Promise((resolve, reject) => {
//       resolve(products);
//       // reject("Lo siento, algo salio mal ")
//     });
//     //resolve utilizo cuando yo quiero que mi promesa se resuelva bien y reject cuando yo quiero que esa promesa
//     // no se resuelva o que salga mal

//     tarea.then((res) => setItems(res)).catch((error) => console.log(error));
//   }, []);

//   return <ItemList items={items} />;
// };

// export default ItemListContainer;

import { useState, useEffect } from "react";
import { products } from "../../../productsMock";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
