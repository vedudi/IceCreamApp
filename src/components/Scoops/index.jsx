import { useEffect, useState } from "react";
import Card from "../Card";
import axios from "axios";

const Scoops = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    axios
    .get("http://localhost:4040/scoops")
    .then((res) => setData(res.data));
  }, []);

  const addToBasket = (item) => {
    setBasket([...basket, item]);
  };
  const takeFromBasket = (delete_id) => {
    const filtred = basket.filter((i) => i.id !== delete_id);
    setBasket(filtred);
  };

  return (
    <div>
      <h1>dondurma çeşitleri</h1>
      <p>
        tanesi <span className="text-success">20</span>$
      </p>
      <h3>
        çeşitler ücreti{" "}
        <span data-testid="total" className="text-success">{basket.length * 20}</span>$
      </h3>
      <div className="row gap-5 justify-content-center mt-4">
        {data.map((i) => (
          <Card
            key={i.id}
            item={i}
            addToBasket={addToBasket}
            takeFromBasket={takeFromBasket}
            amount={basket.filter((basket_i)=>basket_i.id===i.id).length}
          />
        ))}
      </div>
    </div>
  );
};

export default Scoops;
