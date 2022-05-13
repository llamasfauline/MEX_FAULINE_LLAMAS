function myFunction()

{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="admin1234")
{
   window.location.href="index.html";
}
else
{
    alert("login failed");
}

}