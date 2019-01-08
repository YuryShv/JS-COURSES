var username = prompt("Type Your Username");
var string = "";
var element = document.createElement("div");
var numberexists = false;
for(var i=0;i<username.length;i++)
{
    if(username.charAt(i).match(/[0-9]/)){
       numberexists = true;
       break; 
    }

}
if (numberexists){
        for(var i=0;i<username.length;i++)
        {
            if(i%2 == 0){
                string += username.charAt(i).toUpperCase();
            }
            else{
                string += username.charAt(i).toLowerCase();    
            }    
        }
}
else{
    string = reverseStr(username);
}
element.innerHTML = string;
function reverseStr(str) {
        return str.split("").reverse().join("");
    }
var cont = document.getElementById("main-container");
cont.appendChild(element).inn;
