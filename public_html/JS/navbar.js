var loginId = getCookie("a_user");
var newArrayLoginId = loginId.split(',');

$(document).ready(function(){
    loggedInControl();
});
async function loggedInControl(){
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
                            var width = window.screen.width;
                            if(width > 875){
                                document.getElementById('loginanchor').innerText = `${response[1]}`;
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
document.getElementById('loginanchor').onclick = function(){
    if(newArrayLoginId[0] >= 1){
        window.location = './myaccount.html';
    }
    else{
        window.location = './login.html';
    }
};
document.getElementById('loginsidemenu').onclick = function(){
    if(newArrayLoginId[0] >= 1){
        window.location = './myaccount.html';
    }
    else{
        window.location = './login.html';
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
        window.location = './inbox.html';
    }
    else{
        window.location = './login.html';
    }
});
/*
window.onscroll = function(){
    var navbar = document.getElementById('header');
    if(window.screen.width > 875){
        if(window.pageYOffset >= 1){
            navbar.style.backgroundColor = "";
        }
        else{
            navbar.style.backgroundColor = "#333";
        }
    }
};
*/