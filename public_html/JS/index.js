/******************************* Index Search *************************************/
document.getElementById('indexsearchbutton').addEventListener('click', function(){
    regionCityCheck();
    rolePurposeCheck();
});

function regionCityCheck(){
    var regionSelected = document.getElementById('mainRegionSelect').value;
    var citySelected = document.getElementById('defualtCitySelect').value;
    console.log(regionSelected, citySelected);
    localStorage.setItem("regionSelected", `${regionSelected}`);
    return (regionSelected, citySelected);
}
function rolePurposeCheck(){
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
    else if(roleSelected.value != null && purposeSelected.value !=null && roleSelected.value == "Uppdragstagare"){
        var loggedinCookie = getCookie("c_user");
        var typeofAccount = getCookie("typeofAccount");
        if(loggedinCookie != null && typeofAccount == "uppdragstagare"){

        }
        else{
            window.location.href= "login.html";
        }
    }
    else {
        window.location.href= "searchpage.html";
    }
    localStorage.setItem("roleSelected", `${roleSelected.value}`);
    localStorage.setItem("purposeSelected", `${purposeSelected.value}`);
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
}
/***************************Dynamic Search City************************************/