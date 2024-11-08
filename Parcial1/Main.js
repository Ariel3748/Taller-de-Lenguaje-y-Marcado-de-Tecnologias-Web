const AbrirIniciarSesionBtn = document.getElementById("AbrirIniciarSesionBtn");
const iniciarSesionDialog = document.getElementById("iniciarSesionDialog");
const FormInicioSesion = document.getElementById("FormInicioSesion");
const BtnIngresar = document.getElementById("BtnIngresar");
const BtnCerrarPopUp = document.getElementById("BtnCerrarPopUp");

//Abrir el PopUp

AbrirIniciarSesionBtn.addEventListener("click", function(event){
    iniciarSesionDialog.showModal();


})

//Cerrar el PopUp
function CerrarPopUp(){ 
    
    iniciarSesionDialog.close();
}

BtnCerrarPopUp.addEventListener("click",function(event){
    CerrarPopUp();
});


FormInicioSesion.addEventListener("submit",function(event){
    event.preventDefault();

    var Password = document.getElementById("PasswordForm").value
    var Usuario = document.getElementById("UsuarioForm").value

    if(
        (Usuario === "Ariel" || Usuario === "Agustin" || Usuario === "BillieShou") &&
        (Password === "1234" || Password === "4567" || Password === "abcdef")){
            alert("Inicio de sesion existoso");
            CerrarPopUp();
        }

    else{
        alert("No se pudo verificar la identidad")
    }
})
