const addRow = document.getElementById("AddRow");
const addButton = document.getElementById("button");

let shareCount = document.querySelectorAll(".content").length;
// Add More Button
addButton.addEventListener("click", () => {

    shareCount++;

    const newRow = document.createElement("div");
    newRow.className = "content";

    newRow.innerHTML = `
    <div class="delete-row">
        <p class="para">Share ${shareCount}</p>
        <i class="fa-solid fa-trash delete"></i>
    </div>

    <div class="row">
        <p>Buy Price</p>
        <input type="number" class="price" placeholder="0">

        <p>Quantity</p>
        <input type="number" class="quantity" placeholder="0">
    </div>
`; 
    addRow.appendChild(newRow);
const deleteBtn = newRow.querySelector(".delete");

deleteBtn.addEventListener("click", () => {
    newRow.remove();
    calculateStockAverage();
});
    attachEvents();
});

// Calculate Average
function calculateStockAverage() {

    const prices = document.querySelectorAll(".price");
    const quantities = document.querySelectorAll(".quantity");

    let totalShares = 0;
    let totalAmount = 0;

    for (let i = 0; i < prices.length; i++) {

        const price = Number(prices[i].value) || 0;
        const quantity = Number(quantities[i].value) || 0;

        totalShares += quantity;
        totalAmount += price * quantity;
    }

    let averagePrice = 0;

    if (totalShares > 0) {
        averagePrice = totalAmount / totalShares;
    }

    document.getElementById("totalShares").textContent = totalShares;
    document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
    document.getElementById("averagePrice").textContent = averagePrice.toFixed(2);
}

// Attach Events to all inputs
function attachEvents() {

    const prices = document.querySelectorAll(".price");
    const quantities = document.querySelectorAll(".quantity");

    prices.forEach(input => {
        input.removeEventListener("input", calculateStockAverage);
        input.addEventListener("input", calculateStockAverage);
    });

    quantities.forEach(input => {
        input.removeEventListener("input", calculateStockAverage);
        input.addEventListener("input", calculateStockAverage);
    });
}

// Initialize
attachEvents();
calculateStockAverage();