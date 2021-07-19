var insertWindow = document.getElementById('insert-window');
var windowButton = document.getElementById('insert-button-chat');
var chatOptionsButton = document.getElementById('conversation-options');
var chatOptionsWindow = document.getElementById('conversation-options-window');
let today = new Date();
var day = today.getDate();
var month = today.getMonth();
var hours = today.getHours();
var minutes = today.getMinutes();
var fullYear = today.getFullYear();

window.addEventListener('load', function conversationCount(){
    cssChatList();
    populateChatList();
    selectSpecificChatList();
    document.getElementById('chat-input').value = "";
    const url = new URL('https://rendex.se/inbox');
}); 


function populateChatList(){
    var loginId = getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    var accountid = newArrayLoginId[0];
    $.ajax(
        {
            url: './PHP/inbox.php',
            dataType: 'text',
            method: 'GET',
            data: {
                requestid: 1,
                userid: accountid,
            },
            success: function(response){
                var response = JSON.parse(response);
                sessionStorage.setItem('c_id', `${response}`);
                if(response.length == 1){ //single chatbox
                    $.ajax(
                        {
                            url: './PHP/inbox.php',
                            dataType: 'text',
                            method: 'GET',
                            data: {
                                requestid: 2,
                                chatid: sessionStorage.getItem('c_id'),
                            },
                            success: function(response){
                                var query = JSON.parse(response);
                                //Populate chat preview
                                var convoList = document.getElementById('conversation-list');
                                var a = document.createElement('a');
                                a.setAttribute('class', 'conversation-selection');
                                a.setAttribute('id', `conversation-${sessionStorage.getItem('c_id')}`);
                                a.setAttribute('onclick', 'conversationSelect(this.id)');
                                convoList.appendChild(a);
                                var div1 = document.createElement('div');
                                div1.setAttribute('class', 'conversation');
                                a.appendChild(div1);
                                //div2
                                var div2 = document.createElement('div');
                                div2.setAttribute('class', 'conversation-img');
                                div1.appendChild(div2);
                                //div3
                                var div3 = document.createElement('div');
                                div3.setAttribute('class','conversation-list-information');
                                div1.appendChild(div3);
                                var div4 = document.createElement('div');
                                div4.setAttribute('class', 'name-and-date');
                                div3.appendChild(div4);

                                var p = document.createElement('p');
                                var span = document.createElement('span');
                                span.setAttribute('class', 'bold');
                                span.innerText = ``
                                p.appendChild(span);
                                div4.appendChild(p);

                                var div5 = document.createElement('div');
                                div5.setAttribute('class', 'message-cue');
                                div3.appendChild(div5);
                                var p1 = document.createElement('p');
                                var p2 = document.createElement('p');
                                p2.setAttribute('class', 'conversation-date')
                                div5.appendChild(p1);
                                div5.appendChild(p2);
                                if(query[0] != accountid){ // you recieved latest msg
                                    $.ajax(
                                        {
                                            url: './PHP/inbox.php',
                                            dataType: 'text',
                                            method: 'GET',
                                            data: {
                                                requestid: 3,
                                                sender: query[0], //query[0] = counterpart since you recieved
                                            },
                                            success: function(response){
                                                var senderQuery = JSON.parse(response);
                                                span.innerText = `${senderQuery[1]} ${senderQuery[2]}`;
                                                var text = query[3];
                                                p2.innerText = `${query[2].substring(0,10)}`;
                                                if(text.length > 20){
                                                    p1.innerText = `${text.substring(0,20)}...`;
                                                }
                                                else{
                                                    p1.innerText = `${text}`;
                                                }
                                            },
                                        }
                                    );
                                }
                                else if(query[0] = accountid){ //you sent latest msg
                                    $.ajax(
                                        {
                                            url: './PHP/inbox.php',
                                            dataType: 'text',
                                            method: 'GET',
                                            data: {
                                                requestid: 3,
                                                sender: query[1], //query[1] = counterpart since you sent
                                            },
                                            success: function(response){
                                                var senderQuery = JSON.parse(response);
                                                span.innerText = `${senderQuery[1]} ${senderQuery[2]}`;
                                                var text = query[3];
                                                p2.innerText = `${query[2].substring(0,10)}`; //date text
                                                if(text.length > 20){
                                                    p1.innerText = `You: ${text.substring(0,20)}...`; //Text cue
                                                }
                                                else{
                                                    p1.innerText = `${text}`;
                                                }
                                            },
                                        }
                                    );
                                }
                            },
                        }
                    );
                }
                else if(response.length > 1){ //multiple chatbox
                    for(i=0; i<response.length; i++){

                    }
                }
                else if(response == 0){
                    console.log("=0");
                    document.getElementById('noconversations').style.display = "block";
                    document.getElementById('noconversations').innerText = "Inga Konversationer"
                }
            },
        }
    );
};
function iterateChatId(chatId){
    $.ajax(
        {
            url: './PHP/inbox.php',
            dataType: 'text',
            method: 'GET',
            data: {
                requestid: 2,
                chatid: chatId,
            },
            success: function(response){
                console.log(response)
                //console.log(JSON.parse(response));
                //console.log(JSON.parse(response));
                //var response = JSON.parse(response);
            },
        }
    );
}
function selectSpecificChatList(){

}

