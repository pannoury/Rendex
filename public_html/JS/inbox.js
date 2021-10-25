import * as cookies from "./Components/cookies.js";
import * as navbar from "./Components/navbar.js";
import * as inbox from "./inboxSettings.js";

var insertWindow = document.getElementById('insert-window');
var windowButton = document.getElementById('insert-button-chat');
var chatOptionsButton = document.getElementById('conversation-options');
var chatOptionsWindow = document.getElementById('conversation-options-window');

window.addEventListener('load', function conversationCount(){
    navbar.loggedInControl();
    cookies.cookieConsentLoad();
    inbox.cssChatList();
    inbox.populateChatList();
    sessionStorage.clear();
    document.getElementById('chat-input').value = "";
    $(".conversation-selection").each(function (){
        $(this).setAttribute('aria-label', "diselected");
    });
    document.getElementById('insert-window').style.display = "none";
    $('.text-sent-wrapper').css("justify-content", "flex-start");
 
    document.getElementById('inboxlink1').style.color = "#f07900"
    webSocket()
}); 

function webSocket(){
    var socket = new WebSocket('https://codenoury.se/PHP/inbox2.php');
    socket.onmessage = function(e) {
        console.log(e);
    };
}



/********FILE INPUT IN CHAT WINDOW******* */
document.getElementById('imginputlink').addEventListener('click', () => {
    document.getElementById('imginput').click();
});
document.getElementById('fileinputlink').addEventListener('click', () => {
    document.getElementById('fileinput').click();
});

$('#fileinput').on('change', function(){ //not working
    var output = [];
    for (var i = 0, len = this.files.length; i < len; i++) {
        output[output.length] =  this.files[i].name;
        /*
        document.getElementById('chat-input').value = `${output[0]}`;
        document.getElementById('chatinput-sendbtn').style.display = "block";
        document.getElementById('chat-input').style.position = "absolute";
        document.getElementById('chat-input').style.height = "150px";
        document.getElementById('chat-input').style.marginBottom = "125px";
        */

        var div = document.createElement('div');
        var chatInput = document.getElementById('chat-input');
        /*
        if(output[0].includes('pdf')){
            var img = document.createElement("img");
            img.setAttribute('src', './assets/images/fileicon.svg');
            img.style.height = "20px";
            img.style.width = "20px";
            div.style.display = "flex";
            div.style.flexDirection = "column";
            var p = document.createElement("p");
            p.innerText = "PDF";
            p.style.fontWeight = "bold";
            div.appendChild(img);
            div.appendChild(p);
            chatInput.appendChild(div);
        }
        */
    }
});
/********FILE INPUT IN CHAT WINDOW******* */


/*************ONCE A CONVO HAS BEEN SELECTED, THIS FUNCTION IS 
INITATED TO POPULATE ALL TEXT THAT HAS BEEN SENT/RECIEVED************* */

/********MOBILE VERSION, LEAVING A SPECIFIC CONVERSATION ********* */
document.getElementById('leaveconversation-anchor').onclick = function (){
    sessionStorage.clear("c_id");
    location.reload()
};
document.getElementById('chat-input').oninput = function(){
    var inputValue = document.getElementById('chat-input').value;
    if(inputValue.length >= 1){
        document.getElementById('chatinput-sendbtn').style.display = "block";
    }
    else{
        document.getElementById('chatinput-sendbtn').style.display = "none";
    }
};

