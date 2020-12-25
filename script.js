$(document).ready(function(){
    let $inputElement = $('#txt-input'), btnElement = $('#btntranslate'), outputElement = $('#output');
    //Add your countries here that is found in the fun translation api
    let countries = ['german', 'british', 'irish', 'russian','asian', 'emoji', 'quenya', 'boston', 'austrian', 'mandalorian','valyrian', 'dothraki'];
    
    countries.forEach(element => {
        createRadio(element)
    });

    btnElement.on("click", () => {
        let inputElement = $inputElement.val() 
        let choice = getRadioValue('inlineRadioOptions')
        fetch(getFinalChoice(choice,inputElement))
            .then(response => response.json())
            .then(json => showData(json, outputElement))
            .catch(errData)
    });
});

function countryApiUrl(country){    
    // Change code here if the url is not the same as the country
    // for example if the country is german but the api is german-accent....Change here
    if (country == 'german' || country == 'russian' || country == 'asian'){
        return `https://api.funtranslations.com/translate/${country}-accent.json`
    }
    return `https://api.funtranslations.com/translate/${country}.json`
}

function createRadio(country){
    $('.radio-buttons').append(`
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="${country}" value="${country}">
            <label class="form-check-label" for="${country}">${firstCapital(country)}</label>
        </div>
    `);
}

function getFinalUrl(rawUrl, inputText){
    return `${rawUrl}?text=${inputText}`
}

function getFinalChoice(country, inputText){
    return getFinalUrl(countryApiUrl(country),inputText)
}

function showData(res, element){
    element.text(res.contents.translated)
}

function errData(err){
    console.log("error occur", err)
    alert("Something went wrong with Server! please try again later.")
}

function firstCapital(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function getRadioValue(name){
    return $(`input[name=${name}]:checked`).val()
}