let count = 0;
let totalPrice = 0;
function cardHandle(target) {
    count = count + 1;

    const addItems = target.childNodes[5].innerText;
    const container = document.getElementById('container');
    const createLi = document.createElement('p');
    createLi.innerHTML = `
    ${count}. ${addItems}
    `;
    container.appendChild(createLi);

    const price = target.childNodes[7].innerText.split(' ')[0];
    totalPrice = parseInt(totalPrice) + parseInt(price);

    const couponBtn = document.getElementById("apply-button")
    const purBtn = document.getElementById("purchase-btn")
    if (totalPrice >= 200) {
        couponBtn.removeAttribute('disabled')
        couponBtn.style.background = "#E527B2"
    }
    if (totalPrice > 0) {
        purBtn.removeAttribute('disabled')
        purBtn.style.backgroundColor = '#E527B2';
    }
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerText = totalPrice.toFixed(2);
}


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function applyForCoupon() {
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = parseFloat(totalPriceElement.innerText);

    const couponCode = document.getElementById('coupon-input').value;
    if (couponCode === 'SELL200' || totalPrice === '') {
        const discountAmount = totalPrice * 0.2;
        const total = totalPrice - discountAmount;

        setInnerText("discount-price", discountAmount.toFixed(2));
        setInnerText("total", total.toFixed(2));
    } else {
        alert("Please enter a valid coupon !");
    }

    const inputField = document.getElementById('coupon-input');
    inputField.value = '';
}
const homeBtn = document.getElementById("home-btn")

homeBtn.addEventListener("click", function () {
    window.location.reload()
})
