var helaSverige = document.getElementById('helasverigecheckbox');
var blekinge = document.getElementById('blekingecheckbox');
var citySelected = localStorage.getItem('citySelected');
var region = localStorage.getItem("regionSelected");

var cityButton = document.getElementById('location-city-button');
var backToRegionBtn = document.getElementById('backtoregionselect');
var brackets = /\[|\]/g;

/* OPEN REGION WINDOW */
document.getElementById('searchpage-regioncity-select-wrapper').onclick = function locationSelectButton(){
    clearRegionsV2();
    var x = document.getElementsByClassName('regioncheckbox');
    var region = localStorage.getItem("regionSelected");
    var checkedboxes = 0;
    for(i = 0; i < x.length; i++){
        if (x[i].checked) {
            if(region !== null && region !== undefined){
                if(region.includes(',')){
                    regionArrayPopulate(region)
                }
                else{
                    var region = localStorage.getItem("regionSelected");
                    var region = region.replace(/"/g, "")
                    if(helaSverige.checked = true && region == "Hela Sverige"){
                        document.getElementById('Blekinge').checked = false;
                        document.getElementById('Dalarna').checked = false;
                        document.getElementById('Gävleborg').checked = false;
                        document.getElementById('Gotland').checked = false;
                        document.getElementById('Halland').checked = false;
                        document.getElementById('Jämtland').checked = false;
                        document.getElementById('Jönköping').checked = false;
                        document.getElementById('Kalmar').checked = false;
                        document.getElementById('Kronoberg').checked = false;
                        document.getElementById('Norrbotten').checked = false;
                        document.getElementById('Örebro').checked = false;
                        document.getElementById('Östergötland').checked = false;
                        document.getElementById('Skåne').checked = false;
                        document.getElementById('Sörmland').checked = false;
                        document.getElementById('Stockholm').checked = false;
                        document.getElementById('Uppsala').checked = false;
                        document.getElementById('Värmland').checked = false;
                        document.getElementById('Västerbotten').checked = false;
                        document.getElementById('Västernorrland').checked = false;
                        document.getElementById('Västmanland').checked = false;
                        document.getElementById('Västra Götaland').checked = false;
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
    document.getElementById('locationselectwindow').style.width = "300px";
    document.getElementById('location-arrow-down').style.display = "none";
    document.getElementById('location-arrow-up').style.display = "block";
};
/* CLOSE REGION WINDOW */
document.getElementById('closelocationselectwindow').addEventListener('click', function(){
    document.getElementById('locationselectwindow').style.width = "0px";
    document.getElementById('location-arrow-down').style.display = "block";
    document.getElementById('location-arrow-up').style.display = "none";
});
/* CLOSE REGION WINDOW */
$('input[name=region]').change(function checkBoxControl(){
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
                helaSverige.checked = true;
                document.getElementById('Blekinge').checked = false;
                document.getElementById('Dalarna').checked = false;
                document.getElementById('Gävleborg').checked = false;
                document.getElementById('Gotland').checked = false;
                document.getElementById('Halland').checked = false;
                document.getElementById('Jämtland').checked = false;
                document.getElementById('Jönköping').checked = false;
                document.getElementById('Kalmar').checked = false;
                document.getElementById('Kronoberg').checked = false;
                document.getElementById('Norrbotten').checked = false;
                document.getElementById('Örebro').checked = false;
                document.getElementById('Östergötland').checked = false;
                document.getElementById('Skåne').checked = false;
                document.getElementById('Sörmland').checked = false;
                document.getElementById('Stockholm').checked = false;
                document.getElementById('Uppsala').checked = false;
                document.getElementById('Värmland').checked = false;
                document.getElementById('Västerbotten').checked = false;
                document.getElementById('Västernorrland').checked = false;
                document.getElementById('Västmanland').checked = false;
                document.getElementById('Västra Götaland').checked = false;
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
        cityWindowScript('blekinge');
    }
    else if(document.getElementById('Dalarna').checked === true){
        cityWindowScript('dalarna');
    }
    else if(document.getElementById('Gävleborg').checked === true){
        cityWindowScript('gävleborg');
    }
    else if(document.getElementById('Gotland').checked === true){
        cityWindowScript('gotland');
    }
    else if(document.getElementById('Halland').checked === true){
        cityWindowScript('halland');
    }
    else if(document.getElementById('Jämtland').checked === true){
        cityWindowScript('jämtland');
    }
    else if(document.getElementById('Jönköping').checked === true){
        cityWindowScript('jönköping');
    }
    else if(document.getElementById('Kalmar').checked === true){
        cityWindowScript('kalmar');
    }
    else if(document.getElementById('Kronoberg').checked === true){
        cityWindowScript('kronoberg');
    }
    else if(document.getElementById('Norrbotten').checked === true){
        cityWindowScript('norrbotten');
    }
    else if(document.getElementById('Örebro').checked === true){
        cityWindowScript('örebro');
    }
    else if(document.getElementById('Östergötland').checked === true){
        cityWindowScript('östergötland');
    }
    else if(document.getElementById('Skåne').checked === true){
        cityWindowScript('skåne');
    }
    else if(document.getElementById('Sörmland').checked === true){
        cityWindowScript('sörmland');
    }
    else if(document.getElementById('Stockholm').checked === true){
        cityWindowScript('stockholm');
    }
    else if(document.getElementById('Uppsala').checked === true){
        cityWindowScript('uppsala');
    }
    else if(document.getElementById('Värmland').checked === true){
        cityWindowScript('värmland');
    }
    else if(document.getElementById('Västerbotten').checked === true){
        cityWindowScript('västerbotten');
    }
    else if(document.getElementById('Västernorrland').checked === true){
        cityWindowScript('västernorrland');
    }
    else if(document.getElementById('Västmanland').checked === true){
        cityWindowScript('västmanland');
    }
    else if(document.getElementById('Västra Götaland').checked === true){
        cityWindowScript('västra götaland');
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
function clearCitySelection(){
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
}
function cityWindowScript(regionValue){
    clearCityList();
    var citySelected = localStorage.getItem("citySelected");
    var regionValueChechbox = `${regionValue}checkbox`;
    if(regionValue === 'västra götaland'){
        //var regionValueNoSpace = regionValue.replace(/ /g, "");
        document.getElementById('locationvästragötaland').style.display = "flex";
        document.getElementById('regioncityheader').innerText = "Västra Götaland";
        if(citySelected === null || citySelected === undefined){
            clearCitySelection();
            document.getElementById('allaområdencheckbox').checked = true;
        }
        else if(citySelected.includes(',') === false){
            console.log(citySelected);
        }
        else if(citySelected.includes(',') === true){
            alert("array is detected!");
            console.log(citySelected);
        }
    }
    else if(regionValue !== 'västra götaland'){
        var regionToUpperCase = regionValue.charAt(0).toUpperCase() + regionValue.slice(1);
        if(document.getElementById(regionToUpperCase).checked === true){
            document.getElementById(`location${regionValue}`).style.display = "flex";
            document.getElementById('regioncityheader').innerText = `${regionToUpperCase}`;
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
            else{
                var citySelected = citySelected.replace(/"/g, "");
                document.getElementById(`${citySelected}`).checked = true;
            }
        }
    }
    else if(regionValue.includes(',')){
        var cityOptionForRegions = document.getElementsByClassName('locationcityoptions');
        for (i = 0; i < cityOptionForRegions.length; i++) {
            cityOptionForRegions[i].style.display = "none";
        }
    }
    document.getElementById('locationselectwindow-city').style.width = "300px";
}
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
function clearCity2(){
    var x = document.getElementsByClassName('citycheckbox');
    var checkedboxes = 0;
    for(i = 0; i < x.length; i++){
        if (x[i].checked) {
            checkedboxes++;
            if (checkedboxes > 1){
                x[i].checked = false;
            }
            else{}
        }
    }
}