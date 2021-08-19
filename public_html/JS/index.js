/******************************* Index Search *************************************/
window.addEventListener('load', function(){
    languageControl();
    loggedInControl();
    cookieConsentLoad();
    indexNumberCount();
    cityOptionMain();
    localStorage.clear();
    document.getElementById('index-subscription-checkbox').checked = false;
});

document.getElementById('indexsearchbutton').addEventListener('click', function(){
    regionCityCheck();
    rolePurposeCheck();
});
function indexNumberCount(){
    $.ajax(
        {
            url: './PHP/indexcount.php',
            dataType: 'text',
            method: 'GET',
            data: {
                requestid: 1,
            },
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
    $.ajax(
        {
            url: './PHP/indexcount.php',
            dataType: 'text',
            method: 'GET',
            data: {
                requestid: 2,
            },
            success: function(response){
                var response = JSON.parse(response);
                if(response[0] == 1){
                    if(response[1] > 999){
                        var numberCount = (response[1]/1000);
                        document.getElementById('numberofarticles').innerText = `${numberCount}`;
                        document.getElementById('thousandsspan2').style.display = "block";
                        document.getElementById('thousandsspan2').innerText = "K";
                    }
                    else{
                        document.getElementById('numberofarticles').innerText = `${response[1]}`;
                        document.getElementById('thousandsspan2').style.display = "none";
                    }
                }
                else{
                    var numberCount = 0;
                    document.getElementById('numberofarticles').innerText = `${numberCount}`;
                    document.getElementById('thousandsspan2').style.display = "none";
                }

            },
        }
    );
    $.ajax(
        {
            url: './PHP/indexcount.php',
            dataType: 'text',
            method: 'GET',
            data: {
                requestid: 3,
            },
            success: function(response){
                var response = JSON.parse(response);
                if(response[0] == 1){
                    if(response[1] > 999){
                        var numberCount = (response[1]/1000);
                        document.getElementById('numberoffinisheduppdrag').innerText = `${numberCount}`;
                        document.getElementById('thousandsspan3').style.display = "block";
                        document.getElementById('thousandsspan3').innerText = "K";
                    }
                    else{
                        document.getElementById('numberoffinisheduppdrag').innerText = `${response[1]}`;
                        document.getElementById('thousandsspan3').style.display = "none";
                    }
                }
                else{
                    document.getElementById('numberoffinisheduppdrag').innerText = `${0}`;
                    document.getElementById('thousandsspan3').style.display = "none";
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
document.getElementById('index-subscription-checkbox').onchange = function indexButtonSlider(){
    var checkbox = document.getElementById('index-subscription-checkbox');
    if(checkbox.checked == true){
        var priceBox = document.getElementsByClassName('subscription-price');
        console.log(priceBox);
        for(i=0; i<priceBox.length; i++){
            priceBox[i].innerText = "1200 SEK";
        }
    }
    else{
        var priceBox = document.getElementsByClassName('subscription-price');
        console.log(priceBox);
        for(i=0; i<priceBox.length; i++){
            priceBox[i].innerText = "100 SEK";
        }
    }
}