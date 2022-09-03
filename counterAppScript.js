const counter = document.getElementById("counter");
const decrementBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const incrementBtn = document.getElementById("increase");

count = 0

decrementBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
    counter.innerHTML = count
    }
    else {
        alert("Counter is ZERO (0)")
    }
});
resetBtn.addEventListener("click", () => {
    count = 0
    counter.innerHTML = count
})
incrementBtn.addEventListener("click", () => {
    count++;
    counter.innerHTML = count
})