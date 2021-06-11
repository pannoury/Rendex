var insuranceWrapper = document.getElementById('insurance-wrapper');
var fullNameInputWrapper = document.getElementById('fullname-input-wrapper');
var accountRoleSelect = document.getElementById('account-role-select');
var accountRegionSelect = document.getElementById('account-region-select');
var accountEmail = document.getElementById('account-postalcode');
var accountEmailRepeat = document.getElementById('account-emailrepeat');
var accountPhoneNumber = document.getElementById('account-phonenumber');
var accountCheckboxDiv = document.getElementById('checkboxdiv');
var accountFinalCreateAccount = document.getElementById('finalcreateaccount');
var registrationTrackerOne = document.getElementById('tracker1');
var registrationTrackerTwo = document.getElementById('tracker2');
var registrationTrackerThree = document.getElementById('tracker3');
var personnummer = false;
var aktieBolag = false;
var enskildFirma = false;
var arrowBack = document.getElementById('name-set');
var arrowBackAddInfo = document.getElementById('addPersonnummer');
var formWrapper = document.getElementById('form-wrapper');
var classFormWrapper = formWrapper.className;
var pageNumber = 1;

/****************************PERSONNUMMER/ORGNUMMER***************************** */
window.onload = function createAccountReset(){
    localStorage.clear();
}

document.getElementById('insurancenumber').onblur = function insuranceLengthCheck(){
    var a = document.getElementById('insurancenumber');
    var b = a.value;
    var c = document.getElementById('wronginsurancenumber');
    localStorage.clear("personnummer");
    sessionStorage.clear("personnummer");
    if(personnummer = true){
        a.style.borderColor = "black";
        c.style.display = "none";
        console.log(b, personnummer);
        localStorage.setItem('personnummer', `${b}`)
        return (b, personnummer);
    }
    else if(b.length === 10 && !isNaN(b)){
        personnummer = false;
        aktiebolag = true;
        enskildFirma = false;
        a.style.borderColor = "black";
        c.style.display = "none";
        return (b, `aktiebolag ${aktiebolag}`);
    }
    else if(b.length === 0){
        a.style.borderColor = "black";
        c.style.display = "none";
    }
    else{
        a.style.borderColor = "red";
        c.style.display = "block";
        personnummer = false;
        aktieBolag = false;
        enskildFirma = false;
    }
};
document.getElementById('next-btn').onclick = function nextSlide(){
    var a = document.getElementById('insurancenumber');
    var b = a.value;
    personnummerCheck(b, personnummer);
    if(personnummer = true && pageNumber == 1){
        arrowBackAddInfo.innerHTML = `${b}`;
        arrowBack.style.display = "flex";
        registrationTrackerOne.style.color = "#afafaf";
        registrationTrackerTwo.style.color = "#616161";
        registrationTrackerThree.style.color = "#afafaf";
        insuranceWrapper.style.display = "none";
        fullNameInputWrapper.style.display = "flex";
        localStorage.setItem("pageNumber", "2");
    }
    else if(pageNumber = 2){

    }
};

document.getElementById('arrow-back').onclick = function backClick(){
    var a = document.getElementById('insurancenumber');
    var pageNumber = localStorage.getItem("pageNumber");
    if(pageNumber = 2){
        a.value = "";
        arrowBackAddInfo.innerHTML = '';
        arrowBack.style.display = "none";
        registrationTrackerOne.style.color = "#616161";
        registrationTrackerTwo.style.color = "#afafaf";
        registrationTrackerThree.style.color = "#afafaf";
        insuranceWrapper.style.display = "flex";
        fullNameInputWrapper.style.display = "none";
        localStorage.clear();
    }
    else if(pageNumber = 3){
        alert("test slideThree triggered")

    }
    else{
        alert("test");
    }
};

function personnummerCheck (b, personnummer){ // Probem identified //
    var a = document.getElementById('insurancenumber');
    var b = a.value;
    var z = $.getJSON("https://skatteverket.entryscape.net/rowstore/dataset/b4de7df7-63c0-4e7e-bb59-1f156a591763/json", function skatteverketApi(){
        var x = z.responseJSON.results;
        var y = x.map(value => value.testpersonnummer);
        console.log(y);
        for(i = 0; i < y.length; i++){
            if(b === y[i]){
                personnummer = true;
                localStorage.setItem("b", `${b}`);
                localStorage.setItem("personnummer", `${personnummer}`);
                alert("true");
                return (b, personnummer);
            }
            else{
                personnummer = false;
                localStorage.setItem("personnummer", `${this.personnummer}`);
                alert("false");
                return (personnummer);
                
            }
        }
    });
}