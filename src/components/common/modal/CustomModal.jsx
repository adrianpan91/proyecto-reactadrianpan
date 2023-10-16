import ItemListContainer from "../../pages/itemListContainer/ItemListContainer";
import CounterContainer from "../counter/CounterContainer";

const CustomModal = ({ children }) => {
  return (
    <div>
      <h2>Este es el modal</h2>

      {children}
    </div>
  );
};

export default CustomModal;
