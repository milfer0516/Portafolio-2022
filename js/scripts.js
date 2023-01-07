const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");
/*Evento para el cambio de los colores */
const toggleColors = document.getElementById("toggle-colors")
/*Con esta constante localizamos las variables que existen en el CSS */
const rootStyles = document.documentElement.style;

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if(toggleIcon.src.includes("moon.svg")) {
        toggleIcon.src = "assets/icons/sun.svg";
        toggleText.textContent = "Light Mode";
    } else {
        toggleIcon.src = "assets/icons/moon.svg";
        toggleText.textContent = "Dark Mode";

    }
})

toggleColors.addEventListener("click", (e) => {  
    console.log(e.target.dataset);

    rootStyles.setProperty("--primary-color", e.target.dataset.color)
})