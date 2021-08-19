var helaSverige = document.getElementById('helasverigecheckbox');
var blekinge = document.getElementById('blekingecheckbox');
var citySelected = localStorage.getItem('citySelected');
var region = localStorage.getItem("regionSelected");

var cityButton = document.getElementById('location-city-button');
var backToRegionBtn = document.getElementById('backtoregionselect');
var brackets = /\[|\]/g;
var width = window.screen.width;

function test(){
    document.getElementById('searchpage-filter-window').style.display = "flex";
    document.getElementById('searchpage-filter-window').style.width = "50vw";
    document.getElementById('searchpage-filter-window').style.height = "50vh";
}



/* OPEN REGION WINDOW */
document.getElementById('searchpage-regioncity-select-wrapper').addEventListener('click', function(){
    test();
    locationSelectButton();
});
document.getElementById('plats-btn').addEventListener('click', function(){
    locationSelectButton();
});
function locationSelectButton(){
    var x = document.getElementsByClassName('regioncheckbox');
    var region = localStorage.getItem("regionSelected");
    var checkedboxes = 0;
    for(i = 0; i < x.length; i++){
        if (x[i].checked) {
            if(region !== null && region !== undefined){
                if(region.includes(',')){
                    regionArrayPopulate(region)
                    break;
                }
                else{
                    var region = localStorage.getItem("regionSelected");
                    var region = region.replace(/"/g, "")
                    if(helaSverige.checked = true && region == "Hela Sverige"){
                        var regionOptions = $('input[name=region]');
                        for(x in regionOptions){
                            regionOptions[x].checked = false;
                        }
                        helaSverige.checked = true;
                        document.getElementById('location-initiate-button').style.display = "block";
                        document.getElementById('location-city-button').style.display = "none";
                    }
                }
            }
            else if(checkedboxes > 1){
                document.getElementById('helasverigecheckbox').checked = false;
                document.getElementById('location-initiate-button').style.display = "block";
                document.getElementById('location-city-button').style.display = "none";
            }
            else if(region.length === 1 && helaSverige.checked == false){
                document.getElementById('location-initiate-button').style.display = "block";
                document.getElementById('location-city-button').style.display = "block";
            }
        }
    }
    windowWidthCheck();
}
function windowWidthCheck(){ //adjust size of window
    var width = window.screen.width;
    if(width > 875){
        document.getElementById('locationselectwindow').style.width = "300px";
    }
    else {
        document.getElementById('locationselectwindow').style.width = "100vw";
        document.getElementById('locationselectwindow').style.marginRight = "0vh";
        document.getElementById('locationselectwindow').style.right = "0vh"
        document.getElementById('locationselectwindow-city').style.top = "0vh";
    }

    document.getElementById('location-arrow-down').style.display = "none";
    document.getElementById('location-arrow-up').style.display = "block";
}
/* CLOSE REGION WINDOW */
document.getElementById('closelocationselectwindow').addEventListener('click', function(){
    document.getElementById('locationselectwindow').style.width = "0px";
    document.getElementById('location-arrow-down').style.display = "block";
    document.getElementById('location-arrow-up').style.display = "none";
});
/* CLOSE REGION WINDOW */
$('input[name=region]').change(function checkBoxControl(){
    localStorage.removeItem("citySelected");
    clearCityList();
    var x = document.getElementsByClassName('regioncheckbox');
    var checkedboxes = 0;
    for(i = 0; i < x.length; i++){
        if (x[i].checked) {
            checkedboxes++;
            if (checkedboxes > 1) {
                if(helaSverige.checked === true){
                    helaSverige.checked = false;
                    if(checkedboxes > 1){
                        document.getElementById('location-initiate-button').style.display = "block";
                        document.getElementById('location-city-button').style.display = "block";
                    }
                }
                else if(helaSverige.checked === false){
                    document.getElementById('location-initiate-button').style.display = "block";
                    document.getElementById('location-city-button').style.display = "none";
                }
            }
            else if (checkedboxes > 1 && helaSverige.checked === false){
                document.getElementById('location-initiate-button').style.display = "block";
                document.getElementById('location-city-button').style.display = "none";
            }
            else if (checkedboxes === 1 && helasverigecheckbox.checked == true) {
                document.getElementById('location-initiate-button').style.display = "block";
                document.getElementById('location-city-button').style.display = "none";
            }
            else if (checkedboxes === 1 && helasverigecheckbox.checked === false){
                document.getElementById('location-initiate-button').style.display = "block";
                document.getElementById('location-city-button').style.display = "block";
            }
        }
        else if(checkedboxes === 0){
            document.getElementById('location-initiate-button').style.display = "none";
            document.getElementById('location-city-button').style.display = "none";
        }
    }
});
document.getElementById('helasverigecheckbox').onclick = function(){
    var x = document.getElementsByClassName('regioncheckbox');
    var checkedboxes = 0;
    for(i = 0; i < x.length; i++){
        if (x[i].checked) {
            checkedboxes++;
            if (checkedboxes > 1){
                var regionOptions = $('input[name=region]');
                for(x in regionOptions){
                    regionOptions[x].checked = false;
                }
                helaSverige.checked = true;
                document.getElementById('location-initiate-button').style.display = "block";
                document.getElementById('location-city-button').style.display = "none";
            }
            else{}
        }
    }
};

/*****************************CITY-WINDOW SCRIPT*************************** */
cityButton.addEventListener('click', function cityDisplayControl(){
    clearCityList();
    if(document.getElementById('Blekinge').checked === true){
        cityWindowScript('Blekinge');
    }
    else if(document.getElementById('Dalarna').checked === true){
        cityWindowScript('Dalarna');
    }
    else if(document.getElementById('Gävleborg').checked === true){
        cityWindowScript('Gävleborg');
    }
    else if(document.getElementById('Gotland').checked === true){
        cityWindowScript('Gotland');
    }
    else if(document.getElementById('Halland').checked === true){
        cityWindowScript('Halland');
    }
    else if(document.getElementById('Jämtland').checked === true){
        cityWindowScript('Jämtland');
    }
    else if(document.getElementById('Jönköping').checked === true){
        cityWindowScript('Jönköping');
    }
    else if(document.getElementById('Kalmar').checked === true){
        cityWindowScript('Kalmar');
    }
    else if(document.getElementById('Kronoberg').checked === true){
        cityWindowScript('Kronoberg');
    }
    else if(document.getElementById('Norrbotten').checked === true){
        cityWindowScript('Norrbotten');
    }
    else if(document.getElementById('Örebro').checked === true){
        cityWindowScript('Örebro');
    }
    else if(document.getElementById('Östergötland').checked === true){
        cityWindowScript('Östergötland');
    }
    else if(document.getElementById('Skåne').checked === true){
        cityWindowScript('Skåne');
    }
    else if(document.getElementById('Sörmland').checked === true){
        cityWindowScript('Sörmland');
    }
    else if(document.getElementById('Stockholm').checked === true){
        cityWindowScript('Stockholm');
    }
    else if(document.getElementById('Uppsala').checked === true){
        cityWindowScript('Uppsala');
    }
    else if(document.getElementById('Värmland').checked === true){
        cityWindowScript('Värmland');
    }
    else if(document.getElementById('Västerbotten').checked === true){
        cityWindowScript('Västerbotten');
    }
    else if(document.getElementById('Västernorrland').checked === true){
        cityWindowScript('Västernorrland');
    }
    else if(document.getElementById('Västmanland').checked === true){
        cityWindowScript('Västmanland');
    }
    else if(document.getElementById('Västra Götaland').checked === true){
        cityWindowScript('Västra Götaland');
    }
});
backToRegionBtn.addEventListener('click', function(){
    clearCity2();
    document.getElementById('locationselectwindow-city').style.width = "0px";
    var cityOptionForRegions = document.getElementsByClassName('locationcityoptions');
    for (i = 0; i < cityOptionForRegions.length; i++) {
        cityOptionForRegions[i].style.display = "none";
    }
});
function clearCityList(){
    var cityOptionForRegions = document.getElementsByClassName('locationcityoptions');
    for (i = 0; i < cityOptionForRegions.length; i++) {
        cityOptionForRegions[i].style.display = "none";
    }
}
$('input[name=city]').change(function checkBoxControlCity(){
    var x = document.getElementsByClassName('citycheckbox');
    var allCities = document.getElementById('allaområdencheckbox');
    var checkedboxes = 0;
    for(i = 0; i < x.length; i++){
        if (x[i].checked) {
            checkedboxes++;
            if (checkedboxes > 1) {
                if(allCities.checked === true){
                    allCities.checked = false;
                    if(checkedboxes > 1){
                        document.getElementById('selectcitybtn').style.display = "block";
                    }
                }
                else if(allCities.checked === false){
                    document.getElementById('selectcitybtn').style.display = "block";
                }
            }
            else if (checkedboxes > 1 && allCities.checked === false){
                document.getElementById('selectcitybtn').style.display = "block";
            }
            else if (checkedboxes === 1 && allCities.checked == true) {
                document.getElementById('selectcitybtn').style.display = "block";
            }
            else if (checkedboxes === 1 && allCities.checked === false){
                document.getElementById('selectcitybtn').style.display = "block";
            }
        }
        else if(checkedboxes === 0){
            document.getElementById('selectcitybtn').style.display = "none";
        }
    }
});
document.getElementById('allaområdencheckbox').onclick = function(){
    var x = document.getElementsByClassName('citycheckbox');
    var allCities = document.getElementById('allaområdencheckbox');
    var checkedboxes = 0;
    for(i = 0; i < x.length; i++){
        if (x[i].checked) {
            checkedboxes++;
            if (checkedboxes > 1){
                x[i].checked = false;
                allCities.checked = true;
            }
            else{}
        }
    }
};

function cityWindowScript(regionValue){
    clearCityList();
    console.log(regionValue)
    var citySelected = localStorage.getItem("citySelected");
    if(regionValue === 'västra götaland'){
        populateCityOptions(regionValue);
    }
    else if(regionValue !== 'västra götaland'){
        var regionToUpperCase = regionValue.charAt(0).toUpperCase() + regionValue.slice(1);
        if(document.getElementById(regionToUpperCase).checked === true){
            populateCityOptions(regionValue);
        }
    }
    else if(regionValue.includes(',')){
        var cityOptionForRegions = document.getElementsByClassName('locationcityoptions');
        for (i = 0; i < cityOptionForRegions.length; i++) {
            cityOptionForRegions[i].style.display = "none";
        }
    }
    
    if(width > 875){
        document.getElementById('locationselectwindow-city').style.width = "300px";
    }
    else{
        document.getElementById('locationselectwindow-city').style.width = "100vw";
        document.getElementById('locationselectwindow-city').style.marginRight = "0";
        document.getElementById('locationselectwindow-city').style.right = "0vh";
        document.getElementById('locationselectwindow-city').style.top = "0vh";
    }
    
}
/******************Dynamic City Options *****************/
function populateCityOptions(regionValue){
    console.log(regionValue);
    if(regionValue.includes(' ') == true){
        document.getElementById('regioncityheader').innerText = 'Västra Götaland';
        var regionValue = regionValue.replace(/\s/g, "");
        console.log(regionValue);

        var cityWrapper = document.getElementById('locationselect-cityoptions');
        var locationCityWrapper = document.createElement('div');
        locationCityWrapper.setAttribute('class', 'locationcityoptions');
        locationCityWrapper.setAttribute('id', `location${regionValue}`);

        cityWrapper.append(locationCityWrapper);

        var array = window[`${regionValue}CityArray`];
        for(x in array){
            var cityOptionWrapper = document.createElement('div');
            cityOptionWrapper.setAttribute('class', 'singlecityoption');
    
            var cityInput = document.createElement('input');
            cityInput.setAttribute('type', 'checkbox');
            cityInput.setAttribute('name', 'city');
            cityInput.setAttribute('class', 'citycheckbox');
            cityInput.setAttribute('value', `${array[x]}`);
            cityInput.setAttribute('id', `${array[x]}`);

            var label = document.createElement('label');
            label.textContent = `${array[x]}`;

            locationCityWrapper.append(cityOptionWrapper);
            cityOptionWrapper.append(cityInput);
            cityOptionWrapper.append(label);
        }
    }
    else{
        document.getElementById('regioncityheader').innerText = `${regionValue}`;
        var cityWrapper = document.getElementById('locationselect-cityoptions');
        var locationCityWrapper = document.createElement('div');
        locationCityWrapper.setAttribute('class', 'locationcityoptions');
        locationCityWrapper.setAttribute('id', `location${regionValue}`);

        cityWrapper.append(locationCityWrapper);

        var array = window[`${regionValue}CityArray`];
        for(x in array){
            var cityOptionWrapper = document.createElement('div');
            cityOptionWrapper.setAttribute('class', 'singlecityoption');
    
            var cityInput = document.createElement('input');
            cityInput.setAttribute('type', 'checkbox');
            cityInput.setAttribute('name', 'city');
            cityInput.setAttribute('class', 'citycheckbox');
            cityInput.setAttribute('value', `${array[x]}`);
            cityInput.setAttribute('id', `${array[x]}`);

            var label = document.createElement('label');
            label.textContent = `${array[x]}`;

            locationCityWrapper.append(cityOptionWrapper);
            cityOptionWrapper.append(cityInput);
            cityOptionWrapper.append(label);
        }
    }

    if(citySelected === null || citySelected === undefined){
        clearCitySelection();
        document.getElementById('allaområdencheckbox').checked = true;
    }
    else if(citySelected.includes(',')){
        var citySelected = citySelected.replace(/"/g, "");
        var citySelected = citySelected.split(',');
        for (i = 0; i < citySelected.length; i++){
            document.getElementById(citySelected[i]).checked = true;
            document.getElementById('allaområdencheckbox').checked = false;
        }
    }
    else if(citySelected = 'Alla Städer'){
        clearCitySelection();
        document.getElementById('allaområdencheckbox').checked = true;
    }
    else{
        var citySelected = citySelected.replace(/"/g, "");
        document.getElementById(`${citySelected}`).checked = true;
    }
}
/******************Dynamic City Options *****************/
/*************************INITIATE LOAD******************* */
document.getElementById('location-initiate-button').addEventListener('click', function(){
    localStorage.clear("regionSelected");
    localStorage.clear("citySelected");
   /**********REGION*********/
    var allCheckedBoxesRegion = document.querySelectorAll('input[name="region"]:checked');
    let checkedRegionBoxes = [];
    allCheckedBoxesRegion.forEach((checkbox) => {
        checkedRegionBoxes.push(checkbox.value);
        var x = JSON.stringify(checkedRegionBoxes);
        var y = x.replace(brackets, '');
        localStorage.setItem("regionSelected", y);
    });
    location.reload();
});
document.getElementById('selectcitybtn').addEventListener('click', function citySelectLoad(){
    checkBoxScan();
});
function checkBoxScan(){
    localStorage.clear("regionSelected");
    localStorage.clear("citySelected");
   /**********REGION*********/
    var allCheckedBoxesRegion = document.querySelectorAll('input[name="region"]:checked');
    let checkedRegionBoxes = [];
    allCheckedBoxesRegion.forEach((checkbox) => {
        checkedRegionBoxes.push(checkbox.value);
        var x = JSON.stringify(checkedRegionBoxes);
        var y = x.replace(brackets, '');
        localStorage.setItem("regionSelected", y);
    });
    /**********CITY*********/
    var allCheckedBoxesCity = document.querySelectorAll('input[name="city"]:checked');
    if (allCheckedBoxesCity.length > 0){
        let checkedCityBoxes = [];
        allCheckedBoxesCity.forEach((checkbox) => {
            checkedCityBoxes.push(checkbox.value);
            var x = JSON.stringify(checkedCityBoxes);
            var y = x.replace(brackets, '');
            localStorage.setItem("citySelected", y);
        });
    }
    location.reload();
}
/*************************INITIATE LOAD******************* */