const Basket = () => {
  return (
    <div className="basket xs-hidden lg-w420 lg-mg-r-20 lg-mg-r-30">
      {/* <div className="basket"> */}
      <div>
        <i className="icon-cart lg-w50 lg-50 lg-col-AAADAD"></i>
        <p className="lg-16 lg-col-AAADAD">Votre panier est vide</p>
      </div>
      <button className="lg-h50 lg-bgcol-E2E5E5 lg-col-AAADAD bold">
        Finaliser la commande
      </button>
    </div>
  );
};

export default Basket;
