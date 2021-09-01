let today = new Date();
var day = today.getDate();
var month = today.getMonth();
var hours = today.getHours();
var minutes = today.getMinutes();
var fullYear = today.getFullYear();

//Universal settings
//Do not change these
window.addEventListener('load', function(){
    document.getElementById('loadingwindow').style.height = "100vh";
    sessionStorage.clear();
    hideAndClearElements();
    languageControl();
    loggedInControl();
    cookieConsentLoad();
    purposeControl();
    regionControl();
    /* setInterval(clear, 600000) */
    loggedInControlCreateAccount();
});
$(document).ready(function(){
    setTimeout(function(){
        document.getElementById('loadingwindow').style.height = "0vh";
    }, 1000);
    console.log(document.getElementById('agreetoa').checked)
    console.log(document.getElementById('regioninput').value);
    console.log(document.getElementById('purposeselect').value);
});

function hideAndClearElements(){
    document.getElementById('insurancenumber').value = "";
    document.getElementById('firstnameinput').value = "";
    document.getElementById('surnameinput').value = "";
    document.getElementById('emailinput').value = "";
    document.getElementById('streetadressinput').value = "";
    document.getElementById('zipcodeinput').value = "";
    document.getElementById('phonenumberinput').value = "";
    document.getElementById('password1').value = "";
    document.getElementById('password-repeat').value = "";
}
function loggedInControlCreateAccount(){
    var loginId = getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    if(newArrayLoginId[0] >= 1){
        window.location = 'https://rendex.se/myaccount';
    }
    else{
        window.location = 'https://rendex.se/login';
    }
}
/******UNIVERSAL SETTINGS END******** */

/****************************PERSONNUMMER/ORGNUMMER***************************** */
document.getElementById('insurancenumber').addEventListener('input', function insuranceLengthCheck(){
    insuranceNumber()
});
document.getElementById('insurancenumber').onblur = () => {
    insuranceNumber()
};
function insuranceNumber(){
    var a = document.getElementById('insurancenumber');
    var b = a.value;
    var c = document.getElementById('wronginsurancenumber');
    if(b.length === 10 && !isNaN(b) && b.substring(0,1) == 5){ //org nr check
        a.style.borderColor = "black";
        c.style.display = "none";
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
                                    document.querySelectorAll('.green-check-tick')[0].style.width = "0px";
                                    document.getElementById('insurancenumber').setAttribute('aria-label', "");
                                }
                                else{
                                    a.style.borderColor = "black";
                                    c.style.display = "none";
                                    document.getElementById('insurancenumber').setAttribute('aria-label', 'complete');
                                    document.querySelectorAll('.green-check-tick')[0].style.width = "25px";
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
    }
    createAccountFormControl()
}

