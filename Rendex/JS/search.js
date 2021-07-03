var regionHeader = document.getElementById('region-header-display');
var citySelected = localStorage.getItem("citySelected");
var region = localStorage.getItem("regionSelected");
var roleSelected = localStorage.getItem('roleSelected');
var purposeSelected = localStorage.getItem('purposeSelected');
var regionSpanText = document.getElementById('regionspan-text');
var citySpan = document.getElementById('cityspan-text');

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
var regionCityHeader = document.getElementById('regioncityheader');

window.addEventListener('load', function loadRegionCheck(){
    var region = localStorage.getItem("regionSelected");
    console.log(region);
    if(region !== undefined && region !== null){
        if (region.includes(',')) {
            regionHeader.innerText = "Flera Regioner";
            document.getElementById('regionspan-text').innerText = "Flera Regioner";
            document.getElementById('location-city-button').style.display = "none";
            var region = region.replace(/"/g, "")
            var region = region.split(',');
            console.log(region);
        }
        else{
            var region = region.replace(/[^a-öA-Ö ]/g, "");
            console.log(region);
            if(region == 'Hela Sverige'){
                regionHeader.innerText = "Hela Sverige";
                regionSpanText.innerText = "Hela Sverige";
                regionCityHeader.innerText = "Hela Sverige";
                this.localStorage.removeItem("citySelected");
                document.getElementById('helasverigecheckbox').checked = true;
                document.getElementById('location-city-button').style.display = "none";
            }
            else if(region == 'Blekinge'){
                loadRegionCheckV2("Blekinge");
            }
            else if(region == 'Dalarna'){
                loadRegionCheckV2("Dalarna");
            }
            else if(region == 'Gävleborg'){
                loadRegionCheckV2("Gävleborg");
            }
            else if(region == 'Gotland'){
                loadRegionCheckV2("Gotland");
            }
            else if(region == 'Halland'){
                loadRegionCheckV2("Halland");
            }
            else if(region == 'Jämtland'){
                loadRegionCheckV2("Jämtland");
            }
            else if(region == 'Jönköping'){
                loadRegionCheckV2("Jönköping");
            }
            else if(region == 'Kalmar'){
                loadRegionCheckV2("Kalmar");
            }
            else if(region == 'Kronoberg'){
                loadRegionCheckV2("Kronoberg");
            }
            else if(region == 'Norrbotten'){
                loadRegionCheckV2("Norrbotten");
            }
            else if(region == "Örebro"){
                loadRegionCheckV2("Örebro");
            }
            else if(region == 'Östergötland'){
                loadRegionCheckV2("Östergötland");
            }
            else if(region == 'Skåne'){
                loadRegionCheckV2("Skåne");
            }
            else if(region == 'Sörmland'){
                loadRegionCheckV2("Sörmland");
            }
            else if(region == 'Stockholm'){
                loadRegionCheckV2("Stockholm");
            }
            else if(region == 'Uppsala'){
                loadRegionCheckV2("Uppsala");
            }
            else if(region == 'Värmland'){
                loadRegionCheckV2("Värmland");
            }
            else if(region == 'Västerbotten'){
                loadRegionCheckV2("Västerbotten");
            }
            else if(region == 'Västernorrland'){
                loadRegionCheckV2("Västernorrland");
            }
            else if(region == 'Västmanland'){
                loadRegionCheckV2("Västmanland");
            }
            else if(region == 'Götaland'){
                loadRegionCheckV2("Västra Götaland");
            }
        }
    }
    else if(region === null || region === undefined){
        regionHeader.innerText = "Hela Sverige";
        localStorage.setItem("regionSelected", "Hela Sverige");
        document.getElementById('regionspan-text').innerText = "Hela Sverige";
        document.getElementById('helasverigecheckbox').checked = true;
        document.getElementById('location-city-button').style.display = "none";
    }
    else{
        regionHeader.innerText = "Flera Regioner";
        document.getElementById('regionspan-text').innerText = "Flera Regioner";
        document.getElementById('location-city-button').style.display = "none";
    } //might need to be removed, archaic!
});

function loadRegionCheckV2(regionValue){
    regionHeader.innerText = `${regionValue}`;
    regionSpanText.innerText = `${regionValue}`;
    regionCityHeader.innerText = `${regionValue}`;
    if (regionValue === 'Västra Götaland') {
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById(`${regionValue}`).checked = true;

        var citySelected = this.localStorage.getItem("citySelected");
        console.log(citySelected);
        if (citySelected !== null && citySelected !== undefined){
            if (citySelected.includes(',')){
                var citySelected = citySelected.replace(/"/g, "");
                var citySelected = citySelected.split(',');
                citySpan.innerText = "Flera Områden";
                console.log(citySelected);
                if(citySelected.length === 1 && citySelected.includes('Alla Städer') === false){
                    var citySelected = citySelected.toString();
                    citySpan.innerText = `${citySelected}`;
                }
            }
            else if(citySelected.includes('Alla Städer')){
                citySpan.innerText = `Hela ${regionValue}`;
            }
            else{
                var citySelected = citySelected.replace(/"/g, "");
                citySpan.innerText = `${citySelected}`;
            }
        }
        else if(citySelected === null || citySelected === undefined){
            citySpan.innerText = `Hela ${regionValue}`;
            clearCitySelection();
        }
        else{
            citySpan.innerText = `Hela ${regionValue}`;
        }
    }
    else{
        console.log(regionValue);
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById(`${regionValue}`).checked = true;
    
    
        var citySelected = this.localStorage.getItem("citySelected");
        console.log(citySelected);
        if (citySelected !== null && citySelected !== undefined){
            if (citySelected.includes(',')){
                var citySelected = citySelected.replace(/"/g, "");
                var citySelected = citySelected.split(',');
                citySpan.innerText = "Flera Områden";
                console.log(citySelected);
                if(citySelected.length === 1 && citySelected.includes('Alla Städer') === false){
                    var citySelected = citySelected.toString();
                    citySpan.innerText = `${citySelected}`;
                }
            }
            else if(citySelected.includes('Alla Städer')){
                citySpan.innerText = `Hela ${regionValue}`;
            }
            else{
                var citySelected = citySelected.replace(/"/g, "");
                citySpan.innerText = `${citySelected}`;
            }
        }
        else if(citySelected === null || citySelected === undefined){
            citySpan.innerText = `Hela ${regionValue}`;
            clearCitySelection();
        }
        else{
            citySpan.innerText = `Hela ${regionValue}`;
        }
    }
};



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
    document.getElementById('locationselectwindow-city').style.width = "0px";
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