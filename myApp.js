var buttontrans = document.querySelector("#bt-trans")
var textinput=document.querySelector("#text-in")
console.log(textinput)


function clickeventhandler(){
    console.log("translated")
    console.log("input",textinput.value)
};

buttontrans.addEventListener("click",clickeventhandler)