//First Name "Förnamn" Input
document.getElementById('firstnameinput').oninput = () => {
    firstName();
}
document.getElementById('firstnameinput').onblur = () => {
    firstName();
}
function firstName(){
    var value = document.getElementById('firstnameinput').value;
    if(value.lenght <= 1 || !/[^a-zA-Z]/.test(document.getElementById('firstnameinput').value) == false){
        document.getElementById('firstnameinput').style.borderColor = "red";
        document.getElementById('firstnameinput').setAttribute('aria-label', "");
    }
    else{
        document.getElementById('firstnameinput').style.borderColor = "black";
        document.getElementById('firstnameinput').setAttribute('aria-label', 'complete');
    }
    createAccountFormControl()
}
//Surname input
document.getElementById('surnameinput').oninput = () => {
    surname()
}
document.getElementById('surnameinput').onblur = () => {
    surname()
}
function surname(){
    var value = document.getElementById('surnameinput').value;
    if(value.lenght <= 2 || !/[^a-zA-Z]/.test(document.getElementById('surnameinput').value) == false){
        document.getElementById('surnameinput').style.borderColor = "red";
        document.getElementById('surnameinput').setAttribute('aria-label', "");
    }
    else{
        document.getElementById('surnameinput').style.borderColor = "black";
        document.getElementById('surnameinput').setAttribute('aria-label', 'complete');
    }
    createAccountFormControl()
}
//Email
document.getElementById('emailinput').oninput = () => {
    email()
}
document.getElementById('emailinput').onblur = () => {
    email()
}
function email(){
    var value = document.getElementById('emailinput').value;
    if(value.length >= 10 && value.includes('@') == true){
        $.ajax(
            {
                url: './PHP/createaccount.php',
                dataType: 'text',
                method: 'GET',
                data: {
                    requestid: 3,
                    email: document.getElementById('emailinput').value,
                },
                success: function(response){
                    var query = JSON.parse(response);
                    console.log(query)
                    if(query == "0"){
                        document.getElementById('emailinput').style.borderColor = "black";
                        document.getElementById('emailinput').setAttribute('aria-label', 'complete');
                    }
                    else{
                        document.getElementById('emailinput').style.borderColor = "red";
                        document.getElementById('emailinput').setAttribute('aria-label', "");
                    }
                },
            }
        );
    }
    else{
        document.getElementById('emailinput').style.borderColor = "red";
        document.getElementById('emailinput').setAttribute('aria-label', "");
    }
    createAccountFormControl()
}
//role selector
document.getElementById('purposeselect').onchange = () => {
    purposeControl();
}
function purposeControl(){
    var value = document.getElementById('purposeselect').value;
    if(value !== ""){
        document.getElementById('purposeselect').setAttribute('aria-label', "complete")
    }
    else{
        document.getElementById('purposeselect').setAttribute('aria-label', "")
    }
    createAccountFormControl()
}
//street adress
document.getElementById('streetadressinput').oninput = () => {
    streetAdress()
}
document.getElementById('streetadressinput').onblur = () => {
    streetAdress()
}
function streetAdress(){
    var value = document.getElementById('streetadressinput').value;
    if(value.length <= 5){
        document.getElementById('streetadressinput').style.borderColor = "red";
        document.getElementById('streetadressinput').setAttribute('aria-label', "");
    }
    else{
        document.getElementById('streetadressinput').style.borderColor = "black";
        document.getElementById('streetadressinput').setAttribute('aria-label', 'complete');
    }
    createAccountFormControl()
}
//zipcode
document.getElementById('zipcodeinput').oninput = () => {
    zipCode()
}
document.getElementById('zipcodeinput').onblur = () => {
    zipCode()
}
function zipCode(){
    var value = document.getElementById('zipcodeinput').value;
    if(value.length == 5 && /^\d+$/.test(value)){
        document.getElementById('zipcodeinput').style.borderColor = "black";
        document.getElementById('zipcodeinput').setAttribute('aria-label', 'complete');
    }
    else{
        document.getElementById('zipcodeinput').style.borderColor = "red";
        document.getElementById('zipcodeinput').setAttribute('aria-label', "");
    }
    createAccountFormControl()
}
/****************************Phone number ***********************************/
document.getElementById('phonenumberinput').oninput = function(){
    phoneNumber()
}
document.getElementById('phonenumberinput').onblur = function(){
    phoneNumber()
}
function phoneNumber(){
    var x = document.getElementById('phonenumberinput').value;
    var c = document.getElementById('wrongphonenumber');
    if(isNaN(x) == true){
        document.getElementById('phonenumberinput').style.borderColor = "red";
        c.style.display = "block"
    }
    else if(x.length >= 9 && isNaN(x) == false){
        if(x.substring(0,2) == 07 && x.length == 10){ //mobilnummer
            if(x.substring(2,3) == 0 || x.substring(2,3) == 2 || x.substring(2,3) == 3 || 
            x.substring(2,3) == 6 || x.substring(2,3) == 9){
                if(x.length = 10){
                    document.getElementById('phonenumberinput').style.borderColor = "black";
                    c.style.display = "none"
                    document.getElementById('phonenumberinput').setAttribute('aria-label', "complete");
                }
                else{
                    document.getElementById('phonenumberinput').style.borderColor = "red";
                    c.style.display = "block" 
                    document.getElementById('phonenumberinput').setAttribute('aria-label', "");
                }
            }
            else{
                document.getElementById('phonenumberinput').style.borderColor = "red";
                c.style.display = "block" 
                document.getElementById('phonenumberinput').setAttribute('aria-label', "");
            }
        }
        else if(x.substring(0,2) == 08 && x.length == 9){ //08 nummer
            if(x.length == 9){
                document.getElementById('phonenumberinput').style.borderColor = "black";
                c.style.display = "none"
                document.getElementById('phonenumberinput').setAttribute('aria-label', "complete");
            }
            else{
                document.getElementById('phonenumberinput').style.borderColor = "red";
                c.style.display = "block" 
                document.getElementById('phonenumberinput').setAttribute('aria-label', "");
            }
        }
        else{
            document.getElementById('phonenumberinput').style.borderColor = "red";
            c.style.display = "block" 
            document.getElementById('phonenumberinput').setAttribute('aria-label', "");
        }
    }
    createAccountFormControl()
}
/***********Region Select********* */
document.getElementById('regioninput').onchange = () => {
    regionControl();
}
function regionControl(){
    var value = document.getElementById('regioninput').value;
    console.log(value);
    if(value !== ""){
        document.getElementById('regioninput').setAttribute('aria-label', "complete")
    }
    else{
        document.getElementById('regioninput').setAttribute('aria-label', "")
    }
    createAccountFormControl()
}
/***********Region Select********* */
//Password
//First password row
document.getElementById('password1').oninput = () => {
    password1()
}
document.getElementById('password1').onblur = () => {
    password1()
}
function password1(){
    var password = document.getElementById('password1');
    var regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])")
    console.log(regex.test(password.value))
    if(password.value.length >= 8 && regex.test(password.value) == true){
        var passwordRepeat = document.getElementById('password-repeat').value;
        if(password.value == passwordRepeat){
            document.getElementById('password1').style.borderColor = "black";
            document.getElementById('password1').setAttribute('aria-label', "complete");
        }
        else{
            document.getElementById('password1').style.borderColor = "red";
            document.getElementById('password1').setAttribute('aria-label', "");
        }
    }
    else{
        document.getElementById('password1').style.borderColor = "red";
        document.getElementById('password1').setAttribute('aria-label', "");
    }
    createAccountFormControl()
}
//second row
document.getElementById('password-repeat').oninput = () => {
    passwordRepeat();
}
document.getElementById('password-repeat').onblur = () => {
    passwordRepeat();
}
function passwordRepeat(){
    var password = document.getElementById('password-repeat');
    var regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])")
    if(password.value.length >= 8 && regex.test(password.value) == true){
        var password1 = document.getElementById('password1').value;
        if(password.value == password1){
            document.getElementById('password-repeat').style.borderColor = "black";
            document.getElementById('password-repeat').setAttribute('aria-label', "complete");
            document.getElementById('password1').style.borderColor = "black";
            document.getElementById('password1').setAttribute('aria-label', "complete");
        }
        else{
            document.getElementById('password-repeat').style.borderColor = "red";
            document.getElementById('password-repeat').setAttribute('aria-label', "");
        }
    }
    else{
        document.getElementById('password-repeat').style.borderColor = "red";
        document.getElementById('password-repeat').setAttribute('aria-label', "");
    }
    createAccountFormControl()
}
/**************Show Password************ */
document.getElementById('show-firstpassword').onclick = function(){ //first password row
    var type = document.getElementById('show-firstpassword').getAttribute('aria-label');

    if(type == null || type == undefined || type == 'hidden'){
        document.getElementById('password1').setAttribute('type', 'text');
        document.getElementById('show-firstpassword').setAttribute('aria-label', 'toggled');
        document.querySelectorAll('.mask-password-strikethrough')[0].style.display = "none";
    }
    else if(type == 'toggled'){
        document.getElementById('password1').setAttribute('type', 'password');
        document.getElementById('show-firstpassword').setAttribute('aria-label', 'hidden');
        document.querySelectorAll('.mask-password-strikethrough')[0].style.display = "";
    }
}
document.getElementById('show-secondpassword').onclick = function(){ //second row
    var type = document.getElementById('show-secondpassword').getAttribute('aria-label');

    if(type == null || type == undefined || type == 'hidden'){
        document.getElementById('password-repeat').setAttribute('type', 'text');
        document.getElementById('show-secondpassword').setAttribute('aria-label', 'toggled');
        document.querySelectorAll('.mask-password-strikethrough')[1].style.display = "none";
    }
    else if(type == 'toggled'){
        document.getElementById('password-repeat').setAttribute('type', 'password');
        document.getElementById('show-secondpassword').setAttribute('aria-label', 'hidden');
        document.querySelectorAll('.mask-password-strikethrough')[1].style.display = "";
    }
}
/**************Show Password************ */

