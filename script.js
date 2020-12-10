var btnElement = document.querySelector("#btntranslate");
var inputElement = document.querySelector("#txt-input");
var outputElement = document.querySelector("#output");


function showClick()  {
    console.log("input is", inputElement.value)
    outputElement.innerText = "hello " + inputElement.value;
};
btnElement.addEventListener("click", showClick);
