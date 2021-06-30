var helaSverige = document.getElementById('helasverigecheckbox');
var blekinge = document.getElementById('blekingecheckbox');
var citySelected = localStorage.getItem('citySelected');
var region = localStorage.getItem("regionSelected");

var cityButton = document.getElementById('location-city-button');
var backToRegionBtn = document.getElementById('backtoregionselect');

/* OPEN REGION WINDOW */
document.getElementById('searchpage-regioncity-select-wrapper').onclick = function locationSelectButton(){
    var x = document.getElementsByClassName('regioncheckbox');
    var checkedboxes = 0;
    for(i = 0; i < x.length; i++){
        if (x[i].checked) {
            if(helaSverige.checked = true && region == "Hela Sverige"){
                document.getElementById('blekingecheckbox').checked = false;
                document.getElementById('dalarnacheckbox').checked = false;
                document.getElementById('gävleborgcheckbox').checked = false;
                document.getElementById('gotlandcheckbox').checked = false;
                document.getElementById('hallandcheckbox').checked = false;
                document.getElementById('jämtlandcheckbox').checked = false;
                document.getElementById('jönköpingcheckbox').checked = false;
                document.getElementById('kalmarcheckbox').checked = false;
                document.getElementById('kronobergcheckbox').checked = false;
                document.getElementById('norrbottencheckbox').checked = false;
                document.getElementById('örebrocheckbox').checked = false;
                document.getElementById('östergötlandcheckbox').checked = false;
                document.getElementById('skånecheckbox').checked = false;
                document.getElementById('sörmlandcheckbox').checked = false;
                document.getElementById('stockholmcheckbox').checked = false;
                document.getElementById('uppsalacheckbox').checked = false;
                document.getElementById('värmlandcheckbox').checked = false;
                document.getElementById('västerbottencheckbox').checked = false;
                document.getElementById('västernorrlandcheckbox').checked = false;
                document.getElementById('västmanlandcheckbox').checked = false;
                document.getElementById('västragötalandcheckbox').checked = false;
                document.getElementById('location-initiate-button').style.display = "block";
                document.getElementById('location-city-button').style.display = "none";
            }
            else if(checkedboxes > 1 || region == Array){
                document.getElementById('helasverigecheckbox').checked = false;
                document.getElementById('location-initiate-button').style.display = "block";
                document.getElementById('location-city-button').style.display = "none";
            }
            else if(checkedboxes = 1 && helaSverige.checked == false){
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
                document.getElementById('blekingecheckbox').checked = false;
                document.getElementById('dalarnacheckbox').checked = false;
                document.getElementById('gävleborgcheckbox').checked = false;
                document.getElementById('gotlandcheckbox').checked = false;
                document.getElementById('hallandcheckbox').checked = false;
                document.getElementById('jämtlandcheckbox').checked = false;
                document.getElementById('jönköpingcheckbox').checked = false;
                document.getElementById('kalmarcheckbox').checked = false;
                document.getElementById('kronobergcheckbox').checked = false;
                document.getElementById('norrbottencheckbox').checked = false;
                document.getElementById('örebrocheckbox').checked = false;
                document.getElementById('östergötlandcheckbox').checked = false;
                document.getElementById('skånecheckbox').checked = false;
                document.getElementById('sörmlandcheckbox').checked = false;
                document.getElementById('stockholmcheckbox').checked = false;
                document.getElementById('uppsalacheckbox').checked = false;
                document.getElementById('värmlandcheckbox').checked = false;
                document.getElementById('västerbottencheckbox').checked = false;
                document.getElementById('västernorrlandcheckbox').checked = false;
                document.getElementById('västmanlandcheckbox').checked = false;
                document.getElementById('västragötalandcheckbox').checked = false;
                document.getElementById('location-initiate-button').style.display = "block";
                document.getElementById('location-city-button').style.display = "none";
            }
            else{}
        }
    }
};
document.getElementById('location-initiate-button').addEventListener('click', function(){
    var allCheckedBoxes = document.querySelectorAll('input[name="region"]:checked');
    let checkedRegionBoxes = [];
    allCheckedBoxes.forEach((checkbox) => {
        checkedRegionBoxes.push(checkbox.value);
        console.log(checkedRegionBoxes);
        localStorage.setItem("regionSelected", `${checkedRegionBoxes}`);
    });
    location.reload();
});


