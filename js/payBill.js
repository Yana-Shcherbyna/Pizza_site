// секція вибору та підрахунку ціни піцци
const orderPayCuponDiscount = document.querySelector(
  ".order__payCuponDiscount"
);
// ціна піцци в списку (для закреслення, якщо є знижка)
const showPizzaItemPrice = document.querySelector(".show__pizzaItemPrice");
// відображення ціни піцци в списку (зі знижкою)
const showPizzaItemPriceDiscount = document.querySelector(
  ".show__pizzaItemPriceDiscount"
);
const showPizzaItemPriceCostDiscount = document.querySelector(
  ".show__pizzaItemPriceCostDiscount"
);
//ціна піцци в списку (для підрахунку знижки)
const showPizzaItemPriceCost = document.querySelector(
  ".show__pizzaItemPriceCost"
);

// при клыку на потрыбно вибрати цыну show__pizzaItemPriceCost
// order__choicePizzaItem;

// функція розрахунку ціни зі знижкою
let orderdDiscount = 0;
let pizzaPriceDiscount = 0;
function calcDiscount() {
  orderdDiscount = discountPersent / 100;
  let showPizzaPriceInt = parseInt(showPizzaItemPriceCost.innerText);
  pizzaPriceDiscount = showPizzaPriceInt - showPizzaPriceInt * orderdDiscount;
}

// orderPayCupon перевірка на валідацію input та відображення знижки
orderPayCupon.addEventListener("click", function () {
  orderPayCupon.value = "";
});

orderPayCupon.addEventListener("input", function () {
  if (orderPayCupon.value == cuponNumber) {
    orderPayCuponDiscount.innerText = discountPersent + " %";
    //виклик функції розрахунку ціни зі знижкою та відображення результату
    calcDiscount();
    showPizzaItemPriceCostDiscount.innerHTML = pizzaPriceDiscount;
    showPizzaItemPriceDiscount.classList.toggle("hide__showDiscount");
    showPizzaItemPrice.classList.toggle("show__pizzaItemPriceLine");
  } else {
    orderPayCuponDiscount.innerText = "";
    showPizzaItemPriceDiscount.classList.toggle("hide__showDiscount");
    showPizzaItemPrice.classList.toggle("show__pizzaItemPriceLine");
  }
});
// **********************************************************************
// підрахунок ціни піцци за розміром

const sizeInp = document.querySelectorAll(".size__choicePizzaItem");
const sizePrice = document.querySelectorAll(".pricePizzaForShowSize");

const sizeChoicePizza = document.querySelectorAll(".size__choicePizza");
const sizeChoicePizzaHide = document.querySelectorAll(".size__choicePizzaHide");

Array.from(sizeChoicePizza);

sizeChoicePizza.forEach(function (el) {
  el.addEventListener("click", function () {
    el.nextElementSibling.classList.toggle("sizeHide");
  });
});

sizeChoicePizzaHide.forEach(function (input) {
  input.addEventListener("change", function (e) {
    // console.log(e);
    // console.log(input);
    // calcPriceFromSize(e);
    // console.log(input.children);
  });
  // ;
});
// sizeInp.forEach(function (el) {
//   el.addEventListener("change", function (e) {
//     if (el.value == "small") {
//       // console.log(this.showPizzaItemPriceCost);
//       showPizzaItemPriceCost.innerText = el.nextElementSibling.innerText;

//       // console.log("hi, from small");
//     } else if (el.value == "medium") {
//       showPizzaItemPriceCost.innerText = el.nextElementSibling.innerText;
//       // console.log("hi, from medium");
//     }
//   });
// });
// function showPricePizza(e) {
//   e.innerText =
// }
// const sizeChoicePizzaHide = document.querySelectorAll(".size__choicePizzaHide");

// sizeChoicePizzaHide.forEach(function (el) {
//   this.children.forEach(function (e) {
//     e.addEventListener("checked", function (e) {
//       console.log("Hi");
//     });
//   });
// });

// showPizzaItemPriceCost;

// function showPriceFromSize() {}

const price = document.querySelector(".pricePizzaForShowSize");
// const sizeInp = document.querySelectorAll(".size__choicePizzaItem");
let priceInt = 0;
function calcPriceFromSize(e) {
  e.forEach(function (el) {
    el.addEventListener("change", function () {
      // console.log(e);
      // console.log(el);
      if (el.value == "small") {
        console.log(price.innerText);
        priceInt = parseInt(price.innerText);
        showPizzaItemPriceCost.innerText = priceInt;

        console.log("Hi");
      } else if (el.value == "medium") {
        // showPizzaItemPriceCost = price + price * 0.15;
        console.log("hi, from medium");
      } else if (el.value == "large") {
        showPizzaItemPriceCost = price + price * 0.3;
        // console.log("hi, from medium");
      } else if (el.value == "medium") {
        showPizzaItemPriceCost = price + price * 0.45;
        // console.log("hi, from medium");
      }
    });
  });
}
calcPriceFromSize(sizeInp);
