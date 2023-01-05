const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResolt = document.querySelector('#resolt');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento () {
    // (p * (100 * D)) / 100

    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;
    
    if (!price || !coupon) {
        pResolt .innerText = 'Chancla , porfavor rellena el formulario ';
        return;
    };

    let discount;

    if( coupon == 'morta') {
        discount = 30;
    } else if ( coupon == 'mayo') {
        discount = 25;
    } else {
        pResolt.innerText = "el cupon no es valido";
        return;
    }
    console.log({price, discount})    

    const newPrice = (price * (100 - discount)) / 100;
    pResolt.innerText = "el nuevo precio es $" + newPrice
}


