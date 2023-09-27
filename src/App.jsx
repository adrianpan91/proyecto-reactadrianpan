import CounterContainer from "./components/common/counter/CounterContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <CounterContainer stock={10} />
    </>
  );
}

export default App;
