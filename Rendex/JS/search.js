var regionHeader = document.getElementById('region-header-display');
var region = localStorage.getItem("regionSelected");
var citySelected = localStorage.getItem('citySelected');
var roleSelected = localStorage.getItem('roleSelected');
var purposeSelected = localStorage.getItem('purposeSelected');
var regionSpanText = document.getElementById('regionspan-text');
var citySpanText = document.getElementById('cityspan-text');

var defaultCitySelection = document.getElementById('defualtCitySelect');
var blekingeSelection = document.getElementById('blekingeCitySelect');
var dalarnaSelection = document.getElementById('dalarnaCitySelect');
var gotlandSelection = document.getElementById('gotlandCitySelect');
var gävleborgSelection = document.getElementById('gävleborgCitySelect');
var hallandSelection = document.getElementById('hallandCitySelect');
var jämtlandSelection = document.getElementById('jämtlandCitySelect');
var jönköpingSelection = document.getElementById('jönköpingCitySelect');
var kalmarSelection = document.getElementById('kalmarCitySelect');
var kronobergSelection = document.getElementById('kronobergCitySelect');
var norrbottenSelection = document.getElementById('norrbottenCitySelect');
var skåneSelection = document.getElementById('skåneCitySelect');
var stockholmSelection = document.getElementById('stockholmCitySelect');
var södermanlandSelection = document.getElementById('södermanlandCitySelect');
var uppsalaSelection = document.getElementById('uppsalaCitySelect');
var värmlandSelection = document.getElementById('värmlandCitySelect');
var västerbottenSelection = document.getElementById('västerbottenCitySelect');
var västernorrlandSelection = document.getElementById('västernorrlandCitySelect');
var västmanlandSelection = document.getElementById('västmanlandCitySelect');
var västraGötalandSelection = document.getElementById('västraGötalandCitySelect');
var örebroSelection = document.getElementById('örebroCitySelect');
var östergötlandSelection = document.getElementById('östergötlandCitySelect');
var regionSpan = document.getElementById('regionspan-text');
var citySpan = document.getElementById('cityspan-text');
var regionCityHeader = document.getElementById('regioncityheader');

window.addEventListener('load', function loadRegionCheck(){
    if(region == 'Hela Sverige'){
        regionHeader.innerText = "Hela Sverige";
        regionSpanText.innerText = "Hela Sverige";
        regionCityHeader.innerText = "Hela Sverige";
        document.getElementById('helasverigecheckbox').checked = true;
        document.getElementById('location-city-button').style.display = "none";
    }
    else if(region == 'Blekinge'){
        regionHeader.innerText = "Blekinge";
        regionSpanText.innerText = "Blekinge";
        regionCityHeader.innerText = "Blekinge";
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById('blekingecheckbox').checked = true;
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Blekinge"
        }
    }
    else if(region == 'Dalarna'){
        regionHeader.innerText = "Dalarna";
        regionSpanText.innerText = "Dalarna";
        regionCityHeader.innerText = "Dalarna";
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById('dalarnacheckbox').checked = true;
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Dalarna"
        }
    }
    else if(region == 'Gävleborg'){
        regionHeader.innerText = "Gävleborg";
        regionSpanText.innerText = "Gävleborg";
        regionCityHeader.innerText = "Gävleborg";
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById('gävleborgcheckbox').checked = true;
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Gävleborg"
        }
    }
    else if(region == 'Gotland'){
        regionHeader.innerText = "Gotland";
        regionSpanText.innerText = "Gotland";
        regionCityHeader.innerText = "Gotland";
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById('gotlandcheckbox').checked = true;
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Gotland"
        }
    }
    else if(region == 'Halland'){
        regionHeader.innerText = "Halland";
        regionSpanText.innerText = "Halland";
        regionCityHeader.innerText = "Halland";
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById('hallandcheckbox').checked = true;
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Halland";
        }
    }
    else if(region == 'Jämtland'){
        regionHeader.innerText = "Jämtland";
        regionSpanText.innerText = "Jämtland";
        regionCityHeader.innerText = "Jämtland";
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById('jämtlandcheckbox').checked = true;
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Jämtland";
        }
    }
    else if(region == 'Jönköping'){
        regionHeader.innerText = "Jönköping";
        regionSpanText.innerText = "Jönköping";
        regionCityHeader.innerText = "Jönköping";
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById('jönköpingcheckbox').checked = true;
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Jönköping"
        }
    }
    else if(region == 'Kalmar'){
        regionHeader.innerText = "Kalmar";
        regionSpanText.innerText = "Kalmar";
        regionCityHeader.innerText = "Kalmar";
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById('kalmarcheckbox').checked = true;
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Kalmar"
        }
    }
    else if(region == 'Kronoberg'){
        regionHeader.innerText = "Kronoberg";
        regionSpanText.innerText = "Kronoberg";
        regionCityHeader.innerText = "Kronoberg";
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById('kronobergcheckbox').checked = true;
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Kronoberg"
        }
    }
    else if(region == 'Norrbotten'){
        regionHeader.innerText = "Norrbotten";
        regionSpanText.innerText = "Norrbotten";
        regionCityHeader.innerText = "Norrbotten";
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById('norrbottencheckbox').checked = true;
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Norrbotten"
        }
    }
    else if(region == "Örebro"){
        regionHeader.innerText = "Örebro";
        regionSpanText.innerText = "Örebro";
        regionCityHeader.innerText = "Örebro";
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById('örebrocheckbox').checked = true;
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Örebro"
        }
    }
    else if(region == 'Östergötland'){
        regionHeader.innerText = "Östergötland";
        regionSpanText.innerText = "Östergötland";
        regionCityHeader.innerText = "Östergötland";
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById('Östergötlandcheckbox').checked = true;
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Östergötland"
        }
    }
    else if(region == 'Skåne'){
        regionHeader.innerText = "Skåne";
        regionSpanText.innerText = "Skåne";
        regionCityHeader.innerText = "Skåne";
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById('Skånecheckbox').checked = true;
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Skåne"
        }
    }
    else if(region == 'Sörmland'){
        regionHeader.innerText = "Sörmland";
        regionSpanText.innerText = "Sörmland";
        regionCityHeader.innerText = "Sörmland";
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById('Sörmlandcheckbox').checked = true;
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Sörmland"
        }
    }
    else if(region == 'Stockholm'){
        regionHeader.innerText = "Stockholm";
        regionSpanText.innerText = "Stockholm";
        regionCityHeader.innerText = "Stockholm";
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById('stockholmcheckbox').checked = true;
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Stockholm"
        }
    }
    else if(region == 'Uppsala'){
        regionHeader.innerText = "Uppsala";
        searchRegion.value = "Uppsala";
        regionCityHeader.innerText = "Uppsala";
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Uppsala"
        }
    }
    else if(region == 'Värmland'){
        regionHeader.innerText = "Värmland";
        regionSpanText.innerText = "Värmland";
        regionCityHeader.innerText = "Värmland";
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById('värmlandcheckbox').checked = true;
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Värmland"
        }
    }
    else if(region == 'Västerbotten'){
        regionHeader.innerText = "Västerbotten";
        regionSpanText.innerText = "Västerbotten";
        regionCityHeader.innerText = "Västerbotten";
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById('västerbottencheckbox').checked = true;
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Västerbotten"
        }
    }
    else if(region == 'Västernorrland'){
        regionHeader.innerText = "Västernorrland";
        regionSpanText.innerText = "Västernorrland";
        regionCityHeader.innerText = "Västernorrland";
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById('västernorrlandcheckbox').checked = true;
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Västernorrland"
        }
    }
    else if(region == 'Västmanland'){
        regionHeader.innerText = "Västmanland";
        regionSpanText.innerText = "Västmanland";
        regionCityHeader.innerText = "Västmanland";
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById('västmanlandcheckbox').checked = true;
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Västmanland"
        }
    }
    else if(region == 'Västra Götaland'){
        regionHeader.innerText = "Västra Götaland";
        regionSpanText.innerText = "Västra Götaland";
        regionCityHeader.innerText = "Västra Götaland";
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById('västragötalandcheckbox').checked = true;
        if (citySpan != null && citySpan != undefined && citySelected != null && citySelected != undefined){
            if(citySelected != Array){
                citySpan.innerText = `${citySelected}`;
            }
        }
        else{
            citySpan.innerText = "Hela Västra Götaland"
        }
    }
    else if(region = null || region == undefined){
        regionHeader.innerText = "Hela Sverige";
        localStorage.setItem("regionSelected", "Hela Sverige");
        document.getElementById('regionspan-text').innerText = "Hela Sverige";
        document.getElementById('helasverigecheckbox').checked = true;
        document.getElementById('location-city-button').style.display = "none";
        alert("test!");
    }
    else if(region = Array){
        regionHeader.innerText = "Flera Regioner";
        document.getElementById('regionspan-text').innerText = "Flera Regioner";
        document.getElementById('location-city-button').style.display = "none";
    }
});





