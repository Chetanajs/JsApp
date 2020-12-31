var buttontrans = document.querySelector("#bt-trans")
var textinput=document.querySelector("#text-in")
var outdiv=document.querySelector("#box")
console.log(textinput)

var serverURL= "https://api.funtranslations.com/translate/minion.json"



function gettransURL(input){
    return serverURL +"?" +"text"+input
}
function errorhandler(error){
    console.log("errorboccured",error);
    alert("something wrong with server! try again")
}

function clickhandler(){
    var inouttext=inputtext.value;//taking input
}

//calling server for processing

fetch (gettransURl(inputtext))
.then(Response=>Response.json())
.then (json=>{
    var transtext=json.contents.translated;
    outdiv.innertext=transtext;
    )}
.catch(errorhandler)

function clickeventhandler(){
    console.log("translated")
    console.log("input",textinput.value)
};



buttontrans.addEventListener("click",clickeventhandler)
