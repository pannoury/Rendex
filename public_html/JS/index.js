import * as cookie from "./Components/cookies.js";
import * as language from "./Components/language.js";
import * as navbar from "./Components/navbar.js";

var HelaSverigeCityArray = ["Hela Sverige"];
var BlekingeCityArray = ["Hela Blekinge", "Karlshamn", "Karlskrona", "Olofström", "Ronneby", "Sölvesborg"];
var DalarnaCityArray = ["Hela Dalarna", "Avesta", "Borlänge", "Falun", "Gagnef", "Hedemora", "Leksand", "Ludvika", "Malung-Sälen", "Mora", "Orsa", "Rättvik", "Smedjebacken", "Säter", "Vansbro", "Älvdalen"];
var GotlandCityArray = ["Hela Gotland"];
var GävleborgCityArray = ["Hela Gävleborg", "Bollnäs", "Gävle", "Hofors", "Hudiksval",  "Ljusdal", "Nordanstig", "Ockelbo", "Ovanåker", "Sandviken", "Söderhamn"];
var HallandCityArray = ["Hela Halland", "Falkenberg", "Halmstad", "Hylte", "Hudiksval", "Laholm", "Varberg"];
var JämtlandCityArray = ["Hela Jämtland", "Berg", "Bräcke", "Härjedalen", "Krokom", "Ragunda", "Strömsund", "Åre", "Östersund"];
var JönköpingCityArray = ["Hela Jönköping", "Aneby", "Eksjö", "Gislaved",  "Gnosjö", "Habo", "Jönköping", "Mullsjö", "Nässjö", "Sävsjö", "Tranås", "Vaggeryd", "Vetlanda",  "Värnamo"];
var KalmarCityArray = ["Hela Kalmar", "Borgholm", "Emmaboda", "Hultsfred", "Högsby", "Kalmar", "Mösterås", "Mörbylånga", "Nybro", "Oskarshamn", "Torsås", "Vimmerby", "Västervik"];
var KronobergCityArray = ["Hela Kronoberg", "Alvesta", "Lessebo", "Ljungby", "Markaryd", "Tingsryd", "Uppvidinge", "Växjö", "Älmhult"];
var NorrbottenCityArray = ["Hela Norrbotten", "Arjeplog", "Arvidsjaur","Boden","Gällivare","Haparanda","Jokkmokk","Kalix","Kiruna","Luleå","Pajala","Piteå","Älvsbyn","Överkalix","Övertorneå"];
var SkåneCityArray =["Hela Skåne","Bjuv","Bromölla","Burlöv","Båstad","Eslöv","Helsingborg","Hässleholm","Höganäs","Hörby","Höör","Klippan","Kristianstad","Kävlinge","Landskrona","Lomma","Lund","Malmö","Osby","Perstorp","Simrishamn","Sjöbo","Skurup","Staffanstorp","Svalöv","Svedala","Tomelilla","Trelleborg","Vellinge","Ystad","Åstorp","Ängelholm","Örkelljunga","Östra Göinge"];
var StockholmCityArray=["Hela Stockholm","Botkyrka","Danderyd","Ekerö","Haninge","Huddinge","Järfälla","Lidingö","Nacka","Norrtälje","Nykvarn","Nynäshamn","Salem","Sigtuna","Sollentuna","Solna","Stockholm","Sundbyberg","Södertälje","Tyresö","Täby","Upplands Väsby","Upplands-Bro","Vallentuna","Vaxholm","Värmdö","Österåker"];
var SörmlandCityArray=["Hela Sörmland","Eskilstuna","Flen","Gnesta","Katrineholm","Nyköping","Oxelösund","Strängnäs","Trosa","Vingåker"];
var UppsalaCityArray=["Hela Uppsala","Enköping","Heby","Håbo","Knivsta","Tierp","Uppsala","Älvkarleby","Östhammar"];
var VärmlandCityArray=["Hela Värmland","Arvika","Eda","Filipstad","Forshaga","Grums","Hagfors","Hammarö","Karlstad","Kil","Kristinehaamn","Munkfors","Storfors","Sunne","Säffle","Torsby","Årjäng"];
var VästerbottenCityArray=["Hela Västerbotten","Bjurholm","Dorotea","Lycksele","Malå","Nordmaling","Robertsfors","Skellefteå","Sorsele","Storuman","Umeå","Vilhelmina","Vindeln","Vännäs","Åsele",];
var VästernorrlandCityArray=["Hela Västernorrland","Härnösand","Kramfors","Sollefteå","Sundsvall","Timrå","Ånge","Örnsköldsvik"];
var VästmanlandCityArray=["Hela Västmanland","Arboga","Fagersta","Hallstahammar","Kungsör","Köping","Norberg","Sala","Skinnskatteberg","Surahammar","Västerås"];
var VästraGötalandCityArray=["Hela Västra Götaland","Ale","Alingsås","Bengtsfors","Bollebygd","Borås","Dals-Ed","Essunga","Falköping","Färgelanda","Grästorp","Gullspång","Göteborg","Götene","Herrljunga","Hjo","Härryda","Karlsborg","Kungälv","Lerum","Lidköping","Lilla Edet","Lysekil","Mariestad","Mark","Mellerud","Munkedal","Mölndal","Orust","Partille","Skara","Skövde","Sotenäs","Stenungsundd","Strömstad","Svenljunga","Tanum","Tibro","Tidaholm","Tjörn","Tranemo","Trollhättann","Töreboda","Uddevalla","Ulricehamn","Vara","Vårgårda","Vänersborg","Åmål","Öckerö"];
var ÖrebroCityArray=["Hela Örebro","Askersund","Degerfors","Hallsberg","Hällefors","Karlskoga","Kumla","Laxå","Lekeberg","Lindesberg","Ljusnarsberg","Nora","Örebro"];
var ÖstergötlandCityArray=["Hela Östergötland","Boxholm","Finspång","Kinda","Linköping","Mjölby","Motala","Norrköping","Söderköping","Vadstena","Valdemarsvik","Ydre","Åtvidaberg","Ödeshög"];

