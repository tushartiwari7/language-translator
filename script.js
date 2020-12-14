var inputElement = document.querySelector("#txt-input");
var btnElement = document.querySelector("#btntranslate");
var outputElement = document.querySelector("#output");
function errorHandler(error) {
    console.log("error occured!",error);
    alert("Something went wrong with Server! please try again later.");
}
var url = "https://api.funtranslations.com/translate/minion.json"
function callToApi()  {
    var optimizedUrl = url + "?text=" + inputElement.value;
    // processing
    fetch(optimizedUrl)
    .then(response => response.json())
    .then(json => show(json))
    .catch(errorHandler)
};

function show(result) {
    outputElement.innerText = result.contents.translated;
}

btnElement.addEventListener("click", callToApi);
