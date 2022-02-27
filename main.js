function toggleDarkMode() {
    let bodyElement = document.getElementById("main-background"); //target the body element
    let darkModeButtonElement = document.getElementById("dark-mode-btn"); //target the dark mode button using variable

    // If background is black, change it to light mode (tan). (Requires conditional statement & needs 3 equal signs for strict equality; 2 will only check if it's the same data type OR value, but 3 checks both type AND value.)
    if (bodyElement.style.background === "black"){
        bodyElement.style.background = "#F9EAE1";
        //switch wording on button
        darkModeButtonElement.innerHTML = "Change to Dark Mode";
        bodyElement.style.color = "#7D4F50";
    }

    // If background is not tan, change background to black
    else{
        bodyElement.style.background = "black";
        darkModeButtonElement.innerHTML = "Change to Light Mode"
        bodyElement.style.color = "white";
    }
}