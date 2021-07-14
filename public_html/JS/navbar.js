var loginId = getCookie("a_user");
var newArrayLoginId = loginId.split(',');

$(document).ready(function(){
    loggedInControl();
});
async function loggedInControl(){
    if(newArrayLoginId[0] == 1){
        if(newArrayLoginId[1] == 1){
            var role = newArrayLoginId[1];
            var accountid = newArrayLoginId[0];
            var email = sessionStorage.getItem("username");
            $.ajax(
                {
                    url: './PHP/individuals.php',
                    dataType: 'text',
                    method: 'GET',
                    data: {
                        userid: accountid,
                        email: email,
                        role: role,
                    },
                    success: function(response){
                        var response = JSON.parse(response);
                        if(response[0] == 1){
                            var width = window.screen.width;
                            if(width > 875){
                                document.getElementById('loginanchor').innerText = `${response[1]}`;
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
        else if(newArrayLoginId[0] == 2){

        }
    }
    else{
        document.getElementById('loginanchor').textContent = "Logga In";
    }
};
document.getElementById('loginanchor').onclick = function(){
    if(newArrayLoginId[0] == 1){
        window.location = './myaccount.html';
    }
    else{
        window.location = './login.html';
    }
};
document.getElementById('loginsidemenu').onclick = function(){
    if(newArrayLoginId[0] == 1){
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