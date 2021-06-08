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
var formWrapper = document.getElementById('form-wrapper');
var personnummer = false;
var aktieBolag = false;
var enskildFirma = false;
var arrowBack = document.getElementById('name-set');
var arrowBackAddInfo = document.getElementById('addPersonnummer');
var ariaLabelFormWrapper = formWrapper.ariaLabel;

/****************************PERSONNUMMER/ORGNUMMER***************************** */
document.getElementById('insurancenumber').onblur = function insuranceLengthCheck(){
    var a = document.getElementById('insurancenumber');
    var b = a.value;
    var c = document.getElementById('wronginsurancenumber');
    var i;
    var insuranceNumberArray = $.getJSON("https://skatteverket.entryscape.net/rowstore/dataset/b4de7df7-63c0-4e7e-bb59-1f156a591763/json", function skatteverketApi(){
        var x = insuranceNumberArray.responseJSON.results;
        var y = x.map(value => value.testpersonnummer);
        console.log(y);
        for(i = 0; i < y.length; i++){
            if(b === y[i]){
                personnummer = true;
                aktieBolag = false;
                enskildFirma = true;
                a.style.borderColor = "black";
                c.style.display = "none";
                console.log(b, personnummer)
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
        }
    });
};
document.getElementById('next-btn').onclick = function nextSlide(){
    var a = document.getElementById('insurancenumber');
    var b = a.value;
    var z = $.getJSON("https://skatteverket.entryscape.net/rowstore/dataset/b4de7df7-63c0-4e7e-bb59-1f156a591763/json", function skatteverketApi(){
        var x = z.responseJSON.results;
        var y = x.map(value => value.testpersonnummer);
        for(i = 0; i < y.length; i++){
            if(b === y[i] && ariaLabelFormWrapper === "slideOne"){
                arrowBackAddInfo.innerHTML = `${b}`
                arrowBack.style.display = "flex";
                registrationTrackerOne.style.color = "#888";
                registrationTrackerTwo.style.color = "black";
                registrationTrackerThree.style.color = "#888";
                insuranceWrapper.style.display = "none";
                fullNameInputWrapper.style.display = "flex";
                formWrapper.setAttribute('aria-label', "slideTwo");
            }
            else if(insuranceWrapper.style.display = "none" && ariaLabelFormWrapper === "slideTwo"){
                registrationTrackerOne.style.color = "#afafaf";
                registrationTrackerTwo.style.color = "#888";
                registrationTrackerThree.style.color = "black";
                insuranceWrapper.style.display = "none";
                fullNameInputWrapper.style.display = "none";
                accountRegionSelect.style.display = "flex";
                formWrapper.setAttribute('aria-label', "slideThree");
            }
        }
    });
};

document.getElementById('arrow-back').onclick = function backClick(){
    if(ariaLabelFormWrapper = "slideTwo"){
        arrowBackAddInfo.innerHTML = "";
        arrowBack.style.display = "none";
        registrationTrackerOne.style.color = "black";
        registrationTrackerTwo.style.color = "#888";
        registrationTrackerThree.style.color = "#afafaf";
        insuranceWrapper.style.display = "flex";
        fullNameInputWrapper.style.display = "none";
        formWrapper.setAttribute('aria-label', "slideOne");
    }
    else if(ariaLabelFormWrapper === "slideThree"){
        alert("test slideThree triggered")

    }
    else{
        alert("test");
    }
};
/****************************PERSONNUMMER/ORGNUMMER***************************** */
document.getElementById('firstnameinput').oninput = function(){
    document.getElementById('firstnameinput').onblur = function(){
        var f = document.getElementById('firstnameinput');
        var z = f.value;
        if(z.length < 2){
            f.style.borderColor = "red";
        }
        else{
            f.style.borderColor = "black"
        }
    }
}
document.getElementById('surnameinput').oninput = function(){
    document.getElementById('surnameinput').onblur = function(){
        var s = document.getElementById('surnameinput').value;
        return s;
    } 
}
document.getElementById('purposeselect').onchange = function purposeSelect(){
    var p = document.getElementById('purposeselect').value;
    return p;
}
document.getElementById('regioninput').onchange = function regionSelect(){
    var r = document.getElementById('regioninput').value;
    return r;
}
/****************************Phone number ***********************************/
document.getElementById('phonenumberinput').onblur = function(){
    var a = document.getElementById('phonenumberinput');
    var b = a.value;
    var c = document.getElementById('wrongphonenumber');

    if(b.length > 0 && b.length < '10'){
        a.style.borderColor = "red";
        c.style.display = "block"
    }
    else if (b.length > 10){
        a.style.borderColor = "red";
        c.style.display = "block"
    }
    else{
        a.style.borderColor = "black";
        c.style.display = "none"
    }
};
document.getElementById('phonenumberinput').oninput = function(){
    var x = document.getElementById('phonenumberinput');
    var c = document.getElementById('wrongphonenumber');

    if(isNaN(x.value)){
        x.style.borderColor = "red";
        c.style.display = "block"
    }
    else{
        x.style.borderColor = "black";
        c.style.display = "none"
    }
}
/****************************Phone number ***********************************/
document.getElementById('emailinputrepeat').onblur = function(){
    var a = document.getElementById('emailinputrepeat');
    var b = document.getElementById('emailinput');
    var c = document.getElementById('wrongemailrepeat');
    var d = a.value

    if(d.length < 1){
        a.style.borderColor = "black";
        c.style.display = "none"
    }
    else if(a.value != b.value){
        a.style.borderColor = "red";
        c.style.display = "block"
    }
    else{
        a.style.borderColor = "black";
        c.style.display = "none"
        return d;
    }
}


