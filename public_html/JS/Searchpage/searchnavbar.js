function languageControl(){
    var lang = getCookie("lang");
    if(lang = undefined || lang == null){
        console.log("no language cookie");
    }
    else if(lang = "SE"){
        document.getElementById('language-selected').innerText = "SE";
    }
    else if(lang = "ENG"){
        document.getElementById('language-selected').innerText = "ENG";
    }
};
function loggedInControl(){
    var loginId = getCookie("a_user");
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
                            }
                            else if(width < 875){
                                document.getElementById('loginsidemenu').innerText = `${response[1]}`;
                                document.getElementById('createaccountsidemenu').style.display = "none";
                            }
                        }
                        else{
                            console.log("Failed to fetch data from server");
                        }
    
                    },
                }
            );
        }
        else if(newArrayLoginId[1] == 2){ //Organisation

        }
    }
    else{
        document.getElementById('loginanchor').textContent = "Logga In";
    }
};
function roleControl(){
    var role = localStorage.getItem("roleSelected");
    var roleSpan = document.getElementById('search-role-span');
    if(role == undefined || role == null){ //role not existing/not selected
        localStorage.setItem("roleSelected", "Uppdragstagare");
    }
    else if(role !== undefined && role !== null){
        roleSpan.innerText = `${role}`;
    }
}

document.getElementById('loginanchorTrue').onclick = function(){
    var loginId = getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    if(newArrayLoginId[0] >= 1){
        window.location = 'https://rendex.se/myaccount';
    }
    else{
        window.location = 'https://rendex.se/login';
    }
};
document.getElementById('loginsidemenu').onclick = function(){
    if(newArrayLoginId[0] >= 1){
        window.location = 'https://rendex.se/myaccount';
    }
    else{
        window.location = 'https://rendex.se/login';
    }
}
document.getElementById('hamburgermenu-btn').addEventListener('click', function(){
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
});
document.getElementById('inboxlink1').onclick = function(){
    var loginId = getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    if(newArrayLoginId[0] >= 1){
        document.getElementById('inboxlink1').href = "https://rendex.se/inbox";
    }
    else{
        window.location = 'https://rendex.se/login';
    }
};
document.getElementById('inboxlink2').addEventListener('click',function(){
    var loginId = getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    if(newArrayLoginId[0] >= 1){
        window.location = 'https://rendex.se/inbox';
    }
    else{
        window.location = 'https://rendex.se/login';
    }
});
document.getElementById('languageanchor').onclick = function(){
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
    
};
document.getElementById('english-selected').onclick = function(){
    var lang = getCookie("lang");
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
    var lang = getCookie("lang");
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
/**********************NAVBAR **********************/