let textInput = document.getElementById("textarea"); // Get element by ID
let form = document.querySelector("form");
let color = document.getElementById("favcolor"); 

const storedColor = localStorage.getItem("favoriteColor"); // Correctly retrieve from localStorage

if (storedColor) {
    console.log("stored Color: " + storedColor); 

    color.value = storedColor;
}

form.addEventListener("submit", event => {
    event.preventDefault();
    textInput.value = "Hello World!";
    console.log("Hello World!");

    const selectedColor = color.value; // Access the color value

    console.log("Selected color: " + selectedColor); // Fixed typo

    localStorage.setItem("favoriteColor", selectedColor);
});
