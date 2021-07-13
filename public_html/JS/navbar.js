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
                    method: 'POST',
                    data: {
                        userId: accountid,
                        email: email,
                        role: role,
                    },
                    success: function(response){
                        //var response = JSON.parse(response);
                        console.log(response);
                        if(response[0] == 1){
                            sessionStorage.setItem("accountId",`${response[1]}`);
                            sessionStorage.setItem("username",`${response[2]}`);
                            var userArray = [];
                            userArray.push(response[1], response[4]);
                            //createCookie("a_user", `${userArray}`, "365");
                            //window.location = './myaccount.html';
                            //document.getElementById('loginanchor').innerText = `${username}`;
                        }
                        else{
                            alert("else triggered");
                        }
    
                    },
                }
            );
        }
        else if(newArrayLoginId[0] == 2){

        }


        /*
      document.getElementById('loggedInFalse').style.display = "none";
      document.getElementById('loginanchor').style.display = "none";
      document.getElementById('createaccountsidemenu').style.display = "none";
      document.getElementById('loginsidemenu').style.display = "none";
      document.getElementById('loggedInTrue').style.display = "block";
      document.getElementById('myaccountsidemenu').style.display = "block";
      */
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