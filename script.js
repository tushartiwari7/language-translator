var inputElement = document.querySelector("#txt-input");
var btnElement = document.querySelector("#btntranslate");
var outputElement = document.querySelector("#output");

var germanBtnEl = document.querySelector("#german");
var britishBtnEl = document.querySelector("#british");
var irishBtnEl = document.querySelector("#irish");
var russianBtnEl = document.querySelector("#russian");
var asianBtnEl = document.querySelector("#asian");
var brooklynBtnEl = document.querySelector("#brooklyn");
var quenyaBtnEl = document.querySelector("#quenya");
var bostonBtnEl = document.querySelector("#boston");
var austrianBtnEl = document.querySelector("#austrian");
var mandalorianBtnEl = document.querySelector("#mandalorian");
var valyrianBtnEl = document.querySelector("#valyrian");
var dothrakiBtnEl = document.querySelector("#dothraki");

var allApiUrl = {
    german: "https://api.funtranslations.com/translate/german-accent.json",
    british: "https://api.funtranslations.com/translate/british.json",
    irish: "https://api.funtranslations.com/translate/irish.json",
    russian: "https://api.funtranslations.com/translate/russian-accent.json",
    asian: "https://api.funtranslations.com/translate/asian-accent.json",
    brooklyn: "https://api.funtranslations.com/translate/brooklyn.json",
    quenya: "https://api.funtranslations.com/translate/quenya.json",
    boston: "https://api.funtranslations.com/translate/boston.json",
    austrian: "https://api.funtranslations.com/translate/austrian.json",
    mandalorian: "https://api.funtranslations.com/translate/mandalorian.json",
    valyrian: "https://api.funtranslations.com/translate/valyrian.json",
    dothraki: "https://api.funtranslations.com/translate/dothraki.json" 
}

function errorHandler(error) {
    console.log("error occured!",error);
    alert("Something went wrong with Server! please try again later.");
}

function getUrl(rawUrl) {
    var optimizedUrl = rawUrl + "?text=" + inputElement.value;
    return optimizedUrl;
}
function getChoice() {
    if(germanBtnEl.checked==true)
        return getUrl(allApiUrl.german)
    else if(britishBtnEl.checked==true)
        return getUrl(allApiUrl.british)
    else if(irishBtnEl.checked==true)
        return getUrl(allApiUrl.irish)
    else if(russianBtnEl.checked==true)
        return getUrl(allApiUrl.russian)
    else if(asianBtnEl.checked==true)
        return getUrl(allApiUrl.asian)
    else if(brooklynBtnEl.checked==true)
        return getUrl(allApiUrl.brooklyn)
    else if(quenyaBtnEl.checked==true)
        return getUrl(allApiUrl.quenya)
    else if(bostonBtnEl.checked==true)
        return getUrl(allApiUrl.boston)
    else if(austrianBtnEl.checked==true)
        return getUrl(allApiUrl.austrian)
    else if(dothrakiBtnEl.checked==true)
        return getUrl(allApiUrl.dothraki)
    else if(mandalorianBtnEl.checked==true)
        return getUrl(allApiUrl.mandalorian)
    else if(valyrianBtnEl.checked==true)
        return getUrl(allApiUrl.valyrian)
}

function callToApi()  {
    var finalUrl = getChoice();
    fetch(finalUrl)
    .then(response => response.json())
    .then(json => show(json))
    .catch(errorHandler)
};

function show(result) {
    outputElement.innerText = result.contents.translated;
}
btnElement.addEventListener("click", callToApi);
