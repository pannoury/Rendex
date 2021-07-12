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
    document.getElementById('containercentre-firstrow-desktop').style.display = "block";
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
    användarNamn.value = "";
    document.getElementById('clearusername').style.display = "none";
};
document.getElementById('clearpassword-btn').onclick = function(){
    password.value = "";
    document.getElementById('clearpassword').style.display = "none";
};

document.getElementById('login-btn').onclick = function(){
    var usernameinput = document.getElementById('användarnamnlogin').value;
    var passwordinput = document.getElementById('lösenordlogin').value;
    if(usernameinput !== "" && passwordinput !== ""){
        $.ajax(
            {
                url: './PHP/login.php',
                dataType: 'text',
                method: 'POST',
                data: {
                    login: 1,
                    email: usernameinput,
                    password: passwordinput,
                },
                success: function (response){
                    console.log(response);
                },
            }
        );
    }
    else{

    }
    var xmlhttp = new XMLHttpRequest();
};