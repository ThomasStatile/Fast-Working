function openBurgerMenu() {
    const burgerMenuContent = document.getElementById("burger-menu-content");
    const closeBurger = document.getElementById("close-burger");
    const burgerLinks = document.getElementById("burger-links");

    burgerMenuContent.classList.remove("burger-menu-content");
    closeBurger.classList.remove("close-burger");
    burgerLinks.classList.remove("burger-links");

    burgerMenuContent.classList.add("burger-menu-content-displayed");
    closeBurger.classList.add("close-burger-displayed");
    burgerLinks.classList.add("burger-links-displayed");

}

function closeBurgerMenu() {
    const burgerMenuContent = document.getElementById("burger-menu-content");
    const closeBurger = document.getElementById("close-burger");
    const burgerLinks = document.getElementById("burger-links");

    burgerMenuContent.classList.remove("burger-menu-content-displayed");
    closeBurger.classList.remove("close-burger-displayed");
    burgerLinks.classList.remove("burger-links-displayed");

    burgerMenuContent.classList.add("burger-menu-content");
    closeBurger.classList.add("close-burger");
    burgerLinks.classList.add("burger-links");
}

function scrollButton() {
    document.getElementById("hero-2").scrollIntoView({ behavior: "smooth" });
}
