function updateCaseNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }

    productInput.value = productNumber;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    calculateTotal();

}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal / 10;
    const total = subtotal + tax;
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;

}

// handle phone 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, true);


});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, false);


});

// handel case in/des
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber('case', 59, true);



});
// set minus button event handler
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber('case', 59, false);


});

