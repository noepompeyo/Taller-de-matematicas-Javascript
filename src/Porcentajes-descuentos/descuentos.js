//SE TRAJO LOS INPUT DEL HTML

const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const btn = document.querySelector("#calcular");
const pResolt = document.querySelector("#resolt");

btn.addEventListener("click", calcularPrecioConDescuento);

// SE CREAN Y AÑADEN LOS CUPONES
const couponsList = [];

couponsList.push({
  name: "ola",
  discount: 30,
});
couponsList.push({
  name: "cero",
  discount: 20,
});

// SE CALCULA EL DESCUENTO Y SE VALIDA QUE EXISTA
function calcularPrecioConDescuento() {
  // (P * (100 - D)) / 100
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    pResolt.innerText = "Chancla , porfavor rellena el formulario ";
    return;
  }
  let discount;
  function isCouponInArray(couponElement) {
    return couponElement.name == coupon;
  }
  const couponInArray = couponsList.find(isCouponInArray); // {}

  if (couponInArray) {
    discount = couponInArray.discount;
  } else {
    pResolt.innerText = "el cupon no es valido";
    return;
  }
  console.log({
    coupon,
    discount,
    couponInArray,
    couponsList,
  });

  console.log({ price, discount });

  const newPrice = (price * (100 - discount)) / 100;
  pResolt.innerText = "el nuevo precio es $" + newPrice;
}
