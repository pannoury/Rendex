import * as cookie from "./Components/cookies.js";
import * as language from "./Components/language.js";
import * as navbar from "./Components/navbar.js";

window.onload = function(){
  navbar.loggedInControl();
  cookie.cookieConsentLoad();
  displayMyAccount();
  clearSettingsList();

  document.getElementById('loginanchorTrue').style.color = "#f07900";
};

function displayMyAccount(){
  var loginId = getCookie("a_user");
  var newArrayLoginId = loginId.split(',');
  var accountid = newArrayLoginId[0];
  var role = newArrayLoginId[1];
  if(accountid !== null && accountid !== undefined && accountid !== ""){
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
                if(response[9] === ""){
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
                    img.style.width = "30vw";
                    img.style.height = "30vw";
                    document.getElementById('myaccount-profilepicture').appendChild(img);
                  }
                }
                else if(response[9] !== ""){
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
                    img.style.width = "30vw"
                    img.style.height = "30vw"
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
              // add error page9
            }
          },
      }
    );
    document.getElementById('showpublicprofile-btn').setAttribute('aria-label', `https://rendex.se/profile?id=${accountid}`);
  }
  else{
    window.location = 'https://rendex.se/login';
  }
};
document.getElementById('showpublicprofile-btn').onclick = () =>{
  var ariaLabel = document.getElementById('showpublicprofile-btn').getAttribute('aria-label')
  if(ariaLabel === null || ariaLabel === undefined || ariaLabel === ""){
    //do nothing...
  }
  else{
    window.location = `${ariaLabel}`;
  }
}


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

  document.getElementById('settings-window-upload-picture').value = "";
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
              if(id == "settings-option1"){ //Kontaktuppgifter
                document.getElementById('settings-window-kontaktuppgifter').style.display = "flex";
                document.getElementById('settings-window-firstname').innerText = `${response[1]}`;
                document.getElementById('settings-window-lastname').innerText = `${response[2]}`;
                document.getElementById('settings-window-streetadress').value = `${response[5]}`;
                document.getElementById('settings-window-streetnumber').value = `${response[6]}`;
                document.getElementById('settings-window-zipcode').value = `${response[7]}`;
                document.getElementById('settings-window-phonenumber').value = `${response[8]}`;
                if(response[9] !== ""){
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
                if(response[10] !== "" || response[10] !== null && response[11] !== "" && response[11] !== null){
                  document.getElementById('myaccount-beskrivning').value = `${response[10]}`;
                  document.getElementById('settings-window-website-link').value = `${response[11]}`;
                }
                else if(response[10] === "" || response[10] == null && response[11] === "" && response[11] == null){
                  document.getElementById('myaccount-beskrivning').value = "";
                  document.getElementById('settings-window-website-link').value = "";
                }
                else{
                  if(response[10] === "" || response[10] == null){
                    document.getElementById('myaccount-beskrivning').value = "";
                    document.getElementById('settings-window-website-link').value = `${response[11]}`;
                  }
                  else if(response[11] === "" || response[11] == null){
                    document.getElementById('myaccount-beskrivning').value = `${response[10]}`;
                    document.getElementById('settings-window-website-link').value = "";
                  }
                }
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

  var firstname = document.getElementById('settings-window-firstname');
  var lastname = document.getElementById('settings-window-lastname');
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
          firstname: firstname,
          lastname: lastname,
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
  var loginId = getCookie("a_user");
  var newArrayLoginId = loginId.split(',');
  var accountid = newArrayLoginId[0];
  var role = newArrayLoginId[1];

  console.log(descriptionText.length, websiteLink.length)
  if(descriptionText.length > 10 && websiteLink.length > 4){
    $.ajax(
      {
        url: './PHP/accountpage.php', //this is to check the old password,
        method: 'POST',          //if success, correct old password has been given
        dataType: 'text',
        data: {
          requestid: 3,
          description: descriptionText,
          website: websiteLink,
          role: role,
          accountid: accountid
        },
        success: function(response){
          var response = JSON.parse(response);
          if(response == 1){
            location.reload();
          }
        },
      }
    )
  }
  else if(descriptionText.length > 10 && websiteLink.length == 0){
    $.ajax(
      {
        url: './PHP/accountpage.php', //this is to check the old password,
        method: 'POST',          //if success, correct old password has been given
        dataType: 'text',
        data: {
          requestid: 3,
          role: role,
          accountid: accountid,
          description: descriptionText
        },
        success: function(response){
          var response = JSON.parse(response);
          if(response == 1){
            location.reload();
          }
        },
      }
    )
  }
  else if(descriptionText.length == 0 && websiteLink.length > 4){
    $.ajax(
      {
        url: './PHP/accountpage.php', //this is to check the old password,
        method: 'POST',          //if success, correct old password has been given
        dataType: 'text',
        data: {
          requestid: 3,
          role: role,
          accountid: accountid,
          website: websiteLink
        },
        success: function(response){
          var response = JSON.parse(response);
          if(response == 1){
            location.reload();
          }
        },
      }
    )
  }
  else{
    // do nothing
  }
}
document.getElementById('create-article-btn').onclick = () => {
  window.location = "https://rendex.se/createarticle";
}
document.getElementById('my-articles').onclick = () => {
  clearMyAccountSettings()
  document.getElementById('my-articles-wrapper-wrapper').innerHTML = "";
  document.getElementById('my-articles').style.backgroundColor = "#d4d4d4"

  var loginId = cookie.getCookie("a_user");
  var newArrayLoginId = loginId.split(',');
  id = newArrayLoginId[0];

  $.ajax(
      {
          url: './PHP/articleload.php',
          dataType: 'text',
          method: 'GET',
          data: {
              requestid: 9,
              userid: id,
          },
          success: function(response){
              var response = JSON.parse(response);
              console.log(response);

              if(response == 0){
                  document.getElementById('my-articles-wrapper-wrapper').innerHTML = `<div id="my-articles-no-articles-found"></div>`;
                  document.getElementById('my-articles-no-articles-found').innerHTML = `<img src="./assets/images/profile-not-found.svg alt="no-articles">`;
                  document.getElementById('my-articles-no-articles-found').innerHTML = `<h3>Inga annonser hittades</h3>`
                  document.getElementById('my-articles-no-articles-found').style.display = "flex";
              }
              else if(response[0].constructor === Array){ //multi array
                  response.forEach(element => {
                      createMyArticles(element);
                  });
              }
              else{ //single hit
                  createMyArticles(response)
              }
          },
      }
  );

  document.querySelectorAll('.profile-header-row2-column')[1].style.display = "block";
  document.getElementById('my-articles-wrapper-wrapper').style.display = "block";
  document.getElementById('profile-header-row2-column-header').innerText = "Mina Annonser";

  var width = window.innerWidth;
  if(width > 875){
      // do nothing
  }
  else{
      document.querySelectorAll('.profile-header-row2-column')[0].style.display = "none";
      document.querySelectorAll('.profile-header-row2-column-back-btn')[0].style.display = "flex";
  }
}
document.getElementById('my-articles-back-btn').onclick = () => { //close My Articles (mobile version)
  document.querySelectorAll('.profile-header-row2-column')[0].style.display = "block";
  document.querySelectorAll('.profile-header-row2-column')[1].style.display = "none";
  document.querySelectorAll('.profile-header-row2-column-back-btn')[0].style.display = "none";
  document.getElementById('my-articles-wrapper-wrapper').style.display = "none";
  var Articles = document.getElementsByClassName('my-articles-wrapper');
  for(i=0; i < Articles.length; i++){ //removes Articles so we dont have duplications in case the user goes back
      Articles[i].remove();
  }
  clearMyAccountSettings(); //remove background color/selection from all items in list
}
document.getElementById('my-saved-articles').onclick = () => {
  clearMyAccountSettings()
  document.getElementById('my-articles-wrapper-wrapper').innerHTML = "";
  document.getElementById('my-saved-articles').style.backgroundColor = "#d4d4d4"

  var loginId = cookie.getCookie("a_user");
  var newArrayLoginId = loginId.split(',');
  id = newArrayLoginId[0];

  $.ajax(
      {
          url: './PHP/individuals.php',
          dataType: 'text',
          method: 'GET',
          data: {
              requestid: 2,
              userid: id,
              role: newArrayLoginId[1],
          },
          success: function(response){
              var response = JSON.parse(response);
              console.log(response);

              if(response === ""){
                  document.getElementById('my-articles-wrapper-wrapper').innerHTML = `<div id="my-articles-no-articles-found"></div>`;
                  document.getElementById('my-articles-no-articles-found').innerHTML = `<img src="./assets/images/profile-not-found.svg" alt="no-articles"><h3>Inga annonser hittades</h3>`;
                  document.getElementById('my-articles-no-articles-found').style.display = "flex";
              }
              else{
                  if(response.includes(',')){ //multiple saved articles
                      var response = response.split(',');
                      response.forEach(element => {
                          retrieveArticle(element);
                      });
                  }
                  else{ //single hit
                      retrieveArticle(response)
                  }

              }
          },
      }
  );

  function retrieveArticle(id){
      console.log(id);
      $.ajax(
          {
              url: './PHP/articleload.php',
              dataType: 'text',
              method: 'GET',
              data: {
                  requestid: 10,
                  articleid: id,
              },
              success: function(response){
                  var response = JSON.parse(response);
                  if(response === 0){
                      document.getElementById('my-articles-wrapper-wrapper').innerHTML = `<div id="my-articles-no-articles-found"></div>`;
                      document.getElementById('my-articles-no-articles-found').innerHTML = `<img src="./assets/images/profile-not-found.svg" alt="no-articles"><h3>Inga annonser hittades</h3>`;
                      document.getElementById('my-articles-no-articles-found').style.display = "flex";
                  }
                  else{
                      createMyArticles(response, true);
                  }
              },
          }
      );
  }

  document.querySelectorAll('.profile-header-row2-column')[1].style.display = "block";
  document.getElementById('my-articles-wrapper-wrapper').style.display = "block";
  document.getElementById('profile-header-row2-column-header').innerText = "Sparade Annonser";

  var width = window.innerWidth;
  if(width > 875){
      // do nothing
  }
  else{
      document.querySelectorAll('.profile-header-row2-column')[0].style.display = "none";
      document.querySelectorAll('.profile-header-row2-column-back-btn')[0].style.display = "flex";
  }
}
function createMyArticles(array, viewSavedTrue){
  var topWrapper = document.getElementById('my-articles-wrapper-wrapper');

  var profileHeaderColumn2Div = document.createElement('div')
  profileHeaderColumn2Div.setAttribute('class', 'profile-header-column-2-div');
  var myArticlesWrapper = document.createElement('a')
  myArticlesWrapper.setAttribute('class','my-articles-wrapper');
  profileHeaderColumn2Div.appendChild(myArticlesWrapper);

  var myArticlesWrapperHeader = document.createElement('div')
  myArticlesWrapperHeader.setAttribute('class', 'my-articles-wrapper-header')
  var myArticlesHeader = document.createElement('h4')
  myArticlesHeader.setAttribute('class', 'my-articles-header');
  var myArticlesDate = document.createElement('p')
  myArticlesDate.setAttribute('class', 'my-articles-date')
  myArticlesWrapperHeader.appendChild(myArticlesHeader, myArticlesDate); //append to A

  var myArticlesMid = document.createElement('div')
  myArticlesMid.setAttribute('class', 'my-articles-mid')
  var myArticlesDescription = document.createElement('p')
  myArticlesDescription.setAttribute('class', 'my-articles-description')
  myArticlesMid.appendChild(myArticlesDescription); //append to A

  var myArticlesBottom = document.createElement('div')
  myArticlesBottom.setAttribute('class', 'my-articles-bottom')
  var myArticlesCategory = document.createElement('p')
  myArticlesCategory.setAttribute('class', 'my-articles-category')
  myArticlesBottom.appendChild(myArticlesCategory)
  
  if(viewSavedTrue === true){
      //do not add view statistics, since its not your articles
  }
  else if(viewSavedTrue === undefined || viewSavedTrue === null){
      var myArticlesViews = document.createElement('div')
      myArticlesViews.setAttribute('class', 'my-articles-views')
      myArticlesViews.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/></svg>'
      var myArticlesViewNumerical = document.createElement('p')
      myArticlesViewNumerical.setAttribute('class', 'my-articles-view-numerical');
      myArticlesBottom.appendChild(myArticlesViews)
      myArticlesViews.appendChild(myArticlesViewNumerical)
      myArticlesViewNumerical.innerText = `${array[10]}`
  }


  myArticlesWrapper.appendChild(myArticlesWrapperHeader)
  myArticlesWrapper.appendChild(myArticlesMid)
  myArticlesWrapper.appendChild(myArticlesBottom)

  topWrapper.appendChild(profileHeaderColumn2Div)

  myArticlesHeader.innerText = `${array[6]}`
  myArticlesDate.innerText = `${array[8].substring(0,10)}`
  myArticlesDescription.innerText = `${array[4].replace(/&lt;br&gt;/g,"")}`
  myArticlesCategory.innerText = `${array[5]}`
  myArticlesWrapper.setAttribute('href', `https://rendex.se/article?id=${array[1]}`)


}
function clearMyAccountSettings(){
  var settingOptions = document.getElementsByClassName('profile-header-row2-option');
  for(i=0; i < settingOptions.length; i++){
      settingOptions[i].style.backgroundColor = "";
  }
}