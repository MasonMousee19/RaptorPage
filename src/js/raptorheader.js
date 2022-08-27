let menubtn = document.querySelector(".toggle-menu")
menubtn.addEventListener("click", event =>{
    let menuDrop = document.querySelector(".nav-menu")
    if(menuDrop.classList.contains("menu-is-actived")){
        menuDrop.classList.remove("menu-is-actived")
    }else{
        menuDrop.classList.add("menu-is-actived")
    }
}
)