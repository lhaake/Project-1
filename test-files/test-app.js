
// Hamburger Nav Functionality 
const $hamburger = $(".fas.fa-bars");
const $menu = $(".menu");
const $navItem = $(".nav-item");

const showMobileNav = () => {
    $navItem.css("display", "block")
    $menu.append($navItem)
    console.log("The hamburger menu has been clicked!")
}

$hamburger.on("click", showMobileNav)
