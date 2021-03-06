import * as cookie from "./cookies.js";

function loggedInControl(){
    var loginId = cookie.getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    if(newArrayLoginId[0] > 0){
        if(newArrayLoginId[1] == 1){ //Individual
            var role = newArrayLoginId[1];
            var accountid = newArrayLoginId[0];
            $.ajax(
                {
                    url: './PHP/individuals.php',
                    dataType: 'text',
                    method: 'GET',
                    data: {
                        userid: accountid,
                        role: role,
                    },
                    success: function(response){
                        var response = JSON.parse(response);
                        if(response[0] == 1){
                            var width = window.innerWidth;
                            if(width > 875){
                                document.getElementById('loginanchorTrue').innerText = `${response[1]}`;
                                document.getElementById('loginanchor').style.display = "none";
                                document.getElementById('loggedInFalse').style.display = "none";
                                document.getElementsByTagName('body')[0].style.visibility = "visible";
                            }
                            else if(width <= 875){
                                document.getElementById('loginsidemenu').innerText = `${response[1]}`;
                                document.getElementById('createaccountsidemenu').style.display = "none";
                                document.getElementsByTagName('body')[0].style.visibility = "visible";
                            }
                        }
                        else{
                            console.log("Failed to fetch data from server");
                            document.getElementsByTagName('body')[0].style.visibility = "visible";
                        }
    
                    },
                    error: function(response){
                        console.log("An error has occurred while trying to connect to the server");
                    }
                }
            );
        }
        else if(newArrayLoginId[1] == 2){ //Organisation

        }
    }
    else{
        document.getElementById('loginanchor').textContent = "Logga In";
        document.getElementsByTagName('body')[0].style.visibility = "visible";
    }
};

document.getElementById('loginanchorTrue').onclick = () =>{
    var loginId = cookie.getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    if(newArrayLoginId[0] >= 1){
        window.location = 'https://rendex.se/myaccount';
    }
    else{
        window.location = 'https://rendex.se/login';
    }
};
document.getElementById('loginsidemenu').onclick = () => {
    var loginId = cookie.getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    if(newArrayLoginId[0] >= 1){
        window.location = 'https://rendex.se/myaccount';
    }
    else{
        window.location = 'https://rendex.se/login';
    }
}
document.getElementById('hamburgermenu-btn').onclick = () => {
    var sideMenu = document.getElementById('side-menu').offsetWidth;
    if(sideMenu !== 0){
        document.getElementById('side-menu').style.width='0';
        document.getElementById('cross-black').style.display = "none";
        document.getElementById('hamburgermenu').style.display = "block";
    }
    else{
        document.getElementById('side-menu').style.width='100vw';
        document.getElementById('hamburgermenu').style.display = "none";
        document.getElementById('cross-black').style.display = "block";
    }
};
document.getElementById('inboxlink1').onclick = () => {
    var loginId = cookie.getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    if(newArrayLoginId[0] >= 1){
        document.getElementById('inboxlink1').href = "https://rendex.se/inbox";
    }
    else{
        window.location = 'https://rendex.se/login';
    }
};
document.getElementById('inboxlink2').onclick = () => {
    var loginId = cookie.getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    if(newArrayLoginId[0] >= 1){
        window.location = 'https://rendex.se/inbox';
    }
    else{
        window.location = 'https://rendex.se/login';
    }
};
document.getElementById('languageanchor').onclick = () => {
    var ul = document.getElementById('languageanchor');
    ulAriaLabel = ul.getAttribute('aria-label');
    if(ulAriaLabel == null || ulAriaLabel == undefined || ulAriaLabel == "not displayed"){
        document.getElementById('language-options').style.display = "flex";
        ul.setAttribute('aria-label', "displayed");
    }
    else if(ulAriaLabel == "displayed"){
        document.getElementById('language-options').style.display = "none";
        ul.setAttribute('aria-label', "not displayed");
    }
    
}
window.onscroll = () => {
    var pathName = window.location.pathname
    var navbar = document.getElementById('header');
    if(window.innerWidth > 1080){
        if(window.pageYOffset >= 1){
            navbar.style.backgroundColor = "#333";
            var list = document.querySelectorAll('.navbarselector li a');
            for(let i=0; i < list.length; i++){
                list[i].style.color = "white";
            }
            document.getElementById('language-selected').style.color = "white";
            document.getElementById('globeicon').setAttribute('src', './assets/images/globe.svg');
            document.getElementsByClassName('logo')[0].setAttribute('src', './assets/images/freelans-full-white.svg');
            document.getElementById('loginanchor').style.color = "white";
        }
        else{
            navbar.style.backgroundColor = 'rgb(255, 255, 255, 0)';
            var list = document.querySelectorAll('.navbarselector li a');
            for(let i=0; i < list.length; i++){
                list[i].style.color = "black";
            }
            document.getElementById('language-selected').style.color = "black";
            document.getElementById('globeicon').setAttribute('src', './assets/images/globe-black.svg');
            document.getElementsByClassName('logo')[0].setAttribute('src', './assets/images/freelans-full-black.svg');
            document.getElementById('loginanchor').style.color = "black";
        }
        
        if(pathName === "/inbox"){
            document.getElementById('inboxlink1').style.color = "#f07900"
        }
        else if(pathName === "/myaccount"){
            document.getElementById('loginanchorTrue').style.color = "#f07900";
        }
        else{
            //do nothing
        }
    }
    else{
        navbar.style.backgroundColor = "#333";
        document.getElementsByClassName('logo')[0].setAttribute('src', './assets/images/rendex_white.svg');
    }
};
document.getElementById('loggedInFalseAnchor').onclick = () =>{
    window.location = "https://rendex.se/create_account"
}

/***************LANGUAGE SETTINGS *************/
$(document).ready(function(){
    var lang = cookie.getCookie("lang");
    if(lang = undefined || lang == null){
        console.log("no language cookie");
    }
    else if(lang = "SE"){
        document.getElementById('language-selected').innerText = "SE";
    }
    else if(lang = "ENG"){
        document.getElementById('language-selected').innerText = "ENG";
    }
});
document.getElementById('english-selected').onclick = function(){
    var lang = cookie.getCookie("lang");
    if(lang = undefined || lang == null){
        createCookie("lang", "ENG", 365);
    }
    else if(lang = "ENG"){
        createCookie("lang", "ENG", 365);
    }
    else if(lang = "SE"){
    }
    location.reload();
    
};
document.getElementById('swedish-selected').onclick = function(){
    var lang = cookie.getCookie("lang");
    if(lang = undefined || lang == null){
        createCookie("lang", "SE", 365);
    }
    else if(lang = "ENG"){
        createCookie("lang", "SE", 365);
    }
    else if(lang = "SE"){
    }
    location.reload();
};
document.getElementById('searchpageanchor').onclick = function(){
    var loginId = cookie.getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    if(newArrayLoginId[0] === null || newArrayLoginId[0] === undefined || newArrayLoginId[0] === ""){
        window.location = "https://rendex.se/login"
    }
    else if(newArrayLoginId[0] >= 1){
        window.location = "https://rendex.se/searchpage";
    }
    else{
        window.location = "https://rendex.se/login"
    }
}
/***************LANGUAGE SETTINGS *************/

export { loggedInControl }