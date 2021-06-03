var insertWindow = document.getElementById('insert-window');
var windowButton = document.getElementById('insert-button-chat');
var chatOptionsButton = document.getElementById('conversation-options');
var chatOptionsWindow = document.getElementById('conversation-options-window');

/*
function displayInsertWindow(){
    insertWindow.style.display = "flex";
}
function openChatOptions(){
    chatOptionsWindow.style.display = "flex";
} */

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
/*
document.getElementById('chat-input').addEventListener('keypress', function (e){
    var input = document.getElementById('chat-input').value;
    var ulList = document.getElementById('chat-list');
    var timeStamp = new Date();
    var day = timeStamp.getDate;
    var month = timeStamp.getMonth;
    var hour = timeStamp.getHours;
    var minute = timeStamp.getMinutes;
    //const dataString = (${day} + ${month}, ${hour} + ':' + ${minute}); 


    if(e.key === 'Enter'){
        alert(input);
        alert(dataString);
    }
});
*/
window.addEventListener('load', function conversationCount(){
    var a = $(".conversation-selection").lenght;
    if (a > 7){
        console.log(a);
        $(".inbox-separator").last().css("display", "none");
    }
});

// $('<li>', {'class': 'chat-item'}, {'id': 'text-sent'}).appendTo('#chat-list');


document.getElementById('imginputlink').addEventListener('click', () => {
    document.getElementById('imginput').click();
});
document.getElementById('fileinputlink').addEventListener('click', () => {
    document.getElementById('fileinput').click();
});
/*
document.getElementById('chat-input').oninput = function chatInput(){
    var a = document.getElementById('chat-input');
    var b = a.value;

    console.log(b);
} */

document.getElementById('chat-input').addEventListener('keypress', function (e){
    var a = document.getElementById('chat-input');
    var b = a.value;

    if(e.code === 'Enter'){
        console.log(b);
    }
});