function cssChatList(){
    var a = $(".conversation-selection").length;
    if (a > 7){
        $(".inbox-separator").last().css("display", "none");
    }
};

window.addEventListener('click', function(e){
    var select = e.target;
    var a = windowButton;
    var b = chatOptionsButton;

    if(select == a || select == insertWindow){
        insertWindow.style.display = "flex";
    }
    else if(select == b || select == chatOptionsWindow){
        chatOptionsWindow.style.display = "flex";
    }
    else if (select !== a || select !== insertWindow){
        insertWindow.style.display = "none";
        chatOptionsWindow.style.display = "none";
    }
});

document.getElementById('imginputlink').addEventListener('click', () => {
    document.getElementById('imginput').click();
});
document.getElementById('fileinputlink').addEventListener('click', () => {
    document.getElementById('fileinput').click();
});

function conversationSelect(id){
    var width = window.screen.width;
    var element = document.getElementById(`${id}`).style.backgroundColor;
    var compare = document.getElementById('conversation-list').style.backgroundColor;
    if(element != compare){ //är den redan vald ska den inte populera mer
        
    }
    else{
        var loginId = getCookie("a_user");
        var newArrayLoginId = loginId.split(',');
        var accountid = newArrayLoginId[0];
        $(".conversation-selection").each(function (){
            $(this).css("backgroundColor", "#38383D");
        });
        document.getElementById(`${id}`).style.backgroundColor = "#515155";
        var id = id.substring(id.length - 1);
        sessionStorage.setItem("chatid", `${id}`);
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
                    var queryChat = JSON.parse(response);
                    for(i=0; i < queryChat.length; i++){
                        if(queryChat[i][1] != accountid[0]){ //grey text AKA recieved text
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
    
                            p1.innerText = `${queryChat[i][3].substring(0,16)}`;
                            p2.innerText = `${queryChat[i][4]}`;
    
                            document.getElementById('chat-list').appendChild(li);
                        }
                        else if(queryChat[i][1] == accountid[0]){ //blue text AKA your text
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
    
                            p1.innerText = `${queryChat[i][3].substring(0,16)}`;
                            p2.innerText = `${queryChat[i][4]}`;
    
                            document.getElementById('chat-list').appendChild(li);
                        }
                    }
                    document.getElementById('insert-button-chat-wrapper').style.display = "block";
                    document.getElementById('chat-input-wrapper-wrapper').style.display = "flex";
                    populateChatHeader(queryChat);
                    if(width > 875){ //mobile settings;

                    }
                    else if(width < 875){ //not mobile, do nothing
                        document.getElementById('conversation-inbox-list').style.display = "none";
                        document.getElementById('conversation-display').style.display = "block";
                        document.getElementById('conversation-display').style.width = "100vw";
                        document.getElementById('chat-list').style.height = "10vh";
                    }
                },
            }
        );
    }
}

function populateChatHeader(chatArray){
    var loginId = getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    var accountid = newArrayLoginId[0];
    if(accountid == chatArray[0][1]){ //you're the sender
        $.ajax(
            {
                url: './PHP/inbox.php',
                dataType: 'text',
                method: 'GET',
                data: {
                    requestid: 3,
                    sender: chatArray[0][2], //we are actually looking for the reciever
                },
                success: function(response){
                    response = JSON.parse(response);
                    document.getElementById('conversation-header-information-text').innerText = `${response[1]}, ${response[2]}`;
                    sessionStorage.setItem("counterpart", `${chatArray[0][2]}`); //store the counterpart
                },
            }
        );
    }
    else if(accountid != chatArray[0][1]){ //you're the reciever
        sessionStorage.setItem("counterpart", `${chatArray[0][1]}`); //store the counterpart
        $.ajax(
            {
                url: './PHP/inbox.php',
                dataType: 'text',
                method: 'GET',
                data: {
                    requestid: 3,
                    sender: chatArray[0][1], //here we DO look for the sender
                },
                success: function(response){
                    response = JSON.parse(response);
                    document.getElementById('conversation-header-information-text').innerText = `${response[1]}, ${response[2]}`;
                },
            }
        );
    }
    document.getElementById('conversation-options').style.display = "block";
    document.getElementById('conversation-topic-p').style.display = "block";
    document.getElementById('conversation-header-information-text').style.display = "block";
};
''
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
    var loginId = getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    var accountid = newArrayLoginId[0];
    var text = document.getElementById('chat-input').value;
    var chatList = document.getElementById('chat-list');
    //chatListLastChild = chatList.lastElementChild;
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
                        location.reload();
                    }
                },
            }
        );
    };
});