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

window.addEventListener('load', function(){
    if(region == 'Hela Sverige'){
        regionHeader.innerText = "Hela Sverige";
        regionSpanText.innerText = "Hela Sverige";
    }
    else if(region == 'Blekinge'){
        regionHeader.innerText = "Blekinge";
        regionHeader.innerText = "Blekinge";
        citySpanText.innerText = "";
    }
    else if(region == 'Dalarna'){
        regionHeader.innerText = "Dalarna";
    }
    else if(region == 'Gävleborg'){
        regionHeader.innerText = "Gävleborg";

    }
    else if(region == 'Gotland'){
        regionHeader.innerText = "Gotland";
    }
    else if(region == 'Halland'){
        regionHeader.innerText = "Halland";
    }
    else if(region == 'Jämtland'){
        regionHeader.innerText = "Jämtland";
        searchRegion.value = "Jämtland";
    }
    else if(region == 'Jönköping'){
        regionHeader.innerText = "Jönköping";
        searchRegion.value = "Jönköping";
    }
    else if(region == 'Kalmar'){
        regionHeader.innerText = "Kalmar";
        searchRegion.value = "Kalmar";
        document.getElementById('searchpage-cityselect-wrapper').style.display = "flex";
        defaultCitySelection.style.display = "none";
        blekingeSelection.style.display = "none";
        dalarnaSelection.style.display = "none";
        gotlandSelection.style.display = "none";
        gävleborgSelection.style.display = "none";
        hallandSelection.style.display = "none";
        jämtlandSelection.style.display = "none";
        jönköpingSelection.style.display = "none";
        kalmarSelection.style.display = "block";
        kronobergSelection.style.display = "none";
        norrbottenSelection.style.display = "none";
        skåneSelection.style.display = "none";
        stockholmSelection.style.display = "none";
        södermanlandSelection.style.display = "none";
        uppsalaSelection.style.display = "none";
        värmlandSelection.style.display = "none";
        västerbottenSelection.style.display = "none";
        västernorrlandSelection.style.display = "none";
        västmanlandSelection.style.display = "none";
        västraGötalandSelection.style.display = "none";
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
    }
    else if(region == 'Kronoberg'){
        regionHeader.innerText = "Kronoberg";
        searchRegion.value = "Kronoberg";
        document.getElementById('searchpage-cityselect-wrapper').style.display = "flex";
        defaultCitySelection.style.display = "none";
        blekingeSelection.style.display = "none";
        dalarnaSelection.style.display = "none";
        gotlandSelection.style.display = "none";
        gävleborgSelection.style.display = "none";
        hallandSelection.style.display = "none";
        jämtlandSelection.style.display = "none";
        jönköpingSelection.style.display = "none";
        kalmarSelection.style.display = "none";
        kronobergSelection.style.display = "block";
        norrbottenSelection.style.display = "none";
        skåneSelection.style.display = "none";
        stockholmSelection.style.display = "none";
        södermanlandSelection.style.display = "none";
        uppsalaSelection.style.display = "none";
        värmlandSelection.style.display = "none";
        västerbottenSelection.style.display = "none";
        västernorrlandSelection.style.display = "none";
        västmanlandSelection.style.display = "none";
        västraGötalandSelection.style.display = "none";
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
    }
    else if(region == 'Norrbotten'){
        regionHeader.innerText = "Norrbotten";
        searchRegion.value = "Norrbotten";
        document.getElementById('searchpage-cityselect-wrapper').style.display = "flex";
        defaultCitySelection.style.display = "none";
        blekingeSelection.style.display = "none";
        dalarnaSelection.style.display = "none";
        gotlandSelection.style.display = "none";
        gävleborgSelection.style.display = "none";
        hallandSelection.style.display = "none";
        jämtlandSelection.style.display = "none";
        jönköpingSelection.style.display = "none";
        kalmarSelection.style.display = "none";
        kronobergSelection.style.display = "none";
        norrbottenSelection.style.display = "block";
        skåneSelection.style.display = "none";
        stockholmSelection.style.display = "none";
        södermanlandSelection.style.display = "none";
        uppsalaSelection.style.display = "none";
        värmlandSelection.style.display = "none";
        västerbottenSelection.style.display = "none";
        västernorrlandSelection.style.display = "none";
        västmanlandSelection.style.display = "none";
        västraGötalandSelection.style.display = "none";
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
    }
    else if(region == "Örebro"){
        regionHeader.innerText = "Örebro";
        searchRegion.value = "Örebro";
        document.getElementById('searchpage-cityselect-wrapper').style.display = "flex";
        defaultCitySelection.style.display = "none";
        blekingeSelection.style.display = "none";
        dalarnaSelection.style.display = "none";
        gotlandSelection.style.display = "none";
        gävleborgSelection.style.display = "none";
        hallandSelection.style.display = "none";
        jämtlandSelection.style.display = "none";
        jönköpingSelection.style.display = "none";
        kalmarSelection.style.display = "none";
        kronobergSelection.style.display = "none";
        norrbottenSelection.style.display = "none";
        skåneSelection.style.display = "none";
        stockholmSelection.style.display = "none";
        södermanlandSelection.style.display = "none";
        uppsalaSelection.style.display = "none";
        värmlandSelection.style.display = "none";
        västerbottenSelection.style.display = "none";
        västernorrlandSelection.style.display = "none";
        västmanlandSelection.style.display = "none";
        västraGötalandSelection.style.display = "none";
        örebroSelection.style.display = "block";
        östergötlandSelection.style.display = "none";
    }
    else if(region == 'Östergötland'){
        regionHeader.innerText = "Östergötland";
        searchRegion.value = "Östergötland";
        document.getElementById('searchpage-cityselect-wrapper').style.display = "flex";
        defaultCitySelection.style.display = "none";
        blekingeSelection.style.display = "none";
        dalarnaSelection.style.display = "none";
        gotlandSelection.style.display = "none";
        gävleborgSelection.style.display = "none";
        hallandSelection.style.display = "none";
        jämtlandSelection.style.display = "none";
        jönköpingSelection.style.display = "none";
        kalmarSelection.style.display = "none";
        kronobergSelection.style.display = "block";
        norrbottenSelection.style.display = "none";
        skåneSelection.style.display = "none";
        stockholmSelection.style.display = "none";
        södermanlandSelection.style.display = "none";
        uppsalaSelection.style.display = "none";
        värmlandSelection.style.display = "none";
        västerbottenSelection.style.display = "none";
        västernorrlandSelection.style.display = "none";
        västmanlandSelection.style.display = "none";
        västraGötalandSelection.style.display = "none";
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
    }
    else if(region == 'Skåne'){
        regionHeader.innerText = "Skåne";
        searchRegion.value = "Skåne";
        document.getElementById('searchpage-cityselect-wrapper').style.display = "flex";
        defaultCitySelection.style.display = "none";
        blekingeSelection.style.display = "none";
        dalarnaSelection.style.display = "none";
        gotlandSelection.style.display = "none";
        gävleborgSelection.style.display = "none";
        hallandSelection.style.display = "none";
        jämtlandSelection.style.display = "none";
        jönköpingSelection.style.display = "none";
        kalmarSelection.style.display = "none";
        kronobergSelection.style.display = "block";
        norrbottenSelection.style.display = "none";
        skåneSelection.style.display = "none";
        stockholmSelection.style.display = "none";
        södermanlandSelection.style.display = "none";
        uppsalaSelection.style.display = "none";
        värmlandSelection.style.display = "none";
        västerbottenSelection.style.display = "none";
        västernorrlandSelection.style.display = "none";
        västmanlandSelection.style.display = "none";
        västraGötalandSelection.style.display = "none";
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
    }
    else if(region == 'Sörmland'){
        regionHeader.innerText = "Sörmland";
        searchRegion.value = "Sörmland";
        document.getElementById('searchpage-cityselect-wrapper').style.display = "flex";
        defaultCitySelection.style.display = "none";
        blekingeSelection.style.display = "none";
        dalarnaSelection.style.display = "none";
        gotlandSelection.style.display = "none";
        gävleborgSelection.style.display = "none";
        hallandSelection.style.display = "none";
        jämtlandSelection.style.display = "none";
        jönköpingSelection.style.display = "none";
        kalmarSelection.style.display = "none";
        kronobergSelection.style.display = "block";
        norrbottenSelection.style.display = "none";
        skåneSelection.style.display = "none";
        stockholmSelection.style.display = "none";
        södermanlandSelection.style.display = "none";
        uppsalaSelection.style.display = "none";
        värmlandSelection.style.display = "none";
        västerbottenSelection.style.display = "none";
        västernorrlandSelection.style.display = "none";
        västmanlandSelection.style.display = "none";
        västraGötalandSelection.style.display = "none";
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
    }
    else if(region == 'Stockholm'){
        regionHeader.innerText = "Stockholm";
        defaultCitySelection.style.display = "none";
        blekingeSelection.style.display = "none";
        dalarnaSelection.style.display = "none";
        gotlandSelection.style.display = "none";
        gävleborgSelection.style.display = "none";
        hallandSelection.style.display = "none";
        jämtlandSelection.style.display = "none";
        jönköpingSelection.style.display = "none";
        kalmarSelection.style.display = "none";
        kronobergSelection.style.display = "none";
        norrbottenSelection.style.display = "none";
        skåneSelection.style.display = "none";
        stockholmSelection.style.display = "block";
        södermanlandSelection.style.display = "none";
        uppsalaSelection.style.display = "none";
        värmlandSelection.style.display = "none";
        västerbottenSelection.style.display = "none";
        västernorrlandSelection.style.display = "none";
        västmanlandSelection.style.display = "none";
        västraGötalandSelection.style.display = "none";
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
    }
    else if(region == 'Uppsala'){
        regionHeader.innerText = "Uppsala";
        searchRegion.value = "Uppsala";
        document.getElementById('searchpage-cityselect-wrapper').style.display = "flex";
        defaultCitySelection.style.display = "none";
        blekingeSelection.style.display = "none";
        dalarnaSelection.style.display = "none";
        gotlandSelection.style.display = "none";
        gävleborgSelection.style.display = "none";
        hallandSelection.style.display = "none";
        jämtlandSelection.style.display = "none";
        jönköpingSelection.style.display = "none";
        kalmarSelection.style.display = "none";
        kronobergSelection.style.display = "block";
        norrbottenSelection.style.display = "none";
        skåneSelection.style.display = "none";
        stockholmSelection.style.display = "none";
        södermanlandSelection.style.display = "none";
        uppsalaSelection.style.display = "none";
        värmlandSelection.style.display = "none";
        västerbottenSelection.style.display = "none";
        västernorrlandSelection.style.display = "none";
        västmanlandSelection.style.display = "none";
        västraGötalandSelection.style.display = "none";
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
    }
    else if(region == 'Värmland'){
        regionHeader.innerText = "Värmland";
        document.getElementById('regionspan-text').innerText = "Värmland";
    }
    else if(region == 'Västerbotten'){
        regionHeader.innerText = "Västerbotten";
        document.getElementById('regionspan-text').innerText = "Västerbotten";
    }
    else if(region == 'Västernorrland'){
        regionHeader.innerText = "Västernorrland";
        document.getElementById('regionspan-text').innerText = "Västernorrland";
    }
    else if(region == 'Västmanland'){
        regionHeader.innerText = "Västmanland";
        document.getElementById('regionspan-text').innerText = "Västmanland";
    }
    else if(region == 'Västra Götaland'){
        regionHeader.innerText = "Västra Götaland";
        document.getElementById('regionspan-text').innerText = "Västra Götaland";

    }
    else if(region = null || region == undefined){
        regionHeader.innerText = "Hela Sverige";
        localStorage.setItem("regionSelected", "Hela Sverige");
        document.getElementById('regionspan-text').innerText = "Hela Sverige";
    }
});
document.getElementById('searchpage-regioncity-select-wrapper').onclick = function locationSelectButton(){
    document.getElementById('locationselectwindow').style.width = "300px";
    windowOpen();
};
document.getElementById('closelocationselectwindow').addEventListener('click', function(){
    document.getElementById('locationselectwindow').style.width = "0px";
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