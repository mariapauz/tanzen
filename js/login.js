const fromRegistro = document.querySelector("#fromRegistro") 

fromRegistro.addEventListener("submit", (e) =>{

    e.preventDefault()

    const nombre = document.getElementById("inputUserName").value
    const contraseña = document.getElementById("inputUserPass").value

    const Users = JSON.parse(localStorage.getItem("user")) || []
    const tex = Users.find(user => user.nombre  === nombre && user.contraseña === contraseña)

    if(!tex){
        return alert("Usuario y/o contraseña incorrectos")
    }

    window.location.href = "../Dentro/index (1).html"


})