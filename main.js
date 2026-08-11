//Hämta in de variabler som behövs
const darkModeButton = document.querySelector(".button-darkmode")

const body = document.querySelector("body")

//Funktion för att toggla mörkerläget
const toggleDarkMode = () => {
  body.classList.toggle("body-darkmode")
}

// Eventlyssnare för knappen
darkModeButton.addEventListener("click", toggleDarkMode)
