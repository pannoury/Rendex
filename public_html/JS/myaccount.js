window.onload = function(){
  loggedInControl();
  cookieConsentLoad();
  displayMyAccount();
  clearSettingsList();
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
                var width = window.innerWidth;
                if(response.length == 9){
                  if(width > 875){
                    var img = document.createElement('img');
                    img.setAttribute('id', "myaccount-profilepicture");
                    img.setAttribute('src', './assets/images/unchosen-profilepic.svg');
                    img.style.width = "100px";
                    img.style.height = "100px";
                    document.getElementById('myaccount-profilepicture').appendChild(img);
                  }
                  else{
                    var img = document.createElement('img');
                    img.setAttribute('id', "myaccount-profilepicture");
                    img.setAttribute('src', './assets/images/unchosen-profilepic.svg');
                    img.style.width = "50px";
                    img.style.height = "50px";
                    document.getElementById('myaccount-profilepicture').appendChild(img);
                  }
                }
                else if(response.length == 10){
                  if(width > 875){
                    var img = document.createElement('img');
                    img.setAttribute('id', "myaccount-profilepicture")
                    img.setAttribute('src', `${response[9]}`);
                    img.style.width = "100px"
                    img.style.height = "100px"
                    document.getElementById('myaccount-profilepicture').appendChild(img);
                  }
                  else{
                    var img = document.createElement('img');
                    img.setAttribute('id', "myaccount-profilepicture")
                    img.setAttribute('src', `${response[9]}`);
                    img.style.width = "50px"
                    img.style.height = "50px"
                    document.getElementById('myaccount-profilepicture').appendChild(img);
                  }
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
  var width = window.innerWidth;
  if(width > 875){
    document.getElementById('settings-window').style.width = "60vw";
  }
  else{
    window.location = "https://rendex.se/settings";
  }
};
document.getElementById('settings-closeanchor').onclick = function(){
  document.getElementById('settings-window').style.width = "0vw";
}

function clearSettingsList(){
  var options = document.getElementsByClassName('settings-option');
  for(i=0; i < options.length; i++){
    options[i].style.background = "";
    options[i].style.color = "black";
  }
  var settingWindows = document.getElementsByClassName('settings-window-mid-option-display');
  for(i=0; i < settingWindows.length; i++){
    settingWindows[i].style.display = "none";
  }
}
function settingsListClick(id){
  var options = document.getElementsByClassName('settings-option');
  for(i=0; i < options.length; i++){
    options[i].style.background = "";
    options[i].style.color = "black";
  }
  var settingWindows = document.getElementsByClassName('settings-window-mid-option-display');
  for(i=0; i < settingWindows.length; i++){
    settingWindows[i].style.display = "none";
  }

  document.getElementById(`${id}`).style.backgroundColor = "#f07900";
  document.getElementById(`${id}`).style.color = "white";

  retrieveAccountInformation(id);
}

function retrieveAccountInformation(id){
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
            console.log(response);
            if(response[0] == 1){ //if successful
              if(id == "settings-option1"){
                document.getElementById('settings-window-kontaktuppgifter').style.display = "flex";
                document.getElementById('settings-window-firstname').value = `${response[1]}`;
                document.getElementById('settings-window-lastname').value = `${response[2]}`;
                document.getElementById('settings-window-streetadress').value = `${response[5]}`;
                document.getElementById('settings-window-streetnumber').value = `${response[6]}`;
                document.getElementById('settings-window-zipcode').value = `${response[7]}`;
                document.getElementById('settings-window-phonenumber').value = `${response[8]}`;
                if(response.length == 10){
                  document.getElementById('settings-window-file-existing-name').innerText = `${response[9].replace("./Uploads/", "")}`;
                  document.getElementById('settings-window-file-existing-name').style.color = "blue";
                  document.getElementById('settings-window-file-existing-name').setAttribute('href', `https://rendex.se${response[9].substring(1)}`);
                }
                else{
                  document.getElementById('settings-window-file-existing-name').innerText = 'Profilbild saknas';
                }
              }
              else if(id == "settings-option2"){
                document.getElementById('settings-window-changepassword').style.display = "flex";
              }
              else if(id == "settings-option3"){
              }
              else if(id == "settings-option4"){
            
              }
            }
            else{
              console.log("Failed to fetch data from server");
            }
          },
      }
    );
  }
}