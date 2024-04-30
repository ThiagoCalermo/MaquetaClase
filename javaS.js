function desaparecer()
{
    var desaparecer=document.getElementById("desaparecer")
    if(desaparecer.className=="menuMovil"){
       desaparecer.className="vermenu"
    }else{
       desaparecer.className="menuMovil"
    }
}
var menu=document.getElementById("desaparecer")
function Menu(){
   menu.classList.toggle("vermenu")
}