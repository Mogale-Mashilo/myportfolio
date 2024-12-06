function toggleMenu(){
    const icon = document.querySelector(".toggle-icon")
    const menu = document.querySelector(".menu-links")

    console.log("Mogale... clicked")

    icon.classList.toggle("open")
    menu.classList.toggle("open")
}