import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className={"containerNavbar"}>
      <img
        className="logo"
        src="https://res.cloudinary.com/dmzzpgdge/image/upload/v1695691882/logotipo_uspwoq.png"
        alt="logo"
      />
      <ul className="categories">
        <li>Sabanas</li>
        <li>Acolchados</li>
        <li>Cortinas</li>
        <li>Almohadas</li>
      </ul>
      <CartWidget />
    </div>
  );
};
