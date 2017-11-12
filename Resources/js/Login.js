$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
  function validate(){
    var username = document.getElementsById("user").value;
    var password = document.getElementsById("pass").value;
        if(username == 0){
            document.getElementById("user").focus();
            return false;
  };
      if(password == 0){
            document.getElementById("pass").focus();
            return false;
      };
      if(username == "admi@ulatina.com" && password == "project"){
          window.open("index.html");
      }
}