/*********************************************************** */
//                  v.2.1                                    //
//                                                           //
//                                                           //
//                                                           //
/*********************************************************** */
var regionHeader = document.getElementById('region-header-display');
var citySelected = localStorage.getItem("citySelected");
var region = localStorage.getItem("regionSelected");
var roleSelected = localStorage.getItem('roleSelected');
var purposeSelected = localStorage.getItem('purposeSelected');
var regionCityHeader = document.getElementById('regioncityheader');
var width = window.screen.width;

$(document).ready(function(){
    loggedInControl();
    cookieConsentLoad();
    loadRegionCheck();
    languageControl();
    roleControl(); 

    regionFilter(); //searchfilter.js

    document.getElementById('globeicon').setAttribute('src', './assets/images/globe.svg')
    document.getElementById('logo-mobile').style.display = "block";
});

function loadRegionCheck(){
    var region = localStorage.getItem("regionSelected");
    if(region !== undefined && region !== null){
        if (region.includes(',')) {
            regionHeader.innerText = "Flera Regioner";
            document.getElementById('location-city-button').style.display = "none";
            regionArrayPopulate(region);
            document.getElementById('location-city-button').style.display = "none";
        }
        else{
            var region = region.replace(/[^a-öA-Ö ]/g, "");
            if(region == 'Hela Sverige'){
                regionHeader.innerText = "Hela Sverige";
                regionCityHeader.innerText = "Hela Sverige";
                this.localStorage.removeItem("citySelected");
                document.getElementById('helasverigecheckbox').checked = true;
                document.getElementById('location-city-button').style.display = "none";
            }
            else{
                loadRegionCheckV2(`${region}`);
            }
        }
    }
    else if(region === null || region === undefined){
        regionHeader.innerText = "Hela Sverige";
        localStorage.setItem("regionSelected", "Hela Sverige");
        document.getElementById('helasverigecheckbox').checked = true;
        document.getElementById('location-city-button').style.display = "none";
    }
    else{
        regionHeader.innerText = "Flera Regioner";
        document.getElementById('location-city-button').style.display = "none";
    } //might need to be removed, archaic!
};

function loadRegionCheckV2(regionValue){
    regionHeader.innerText = `${regionValue}`;
    regionCityHeader.innerText = `${regionValue}`;
    if (regionValue === 'Västra Götaland') {
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById(`${regionValue}`).checked = true;

        var citySelected = this.localStorage.getItem("citySelected");
        if (citySelected !== null && citySelected !== undefined){
            if (citySelected.includes(',')){
                var citySelected = citySelected.replace(/"/g, "");
                var citySelected = citySelected.split(',');
                if(citySelected.length === 1 && citySelected.includes('Alla Städer') === false){
                    var citySelected = citySelected.toString();
                }
            }
            else if(citySelected.includes('Alla Städer')){
            }
            else{
                var citySelected = citySelected.replace(/"/g, "");
                regionHeader.innerText = `${citySelected}`;
            }
        }
        else if(citySelected === null || citySelected === undefined){
            clearCitySelection();
        }
        else{
        }
    }
    else{
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById(`${regionValue}`).checked = true;

    
    
        var citySelected = this.localStorage.getItem("citySelected");
        if (citySelected !== null && citySelected !== undefined){
            if (citySelected.includes(',')){
                var citySelected = citySelected.replace(/"/g, "");
                var citySelected = citySelected.split(',');
                if(citySelected.length === 1 && citySelected.includes('Alla Städer') === false){
                    var citySelected = citySelected.toString();
                }
            }
            else if(citySelected.includes('Alla Städer')){
            }
            else{
                var citySelected = citySelected.replace(/"/g, "");
                regionHeader.innerText = `${citySelected}`;
            }
        }
        else if(citySelected === null || citySelected === undefined){
            clearCitySelection();
        }
        else{
        }
    }
};