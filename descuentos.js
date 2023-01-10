const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResolt = document.querySelector('#resolt');

btn.addEventListener('click', calcularPrecioConDescuento);

    // const arrayObjeto = undefined;

    // const couponObj = {
    //     'mayo': 30,
    //     'enero': 25,
    //     'may': 20,
    // };

    const couponsList = [];
    couponsList.push({
        name: "ola",
        discount: 30,
    });
    couponsList.push({
        name: "cero",
        discount: 20,
    });

function calcularPrecioConDescuento () {
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;    

    if (!price || !coupon) {
        pResolt .innerText = 'Chancla , porfavor rellena el formulario ';
        return;
    };
    

    let discount;
    function isCouponInArray (couponElement) {
        return couponElement.name == coupon;
    }

    const couponInArray = couponsList.find(isCouponInArray); 

    if (couponInArray){
        discount = couponInArray.discount;
        
    } else {
        pResolt.innerText = "el cupon no es valido";
        return;
    }
    console.log ({
        coupon,
        discount,
        couponInArray,
        couponsList,
        
    })

    // if (couponObj[coupon] ) {
    //     discount = couponObj[coupon];
    // }  else {
    //     pResolt.innerText = "el cupon no es valido";
    //         return;
    // }

    // if( coupon == 'morta') {
    //     discount = 30;
    // } else if ( coupon == 'mayo') {
    //     discount = 25;
    // } else {
    //     pResolt.innerText = "el cupon no es valido";
    //     return;
    // }
    console.log({price, discount})    

    const newPrice = (price * (100 - discount)) / 100;
    pResolt.innerText = "el nuevo precio es $" + newPrice
}


