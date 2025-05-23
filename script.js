document.addEventListener("DOMContentLoaded", function () {
    const contPop = document.getElementsByClassName("contact-popup")[0];
    const phoneCall = contPop.children[1];
    const whatsapp = contPop.children[2];
    const toggleIcon = contPop.children[0];
    let isVisible = false;

    // change the msg icon with this image upon click & again after another click back to original.
    // const contImgPlus = createElement("img");
    // contImgPlus.src = "Assets/images/plus-lg.svg"

    phoneCall.addEventListener("click", (e) => {
        e.stopPropagation();
        window.open("https://wa.me/qr/IS4OPZMXA255A1", "_self");
    });
    whatsapp.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevents the toggle from happening
        window.open("https://wa.me/qr/IS4OPZMXA255A1", "_self"); // Replace with your number
    });

    contPop.addEventListener("click", () => {
        if (!isVisible) {
            toggleIcon.classList.add("rotate-icon");
            toggleIcon.src = "Assets/images/cross.svg";


            phoneCall.style.display = "flex";
            whatsapp.style.display = "flex";

            phoneCall.classList.remove("phoneCall-slideDown");
            phoneCall.classList.add("phoneCall-slideUp");

            whatsapp.classList.remove("whatsapp-slideDown");
            whatsapp.classList.add("whatsapp-slideUp");
            toggleIcon.src = "Assets/images/cross.svg";
            isVisible = true;

        } else {
            toggleIcon.classList.remove("rotate-icon");
            toggleIcon.src = "Assets/images/contact-popup.svg";


            phoneCall.classList.remove("phoneCall-slideUp");
            phoneCall.classList.add("phoneCall-slideDown");

            whatsapp.classList.remove("whatsapp-slideUp");
            whatsapp.classList.add("whatsapp-slideDown");
            toggleIcon.src = "Assets/images/contact-popup.svg";

            // Hide after animation finishes
            phoneCall.addEventListener("animationend", function handler() {
                phoneCall.style.display = "none";
                phoneCall.removeEventListener("animationend", handler);
            });

            whatsapp.addEventListener("animationend", function handler() {
                whatsapp.style.display = "none";
                whatsapp.removeEventListener("animationend", handler);
            });
            // the upper code is not necessary but good for not having errors.

            isVisible = false;
        }
    });
});
