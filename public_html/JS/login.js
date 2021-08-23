var width = window.screen.innerWidth;
var användarNamn = document.getElementById('användarnamnlogin');
var password = document.getElementById('lösenordlogin');
var loginButton = document.getElementById('login-btn');

window.onload = () =>{
    loggedInControl();
    loggedInControl2();
    languageControl();
    cookieConsentLoad();
};
async function loggedInControl2(){
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
                            window.location = "https://rendex.se/myaccount";
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
        //do nothing, allow the user to stay in login-page
    }
};

document.getElementById('bankidwindowwide').addEventListener('click', function(){
    bankIdWindow();
});
document.getElementById('bankidwindowmobile').addEventListener('click', function(){
    bankIdWindow();
});
function bankIdWindow(){
    if(width > 875){
        document.getElementById('side-menuhelp').style.width='400px';
        document.getElementById('login').style.marginLeft='0px';
    }
    else{
        document.getElementById('side-menuhelp').style.width='100vw';
        document.getElementById('login').style.marginLeft='0px';
    }
}
document.getElementById('close-sidehelp-cross').addEventListener('click', function(){
    closeSlideHelp();
});
document.getElementById('close-sidehelp-button').addEventListener('click', function(){
    closeSlideHelp();
});
function closeSlideHelp(){
    document.getElementById('side-menuhelp').style.width='0';
    document.getElementById('login').style.marginLeft='0';
}
document.getElementById('bankid-initatebutton').onclick = function(){
    var arialabel = document.getElementById('bankid-initatebutton').getAttribute('aria-label');
    if(arialabel == "open"){
        document.getElementById('bankid-initatebutton').setAttribute('aria-label', 'open');
    }
    else{
        if(width > 875){
            document.getElementById('containercentre-firstrow-desktop').style.display = "block";
            document.getElementsByClassName('containercentre-secondrow')[0].style.display = "flex";
        }
        else{
            document.getElementById('bankidlogin-mobile').style.display = "block";
            document.getElementById('alternative-login-wrapper-wrapper').style.display = "none";
            document.getElementsByClassName('containercentre-secondrow-mobile')[0].style.display = "flex";
        }
        document.getElementById('username-wrapper').style.display = "none"
        document.getElementById('password-wrapper').style.display = "none"
        document.getElementById('login-btn').style.display = "none"
        document.getElementById('bankid-initatebutton').style.display = "none";
    }
    document.getElementById('close-bankId').style.display = "block";
    document.getElementsByClassName('containercentre-wrapper-wrapper')[0].style.height = "75vh";
};
document.getElementById('close-bankId').onclick = function(){
    document.getElementById('containercentre-firstrow-desktop').style.display = "none";
    document.getElementById('close-bankId').style.display = "none";

    document.getElementById('username-wrapper').style.display = "flex";
    document.getElementById('password-wrapper').style.display = "flex";
    document.getElementById('login-btn').style.display = "block";
    document.getElementById('bankid-initatebutton').style.display = "flex";
    document.getElementsByClassName('containercentre-secondrow')[0].style.display = "none";
    document.getElementsByClassName('containercentre-wrapper-wrapper')[0].style.height = "60vh";
}
document.getElementById('credentials-login-btn').onclick = function(){
    document.getElementById('bankidlogin-mobile').style.display = "none";
    document.getElementById('alternative-login-wrapper-wrapper').style.display = "block";
};
document.getElementById('login-btn').onclick = function(){
    var username = document.getElementById('användarnamnlogin').value;
    var password = document.getElementById('lösenordlogin').value;
    if(username !== "" && password !== ""){
        document.getElementById('användarnamnlogin').style.borderColor = "black";
        document.getElementById('lösenordlogin').style.borderColor = "black";
        $.ajax(
            {
                url: './PHP/login.php',
                dataType: 'text',
                method: 'GET',
                data: {
                    login: 1,
                    username: username,
                    password: password,
                },
                success: function(response){
                    var response = JSON.parse(response);
                    if(response[0] == 1){
                        sessionStorage.setItem("accountId",`${response[1]}`);
                        sessionStorage.setItem("username",`${response[2]}`);
                        var userArray = [];
                        userArray.push(response[1], response[4]);
                        createCookie("a_user", `${userArray}`, "365");
                        window.location = './myaccount.html';
                    }
                    else{
                        document.getElementById('error-message-login-wrapper').style.display = "block";
                        document.getElementById('användarnamnlogin').style.borderColor = "red";
                        document.getElementById('lösenordlogin').style.borderColor = "red";

                        if(width > 875){
                            document.querySelectorAll('.containercentre-wrapper-wrapper')[0].style.height = "78vh";
                        }
                    }

                },
            }
        );
    }
    else{
        document.getElementById('användarnamnlogin').style.borderColor = "red";
        document.getElementById('lösenordlogin').style.borderColor = "red";
    }
};

document.getElementById('show-password-login').onclick = function(){ //display password
    var type = document.getElementById('lösenordlogin').getAttribute('aria-label');

    if(type == null || type == undefined || type == 'hidden'){
        document.getElementById('lösenordlogin').setAttribute('type', 'text');
        document.getElementById('lösenordlogin').setAttribute('aria-label', 'toggled');
        document.querySelectorAll('.mask-password-strikethrough')[0].style.display = "none";
    }
    else if(type == 'toggled'){
        document.getElementById('lösenordlogin').setAttribute('type', 'password');
        document.getElementById('lösenordlogin').setAttribute('aria-label', 'hidden');
        document.querySelectorAll('.mask-password-strikethrough')[0].style.display = "";
    }
}
document.getElementById('searchpageanchor').onclick = function(){
    var loginId = getCookie("a_user");
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