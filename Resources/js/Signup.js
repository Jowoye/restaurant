function signup(){
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("pass2").value;
    if(pass != confirm){
        alert("Contraseña invalida");
    }
    else{
        window.open("Login.html");
    }
}