/******************************* Index Search *************************************/
window.addEventListener('load', function(){
    indexNumberCount();
    cityOptionMain();
    localStorage.clear();
});

document.getElementById('indexsearchbutton').addEventListener('click', function(){
    regionCityCheck();
    rolePurposeCheck();
});
function indexNumberCount(){
    $.ajax(
        {
            url: './PHP/orgcount.php',
            dataType: 'text',
            method: 'POST',
            success: function(response){
                var response = JSON.parse(response);
                if(response[0] == 1){
                    if(response[1] > 999){
                        var numberCount = (response[1]/1000);
                        document.getElementById('numberofuppdragstagare').innerText = `${numberCount}`;
                        document.getElementById('thousandsspan1').style.display = "block";
                        document.getElementById('thousandsspan1').innerText = "K";
                    }
                    else{
                        document.getElementById('numberofuppdragstagare').innerText = `${response[1]}`;
                        document.getElementById('thousandsspan1').style.display = "none";
                    }
                }
                else{
                    var numberCount = 0;
                    document.getElementById('numberofuppdragstagare').innerText = `${numberCount}`;
                    document.getElementById('thousandsspan1').style.display = "none";
                }

            },
        }
    );
}

function regionCityCheck(){
    var regionSelected = document.getElementById('mainRegionSelect').value;
    var citySelected = document.getElementById('defualtCitySelect').value;
    localStorage.setItem("regionSelected", `${regionSelected}`);
    localStorage.setItem("citySelected", `${citySelected}`);
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
        var loggedinCookie = getCookie("a_user");
        if(loggedinCookie != null){
            var loggedinCookie = loggedinCookie.split(',');
            if(loggedinCookie[1] == 1){
                window.location.href= "searchpage.html";
            }
            else if(loggedinCookie[1] == 2 || loggedinCookie[1] == 3){
                window.location.href= "searchpage.html";
            }
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
document.getElementById('mainRegionSelect').onchange = function(){
    cityOptionMain();
};
function cityOptionMain(){
    clearCityOptions();
    var regionSelected = document.getElementById('mainRegionSelect').value;
    var regionSelected = regionSelected.replace(/ /g, "");
    var array = window[`${regionSelected}CityArray`];
    generateCityOptions(array);
}

function generateCityOptions(array){
    var cityOptions = document.getElementById('defualtCitySelect');
    for(i = 0; i < array.length; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', array[i]);
        $('#disabledselect').remove();
        cityOptions.appendChild(option);
        option.innerText = `${array[i]}`;
    };
}
function clearCityOptions(){
    $('#defualtCitySelect').find('option').remove();
}
/***************************Dynamic Search City************************************/
/* ARCHAIC CODE
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
*/
/***************************Dynamic Search City************************************/