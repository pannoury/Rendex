var insuranceWrapper = document.getElementById('insurance-wrapper');
var fullNameInputWrapper = document.getElementById('fullname-input-wrapper');
var accountRoleSelect = document.getElementById('account-role-select');
var accountRegionSelect = document.getElementById('account-region-select');
var accountEmail = document.getElementById('account-emailrepeat');
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
let today = new Date();
var day = today.getDate();
var month = today.getMonth();
var hours = today.getHours();
var minutes = today.getMinutes();
var fullYear = today.getFullYear();

/****************************PERSONNUMMER/ORGNUMMER***************************** */
window.onload = function clear(){
    sessionStorage.clear();
    document.getElementById('insurancenumber').value = "";
    document.getElementById('firstnameinput').value = "";
    document.getElementById('surnameinput').value = "";

    document.getElementById('account-adress').style.display = "none";
    document.getElementById('account-password').style.display = "none";
    /* setInterval(clear, 600000) */
}
document.getElementById('insurancenumber').oninput = function insuranceLengthCheck(){
    var a = document.getElementById('insurancenumber');
    var b = a.value;
    var c = document.getElementById('wronginsurancenumber');
    var i;
    if(b.length === 10 && !isNaN(b) && b.substring(0,1) == 5){ //org nr check
        console.log(b.substring(0,1));
        personnummer = false;
        aktiebolag = true;
        enskildFirma = false;
        a.style.borderColor = "black";
        c.style.display = "none";
        return (b, `aktiebolag ${aktiebolag}`);
    }
    else if(b.length === 12 && !isNaN(b)){ //personnummer check
        var minimumage = fullYear - b.substring(0,4);
        if(b.substring(0,2) == 19 || b.substring(0,2) == 20 && 
        b.substring(0,4) !== fullYear && b.substring(0,4) < fullYear 
        && minimumage >= 18){
            if(b.substring(4,6) <= 12 && b.substring(4,6) >= 1){
                if(b.substring(6,8) <= 31 && b.substring(6,8) >= 1){
                    $.ajax(
                        {
                            url: './PHP/createaccount.php',
                            dataType: 'text',
                            method: 'GET',
                            data: {
                                requestid: 1,
                                personnummer: b,
                            },
                            success: function(response){
                                var query = JSON.parse(response);
                                if(query[1] == b){
                                    a.style.borderColor = "red";
                                    c.style.display = "block";
                                    personnummer = false;
                                    aktieBolag = false;
                                    enskildFirma = false;
                                    document.getElementById('wronginsurancenumber').innerText = "Ett konto med detta personnnummer existerar redan";
                                }
                                else{
                                    personnummer = true;
                                    a.style.borderColor = "black";
                                    c.style.display = "none";
                                    sessionStorage.setItem('personnummer', true);
                                    return (b, personnummer);
                                }
                            },
                        }
                    );
                }
            }
        }
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
    /*
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
                console.log(b, personnummer);
                sessionStorage.setItem('personnummer', true);
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
    */
};
document.getElementById('next-btn').onclick = function nextSlide(){
    var a = document.getElementById('insurancenumber');
    var b = a.value;
    var c = sessionStorage.getItem("slidePage");
    var d = sessionStorage.getItem('personnummer');
    var firstName = document.getElementById('firstnameinput').value;
    var lastName = document.getElementById('surnameinput').value;
    if(d = true && d != null && c == null || c == undefined){
        arrowBackAddInfo.innerHTML = `${b}`;
        arrowBack.style.display = "flex";
        registrationTrackerOne.style.color = "#afafaf";
        registrationTrackerTwo.style.color = "#616161";
        registrationTrackerThree.style.color = "#afafaf";
        insuranceWrapper.style.display = "none";
        fullNameInputWrapper.style.display = "flex";
        accountPhoneNumber.style.display = "flex";
        accountEmail.style.display = "flex";

        document.getElementById('emailinput').value = "";
        document.getElementById('phonenumberinput').value = "";

        sessionStorage.setItem("personnummer", `${a.value}`);
        sessionStorage.setItem("slidePage", 2);
        return ("slideTwo");
    }
    else if(c == 2 && c != null){
        var email = document.getElementById('emailinput');
        var emailInput = email.value;
        if(firstName !== null && isNaN(firstName) == true
            && lastName !== null && isNaN(lastName) == true
            && firstName.length >= 2 && lastName.length >= 2){
                if(email.value.length > 10 && email.value.includes('@')){
                    $.ajax(
                        {
                            url: './PHP/createaccount.php',
                            dataType: 'text',
                            method: 'GET',
                            data: {
                                requestid: 2,
                                username: emailInput,
                            },
                            success: function(response){
                                var senderQuery = JSON.parse(response);
                                console.log(senderQuery);
                                if(senderQuery[0] == 0 || senderQuery[0] == null){
                                    var phonenumber = document.getElementById('phonenumberinput');
                                    if(phonenumber.value.length <= 13){
                                        if(phonenumber.value.substring(0,2) == 08){
                                            if(phonenumber.value.length == 9){
                                                sessionStorage.setItem("firstName", `${firstName}`);
                                                sessionStorage.setItem("lastName", `${lastName}`);
                                                sessionStorage.setItem("slidePage", "3");
                                                registrationTrackerOne.style.color = "#afafaf";
                                                registrationTrackerTwo.style.color = "#afafaf";
                                                registrationTrackerThree.style.color = "#616161";
                                                insuranceWrapper.style.display = "none";
                                                fullNameInputWrapper.style.display = "none";
                                                accountPhoneNumber.style.display = "none";
                                                accountEmail.style.display = "none";
                                                document.getElementById('account-adress').style.display = "flex";
                                                document.getElementById('account-password').style.display = "flex";
                                                document.getElementById('password-input-wrapper').style.display = "flex";
                                                document.getElementById('password-input-wrapper').style.flexDirection = "row";
                                                document.getElementById('password-input-wrapper').style.justifyContent = "space-between";
                                                document.getElementById('password1').style.width = "45%";
                                                document.getElementById('password-repeat').style.width = "45%";
                                                document.getElementById('account-adress').style.flexDirection = "column";
                                                document.getElementById('account-password').style.flexDirection = "column";
                                                document.getElementById('streetadressinput').style.marginBottom = "10px";
                                                accountRegionSelect.style.display = "flex";
                                            }
                                            else{
                                                alert("Ange ett giltigt telefonnummer");
                                            }
                                        }
                                        else if(phonenumber.value.substring(0,1) == 0){
                                            if(phonenumber.value.length == 10){
                                                var phonenumber = phonenumber.value;
                                                var email = document.getElementById('emailinput');
                                                var email = email.value;
                                                sessionStorage.setItem("firstName", `${firstName}`);
                                                sessionStorage.setItem("lastName", `${lastName}`);
                                                sessionStorage.setItem("email", `${email}`);
                                                sessionStorage.setItem("phonenumber", `${phonenumber}`)
                                                sessionStorage.setItem("slidePage", "3");
                                                registrationTrackerOne.style.color = "#afafaf";
                                                registrationTrackerTwo.style.color = "#afafaf";
                                                registrationTrackerThree.style.color = "#616161";
                                                insuranceWrapper.style.display = "none";
                                                fullNameInputWrapper.style.display = "none";
                                                accountPhoneNumber.style.display = "none";
                                                accountEmail.style.display = "none";
                                                document.getElementById('account-adress').style.display = "flex";
                                                document.getElementById('account-adress').style.flexDirection = "column";
                                                document.getElementById('password-input-wrapper').style.display = "flex";
                                                document.getElementById('password-input-wrapper').style.flexDirection = "row";
                                                document.getElementById('password-input-wrapper').style.justifyContent = "space-between";
                                                document.getElementById('account-password').style.display = "flex";
                                                document.getElementById('password1').style.width = "45%";
                                                document.getElementById('password-repeat').style.width = "45%";
                                                document.getElementById('account-password').style.flexDirection = "column";
                                                document.getElementById('streetadressinput').style.marginBottom = "10px";
                                                accountRegionSelect.style.display = "flex";
                                            }
                                            else{
                                                alert("Ange ett giltigt mobilnummer");
                                            }
                                        }
                                        else if(phonenumber.value.substring(0,2) == 00){
                                            alert("Ange ett telefonnummer utan internationellt prefix");
                                        }
                                    }
                                }
                                else{
                                    alert("emailadress redan tagen!")
                                }
                            },
                        }
                    );
                }
        }
    }
    else if(c == 3 && c != null){
        var streetadress = document.getElementById('streetadressinput');
        var zipcode = document.getElementById('zipcodeinput');
        var region = document.getElementById('regioninput');
        if(streetadress.value != null && streetadress.value.length > 8 && zipcode.value.length == 5 && isNaN(zipcode.value) == false)

        sessionStorage.setItem("streetadress", `${streetadress.value}`);
        sessionStorage.setItem("zipcode", `${zipcode.value}`);
        sessionStorage.setItem("region", `${region.value}`);
    }
    else{
        console.log("else");
    }
};

document.getElementById('arrow-back').onclick = function backClick(){
    var a = document.getElementById('insurancenumber');
    var page = sessionStorage.getItem("slidePage");
    if(page == 2){
        a.value = "";
        arrowBackAddInfo.innerHTML = '';
        arrowBack.style.display = "none";
        registrationTrackerOne.style.color = "#616161";
        registrationTrackerTwo.style.color = "#afafaf";
        registrationTrackerThree.style.color = "#afafaf";
        insuranceWrapper.style.display = "flex";
        fullNameInputWrapper.style.display = "none";
        accountPhoneNumber.style.display = "none";
        accountEmail.style.display = "none";
        document.getElementById('account-adress').style.display = "none";
        document.getElementById('account-password').style.display = "none";
        sessionStorage.clear();
    }
    else if(page == 3){
        registrationTrackerOne.style.color = "#afafaf";
        registrationTrackerTwo.style.color = "#616161";
        registrationTrackerThree.style.color = "#afafaf";
        fullNameInputWrapper.style.display = "flex";
        accountPhoneNumber.style.display = "flex";
        accountEmail.style.display = "flex";
        accountRegionSelect.style.display = "none";
        document.getElementById('account-adress').style.display = "none";
        document.getElementById('account-password').style.display = "none";
        sessionStorage.setItem("slidePage", "2");
        sessionStorage.removeItem("firstName");
        sessionStorage.removeItem("lastName");
        sessionStorage.removeItem("phonenumber");
        sessionStorage.removeItem("email");
    }
    else{

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
document.getElementById('phonenumberinput').oninput = function(){
    var x = document.getElementById('phonenumberinput').value;
    var c = document.getElementById('wrongphonenumber');
    if(isNaN(x) == true){
        x.style.borderColor = "red";
        c.style.display = "block"
    }
    else if(x.length >= 9){
        if(x.substring(0,2) == 07){ //mobilnummer
            if(x.substring(2,3) == 0 || x.substring(2,3) == 2 || x.substring(2,3) == 3 || 
            x.substring(2,3) == 6 || x.substring(2,3) == 9){
                if(x.length = 10){
                    document.getElementById('phonenumberinput').style.borderColor = "black";
                    c.style.display = "none"
                }
                else{
                    document.getElementById('phonenumberinput').style.borderColor = "red";
                    c.style.display = "block" 
                }
            }
            else{
                document.getElementById('phonenumberinput').style.borderColor = "red";
                c.style.display = "block" 
            }
        }
        else if(x.substring(0,2) == 08){ //08 nummer
            if(x.length == 9){
                document.getElementById('phonenumberinput').style.borderColor = "black";
                c.style.display = "none"
            }
            else{
                document.getElementById('phonenumberinput').borderColor = "red";
                c.style.display = "block" 
            }
        }
        else{
            document.getElementById('phonenumberinput').borderColor = "red";
            c.style.display = "block" 
        }
    }
}
/****************************Phone number ***********************************/
document.getElementById('firstnameinput').oninput = function(){
    var firstname = document.getElementById('firstnameinput').value;
    console.log(isNaN(firstname));
    if(isNaN(firstname) == true){
        document.getElementById('firstnameinput').style.borderColor = "black";
    }
    else if(isNaN(firstname) == false && firstname.length > 0){
        document.getElementById('firstnameinput').style.borderColor = "red";
    }
};
document.getElementById('surnameinput').oninput = function(){
    var lastname = document.getElementById('surnameinput').value;
    if(isNaN(lastname) == true){
        document.getElementById('surnameinput').style.borderColor = "black";
    }
    else if(isNaN(lastname) == false && lastname.length > 0){
        document.getElementById('surnameinput').style.borderColor = "red";
    }
};