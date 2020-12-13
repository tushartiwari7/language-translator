var inputElement = document.querySelector("#txt-input");
var btnElement = document.querySelector("#btntranslate");
var outputElement = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/minion.json"
function callToApi()  {
    var optimizedUrl = url + "?text=" + inputElement.value;
    // processing
    fetch(optimizedUrl)
    .then(response => response.json())
    .then(json => show(json))
};
function show(result) {
    outputElement.innerText = result.contents.translated;
}
btnElement.addEventListener("click", callToApi);
