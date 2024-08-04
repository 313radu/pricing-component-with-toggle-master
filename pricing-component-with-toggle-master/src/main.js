const button = document.getElementById("button");
const prices = document.querySelectorAll("#price");

let monthlyPrice = [19.99, 24.99, 39.99];
let annuallyPrice = [199.99, 249.99, 399.99];

button.addEventListener("click", (e) => {
    prices.forEach((priceElement, index) => {
        // Remove the "$" sign and convert the textContent to a number for comparison
        let currentPrice = parseFloat(priceElement.textContent.replace("$", ""));

        if (currentPrice === monthlyPrice[index]) {
            priceElement.textContent = "$" + annuallyPrice[index];
            e.target.style.transform = "translateX(-28px)";
            e.target.style.transition = "1s";
        } else {
            priceElement.textContent = "$" + monthlyPrice[index];
            e.target.style.transform = "translateX(0px)";
            e.target.style.transition = "1s";

        }
    });
});
