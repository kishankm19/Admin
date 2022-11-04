function validate(){
var password = document.getElementById("password").value;
var username = document.getElementById("username").value;
if(username=="admin" && password == "revactf201")
   {
   window.location = "ctf.html";
   }
else
{
  alert("🤡I was expecting you would type the wrong credentials!!");
}
}