/******************************* Index Search *************************************/
window.addEventListener('load', function(){
    language.languageControl();
    navbar.loggedInControl();
    cookie.cookieConsentLoad();
    indexNumberCount();
    cityOptionMain();
    localStorage.clear();
    document.getElementById('index-subscription-checkbox').checked = false;
    //document.getElementsByTagName('body')[0].style.visibility = "visible";
});

document.getElementById('indexsearchbutton').addEventListener('click', function(){
    searchValueGet();
});
function indexNumberCount(){
    $.ajax(
        {
            url: './PHP/indexcount.php',
            dataType: 'text',
            method: 'GET',
            data: {
                requestid: 1,
            },
            success: function(response){
                var response = JSON.parse(response);
                if(response[0] == 1){
                    if(response[1] > 999){
                        var numberCount = (response[1]/1000);
                        document.getElementById('numberofuppdragstagare').innerText = `${numberCount}`;
                        document.getElementById('thousandsspan1').style.display = "block";
                        document.getElementById('thousandsspan1').innerText = "K";
                    }
                    else{
                        document.getElementById('numberofuppdragstagare').innerText = `${response[1]}`;
                        document.getElementById('thousandsspan1').style.display = "none";
                    }
                }
                else{
                    var numberCount = 0;
                    document.getElementById('numberofuppdragstagare').innerText = `${numberCount}`;
                    document.getElementById('thousandsspan1').style.display = "none";
                }

            },
        }
    );
    $.ajax(
        {
            url: './PHP/indexcount.php',
            dataType: 'text',
            method: 'GET',
            data: {
                requestid: 2,
            },
            success: function(response){
                var response = JSON.parse(response);
                if(response[0] == 1){
                    if(response[1] > 999){
                        var numberCount = (response[1]/1000);
                        document.getElementById('numberofarticles').innerText = `${numberCount}`;
                        document.getElementById('thousandsspan2').style.display = "block";
                        document.getElementById('thousandsspan2').innerText = "K";
                    }
                    else{
                        document.getElementById('numberofarticles').innerText = `${response[1]}`;
                        document.getElementById('thousandsspan2').style.display = "none";
                    }
                }
                else{
                    var numberCount = 0;
                    document.getElementById('numberofarticles').innerText = `${numberCount}`;
                    document.getElementById('thousandsspan2').style.display = "none";
                }

            },
        }
    );
    $.ajax(
        {
            url: './PHP/indexcount.php',
            dataType: 'text',
            method: 'GET',
            data: {
                requestid: 3,
            },
            success: function(response){
                var response = JSON.parse(response);
                if(response[0] == 1){
                    if(response[1] > 999){
                        var numberCount = (response[1]/1000);
                        document.getElementById('numberoffinisheduppdrag').innerText = `${numberCount}`;
                        document.getElementById('thousandsspan3').style.display = "block";
                        document.getElementById('thousandsspan3').innerText = "K";
                    }
                    else{
                        document.getElementById('numberoffinisheduppdrag').innerText = `${response[1]}`;
                        document.getElementById('thousandsspan3').style.display = "none";
                    }
                }
                else{
                    document.getElementById('numberoffinisheduppdrag').innerText = `${0}`;
                    document.getElementById('thousandsspan3').style.display = "none";
                }

            },
        }
    );

}