//Toggle checkbox
document.getElementById('agreetoa').onchange = () => {
    var checkBox = document.getElementById('agreetoa');
    if(checkBox.checked == true){
        checkBox.style.borderColor = "black";
        checkBox.setAttribute('aria-label', "complete");
    }
    else{
        checkBox.setAttribute('aria-label', "");
    }
}
//End Section -> Display Button, make it selectable

//Check function
//After each input has been changed, this function is triggered
function createAccountFormControl(){
    var button = document.getElementById('next-btn');
    if(
        document.getElementById('insurancenumber').getAttribute("aria-label") == "complete" &&
        document.getElementById('firstnameinput').getAttribute("aria-label") == "complete" &&
        document.getElementById('surnameinput').getAttribute("aria-label") == "complete" &&
        document.getElementById('purposeselect').value != "" &&
        document.getElementById('streetadressinput').getAttribute("aria-label") == "complete" &&
        document.getElementById('zipcodeinput').getAttribute("aria-label") == "complete" &&
        document.getElementById('phonenumberinput').getAttribute("aria-label") == "complete" &&
        document.getElementById('regioninput').value != "" &&
        document.getElementById('password1').getAttribute("aria-label") == "complete" &&
        document.getElementById('password-repeat').getAttribute("aria-label") == "complete" &&
        document.getElementById('agreetoa').checked == true
    ){
        button.style.backgroundColor = "#f07900";
        button.setAttribute("aria-label", "active");
        $('#next-btn').css('cursor', 'pointer');
    }
    else{
        button.style.backgroundColor = "#d4d4d4";
        button.setAttribute("aria-label", "");
        $('#next-btn').css('cursor', 'none');
    }
}
//Change button appearance
document.getElementById('next-btn').onclick = () => {
    console.log("click")
    var button = document.getElementById('next-btn').getAttribute('aria-label');

    if(button === null || button === undefined || button !== "active"){
        //do nothing, the button is not selectable
    }
    else if(button == "active"){
        var role = document.getElementById('purposeselect').value
        if(role == "Uppdragstagare"){
            createNewAccount(1);
        }
        else if(role == "Uppdragsgivare"){
            createNewAccount(2);
        }
    }
}

