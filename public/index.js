


function calculate() {
    const prices = Array.from(document.querySelectorAll('.price'));
    const quantity = Array.from(document.querySelectorAll('.qua'));

    const total = prices.reduce((accum, price, index) => {
        const p1 = parseInt(price.innerText);
        const q1 = parseInt(quantity[index].innerText);
        return parseInt(accum + (p1 * q1));
    }, 0);


    return total
}

calculate();

const addTotalToHtml = () => {
    const total = calculate()
    document.getElementById('total').innerText = total
}










window.addEventListener("DOMContentLoaded", event => {

    const plusButtons = document.querySelectorAll('.plus')
    const minusButtons = document.querySelectorAll('.minus')

    plusButtons.forEach((plus, index) => {

        plus.addEventListener('click', (event) => {
            event.preventDefault()
            const number = document.querySelectorAll('.qua')

            current = parseInt(number[index].innerText)
            current += 1
            number[index].innerHTML = current
            addTotalToHtml()

        });

        minusButtons.forEach((minus, index) => {
            const number = document.querySelectorAll('.qua')
            minus.addEventListener('click', (event) => {
                event.preventDefault()
                let current = parseInt(number[index].innerText)
                // console.log(current)
                if (current <= 0) {
                    current = 0;
                }
                else {
                    //current-=1
                    number[index].innerText = current - 1;
                    addTotalToHtml()
                }

            })
        })
    })

})
