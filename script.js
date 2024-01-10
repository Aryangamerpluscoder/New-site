document.addEventListener("DOMContentLoaded", function () {
    const colorButtons = document.querySelectorAll(".color-button");
    const gradientButtons = document.querySelectorAll(".gradient-button");

    function handleButtonClick(colorOrGradient) {
        localStorage.setItem("selectedColorOrGradient", colorOrGradient);
        window.location.href = "Shop.html";
    }

    colorButtons.forEach(button => {
        button.addEventListener("click", function () {
            const color = this.getAttribute("data-color");
            handleButtonClick(color);
        });
    });

    gradientButtons.forEach(button => {
        button.addEventListener("click", function () {
            const gradient = this.getAttribute("data-gradient");
            handleButtonClick(gradient);
        });
    });
});