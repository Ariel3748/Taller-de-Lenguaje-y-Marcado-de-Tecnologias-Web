const AbrirIniciarSesionBtn = document.getElementById("iniciarSesionBtn");
const IniciarSesionDialog = document.getElementById("iniciarSesionDialog");
const FormInicioSesion = document.getElementById("FormInicioSesion");
const BtnIngresar = document.getElementById("BtnIngresar");
const BtnCerrarPopUp = document.getElementById("BtnCerrarPopUp")

//Abrir el PopUp

AbrirIniciarSesionBtn.addEventListener("click", function(event){
    IniciarSesionDialog.showModal();
})

//Cerrar el PopUp

BtnCerrarPopUp.addEventListener("click", function(event){
    IniciarSesionDialog.close();
})

//Formulario pagina admin

FormInicioSesion.addEventListener("submit",function(event){
    event.preventDefault();
    var Password = document.getElementById("PasswordForm").value
    var Usuario = document.getElementById("UsuarioForm").value

    if((Usuario == "mel") && (Password == "123") ){
        window.location.href = "./Admin.html?usuario=" + Usuario
        console.log("Funca")
    }
    else{
        alert("Usuario Incorrecto")
    }
})




