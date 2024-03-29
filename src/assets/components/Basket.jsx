import changeQuantity from "../utils/changeQuantity";

const Basket = ({ basket, setBasket, setIsLoading, setIsPaid }) => {
  let totalPrice = 0;
  basket.forEach((elt) => {
    totalPrice = totalPrice + elt[0].price.fractional * elt[1];
  });
  totalPrice = totalPrice / 100;
  return (
    // <div className="basket xs-hidden lg-w420 lg-mg-r-20 lg-mg-r-30">
    <div className="basket xs-hidden lg-visible  lg-mg-r-20 lg-mg-r-30">
      <div>
        {basket.length === 0 ? (
          <div className="empty-basket">
            <i className="icon-cart lg-w50 lg-50 lg-col-AAADAD"></i>

            <p className="lg-16 lg-col-AAADAD">Votre panier est vide</p>
          </div>
        ) : (
          <div className="purchases-div">
            <div className="bold">Votre panier</div>

            {basket.map((elt, ind) => {
              const quantity = elt[1];
              const name = elt[0].name;
              const price = elt[0].price.fractional / 100;
              return (
                <div className="purchase-display-div" key={ind}>
                  <div className="common-w60">
                    <button
                      onClick={() => {
                        changeQuantity(basket, setBasket, elt[0], "-");
                      }}
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={() => {
                        changeQuantity(basket, setBasket, elt[0], "+");
                      }}
                    >
                      +
                    </button>
                  </div>
                  <span>{name}</span>
                  <span className="common-w50">
                    {(quantity * price).toFixed(2)}
                  </span>
                </div>
              );
            })}
            <div className="total-price bold">
              <span>Prix total</span>
              <span>{totalPrice}</span>
            </div>
          </div>
        )}
      </div>
      <button
        onClick={() => {
          if (basket.length !== 0) {
            setIsLoading(true);
            setIsPaid(true);
            setBasket([]);
          }
        }}
      >
        Finaliser la commande
      </button>
    </div>
  );
};

export default Basket;
