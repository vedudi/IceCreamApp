const Card = ({ item, addToBasket, takeFromBasket, amount }) => {
  return (
    <div
      style={{ width: "200px" }}
      className="border rounded d-flex flex-column align-items-center gap-2"
    >
      <img height={180} src={item.imagePath} alt="dondurma-resmi" />
      <span>{item.name}</span>
      <div className="d-flex gap-2 m-4 align-items-center">
        <button
          onClick={() => takeFromBasket(item.id)}
          className="btn btn-sm btn-outline-danger "
        >
          sıfırla
        </button>
        <span data-testid="amount" className="fs-2">{amount}</span>
        <button
          onClick={() => addToBasket(item)}
          className="btn btn-sm btn-outline-info "
        >
          ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