/*****************************CITY-WINDOW SCRIPT*************************** */
cityButton.addEventListener('click', function cityDisplayControl(){
    clearCityList();
    if(document.getElementById('blekingecheckbox').checked === true){
    }
    else if(document.getElementById('dalarnacheckbox').checked === true){
        
    }
    else if(document.getElementById('gävleborgcheckbox').checked === true){
        
    }
    else if(document.getElementById('gotlandcheckbox').checked === true){
        
    }
    else if(document.getElementById('hallandcheckbox').checked === true){
        
    }
    else if(document.getElementById('jämtlandcheckbox').checked === true){
        
    }
    else if(document.getElementById('jönköpingcheckbox').checked === true){
        
    }
    else if(document.getElementById('kalmarcheckbox').checked === true){
        
    }
    else if(document.getElementById('kronobergcheckbox').checked === true){
        
    }
    else if(document.getElementById('norrbottencheckbox').checked === true){
        
    }
    else if(document.getElementById('örebrocheckbox').checked === true){
        
    }
    else if(document.getElementById('östergötlandcheckbox').checked === true){
        
    }
    else if(document.getElementById('skånecheckbox').checked === true){
        
    }
    else if(document.getElementById('sörmlandcheckbox').checked === true){
        
    }
    else if(document.getElementById('stockholmcheckbox').checked === true){
        document.getElementById('locationstockholm').style.display = "flex";
    }
    else if(document.getElementById('uppsalacheckbox').checked === true){
        
    }
    else if(document.getElementById('värmlandcheckbox').checked === true){
        
    }
    else if(document.getElementById('västerbottencheckbox').checked === true){
        
    }
    else if(document.getElementById('västernorrlandcheckbox').checked === true){
        
    }
    else if(document.getElementById('västmanlandcheckbox').checked === true){
        
    }
    else if(document.getElementById('västragötalandcheckbox').checked === true){
        
    }
    else if(region = null || region == Array){
        var cityOptionForRegions = document.getElementsByClassName('locationcityoptions');
        for (i = 0; i < cityOptionForRegions.length; i++) {
            cityOptionForRegions[i].style.display = "none";
        }
    }
    document.getElementById('locationselectwindow-city').style.width = "300px";
});
backToRegionBtn.addEventListener('click', function(){
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
document.getElementById('selectcitybtn').addEventListener('click', function citySelectLoad(){

});



/*
document.getElementById('searchregion-searchpage').onchange = function(){
    var regionSelected = document.getElementById('searchregion-searchpage').value;
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

    if(regionSelected === 'Hela Sverige'){
        localStorage.setItem("regionSelected", "Hela Sverige");
        location.reload();
    }
    else if(regionSelected === 'Blekinge'){
        defaultCitySelection.style.display = "none";
        blekingeSelection.style.display = "block";
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
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
    else if(regionSelected === 'Dalarna'){
        defaultCitySelection.style.display = "none";
        blekingeSelection.style.display = "none";
        dalarnaSelection.style.display = "block";
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
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
    else if(regionSelected === 'Gotland'){
        defaultCitySelection.style.display = "none";
        blekingeSelection.style.display = "none";
        dalarnaSelection.style.display = "none";
        gotlandSelection.style.display = "block";
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
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
    else if(regionSelected === 'Gävleborg'){
        defaultCitySelection.style.display = "none";
        blekingeSelection.style.display = "none";
        dalarnaSelection.style.display = "none";
        gotlandSelection.style.display = "none";
        gävleborgSelection.style.display = "block";
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
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none"; 
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
    else if(regionSelected === 'Halland'){
        defaultCitySelection.style.display = "none";
        blekingeSelection.style.display = "none";
        dalarnaSelection.style.display = "none";
        gotlandSelection.style.display = "none";
        gävleborgSelection.style.display = "none";
        hallandSelection.style.display = "block";
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
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
    else if(regionSelected === 'Jämtland'){
        defaultCitySelection.style.display = "none";
        blekingeSelection.style.display = "none";
        dalarnaSelection.style.display = "none";
        gotlandSelection.style.display = "none";
        gävleborgSelection.style.display = "none";
        hallandSelection.style.display = "none";
        jämtlandSelection.style.display = "block";
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
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
    else if(regionSelected === 'Jönköping'){
        defaultCitySelection.style.display = "none";
        blekingeSelection.style.display = "none";
        dalarnaSelection.style.display = "none";
        gotlandSelection.style.display = "none";
        gävleborgSelection.style.display = "none";
        hallandSelection.style.display = "none";
        jämtlandSelection.style.display = "none";
        jönköpingSelection.style.display = "block";
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
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
    else if(regionSelected === 'Kalmar'){
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
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
    else if(regionSelected === 'Kronoberg'){
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
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
    else if(regionSelected === 'Norrbotten'){
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
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
    else if(regionSelected === 'Skåne'){
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
        skåneSelection.style.display = "block";
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
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
    else if(regionSelected === 'Stockholm'){
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
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
    else if(regionSelected === 'Sörmland'){
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
        södermanlandSelection.style.display = "block";
        uppsalaSelection.style.display = "none";
        värmlandSelection.style.display = "none";
        västerbottenSelection.style.display = "none";
        västernorrlandSelection.style.display = "none";
        västmanlandSelection.style.display = "none";
        västraGötalandSelection.style.display = "none";
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
    else if(regionSelected === 'Uppsala'){
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
        uppsalaSelection.style.display = "block";
        värmlandSelection.style.display = "none";
        västerbottenSelection.style.display = "none";
        västernorrlandSelection.style.display = "none";
        västmanlandSelection.style.display = "none";
        västraGötalandSelection.style.display = "none";
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
    else if(regionSelected === 'Värmland'){
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
        värmlandSelection.style.display = "block";
        västerbottenSelection.style.display = "none";
        västernorrlandSelection.style.display = "none";
        västmanlandSelection.style.display = "none";
        västraGötalandSelection.style.display = "none";
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
    else if(regionSelected === 'Västerbotten'){
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
        västerbottenSelection.style.display = "block";
        västernorrlandSelection.style.display = "none";
        västmanlandSelection.style.display = "none";
        västraGötalandSelection.style.display = "none";
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
    else if(regionSelected === 'Västernorrland'){
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
        västernorrlandSelection.style.display = "block";
        västmanlandSelection.style.display = "none";
        västraGötalandSelection.style.display = "none";
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
    else if(regionSelected === 'Västmanland'){
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
        västmanlandSelection.style.display = "block";
        västraGötalandSelection.style.display = "none";
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
    else if(regionSelected === 'Västra Götaland'){
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
        västraGötalandSelection.style.display = "block";
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "none";
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
    else if(regionSelected === 'Örebro'){
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
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
    else if(regionSelected === 'Östergötland'){
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
        örebroSelection.style.display = "none";
        östergötlandSelection.style.display = "block";
        localStorage.setItem("regionSelected", `${regionSelected}`);
        location.reload();
    }
}
*/