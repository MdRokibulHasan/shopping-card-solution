function updateCaseNumber(product, price, isIncreasing) {
    const phoneInput = document.getElementById(product + '-number');
    let phoneNumber = phoneInput.value;
    if (isIncreasing) {
        phoneNumber = parseInt(phoneNumber) + 1;
    }
    else if (phoneNumber > 0) {
        phoneNumber = parseInt(phoneNumber) - 1;
    }
    phoneInput.value = phoneNumber;

    const phoneTotal = document.getElementById(product + '-total');
    phoneTotal.innerText = phoneNumber * price;
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
    const totalPrice = subtotal + tax;
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, true)

});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, false)

});
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber('case', 59, true)

});
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber('case', 59, false)

});