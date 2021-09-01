window.onload = function(){
  loggedInControl();
  cookieConsentLoad();
  clearSettingsList();
  checkWidth();
};

function checkWidth(){
  var width = window.innerWidth;

  if(width > 875){
    window.location = "https://rendex.se/myaccount"
  }
  else{
    //do nothing
  }
}
//Click on back button, to see the settings options again
document.getElementById('back-to-options-settings').onclick = () =>{
  document.getElementById('settings-window-mid-options').style.display = "flex";
  document.getElementById('back-to-options-settings').style.display = "none";
  var divs = document.querySelectorAll('.settings-window-mid-option-display');
  for(x in divs){
    divs[x].style.display = "none";
  }
}

function clearSettingsList(){
  document.getElementById('back-to-options-settings').style.display = "none";
  /*
  var options = document.getElementsByClassName('settings-option');
  for(i=0; i < options.length; i++){
    options[i].style.background = "";
    options[i].style.color = "black";
  }
  */
  var settingWindows = document.getElementsByClassName('settings-window-mid-option-display');
  for(i=0; i < settingWindows.length; i++){
    settingWindows[i].style.display = "none";
  }
  
  document.getElementById('settings-window-upload-picture').value = "";
}
function settingsListClick(id){
  /*
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
  */

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
              document.getElementById('back-to-options-settings').style.display = "flex";
              document.getElementById('settings-window-mid-options').style.display = "none";
              if(id == "settings-option1"){ //Kontaktuppgifter
                document.getElementById('settings-window-kontaktuppgifter').style.display = "flex";
                document.getElementById('settings-window-firstname').innerText = `${response[1]}`;
                document.getElementById('settings-window-lastname').innerText = `${response[2]}`;
                document.getElementById('settings-window-streetadress').value = `${response[5]}`;
                document.getElementById('settings-window-streetnumber').value = `${response[6]}`;
                document.getElementById('settings-window-zipcode').value = `${response[7]}`;
                document.getElementById('settings-window-phonenumber').value = `${response[8]}`;
                if(response[9] !== null || response[9] !== ""){
                  document.getElementById('settings-window-file-existing-name').innerText = `${response[9].replace("./Uploads/", "")}`;
                  document.getElementById('settings-window-file-existing-name').style.color = "blue";
                  document.getElementById('settings-window-file-existing-name').setAttribute('href', `https://rendex.se${response[9].substring(1)}`);
                }
                else{
                  document.getElementById('settings-window-file-existing-name').innerText = 'Profilbild saknas';
                }
              }
              else if(id == "settings-option2"){ //Byt Lösenord (Change password)
                document.getElementById('settings-window-changepassword').style.display = "flex";
              }
              else if(id == "settings-option3"){ //Företagsprofil
                document.getElementById('settings-window-companyprofile').style.display = "flex";
                document.getElementById('myaccount-beskrivning').value = `${response[10]}`;
                document.getElementById('settings-window-website-link').value = `${response[11]}`;
              }
              else if(id == "settings-option4"){
            
              }
              else if(id == "settings-option5"){
                window.location = "https://rendex.se/myaccount"
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

/*****************Kontaktuppgifter */
document.getElementById('settings-window-kontaktuppgifter-btn').addEventListener('click', function(){
  var loginId = getCookie("a_user");
  var newArrayLoginId = loginId.split(',');
  var accountid = newArrayLoginId[0];
  var role = newArrayLoginId[1];

  var imageValue = document.getElementById('settings-window-upload-picture').value
  if(imageValue == null || imageValue == undefined || imageValue === ""){
    updateContactInformation();
  }
  else{
    var formData = new FormData();
  
    var image = document.getElementById('settings-window-upload-picture').files[0];
  
    formData.append("profilepicture", image);
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
            var query = JSON.parse(response);
            if(query.length == 10){
              $.ajax(
                {
                  url: './PHP/delete.php',
                  method: 'POST',
                  dataType: 'text',
                  data: {
                    path: `.${query[9]}`
                  },
                    success: function(response){
                      //do nothing
                    },
                }
              );
              $.ajax(
                {
                  url: './PHP/uploadimage.php',
                  method: 'POST',
                  dataType: 'json',
                  cache: false,
                  contentType: false,
                  processData: false,
                  data: formData,
                    success: function(response){
                      updateContactInformation(response);
                    },
                }
              );
            }
            else{
              $.ajax(
                {
                  url: './PHP/uploadimage.php',
                  method: 'POST',
                  dataType: 'json',
                  cache: false,
                  contentType: false,
                  processData: false,
                  data: formData,
                    success: function(response){
                      console.log(response);
                      updateContactInformation(response);
                    },
                }
              );
            }
          }
      }
    );
  }

  //location.reload();
});

