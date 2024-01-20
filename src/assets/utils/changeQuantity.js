const changeQuantity = (basket, setBasket, menu, sign) => {
  const basketDisplay = document.querySelector(".basket");
  // .classList.add("xs-visible");
  console.log(basketDisplay);
  basketDisplay.classList.remove("xs-hidden");
  const newBasket = [...basket];
  const indFound = basket.findIndex((elt) => {
    return elt[0] === menu;
  });
  if (sign === "+") {
    if (indFound === -1) {
      newBasket.push([menu, 1]);
    } else {
      newBasket[indFound][1]++;
    }
  } else if (sign === "-") {
    const quantity = basket[indFound][1];
    if (quantity > 1) {
      newBasket[indFound][1] = quantity - 1;
    } else {
      newBasket.splice(indFound, 1);
    }
  }
  setBasket(newBasket);
  if (newBasket.length === 0) {
    basketDisplay.classList.add("xs-hidden");
  }
};

export default changeQuantity;
