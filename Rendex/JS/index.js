/*
var optionsÖstergötland = [Boxholm, Finspång, Kinda, Linköping, Mjölby, Motala, Norrköping, Söderköping, Vadstena, Valdemarsvik, Ydre, Åtvidaberg, Ödeshög];
*/
/******************************* Index Search *************************************/
function regionCityCheck(){
    var regionSelected = document.getElementById('mainRegionSelect').value;
    var defaultCitySelection = document.getElementById('defualtCitySelect');
    var citySelected = defaultCitySelection;

    if(regionSelected === 'Hela Sverige'){
        var citySelected = document.getElementById('defaltCitySelect');
    }
    else if(regionSelected === 'Blekinge'){
        var citySelected = document.getElementById('blekingeCitySelect').value;
    }
    else if(regionSelected === 'Dalarna'){
        var citySelected = document.getElementById('dalarnaCitySelect').value;
    }
    else if(regionSelected === 'Gotland'){
        var citySelected = document.getElementById('gotlandCitySelect').value;
    }
    else if(regionSelected === 'Gävleborg'){
        var citySelected = document.getElementById('gävleborgCitySelect').value;
    }
    else if(regionSelected === 'Halland'){
        var citySelected = document.getElementById('hallandCitySelect').value;
    }
    else if(regionSelected === 'Jämtland'){
        var citySelected = document.getElementById('jämtlandCitySelect').value;
    }
    else if(regionSelected === 'Jönköping'){
        var citySelected = document.getElementById('jönköpingCitySelect').value;
    }
    else if(regionSelected === 'Kalmar'){
        var citySelected = document.getElementById('kalmarCitySelect').value;
    }
    else if(regionSelected === 'Kronoberg'){
        var citySelected = document.getElementById('kronobergCitySelect').value;
    }
    else if(regionSelected === 'Norrbotten'){
        var citySelected = document.getElementById('norrbottenCitySelect').value;
    }
    else if(regionSelected === 'Skåne'){
        var citySelected = document.getElementById('skåneCitySelect').value;
    }
    else if(regionSelected === 'Stockholm'){
        var citySelected = document.getElementById('stockholmCitySelect').value;
    }
    else if(regionSelected === 'Södermanland'){
        var citySelected = document.getElementById('södermanlandCitySelect').value;
    }
    else if(regionSelected === 'Uppsala'){
        var citySelected = document.getElementById('uppsalaCitySelect').value;
    }
    else if(regionSelected === 'Värmland'){
        var citySelected = document.getElementById('värmlandCitySelect').value;
    }
    else if(regionSelected === 'Västerbotten'){
        var citySelected = document.getElementById('västerbottenCitySelect').value;
    }
    else if(regionSelected === 'Västernorrland'){
        var citySelected = document.getElementById('västernorrlandCitySelect').value;
    }
    else if(regionSelected === 'Västmanland'){
        var citySelected = document.getElementById('västmanlandCitySelect').value;
    }
    else if(regionSelected === 'Västra Götaland'){
        var citySelected = document.getElementById('västraGötalandCitySelect').value;
    }
    else if(regionSelected === 'Örebro'){
        var citySelected = document.getElementById('örebroCitySelect').value;
    }
    else if(regionSelected === 'Östergötland'){
        var citySelected = document.getElementById('östergötlandCitySelect').value;
    }

    console.log(regionSelected, citySelected);
    localStorage.setItem("regionSelected", regionSelected.value);
    localStorage.setItem("citySelected", citySelected.value);
    return (regionSelected, citySelected);
}
function rolePurposeCheck(){
    var roleSelected = document.getElementById('mainRoleSelect');
    var purposeSelected = document.getElementById('mainPurposeSelect');
    var alertMessagePurpose = document.getElementById('error-message-purpose');
    var alertMessageRole = document.getElementById('error-message-role');
    var arbeteHeader = document.getElementById('arbete-header');

    console.log(roleSelected.value, purposeSelected.value);

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
    else {window.location.href= "searchpage.html"};
    localStorage.setItem("roleSelected", roleSelected);
    localStorage.setItem("purposeSelected", purposeSelected);
    return (roleSelected.value, purposeSelected.value)
}
/***************************Dynamic Search City************************************/
document.getElementById('mainRegionSelect').onchange = function(){
    var regionSelected = document.getElementById('mainRegionSelect').value;
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
        defaultCitySelection.style.display = "block";
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
        östergötlandSelection.style.display = "none";
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
    }
    else if(regionSelected === 'Södermanland'){
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
    }
}
window.onload = function qualitControlCheck(){
    var regionSelected = document.getElementById('mainRegionSelect').value;
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
        defaultCitySelection.style.display = "block";
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
        östergötlandSelection.style.display = "none";
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
    }
    else if(regionSelected === 'Södermanland'){
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
    }
}
/***************************Dynamic Search City************************************/