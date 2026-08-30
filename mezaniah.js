const banzin = document.querySelector(".banzin");
const food = document.querySelector(".food");
const activites = document.querySelector(".activites");
const other = document.querySelector(".other");
const total = document.querySelector(".total p");
const personCost = document.querySelector(".person-cost p");
const people = document.querySelector(".people");

const calculateTotal =() =>{
    const totalValue = Number(banzin.value)+Number(food.value)+Number(activites.value)+Number(other.value);
    total.textContent = totalValue + "شيكل";
}

banzin.addEventListener("input", calculateTotal);
food.addEventListener("input", calculateTotal);
activites.addEventListener("input", calculateTotal);
other.addEventListener("input", calculateTotal);

const calculateCost = () => {

    const totalValue =
        Number(banzin.value) +
        Number(food.value) +
        Number(activites.value) +
        Number(other.value);

    if (people.value) {
        const totalCost = totalValue / Number(people.value);
        personCost.textContent = totalCost + " شيكل";
    } else {
        personCost.textContent = totalValue + "شيكل";
    }

}

food.addEventListener("input", calculateCost);
activites.addEventListener("input", calculateCost);
other.addEventListener("input", calculateCost);
people.addEventListener("input", calculateCost);
banzin.addEventListener("input", calculateCost);


const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});