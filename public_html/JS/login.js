var width = window.screen.width;
var användarNamn = document.getElementById('användarnamnlogin');
var password = document.getElementById('lösenordlogin');
var loginButton = document.getElementById('login-btn');

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
    if(width > 875){
        document.getElementById('containercentre-firstrow-desktop').style.display = "block";
    }
    else{
        document.getElementById('bankidlogin-mobile').style.display = "block";
        document.getElementById('alternative-login-wrapper-wrapper').style.display = "none";
    }
    
};
document.getElementById('credentials-login-btn').onclick = function(){
    document.getElementById('bankidlogin-mobile').style.display = "none";
    document.getElementById('alternative-login-wrapper-wrapper').style.display = "block";
};

document.getElementById('användarnamnlogin').oninput = function(){
    if(användarNamn.value.length >= 1){
        document.getElementById('clearusername').style.display = "flex";
    }
    else{
        document.getElementById('clearusername').style.display = "none";
    }
};
document.getElementById('lösenordlogin').oninput = function(){
    if(password.value.length >= 1){
        document.getElementById('clearpassword').style.display = "flex";
    }
    else{
        document.getElementById('clearpassword').style.display = "none";
    }
};
document.getElementById('clearusername-btn').onclick = function(){
    document.getElementById('användarnamnlogin').value = "";
    document.getElementById('clearusername').style.display = "none";
};
document.getElementById('clearpassword-btn').onclick = function(){
    document.getElementById('lösenordlogin').value = "";
    document.getElementById('clearpassword').style.display = "none";
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
                method: 'POST',
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