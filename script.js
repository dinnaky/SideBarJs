const search = document.querySelector('#item1')
const grid = document.querySelector('#item2')
const pet = document.querySelector('#item3')
const user = document.querySelector('#item4')
const vet = document.querySelector('#item5')
const settings = document.querySelector('#item6')
const buttonMenu = document.querySelector('.menu-div')
const body = document.querySelector(".sidebar")
const logOut = document.querySelector(".log-out")

function sidebar(){
    body.classList.toggle("onclick-sidebar")
    // Insert li's

    if(body.classList.contains("onclick-sidebar")){
        buttonMenu.innerHTML ='<div onclick="sidebar()" class="menu-div"><img src="assets/logo.svg" alt=""><button><img src="assets/menu.svg" class="menu"></button></div>'
        search.innerHTML = '<li id="item1"><a href=""><div><img src="assets/search.svg" alt="Botão"><p>Buscar</p></div></a></li>'
        grid.innerHTML = '<li id="item2"><a href=""><div><img src="assets/grid.svg" alt="Botão"><p>Dashboard</p></div></a></li>'
        pet.innerHTML = '<li id="item3"><a href=""><div><img src="assets/pet.svg" alt="Botão"><p>Pets</p></div></a></li>'
        user.innerHTML = '<li id="item4"><a href=""><div><img src="assets/user.svg" alt="Botão"><p>User</p></div></a></li>'
        vet.innerHTML = '<li id="item5"><a href=""><div><img src="assets/vet.svg" alt="Botão"><p>Veterinários</p></div></a></li>'
        settings.innerHTML = '<li id="item6"><a href=""><div><img src="assets/settings.svg" alt="Botão"><p>Configurações</p></div></a></li>'
        logOut.innerHTML='<div class="log-out"><div class="text-logout"> <img src="assets/avatar.png" alt="" class="perfil"><div><p>Eleanor Pena</p><p>Veterinária</p></div></div><a href=""><img src="assets/log-out.svg" alt="Botão" class=></a></div>'
    }else{
        buttonMenu.innerHTML = '<div onclick="sidebar()" class="menu-div"><button><img src="assets/menu.svg" class="menu"></button></div>'
        search.innerHTML = '<li id="item1"><div><a href=""><img src="assets/search.svg" alt="Botão"></a></div></li>'
        grid.innerHTML = '<li id="item2"><div><a href=""><img src="assets/grid.svg" alt="Botão"></a></div></li>'
        pet.innerHTML = '<li id="item3"><div><a href=""><img src="assets/pet.svg" alt="Botão"></a></div></li>'
        user.innerHTML = '<li id="item4"><div><a href=""><img src="assets/user.svg" alt="Botão"></a></div></li>'
        vet.innerHTML = '<li id="item5"><div><a href=""><img src="assets/vet.svg" alt="Botão"></a></div></li>'
        settings.innerHTML = '<li id="item6"><div><a href=""><img src="assets/settings.svg" alt="Botão"></a></div></li>'
        logOut.innerHTML= '<div class="log-out"><a href=""><img src="assets/log-out.svg" alt="Botão"></a></div>'
    }

}