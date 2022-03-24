document.addEventListener("scroll", e => {
    let nav = document.querySelector("#nav").children[0];

    if(window.scrollY >= 768.7999877929688) {
        nav.style.backgroundColor = "rgba(0, 34, 46)";
        nav.style.boxShadow = "0px 7px 15px 5px rgba(0,51,51,0.5)";
        nav.style.webkitBoxShadow = "0px 7px 15px 5px rgba(0,51,51,0.5)";
    } else {
        nav.style.backgroundColor = "rgba(0, 34, 46, 0)";
        nav.style.boxShadow = "none";
        nav.style.webkitBoxShadow = "none";
    }
})