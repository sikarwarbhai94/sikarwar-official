document.addEventListener("DOMContentLoaded", () => {

    const darkBtn = document.getElementById("darkModeToggle");

    if(localStorage.getItem("theme") === "dark"){
        document.documentElement.classList.add("dark");
    }

    darkBtn.addEventListener("click", () => {

        document.documentElement.classList.toggle("dark");

        if(document.documentElement.classList.contains("dark")){
            localStorage.setItem("theme","dark");
        } else {
            localStorage.setItem("theme","light");
        }

    });

});