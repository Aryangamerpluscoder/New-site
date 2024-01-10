document.addEventListener("DOMContentLoaded", function () {
    const selectedColorOrGradient = localStorage.getItem("selectedColorOrGradient");

    if (selectedColorOrGradient) {
        const body = document.body;

        if (selectedColorOrGradient.startsWith("linear-gradient")) {
            body.style.background = selectedColorOrGradient;
        } else {
            body.style.backgroundColor = selectedColorOrGradient;
        }
    } else {
        document.body.style.backgroundColor = "white"; // Default background color if none selected
    }
});