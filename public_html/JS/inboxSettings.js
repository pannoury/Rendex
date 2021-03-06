import * as cookies from "./Components/cookies.js";

let today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var hours = today.getHours();
var minutes = today.getMinutes();
var fullYear = today.getFullYear();
/**********CHAT LIST IS THE PREVIEW, SHOWS ALL YOUR CONVERSATIONS********* */
function populateChatList(){
    var loginId = cookies.getCookie("a_user");
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
                console.log(response)
                if(Array.isArray(response) == false){ //single chatbox
                    sessionStorage.setItem('c_id', `${response}`);
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
                                if(query !== 0){
                                    conversationPopulate(query);
                                }
                                else{ //no messages, display no-message-svg
                                    document.getElementById('no-message-svg-wrapper').style.display = "flex";
                                }
                            },
                        }
                    );
                }
                else if(response.length > 1){ //multiple chatbox
                    response.forEach(element => {
                        console.log(element)
                        $.ajax(
                            {
                                url: './PHP/inbox.php',
                                dataType: 'text',
                                method: 'GET',
                                data: {
                                    requestid: 2,
                                    chatid: element[0],
                                },
                                success: function(response){
                                    var query = JSON.parse(response);
                                    console.log(query)
                                    conversationPopulate(query, element);
                                },
                            }
                        );
                    });
                }
                else if(response == 0){
                    document.getElementById('noconversations').style.display = "block";
                    document.getElementById('noconversations').innerText = "Inga Konversationer"
                }
            },
        }
    );
};
function conversationPopulate(query, element){
    var loginId = cookies.getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    var accountid = newArrayLoginId[0];

    if(element == undefined || element == null){
        var element = sessionStorage.getItem("c_id");
    }

    //Populate chat preview
    var convoList = document.getElementById('conversation-list');
    var a = document.createElement('a');
    a.setAttribute('class', 'conversation-selection');
    a.setAttribute('id', `conversation-${element}`);
    a.addEventListener('click', function(){
        conversationSelect(a.id);
    });
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
    span.innerText = ``;
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
    p2.style.textAlign = "right";
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
                    setDate(p2, query[2]);
                    if(senderQuery.length == 9 && text.length >= 20){
                        p1.innerText = `${text.substring(0,20)}...`;
                        var img = document.createElement('img');
                        img.setAttribute('src', `${senderQuery[8]}`);
                        div2.appendChild(img);
                    }
                    else if(senderQuery.length == 9 && text.length <= 20){
                        p1.innerText = `${text}`;
                        var img = document.createElement('img');
                        img.setAttribute('src', `${senderQuery[8]}`);
                        div2.appendChild(img);
                    }
                    else if(senderQuery.length = 8 && text.length >= 20){
                        p1.innerText = `${text.substring(0,20)}...`;
                        var img = document.createElement('img');
                        img.setAttribute('src', './assets/images/unchosen-profilepic.svg');
                        div2.appendChild(img);
                    }
                    else if(senderQuery.length = 8 && text.length <= 20){
                        p1.innerText = `${text}`;
                        var img = document.createElement('img');
                        img.setAttribute('src', './assets/images/unchosen-profilepic.svg');
                        div2.appendChild(img);
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
                    if(senderQuery.length == 9 && text.length >= 20){
                        p1.innerText = `You: ${text.substring(0,9)}...`; //Text cue
                        var img = document.createElement('img');
                        img.setAttribute('src', `${senderQuery[8]}`);
                        div2.appendChild(img);
                    }
                    else if(senderQuery.length == 9 && text.length <= 20){
                        p1.innerText = `You: ${query[3]}`;
                        var img = document.createElement('img');
                        img.setAttribute('src', `${senderQuery[8]}`);
                        div2.appendChild(img);
                    }
                    else if(senderQuery.length == 8 && text.length >= 20){ //no image exists
                        p1.innerText = `You: ${query[3].substring(0,9)}...`; //Text cue
                        var img = document.createElement('img');
                        img.setAttribute('src', './assets/images/unchosen-profilepic.svg');
                        div2.appendChild(img);
                    }
                    else if(senderQuery.length == 8 && text.length <= 20){ //no image exists
                        p1.innerText = `You: ${query[3]}`;
                        var img = document.createElement('img');
                        img.setAttribute('src', './assets/images/unchosen-profilepic.svg');
                        div2.appendChild(img);
                    }
                    setDate(p2, query[2]);
                },
            }
        );
    }
}
function conversationSelect(id){
    document.getElementById('chat-input-wrapper').style.display = "flex";
    var selectedElement = document.getElementById(`${id}`);
    var preSelectedConvo = $("[aria-label='selected']");
    if(selectedElement.getAttribute('aria-label') == "selected"){ //??r den redan vald ska den inte populera mer
    }
    else{
        if(preSelectedConvo.length >= 1){ //a conversation has been previously selected
            $(".conversation-selection").each(function (){
                $(this).css("backgroundColor", "#38383D");
                $(this).attr('aria-label', "diselected");
            });
            $('.chat-item').remove();
            populateConvoList(id);

        }
        else{ //none has been previously selected
            populateConvoList(id);
        }
    }
};
function populateConvoList(id){
    //clearInterval(reactiveTextLoading);
    var width = window.screen.width;
    var selectedElement = document.getElementById(`${id}`);
    selectedElement.setAttribute('aria-label', "selected");
    var loginId = cookies.getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    var accountid = newArrayLoginId[0];
    $(".conversation-selection").each(function (){
        $(this).css("backgroundColor", "");
    });
    document.getElementById(`${id}`).style.backgroundColor = "#515155";
    var id = id.replace("conversation-", "");
    //var newURL = `${window.location.protocol}//${window.location.host}${window.location.pathname}/cid=${id}`;
    //window.history.pushState({path:newURL},'',newURL);
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
                chatTextParser(queryChat)
                document.getElementById('insert-button-chat-wrapper').style.display = "block";
                document.getElementById('chat-input-wrapper-wrapper').style.display = "flex";
                populateChatHeader(queryChat);
                if(width > 875){ //desktop
                    //do nothing
                }
                else if(width < 875){ //mobile
                    document.getElementById('nameheader-div').style.display = "flex";
                    document.getElementById('conversation-inbox-list').style.display = "none";
                    document.getElementById('conversation-display').style.display = "block";
                    document.getElementById('conversation-display').style.width = "100vw";
                    document.getElementById('chat-display-window').style.height = "50vh";
                    document.getElementById('conversation-display').style.marginLeft = "-1px";
                }
                //reactiveTextLoading();
            },
        }
    );
};
/******THIS FUNCTION SETS THE DATE IN THE CONVO PREVIEW
BASED ON CURRENT TIME******* */
function setDate(p2,time){
    var p2 = p2;
    var time = time;

    var sentyear = time.substring(0,4);
    var sentmonth = time.substring(5,7)
    var sentday = time.substring(8,10);
    console.log(month)
    if(fullYear == sentyear){
        if(month == sentmonth){
            if(day == sentday){
                p2.innerText = `${time.substring(11,16)}`;
                p2.style.fontWeight = "bold";
                p2.style.marginLeft = "4px";
            }
            else{
                if(sentmonth == "01"){
                    var sentmonth = "Januari";
                    p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                    p2.style.fontWeight = "bold";
                    p2.style.marginLeft = "4px";
                }
                else if(sentmonth == "02"){
                    var sentmonth = "Februari";
                    p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                    p2.style.fontWeight = "bold";
                    p2.style.marginLeft = "4px";
                }
                else if(sentmonth == "03"){
                    var sentmonth = "Mars";
                    p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                    p2.style.fontWeight = "bold";
                    p2.style.marginLeft = "4px";
                }
                else if(sentmonth == "04"){
                    var sentmonth = "April";
                    p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                    p2.style.fontWeight = "bold";
                    p2.style.marginLeft = "4px";
                }
                else if(sentmonth == "05"){
                    var sentmonth = "Maj";
                    p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                    p2.style.fontWeight = "bold";
                    p2.style.marginLeft = "4px";
                }
                else if(sentmonth == "06"){
                    var sentmonth = "Juni";
                    p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                    p2.style.fontWeight = "bold";
                    p2.style.marginLeft = "4px";
                }
                else if(sentmonth == "07"){
                    var sentmonth = "Juli";
                    p2.innerText = `${sentday} ${sentmonth.substring(0,3)}`;
                    p2.style.fontWeight = "bold";
                    p2.style.marginLeft = "4px";
                }
                else if(sentmonth == "08"){
                    var sentmonth = "Augusti";
                    p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                    p2.style.fontWeight = "bold";
                    p2.style.marginLeft = "4px";
                }
                else if(sentmonth == "09"){
                    var sentmonth = "September";
                    p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                    p2.style.fontWeight = "bold";
                    p2.style.marginLeft = "4px";
                }
                else if(sentmonth == "10"){
                    var sentmonth = "Oktober";
                    p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                    p2.style.fontWeight = "bold";
                    p2.style.marginLeft = "4px";
                }
                else if(sentmonth == "11"){
                    var sentmonth = "November";
                    p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                    p2.style.fontWeight = "bold";
                    p2.style.marginLeft = "4px";
                }
                else if(sentmonth == "12"){
                    var sentmonth = "December";
                    p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                    p2.style.fontWeight = "bold";
                    p2.style.marginLeft = "4px";
                }
            }
        }
        else{
            if(sentmonth == "01"){
                var sentmonth = "Januari";
                p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                p2.style.fontWeight = "bold";
                p2.style.marginLeft = "4px";
            }
            else if(sentmonth == "02"){
                var sentmonth = "Februari";
                p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                p2.style.fontWeight = "bold";
                p2.style.marginLeft = "4px";
            }
            else if(sentmonth == "03"){
                var sentmonth = "Mars";
                p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                p2.style.fontWeight = "bold";
                p2.style.marginLeft = "4px";
            }
            else if(sentmonth == "04"){
                var sentmonth = "April";
                p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                p2.style.fontWeight = "bold";
                p2.style.marginLeft = "4px";
            }
            else if(sentmonth == "05"){
                var sentmonth = "Maj";
                p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                p2.style.fontWeight = "bold";
                p2.style.marginLeft = "4px";
            }
            else if(sentmonth == "06"){
                var sentmonth = "Juni";
                p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                p2.style.fontWeight = "bold";
                p2.style.marginLeft = "4px";
            }
            else if(sentmonth == "07"){
                var sentmonth = "Juli";
                p2.innerText = `${sentday} ${sentmonth.substring(0,3)}`;
                p2.style.fontWeight = "bold";
                p2.style.marginLeft = "4px";
            }
            else if(sentmonth == "08"){
                var sentmonth = "Augusti";
                p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                p2.style.fontWeight = "bold";
                p2.style.marginLeft = "4px";
            }
            else if(sentmonth == "09"){
                var sentmonth = "September";
                p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                p2.style.fontWeight = "bold";
                p2.style.marginLeft = "4px";
            }
            else if(sentmonth == "10"){
                var sentmonth = "Oktober";
                p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                p2.style.fontWeight = "bold";
                p2.style.marginLeft = "4px";
            }
            else if(sentmonth == "11"){
                var sentmonth = "November";
                p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                p2.style.fontWeight = "bold";
                p2.style.marginLeft = "4px";
            }
            else if(sentmonth == "12"){
                var sentmonth = "December";
                p2.innerText = `${time.substring(8,10)} ${sentmonth.substring(0,3)}`;
                p2.style.fontWeight = "bold";
                p2.style.marginLeft = "4px";
            }
        }
    }
    else{
        p2.innerText = `${time.substring(0,10)}`;
    }
};
/******THIS FUNCTION SETS THE DATE IN THE CONVO PREVIEW******* */
function cssChatList(){
    var a = $(".conversation-selection").length;
    if (a > 7){
        $(".inbox-separator").last().css("display", "none");
    }
    else if(a >= 10){
        document.getElementById('conversation-list').style.overflowY = "scroll";
    }
};
function reactivePopulateChatList(){
    var loginId = cookies.getCookie("a_user");
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
                if(Array.isArray(response) == false){ //single chatbox
                    $.ajax(
                        {
                            url: './PHP/inbox.php',
                            dataType: 'text',
                            method: 'GET',
                            data: {
                                requestid: 2,
                                chatid: response,
                            },
                            success: function(response){
                                var query = JSON.parse(response);
                                if(query[0] == accountid){ //you're the latest sender
                                    // do nothing, already solved by function reactiveTexting
                                }
                                else if(query[0] !== accountid){
                                    var p1 = document.getElementsByClassName('message-cue')[0].getElementsByTagName('p')[0];
                                    var p2 = document.getElementsByClassName('conversation-date')[0];
                                    var text = query[3];
                                    setDate(p2, query[2]);
                                    if(text.length >= 20){
                                        p1.innerText = `${text.substring(0,20)}...`;
                                    }
                                    else if(text.length <= 20){
                                        p1.innerText = `${text}`;
                                    }
                                }
                            },
                        }
                    );
                }
                else if(response.length > 1){ //multiple chatbox
                    response.forEach(element => {
                        $.ajax(
                            {
                                url: './PHP/inbox.php',
                                dataType: 'text',
                                method: 'GET',
                                data: {
                                    requestid: 2,
                                    chatid: element[0],
                                },
                                success: function(response){
                                    var query = JSON.parse(response);

                                    if(query[0] !== accountid){ //youre not the latest sender
                                        var mainDiv = document.getElementById(`conversation-${element[0]}`);
                                        var p1 = mainDiv.getElementsByClassName('conversation')[0].getElementsByClassName('conversation-list-information')[0].getElementsByClassName('message-cue')[0].getElementsByTagName('p')[0];
                                        var p2 = mainDiv.getElementsByClassName('conversation')[0].getElementsByClassName('conversation-list-information')[0].getElementsByClassName('message-cue')[0].getElementsByTagName('p')[1];
                                        var text = query[3];
                                        setDate(p2, query[2]);
                                        if(text.length >= 20){
                                            p1.innerText = `${text.substring(0,20)}...`;
                                        }
                                        else if(text.length <= 20){
                                            p1.innerText = `${text}`;
                                        }
                                    }
                                    else if(query[0] == accountid){ //youre the latest sender
                                        //do nothing
                                    }
                                },
                            }
                        );
                    });
                }
            }
        }
    );
}
function chatTextParser(queryChat){
    var loginId = cookies.getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    var accountid = newArrayLoginId[0];

    if(queryChat[0].constructor === Array){ //Multiple texts has been sent
        for(let i=0; i < queryChat.length; i++){
            if(queryChat[i][1] != accountid){ //grey text AKA recieved text
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
            else if(queryChat[i][1] == accountid){ //blue text AKA your text
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
    }
    else{
        if(queryChat[1] !== accountid){ //grey text AKA recieved text
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

            p1.innerText = `${queryChat[3].substring(0,16)}`;
            p2.innerText = `${queryChat[4]}`;

            document.getElementById('chat-list').appendChild(li);
        }
        else if(queryChat[1] == accountid){ //blue text AKA your text
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

            p1.innerText = `${queryChat[3].substring(0,16)}`;
            p2.innerText = `${queryChat[4]}`;

            document.getElementById('chat-list').appendChild(li);
        }
    }
};
function populateChatHeader(chatArray){
    var loginId = cookies.getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    var accountid = newArrayLoginId[0];
    if(chatArray[0].constructor === Array){
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
                        document.getElementById('conversation-header-information-text').innerText = `${response[1]} ${response[2]}`;
                        sessionStorage.setItem("counterpart", `${chatArray[0][2]}`); //store the counterpart
                        document.getElementById('inbox-account-link').setAttribute('href', `https://rendex.se/profile?id=${chatArray[0][2]}`)
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
                        document.getElementById('conversation-header-information-text').innerText = `${response[1]} ${response[2]}`;
                        document.getElementById('inbox-account-link').setAttribute('href', `https://rendex.se/profile?id=${chatArray[0][1]}`)
                    },
                }
            );
        }
    }
    else{
        if(accountid == chatArray[1]){ //you're the sender
            $.ajax(
                {
                    url: './PHP/inbox.php',
                    dataType: 'text',
                    method: 'GET',
                    data: {
                        requestid: 3,
                        sender: chatArray[2], //we are actually looking for the reciever
                    },
                    success: function(response){
                        response = JSON.parse(response);
                        document.getElementById('conversation-header-information-text').innerText = `${response[1]}, ${response[2]}`;
                        sessionStorage.setItem("counterpart", `${chatArray[2]}`); //store the counterpart
                        document.getElementById('inbox-account-link').setAttribute('href', `https://rendex.se/profile?id=${chatArray[2]}`)
                    },
                }
            );
        }
        else if(accountid != chatArray[1]){ //you're the reciever
            sessionStorage.setItem("counterpart", `${chatArray[1]}`); //store the counterpart
            $.ajax(
                {
                    url: './PHP/inbox.php',
                    dataType: 'text',
                    method: 'GET',
                    data: {
                        requestid: 3,
                        sender: chatArray[1], //here we DO look for the sender
                    },
                    success: function(response){
                        response = JSON.parse(response);
                        document.getElementById('conversation-header-information-text').innerText = `${response[1]} ${response[2]}`;
                        document.getElementById('inbox-account-link').setAttribute('href', `https://rendex.se/profile?id=${chatArray[1]}`)
                    },
                }
            );
        }
    }

    document.getElementById('conversation-options').style.display = "block";
    document.getElementById('conversation-topic-p').style.display = "block";
    document.getElementById('conversation-header-information-text').style.display = "block";
};

export { populateChatList, 
    conversationPopulate, 
    setDate, 
    cssChatList, 
    reactivePopulateChatList, 
    chatTextParser, conversationSelect}