function createNewAccount(role){
    console.log("createNewAccount activated")
    var password = document.getElementById('password1').value
    var today = new Date();
    var month = ('0' + (today.getMonth()+1)).slice(-2);
    var date = `${today.getFullYear()}-${month}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    var email = document.getElementById('emailinput').value;

    var personnummer =  document.getElementById('insurancenumber').value
    var firstname = document.getElementById('firstnameinput').value;
    var lastname = document.getElementById('surnameinput').value
    var streetadress =  document.getElementById('streetadressinput').value;

    var firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1);
    var lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1);
    var streetadress = streetadress.charAt(0).toUpperCase() + streetadress.slice(1);
    var streetadress1 = streetadress.replace(/[0-9]/g, "")
    var streetnumber = streetadress.replace(/\D/g, "");
    var zipcode = document.getElementById('zipcodeinput').value;
    var phonenumber = document.getElementById('phonenumberinput').value

    $.ajax(
        {
            url: './PHP/createaccount.php',
            dataType: 'text',
            method: 'POST',
            data: {
                requestid: 4,
                email: email,
                role: role,
                password: password,
                time: date,
                firstname: firstname,
                lastname: lastname,
                streetadress: streetadress1,
                streetnumber: streetnumber,
                zipcode: zipcode,
                phonenumber: phonenumber,
                personnummer: personnummer,
            },
            success: function(response){
                var query = JSON.parse(response);
                if(query == "Unsuccessful request"){

                }
                else{
                    $.ajax(
                        {
                            url: './PHP/createaccount.php',
                            dataType: 'text',
                            method: 'GET',
                            data: {
                                requestid: 6,
                                email: email,
                                role: role,
                            },
                            success: function(response){
                                var query = JSON.parse(response);
                                if(query[0] == 0){
                
                                }
                                else{
                                    var id = query[1];
                                    $.ajax(
                                        {
                                            url: './PHP/createaccount.php',
                                            dataType: 'text',
                                            method: 'POST',
                                            data: {
                                                requestid: 5,
                                                email: email,
                                                id: id,
                                                role: role,
                                            },
                                            success: function(response){
                                                var query = JSON.parse(response);
                                                if(query == 1){
                                                    window.location = "https://rendex.se/login";
                                                }
                                                else{
                                                    alert("Something went wrong, please contact customer service")
                                                }
                                            },
                                        }
                                    );
                                }
                            },
                        }
                    );
                }
            },
        }
    );
}