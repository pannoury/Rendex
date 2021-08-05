var regionHeader = document.getElementById('region-header-display');
var citySelected = localStorage.getItem("citySelected");
var region = localStorage.getItem("regionSelected");
var roleSelected = localStorage.getItem('roleSelected');
var purposeSelected = localStorage.getItem('purposeSelected');
var regionSpanText = document.getElementById('regionspan-text');
var citySpan = document.getElementById('cityspan-text');
var regionCityHeader = document.getElementById('regioncityheader');
var width = window.screen.width;
var loginId = getCookie("a_user");
var newArrayLoginId = loginId.split(',');

window.addEventListener('load', function loadRegionCheck(){

    /***********NAVBAR SETTINGS */
    loggedInControl();
    roleControl(); 
    document.getElementById('globeicon').setAttribute('src', './assets/images/globe.svg')
    /***********NAVBAR SETTINGS */

    var region = localStorage.getItem("regionSelected");
    if(region !== undefined && region !== null){
        if (region.includes(',')) {
            regionHeader.innerText = "Flera Regioner";
            document.getElementById('regionspan-text').innerText = "Flera Regioner";
            document.getElementById('location-city-button').style.display = "none";
            regionArrayPopulate(region);
            document.getElementById('location-city-button').style.display = "none";
        }
        else{
            var region = region.replace(/[^a-öA-Ö ]/g, "");
            if(region == 'Hela Sverige'){
                regionHeader.innerText = "Hela Sverige";
                regionSpanText.innerText = "Hela Sverige";
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
        if (citySelected !== null && citySelected !== undefined){
            if (citySelected.includes(',')){
                var citySelected = citySelected.replace(/"/g, "");
                var citySelected = citySelected.split(',');
                citySpan.innerText = "Flera Områden";
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
                regionHeader.innerText = `${citySelected}`;
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
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById(`${regionValue}`).checked = true;

    
    
        var citySelected = this.localStorage.getItem("citySelected");
        if (citySelected !== null && citySelected !== undefined){
            if (citySelected.includes(',')){
                var citySelected = citySelected.replace(/"/g, "");
                var citySelected = citySelected.split(',');
                citySpan.innerText = "Flera Områden";
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
                regionHeader.innerText = `${citySelected}`;
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


/**********************NAVBAR **********************/
$(document).ready(function(){
    var lang = getCookie("lang");
    if(lang = undefined || lang == null){
        console.log("no language cookie");
    }
    else if(lang = "SE"){
        document.getElementById('language-selected').innerText = "SE";
    }
    else if(lang = "ENG"){
        document.getElementById('language-selected').innerText = "ENG";
    }
});
async function loggedInControl(){
    if(newArrayLoginId[0] > 0){
        if(newArrayLoginId[1] == 1){ //Individual
            var role = newArrayLoginId[1];
            var accountid = newArrayLoginId[0];
            $.ajax(
                {
                    url: './PHP/individuals.php',
                    dataType: 'text',
                    method: 'GET',
                    data: {
                        userid: accountid,
                        role: role,
                    },
                    success: function(response){
                        var response = JSON.parse(response);
                        if(response[0] == 1){
                            var width = window.screen.width;
                            if(width > 875){
                                document.getElementById('loginanchor').innerText = `${response[1]}`;
                                document.getElementById('loggedInFalse').style.display = "none";
                            }
                            else if(width < 875){
                                document.getElementById('loginsidemenu').innerText = `${response[1]}`;
                                document.getElementById('createaccountsidemenu').style.display = "none";
                            }
                        }
                        else{
                            console.log("Failed to fetch data from server");
                        }
    
                    },
                }
            );
        }
        else if(newArrayLoginId[1] == 2){ //Organisation

        }
    }
    else{ //not logged in, redirect to login page
        window.location = "https://rendex.se/login"
        document.getElementById('loginanchor').textContent = "Logga In";
    }
};
function roleControl(){
    var role = localStorage.getItem("roleSelected");
    var roleSpan = document.getElementById('search-role-span');
    if(role == undefined || role == null){ //role not existing/not selected
        localStorage.setItem("roleSelected", "Uppdragstagare");
    }
    else if(role !== undefined && role !== null){
        roleSpan.innerText = `${role}`;
    }
}

document.getElementById('loginanchor').onclick = function(){
    if(newArrayLoginId[0] >= 1){
        window.location = 'https://rendex.se/myaccount';
    }
    else{
        window.location = 'https://rendex.se/login';
    }
};
document.getElementById('loginsidemenu').onclick = function(){
    if(newArrayLoginId[0] >= 1){
        window.location = 'https://rendex.se/myaccount';
    }
    else{
        window.location = 'https://rendex.se/login';
    }
}
document.getElementById('hamburgermenu-btn').addEventListener('click', function(){
    var sideMenu = document.getElementById('side-menu').offsetWidth;
    if(sideMenu !== 0){
        document.getElementById('side-menu').style.width='0';
        document.getElementById('cross-black').style.display = "none";
        document.getElementById('hamburgermenu').style.display = "block";
    }
    else{
        document.getElementById('side-menu').style.width='100vw';
        document.getElementById('hamburgermenu').style.display = "none";
        document.getElementById('cross-black').style.display = "block";
    }
});
document.getElementById('inboxlink1').onclick = function(){
    var loginId = getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    if(newArrayLoginId[0] >= 1){
        document.getElementById('inboxlink1').href = "https://rendex.se/inbox";
    }
    else{
        window.location = 'https://rendex.se/login';
    }
};
document.getElementById('inboxlink2').addEventListener('click',function(){
    var loginId = getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    if(newArrayLoginId[0] >= 1){
        window.location = 'https://rendex.se/inbox';
    }
    else{
        window.location = 'https://rendex.se/login';
    }
});
document.getElementById('languageanchor-searchpage').onclick = function(){
    var ul = document.getElementById('languageanchor');
    ulAriaLabel = ul.getAttribute('aria-label');
    if(ulAriaLabel == null || ulAriaLabel == undefined || ulAriaLabel == "not displayed"){
        document.getElementById('language-options').style.display = "flex";
        ul.setAttribute('aria-label', "displayed");
    }
    else if(ulAriaLabel == "displayed"){
        document.getElementById('language-options').style.display = "none";
        ul.setAttribute('aria-label', "not displayed");
    }
    
};
document.getElementById('english-selected').onclick = function(){
    var lang = getCookie("lang");
    if(lang = undefined || lang == null){
        createCookie("lang", "ENG", 365);
    }
    else if(lang = "ENG"){
        createCookie("lang", "ENG", 365);
    }
    else if(lang = "SE"){
    }
    location.reload();
    
};
document.getElementById('swedish-selected').onclick = function(){
    var lang = getCookie("lang");
    if(lang = undefined || lang == null){
        createCookie("lang", "SE", 365);
    }
    else if(lang = "ENG"){
        createCookie("lang", "SE", 365);
    }
    else if(lang = "SE"){
    }
    location.reload();
};
/**********************NAVBAR **********************/