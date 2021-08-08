window.onload = function(){
  loggedInControl();
  cookieConsentLoad();
  displayMyAccount();
};

function displayMyAccount(){
  var loginId = getCookie("a_user");
  var newArrayLoginId = loginId.split(',');
  var accountid = newArrayLoginId[0];
  var role = newArrayLoginId[1];
  if(accountid != null && accountid != undefined){
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
            if(response[0] == 1){ //if successful
              if(role == 1){ //individual
                if(response.length == 9){
                  var img = document.createElement('img');
                  img.setAttribute('id', "myaccount-profilepicture");
                  img.setAttribute('src', './assets/images/unchosen-profilepic.svg');
                  img.style.width = "100px";
                  img.style.height = "100px";
                  document.getElementById('myaccount-profilepicture').appendChild(img);
                }
                else if(response.length == 10){
                  var img = document.createElement('img');
                  img.setAttribute('id', "myaccount-profilepicture")
                  img.setAttribute('src', `${response[9]}`);
                  img.style.width = "100px"
                  img.style.height = "100px"
                  document.getElementById('myaccount-profilepicture').appendChild(img);
                }
                var firstName = response[1];
                var lastName = response[2];
                var email = response[3];
                document.getElementById('myaccount-name-wrapper').innerText = `${firstName} ${lastName}`;
                document.getElementById('myaccount-email').innerText = `${email}`;
                document.getElementById('h1header-myaccount').innerText = `${firstName} ${lastName}!`;
  
                parent.location.hash = `/${firstName}-${lastName}/${newArrayLoginId[0]}`;
              }
              else if(role == 2){ //organisation
                document.getElementById('options-wrapper-row2').style.display = "none";
              }
            }
            else{
              console.log("Failed to fetch data from server");
            }
          },
      }
    );
    document.getElementById('showpublicprofile-anchor').setAttribute('href', `https://rendex.se/profile?id=${accountid}`);
  }
  else{
    window.location = 'https://rendex.se';
  }
};


document.getElementById('logout').onclick = function(){
  eraseCookie("a_user");
  sessionStorage.clear();
  setTimeout(function(){
    window.location = 'https://rendex.se';
  }, 2000);
};
document.getElementById('account-settings').onclick = function(){
  var settingsWindow = document.getElementById('settings-window');
  settingsWindow.style.width = "300px";
};