/**************************END OF REGION/CITY SELECT************************* */
document.getElementById('searchpage-searchindex').addEventListener('input', inputQuery);
function inputQuery(data){
  let theInput = data.target;
  
  console.log(theInput.value);
  return theInput.value;
}
document.getElementById('arrowopen-anchor').onclick = function sideMenuOpen(){
    var arrowClick = document.getElementById('arrowopen-anchor');
    var arrowClose = document.getElementById('arrowclose-anchor');
    var sideMenu = document.getElementById('searchpage-sidemenu');
    var darkCover = document.getElementById('darkcover');

    arrowClick.style.display = "none";
    document.getElementById('locationselectwindow').style.width = "0px";
    document.getElementById('location-arrow-down').style.display = "block";
    document.getElementById('location-arrow-up').style.display = "none";
    sideMenu.style.width = "400px";
    darkCover.style.display = "block"
    setTimeout(function (){
        arrowClose.style.display = "block";
    }, 450);
}
document.getElementById('arrowclose-anchor').onclick = function sideMenuClose(){
    var arrowClick = document.getElementById('arrowopen-anchor');
    var arrowClose = document.getElementById('arrowclose-anchor');
    var sideMenu = document.getElementById('searchpage-sidemenu');
    var darkCover = document.getElementById('darkcover');
    document.getElementById('golvoptionextended').style.width = "0px";
    document.getElementById('vvsoptionextended').style.width = "0px";

    arrowClick.style.display = "block";
    arrowClose.style.display = "none";
    sideMenu.style.width = "0px";
    darkCover.style.display = "none";
}

/**************** EXTENDED LIST ***************************/

function closeExtendedMenu(){
    var closeExtendedMenu = document.getElementsByClassName('sidemenuextended');
    for (i = 0; i < closeExtendedMenu.length; i++) {
        closeExtendedMenu[i].style.width = "0px";
    }
}
document.getElementById('balkongoption').onclick = function(){
    document.getElementById('balkongoptionextended').style.width = "400px";
}
document.getElementById('golvoption').onclick = function(){
    document.getElementById('golvoptionextended').style.width = "400px";
}
document.getElementById('vvsoption').onclick = function(){
    document.getElementById('vvsoptionextended').style.width = "400px";
}
/**************** EXTENDED LIST ***************************/