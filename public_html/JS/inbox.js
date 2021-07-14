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
var loginId = getCookie("a_user");
var newArrayLoginId = loginId.split(',');

window.addEventListener('load', function conversationCount(){
    cssChatList();
    populateChatList();
    selectSpecificChatList();
}); 

// $('<li>', {'class': 'chat-item'}, {'id': 'text-sent'}).appendTo('#chat-list');
function populateChatList(){
    var accountid = newArrayLoginId[0];
    /*
    $.ajax(
        {
            url: './PHP/individuals.php',
            dataType: 'text',
            method: 'GET',
            data: {
                userid: accountid,
                email: email,
                role: role,
            },
            success: function(response){
                var response = JSON.parse(response);
                if(response[0] == 1){
                    var width = window.screen.width;
                    if(width > 875){
                        document.getElementById('loginanchor').innerText = `${response[1]}`;
                    }
                    else if(width < 875){
                        document.getElementById('loginsidemenu').innerText = `${response[1]}`;
                        document.getElementById('createaccountsidemenu').style.display = "none";
                    }
                }
                else{
                    console.log("Failed to fetch data from server");
                }

            },
        }
    );
    */
};
function selectSpecificChatList(){

}

function cssChatList(){
    var a = $(".conversation-selection").lenght;
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

document.getElementById('chat-input').addEventListener('keypress', function (e){
    var a = document.getElementById('chat-input');
    var b = a.value;
    var chatList = document.getElementById('chat-list');
    chatListLastChild = chatList.lastElementChild;

    if(e.code === 'Enter' && b.lenght >= 1){
        var li = document.createElement("li");
        li.setAttribute("id", "text-sent");
        li.setAttribute("class", "chat-item");
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        div1.setAttribute("class", "text-sent-wrapper");
        div2.setAttribute("class", "chat-time-stamp");
        div3.setAttribute("class", "chat-text");
        var pDate = document.createElement("p");
        var pText = document.createElement("p");
        pText.innerText = `${b}`;
        if(month = 0){
            month = "Jan";
        }
        else if(month = 1){
            month = "Feb";
        } 
        else if(month = 2){
            month = "Mar";
        }
        else if(month = 3){
            month = "Apr";
        }
        else if(month = 4){
            month = "Maj";
        }
        else if(month = 5){
            month = "Jun";
        }
        else if(month = 6){
            month = "Jul";
        }
        else if(month = 7){
            month = "Aug";
        }
        else if(month = 8){
            month = "Sep";
        }
        else if(month = 9){
            month = "Okt";
        }
        else if(month = 10){
            month = "Nov";
        }
        else if(month = 11){
            month = "Dec";
        }
        pDate.innerText = `${day} + ${month}` + `${hours}:${minutes}` + `${fullYear}`;
        chatListLastChild.append(li);
        li.append(div1);
        div1.append(div2);
        div1.append(div3);
        div2.append(pDate);
        div3.append(pText);
    }
});