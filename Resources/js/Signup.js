function signup(){
    var pass = document.getElementById("pass").valueOf;
    var confirm = document.getElementById("pass2").valueOf;
    if(pass != confirm){
        alert("Contraseña invalida");
    }
}