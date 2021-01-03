var buttontrans = document.querySelector("#bt-trans")
var textinput=document.querySelector("#text-in")
var outdiv=document.querySelector("#outputdiv")


var serverURL= "https://api.funtranslations.com/translate/minion.json"


function gettransURL(text){
    return serverURL +"?" +"text="+ text 
}

function errorhandler(error){
    console.log("erroroccured",error);
    alert("something wrong with server! try again")
}

function clickhandler(){
    var inputtext=textinput.value;  //taking input

//calling server for processing

    fetch (gettransURL(inputtext))
        .then(response => response.json())
        .then (json=> {
            var transtext=json.contents.translated;
            outdiv.innertext= transtext;
        })
    .catch(errorhandler)
};

buttontrans.addEventListener("click",clickhandler)
