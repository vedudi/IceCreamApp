import axios from "axios";
import { useEffect, useState } from "react";

const Toppings = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4040/toppings")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (isChecked, sos) => {
    isChecked
      ? setBasket([...basket, sos])
      : setBasket(basket.filter((i) => i.name !== sos.name));
  };
  console.log(basket)
  return (
    <div>
      <h1>SOS çeşitleri</h1>
      <p>
        tanesi <span className="text-success">3</span>$
      </p>
      <h3>
        sos ücreti <span data-testid="total" className="text-success">{basket.length*3}</span>$
      </h3>
      <div className=" row gap-5 mt-5">
        {data.map((sos) => (
          <div className="top-card col">
            <label htmlFor={sos.name}>
              <img src={sos.imagePath} height={100} />
              <p className="text-nowrap text-center">{sos.name}</p>
              <input
                onChange={(e) => handleChange(e.target.checked, sos)}
                className="d-none"
                id={sos.name}
                type="checkbox"
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
