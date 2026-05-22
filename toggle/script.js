document.addEventListener("DOMContentLoaded", () => { // WHEN DEFFER ISN'T INSERT IN JS SCRIPT TAG

    const toggle = document.querySelector(".toggle");
    const text = document.querySelector(".text");

    toggle.onchange = function () {
        if (toggle.checked) {
            text.innerHTML = "ON";
            text.classList.add("green");
        } else {
            text.innerHTML = "OFF";
            text.classList.remove("green");
        }
    };

});