function updateContactInformation(imagePath){
  var loginId = getCookie("a_user");
  var newArrayLoginId = loginId.split(',');
  var accountid = newArrayLoginId[0];
  var role = newArrayLoginId[1];

  var firstname = document.getElementById('settings-window-firstname').value;
  var lastname = document.getElementById('settings-window-lastname').value;
  var phonenumber = document.getElementById('settings-window-phonenumber').value;
  var alertnativePhonenumber = document.getElementById('settings-window-phonenumber-alternative').value;
  var streetadress = document.getElementById('settings-window-streetadress').value;
  var streetnumber = document.getElementById('settings-window-streetnumber').value;
  var zipcode = document.getElementById('settings-window-zipcode').value;

  if(imagePath !== undefined && imagePath !== null && imagePath.substring(0,10) == "../Uploads"){

    $.ajax(
      {
        url: './PHP/accountpage.php',
        method: 'POST',
        dataType: 'text',
        data: {
          requestid: 1,
          role: role,
          accountid: accountid,
          imagepath: imagePath.substring(1),
          phonenumber: phonenumber,
          alternativephonenumber: alertnativePhonenumber,
          streetadress: streetadress,
          streetnumber: streetnumber,
          zipcode: zipcode,
        },
        success: function(response){
          console.log(response);
          location.reload();
        },
      }
    )

  }
  else{
    $.ajax(
      {
        url: './PHP/accountpage.php',
        method: 'POST',
        dataType: 'text',
        data: {
          requestid: 2,
          role: role,
          accountid: accountid,
          phonenumber: phonenumber,
          alternativephonenumber: alertnativePhonenumber,
          streetadress: streetadress,
          streetnumber: streetnumber,
          zipcode: zipcode,
        },
        success: function(response){
          console.log(response);
          location.reload();
        },
      }
    )
  }
}

//Trigger event for changing password
//
document.getElementById('settings-window-password-btn').onclick = () =>{
  var passwordOld = document.getElementById('settings-window-old-password').value;
  var passwordOldInput = document.getElementById('settings-window-old-password');
  var passwordNew = document.getElementById('settings-window-new-password').value;
  var passwordNewInput = document.getElementById('settings-window-new-password');

  //Change Regex with new password requirements
  //Requirements: Capital and small letters, minimum 1 digit.
  var regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])")

  var user = document.getElementById('myaccount-email').textContent;

  if(passwordOld !== passwordNew){
    if(passwordNew.length >= 8 && regex.test(passwordNew) == true){
      $.ajax(
        {
          url: './PHP/login.php', //this is to check the old password,
          method: 'GET',          //if success, correct old password has been given
          dataType: 'text',
          data: {
            password: passwordOld,
            username: user,
          },
          success: function(response){
            if(response[1] == 1){
              console.log("Success!")
              $.ajax(
                {
                  url: './PHP/password.php', //this is to check the old password,
                  method: 'POST',          //if success, correct old password has been given
                  dataType: 'text',
                  data: {
                    requestid: 1,
                    password: passwordNew,
                    username: user,
                  },
                  success: function(response){
                    if(response == 1){
                      var response = JSON.parse(response);
                      location.reload();
                    }
                    else{
                      var response = JSON.parse(response);
                      alert("Något gick fel, var god och pröva igen")
                    }
                  },
                }
              )
            }
            else{
              alert("Felaktigt Lösenord ")
            }
          },
        }
      )
    }
    else{
      passwordOldInput.style.borderColor = "red";
      passwordNewInput.style.borderColor = "red";
    }
  }
  else{
    passwordOldInput.style.borderColor = "red";
    passwordNewInput.style.borderColor = "red";
    alert("Nya lösenordet kan inte vara samma som ditt tidigare")
  }
}
document.getElementById('show-password-row-1').onclick = () => {
  var ariaLabel = document.querySelectorAll('.mask-password')[0].getAttribute('aria-label')
  if(ariaLabel == null || ariaLabel == undefined || ariaLabel === "" || ariaLabel === "untoggled"){
    document.querySelectorAll('.mask-password-strikethrough')[0].style.display = "none";
    document.querySelectorAll('.mask-password')[0].setAttribute('aria-label', 'toggled')
    document.getElementById('settings-window-old-password').setAttribute('type', 'text');
  }
  else{
    document.querySelectorAll('.mask-password-strikethrough')[0].style.display = "";
    document.querySelectorAll('.mask-password')[0].setAttribute('aria-label', 'untoggled')
    document.getElementById('settings-window-old-password').setAttribute('type', 'password');
  }
}
document.getElementById('show-password-row-2').onclick = () => {
  var ariaLabel = document.querySelectorAll('.mask-password')[1].getAttribute('aria-label')
  if(ariaLabel == null || ariaLabel == undefined || ariaLabel === "" || ariaLabel === "untoggled"){
    document.querySelectorAll('.mask-password-strikethrough')[1].style.display = "none";
    document.querySelectorAll('.mask-password')[1].setAttribute('aria-label', 'toggled')
    document.getElementById('settings-window-new-password').setAttribute('type', 'text');
  }
  else{
    document.querySelectorAll('.mask-password-strikethrough')[1].style.display = "";
    document.querySelectorAll('.mask-password')[1].setAttribute('aria-label', 'untoggled')
    document.getElementById('settings-window-new-password').setAttribute('type', 'password');
  }
}

//Trigger event for company profile
//
document.getElementById('settings-window-companyprofile-btn').onclick = () => {
  var descriptionText = document.getElementById('myaccount-beskrivning').value
  var websiteLink = document.getElementById('settings-window-website-link').value

  if(descriptionText.length > 10 && websiteLink.length > 4){

  }
  else if(descriptionText.length > 10 && websiteLink.length == 0){

  }
  else if(descriptionText.length == 0 && websiteLink.length > 4){

  }
}