function completeItem(checkbox) {
    checkbox.parentElement.classList.toggle("completed");
}

function addItem() {
    let input = document.getElementById("itemInput");
    let itemText = input.value.trim();

    if (itemText === "") {
        alert("اكتب اسم الغرض أولاً");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML =
        '<input type="checkbox" onclick="completeItem(this)"> ' +
        itemText;

    document.getElementById("packingList").appendChild(li);

    input.value = "";
}

const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});