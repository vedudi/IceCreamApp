import Form from "./components/Form";
import Scoops from "./components/Scoops";
import Toppings from "./components/Toppings";

const App = () => {
  return (
    <div className="d-flex flex-column gap-5 min-vh-100 px-3 py-5 bg-black text-light">
      <Scoops />
      <Toppings />
      <Form />
    </div>
  );
};

export default App;
