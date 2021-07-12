var blekingeCityArray = ["Karlshamn", "Karlskrona", "Olofström", "Ronneby", "Sölvesborg"];
var dalarnaCityArray = ["Avesta", "Borlänge", "Falun", "Gagnef", "Hedemora", "Leksand", "Ludvika", "Malung-Sälen", "Mora", "Orsa", "Rättvik", "Smedjebacken", "Säter", "Vansbro", "Älvdalen"];
var gotlandCityArray = ["Hela Gotland"];
var gävleborgCityArray = ["Bollnäs", "Gävle", "Hofors", "Hudiksval",  "Ljusdal", "Nordanstig", "Ockelbo", "Ovanåker", "Sandviken", "Söderhamn"];
var hallandCityArray = ["Falkenberg", "Halmstad", "Hylte", "Hudiksval", "Laholm", "Varberg"];
var jämtlandCityArray = ["Berg", "Bräcke", "Härjedalen", "Krokom", "Ragunda", "Strömsund", "Åre", "Östersund"];
var jönköpingCityArray = ["Aneby", "Eksjö", "Gislaved",  "Gnosjö", "Habo", "Jönköping", "Mullsjö", "Nässjö", "Sävsjö", "Tranås", "Vaggeryd", "Vetlanda",  "Värnamo"];

var cityArray = [
    ['Blekinge', "Karlshamn", "Karlskrona", "Olofström", "Ronneby", "Sölvesborg"],
    ['Dalarna', "Avesta", "Borlänge", "Falun", "Gagnef", "Hedemora", "Leksand", "Ludvika", "Malung-Sälen", "Mora", "Orsa", "Rättvik", "Smedjebacken", "Säter", "Vansbro", "Älvdalen"],
    ['Gotland', "Hela Gotland"],
    ['Gävleborg', "Bollnäs", "Gävle", "Hofors", "Hudiksval",  "Ljusdal", "Nordanstig", "Ockelbo", "Ovanåker", "Sandviken", "Söderhamn"],
    ['Halland', "Falkenberg", "Halmstad", "Hylte", "Hudiksval", "Laholm", "Varberg"],
    ['Jämtland', "Berg", "Bräcke", "Härjedalen", "Krokom", "Ragunda", "Strömsund", "Åre", "Östersund"],
    ['Jönköping', "Aneby", "Eksjö", "Gislaved",  "Gnosjö", "Habo", "Jönköping", "Mullsjö", "Nässjö", "Sävsjö", "Tranås", "Vaggeryd", "Vetlanda",  "Värnamo"],
];

document.getElementById('mainRegionSelect').onchange = function(){
    var regionSelected = document.getElementById('mainRegionSelect').value;
    var cityOptions = document.getElementById('defualtCitySelect');
    var createOption = document.createElement('option');
    var array = "";
    if(regionSelected === 'Blekinge'){
        array = blekingeCityArray;
        array.forEach(element => {
            cityOptions.appendChild(createOption);
            createOption.setAttribute('value', `${array}`);
        });
    }
}