document.getElementById('chatinput-sendbtn').addEventListener('click', function (){
    var loginId = cookies.getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    var accountid = newArrayLoginId[0];
    var text = document.getElementById('chat-input').value;
    var chatList = document.getElementById('chat-list');
    var today = new Date();
    var month = ('0' + (today.getMonth()+1)).slice(-2);
    var date = `${today.getFullYear()}-${month}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    if(text.length >= 1){
        $.ajax(
            {
                url: './PHP/inbox.php',
                dataType: 'text',
                method: 'POST',
                data: {
                    requestid: 5,
                    sender: accountid,
                    reciever: sessionStorage.getItem("counterpart"),
                    chatid: sessionStorage.getItem("chatid"),
                    text: text,
                    date: date,
                },
                success: function(response){
                    if(response = 1){
                        //reactiveTexting();
                    }
                },
            }
        );
    };
});

function reactiveTexting(){
    var loginId = cookies.getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    var accountid = newArrayLoginId[0];
    $.ajax(
        {
            url: './PHP/inbox.php',
            dataType: 'text',
            method: 'GET',
            data: {
                requestid: 6,
                sender: accountid,
                reciever: sessionStorage.getItem("counterpart"),
                chatid: sessionStorage.getItem("chatid"),
            },
            success: function(response){
                var queryChat = JSON.parse(response);
                if(queryChat[0] != accountid){ //grey text AKA recieved text
                    var li = document.createElement('li');
                    li.setAttribute('class', 'chat-item');
                    li.setAttribute('id', 'text-recieved');
                    var div1 = document.createElement('div');
                    div1.setAttribute('class', 'text-recieved-wrapper');
                    li.appendChild(div1);
                    var div2 = document.createElement('div');
                    div2.setAttribute('class', 'chat-time-stamp');
                    div1.appendChild(div2);
                    var p1 = document.createElement('p');
                    div2.appendChild(p1);
                    var div3 = document.createElement('div');
                    div3.setAttribute('class', 'chat-text');
                    div1.appendChild(div3);
                    var p2 = document.createElement('p');
                    div3.appendChild(p2);

                    p1.innerText = `${queryChat[2].substring(0,16)}`;
                    p2.innerText = `${queryChat[3]}`;

                    document.getElementById('chat-list').appendChild(li);
                }
                else if(queryChat[0] == accountid){ //blue text AKA your text
                    var li = document.createElement('li');
                    li.setAttribute('class', 'chat-item');
                    li.setAttribute('id', 'text-sent');
                    var div1 = document.createElement('div');
                    div1.setAttribute('class', 'text-sent-wrapper');
                    li.appendChild(div1);
                    var div2 = document.createElement('div');
                    div2.setAttribute('class', 'chat-time-stamp');
                    div1.appendChild(div2);
                    var p1 = document.createElement('p');
                    div2.appendChild(p1);
                    var div3 = document.createElement('div');
                    div3.setAttribute('class', 'chat-text');
                    div1.appendChild(div3);
                    var p2 = document.createElement('p');
                    div3.appendChild(p2);

                    p1.innerText = `${queryChat[2].substring(0,16)}`;
                    p2.innerText = `${queryChat[3]}`;

                    document.getElementById('chat-list').appendChild(li);

                    /*****UPDATE CHAT CUE IN CONVOLIST */
                    var text = queryChat[3];
                    var chatId = sessionStorage.getItem("chatid");
                    var textWrapper = document.getElementById(`conversation-${chatId}`).getElementsByClassName('message-cue')[0];
                    var textCue = textWrapper.getElementsByTagName("p")[0];
                    var timeCue = textWrapper.getElementsByTagName("p")[1];
                    timeCue.innerText = `${queryChat[2].substring(0,10)}`;
                    inbox.setDate(timeCue, queryChat[2]);
                    if(text.length > 20){
                        textCue.innerText = `You: ${text.substring(0,20)}...`;
                    }
                    else{
                        textCue.innerText = `You: ${text}`;
                    }
                }
                document.getElementById('chat-input').value = ""; //removes the text after you hit send
                document.getElementById('chatinput-sendbtn').style.display = "none";
                $("#chat-list").scrollTop($("#chat-list")[0].scrollHeight); //not working
            },
        }
    );
}
function reactiveTextLoading(){
    var loginId = cookies.getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    var accountid = newArrayLoginId[0];
    var id = sessionStorage.getItem("chatid");
    //var chatRows = $('.text-recieved-wrapper').length;

    $.ajax(
        {
            url: './PHP/inbox.php',
            dataType: 'text',
            method: 'GET',
            data: {
                requestid: 4,
                chatid: id,
            },
            success: function(response){
                var chatArray = JSON.parse(response);
                if(chatArray[0].constructor === Array){
                    if(accountid == chatArray[0][1]){ //you're the sender
                        reactiveTextLoading2(chatArray[0][2]);
                    }
                    else if(accountid != chatArray[0][1]){ //you're the reciever
                        reactiveTextLoading2(chatArray[0][1]);
                    }
                }
                else{
                    if(accountid == chatArray[1]){ //you're the sender
                        reactiveTextLoading2(chatArray[2]);
                    }
                    else if(accountid != chatArray[1]){ //you're the reciever
                        reactiveTextLoading2(chatArray[1]);
                    }
                }
            }
        }
    )
}
//reactiveTextLoading();

function reactiveTextLoading2(sender){
    var chatRows = document.querySelectorAll('.text-recieved-wrapper').length;
    $.ajax(
        {
            url: './PHP/inbox.php',
            dataType: 'text',
            method: 'GET',
            data: {
                requestid: 7,
                chatRows: chatRows,
                sender: sender,
                chatid: sessionStorage.getItem("chatid"),
            },
            success: function(response){
                var queryChat = JSON.parse(response);
                var number = queryChat.toString();
                var id = sessionStorage.getItem("chatid");
                if(number >= 1 && id != null){
                    $.ajax(
                        {
                            url: './PHP/inbox.php',
                            dataType: 'text',
                            method: 'GET',
                            data: {
                                requestid: 8,
                                chatid: id,
                                limit: number,
                                sender: sender,
                            },
                            success: function(response){
                                var queryChat = JSON.parse(response);
                                inbox.chatTextParser(queryChat);
                                inbox.reactivePopulateChatList();
                            },
                        }
                    );
                }
                else{ //no new chats
                    inbox.reactivePopulateChatList();
                }
            }
        },
    );
    setTimeout(reactiveTextLoading, 2000);
}

window.addEventListener('click', function(e){
    var select = e.target;
    var a = windowButton;
    var b = chatOptionsButton;

    if(select == a || select == insertWindow){
        insertWindow.style.display = "flex";
        if(chatOptionsWindow.getAttribute('aria-label') == "open"){
            chatOptionsWindow.style.display = "none";
        }
    }
    else if(select == b || select == chatOptionsWindow){
        chatOptionsWindow.style.display = "flex";
        if(windowButton.getAttribute('aria-label') == "open"){
            insertWindow.style.display = "none";
        }
    }
    else{
        chatOptionsWindow.style.display = "none";
        insertWindow.style.display = "none";
    }
});

document.getElementById('conversation-options').addEventListener('click', function(){
    var element = document.getElementById('conversation-options');
    var ariaLabel = element.getAttribute('aria-label');
    if(ariaLabel == null || ariaLabel == "closed"){
        chatOptionsWindow.style.display = "flex";
        element.setAttribute('aria-label', 'open');
    }
    else{
        chatOptionsWindow.style.display = "none";
        element.setAttribute('aria-label', 'closed');
    }

});
document.getElementById('insert-button-chat').addEventListener('click', function(){
    var element = document.getElementById('insert-button-chat');
    var ariaLabel = element.getAttribute('aria-label');
    if(ariaLabel == null || ariaLabel == "closed"){
        insertWindow.style.display = "flex";
        element.setAttribute('aria-label', 'open');
    }
    else{
        insertWindow.style.display = "none";
        element.setAttribute('aria-label', 'closed');
    }

});

document.getElementById('remove-conversation').onclick = function(){
    var preSelectedConvo = $("[aria-label='selected']");
    chatid = preSelectedConvo[0].getAttribute('id').replace('conversation-', "");
    console.log(chatid)
    $.ajax(
        {
            url: './PHP/inbox.php',
            dataType: 'text',
            method: 'POST',
            data: {
                requestid: 11,
                chatid: chatid,
            },
            success: function(response){
                location.reload();
            },
        }
    );
};