function searchValueGet(){ //Old, needs update
    var regionSelected = document.getElementById('mainRegionSelect').value;
    var citySelected = document.getElementById('defualtCitySelect').value;
    var roleSelected = document.getElementById('mainRoleSelect');
    var purposeSelected = document.getElementById('mainPurposeSelect');
    var alertMessagePurpose = document.getElementById('error-message-purpose');
    var alertMessageRole = document.getElementById('error-message-role');
    var arbeteHeader = document.getElementById('arbete-header');

    if((!roleSelected.value) || (!purposeSelected.value)){
        if(roleSelected.value !== ""){
            alertMessageRole.style.display = "none";
            roleSelected.style.borderColor ="";
            arbeteHeader.style.marginTop = "20px";
        }
        else{
            alertMessageRole.style.display = "block";
            roleSelected.style.borderColor ="red";
            arbeteHeader.style.marginTop = "3px";
        }
        if(purposeSelected.value !== ""){
            alertMessagePurpose.style.display = "none";
            purposeSelected.style.borderColor ="";
        }
        else{
            alertMessagePurpose.style.display = "block";
            purposeSelected.style.borderColor ="red";
        }
    }
    else if(roleSelected.value !== null && purposeSelected.value !== null 
        && roleSelected.value == "Uppdragstagare"){
        var loggedinCookie = getCookie("a_user");
        var roleSelected = roleSelected.value.replace(' ', '+')
        var purposeSelected = purposeSelected.value.replace(' ', '+')
        if(loggedinCookie != null){
            var loggedinCookie = loggedinCookie.split(',');
            if(loggedinCookie[1] > 0){
                window.location = `https://rendex.se/searchpage?r=${regionSelected}&c=${citySelected}&ro=${roleSelected}&p=${purposeSelected}`;
            }
        }
        else{
            window.location.href= "login.html";
        }
    }
    else {
        var regionSelected = regionSelected.replace(' ', '+')
        var citySelected = citySelected.replace(' ', '+')
        var roleSelected = roleSelected.value.replace(' ', '+')
        var purposeSelected = purposeSelected.value.replace(' ', '+')

        window.location = `https://rendex.se/searchpage?r=${regionSelected}&c=${citySelected}&ro=${roleSelected}&p=${purposeSelected}`;
    }
}


/***************DYNAMIC SEARCH CITY OPTIONS****************/
document.getElementById('mainRegionSelect').onchange = function(){
    cityOptionMain();
};
function cityOptionMain(){
    clearCityOptions();
    var regionSelected = document.getElementById('mainRegionSelect').value;
    var regionSelected = regionSelected.replace(/ /g, "");
    var array = window[`${regionSelected}CityArray`];
    generateCityOptions(array);
}
function generateCityOptions(array){ //populates cityOptions depending on Region Selected (dynamic)
    var cityOptions = document.getElementById('defualtCitySelect');
    for(let i = 0; i < array.length; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', array[i]);
        $('#disabledselect').remove();
        cityOptions.appendChild(option);
        option.innerText = `${array[i]}`;
    };
}
function clearCityOptions(){
    $('#defualtCitySelect').find('option').remove();
}
/***************DYNAMIC SEARCH CITY OPTIONS****************/




//Bottom-down, subscription options
//Dynamic change of prices Annual/monthly subscription
document.getElementById('index-subscription-checkbox').onchange = function indexButtonSlider(){
    var checkbox = document.getElementById('index-subscription-checkbox');
    if(checkbox.checked == true){
        var priceBox = document.getElementsByClassName('subscription-price');
        console.log(priceBox);
        for(i=0; i<priceBox.length; i++){
            priceBox[i].innerText = "1200 SEK";
        }
    }
    else{
        var priceBox = document.getElementsByClassName('subscription-price');
        console.log(priceBox);
        for(i=0; i<priceBox.length; i++){
            priceBox[i].innerText = "100 SEK";
        }
    }
}
document.getElementById('index-text-btn').onclick = () =>{
    var loginId = getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    if(newArrayLoginId[0] >= 1){
        window.location = 'https://rendex.se/myaccount';
    }
    else{
        window.location = "https://rendex.se/create_account"
    }
}