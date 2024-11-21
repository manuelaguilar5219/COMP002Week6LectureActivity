let textInput = document.getElementById("textarea"); // Get's element by the ID
let form = document.querySelector("form"); // "<form>"
let color = document.getElementById("favcolor");

const storedColor = localStorage.getElementById('favoriteColor');

if (storedColor) {
    console,log("stored Color: %{storedColor");

    color.value = storedColor;
}

form.addEventListener("submit", event => {
     event.preventDefault();
    textInput.value="Hello World!"; // Inputs text inside the text area
    console.log("Hello World!");

    const selectedColor = event.target.value;

    console.log("Selected color: $(selectedColor")

    localStorage.setItem("favoriteColor", selectedColor);
});