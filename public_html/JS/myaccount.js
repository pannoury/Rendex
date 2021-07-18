window.onload = function(){
  displayMyAccount();
};

function displayMyAccount(){
  var loginId = getCookie("a_user");
  var newArrayLoginId = loginId.split(',');
  var accountid = newArrayLoginId[0];
  var role = newArrayLoginId[1];
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
              if(response.length == 8){
                var img = document.createElement('img');
                img.setAttribute('id', "myaccount-profilepicture")
                img.src = './assets/images/unchosen-profilepic.svg';
                img.style.width = "60px"
                img.style.height = "60px"
                document.getElementById('myaccount-profilepicture').appendChild(img);
              }
              else if(response.length == 9){
                
              }
              var firstName = response[1];
              var lastName = response[2];
              var email = response[3];
              document.getElementById('myaccount-name-wrapper').innerText = `${firstName} ${lastName}`;
            }
            else if(role == 2){ //organisation
            }
          }
          else{
            console.log("Failed to fetch data from server");
          }

        },
    }
  );
};


document.getElementById('logout').onclick = function(){
  eraseCookie("a_user");
  sessionStorage.clear();
  setTimeout(function(){
    window.location = './index.html';
  }, 2000);
};