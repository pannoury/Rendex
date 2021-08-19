$(document).ready(function(){
    loggedInControl();
    cookieConsentLoad();
    getURLParameterProfile();
    viewControl();
});

function viewControl(){ //checks whether its you looking at your public profile or not
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    cookieid = getCookie("a_user");
    var cookieid = cookieid.split(',');
    
    if(cookieid[0] == id){ //you are looking at your own page
        document.getElementById('initiate-chat').style.display = "none";
    }
    else if(cookieid[0] == null || cookieid[0] == undefined){
        window.location = "https://rendex.se/login"
    }
}

function getURLParameterProfile(){
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    if(id !== null && id !== undefined && id !== " "){
        $.ajax(
            {
                url: './PHP/individuals.php',
                dataType: 'text',
                method: 'GET',
                data: {
                    requestid: 1,
                    userid: id,
                    role: 0, //since we dont know the role yet
                },
                success: function(response){
                    var response = JSON.parse(response);
                    
                    if(response[1] == 1){ //individual
                        individualRender(response, id);
                    }
                    else if(response[1] == 2){ //organisation
                        organisationRender(response, id);
                    }
                    else if(response[1] === ""){
                        document.getElementById('no-account-error').style.display = "flex";
                        document.getElementById('account-wrapper-wrapper').style.display = "none";
                    }
                }
            }
        );
    }
    else{
        document.getElementById('no-account-error').style.display = "flex";
        document.getElementById('account-wrapper-wrapper').style.display = "none";
    }

};


function individualRender(response, id){
    document.getElementById('profile-email').innerText = `${response[2]}`
    $.ajax(
        {
            url: './PHP/individuals.php',
            dataType: 'text',
            method: 'GET',
            data: {
                userid: id,
                role: 1,
            },
            success: function(response){
                var response = JSON.parse(response);
                document.getElementById('accountpage-companyname').innerText = `${response[1]} ${response[2]}`;
                
                //hide information that is only shown among organisation profiles
                document.querySelectorAll('.profile-top-info-row')[2].style.display = "none";
                document.querySelectorAll('.profile-top-info-row')[3].style.display = "none";
                
                if(response.length == 9){
                    document.getElementById('companylogoimage').setAttribute('src', './assets/images/unchosen-profilepic.svg');
                }
                else if(response.length == 10){
                    document.getElementById('companylogoimage').setAttribute('src', `${response[9]}`);
                }
            }
        }
    );
}

function organisationRender(response, id){
 //do nothing yet
 //this function populates the profile site in case the profile is an organisation
 //needs to be added
}

//These functions allow users to text other users in case they dont have
//an existing conversation, or if they want to text in an already existing chat
//
/************Chat function */
document.getElementById('initiate-chat').addEventListener('click', function(){
    var width = window.innerWidth;
    console.log(width)

    document.getElementById('initiate-chat').setAttribute('aria-label', 'open');
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    cookieid = getCookie("a_user");
    var cookieid = cookieid.split(',');

    if(width > 875){
        document.getElementById('new-chatwindow').style.width = "50vw";
    }
    else{
        document.getElementById('new-chatwindow').style.display = "block";
        document.getElementById('new-chatwindow').style.width = "100vw";
    }
    document.getElementById('darkcover').style.display = "block"


    $.ajax(
        {
            url: './PHP/individuals.php',
            dataType: 'text',
            method: 'GET',
            data: {
                userid: id,
                role: 1,
            },
            success: function(response){
                var response = JSON.parse(response);
                document.getElementById('new-chat-reciever').innerText = `${response[1]} ${response[2]}`;
            }
        }
    );
})

document.getElementById('close-new-chat').addEventListener('click', function(){
    document.getElementById('new-chatwindow').style.width = "0vw";
    document.getElementById('darkcover').style.display = "none"
});


document.getElementById('new-send-wrapper').addEventListener('click', function(){
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    cookieidraw = getCookie("a_user");
    var cookieid = cookieidraw.split(',');

    var text = document.getElementById('new-chatwindow-input').value;

    var chatid = `${cookieid[0]}${id}`;
    var chatid2 = `${id}${cookieid[0]}`;

    var today = new Date();
    var month = ('0' + (today.getMonth()+1)).slice(-2);
    var date = `${today.getFullYear()}-${month}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

    console.log(chatid);


    if(text.length >= 1){
        $.ajax( //check if conversation does exist
            {
                url: './PHP/inbox.php',
                dataType: 'text',
                method: 'GET',
                data: {
                    requestid: 10,
                    chatid: chatid,
                    chatid2: chatid2,
                },
                success: function(response){
                    var response = JSON.parse(response);
                    if(response !== 0){
                        $.ajax( // sends the text in an already existing conversation
                            {
                                url: './PHP/inbox.php',
                                dataType: 'text',
                                method: 'POST',
                                data: {
                                    requestid: 5,
                                    sender: cookieid[0],
                                    reciever: id,
                                    chatid: response,
                                    text: text,
                                    date: date,
                                },
                                success: function(response){
                                    var response = JSON.parse(response);
                                    if(response == 1){
                                        window.location = "https://rendex.se/inbox";
                                    }
                                }
                            }
                        );
                    }
                    else{
                        $.ajax( //creates a new conversation
                            {
                                url: './PHP/inbox.php',
                                dataType: 'text',
                                method: 'POST',
                                data: {
                                    requestid: 5,
                                    sender: cookieid[0],
                                    reciever: id,
                                    chatid: chatid,
                                    text: text,
                                    date: date,
                                },
                                success: function(response){
                                    var response = JSON.parse(response);
                                    if(response == 1){
                                        window.location = "https://rendex.se/inbox";
                                    }
                                }
                            }
                        );
                    }
                }
            }
        );
    }
    else{
        alert("Vänligen skriv ditt meddelande");
    }

});
/************Chat function */