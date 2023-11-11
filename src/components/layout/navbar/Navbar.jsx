import { useEffect, useState } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");

    getDocs(categoriesCollection)
      .then((res) => {
        let arrayCategories = res.docs.map((category) => {
          return { ...category.data(), id: category.id };
        });
        setCategories(arrayCategories);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={"containerNavbar"}>
        <Link to="/">
          <img
            className="logo"
            src="https://res.cloudinary.com/dmzzpgdge/image/upload/v1695691882/logotipo_uspwoq.png"
            alt="logo"
          />
        </Link>
        <ul className="categories">
          <Link to={"/"}>
            <li>Productos</li>
          </Link>
          <Link to="/category/Sabanas">
            <li>Sabanas</li>
          </Link>
          <Link to="/category/Acolchados">
            <li>Alcolchados</li>
          </Link>
          <Link to="/category/Toallas">
            <li>Toallas</li>
          </Link>
          <Link to="/category/Almohadas">
            <li>Almohadas</li>
          </Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
