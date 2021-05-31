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

document.getElementById('chat-input').addEventListener('keypress', function (e){
    var input = document.getElementById('chat-input').value;
    var ulList = document.getElementById('chat-list');

    if(e.key === 'Enter'){
        var li = document.createElement('li');
        ulList.appendChild(li);
        li.appendChild(document.createElement('div'));
        li.classList.add('chat-item');
        li.id = "text-sent";

        console.log(input);
        return input;
    }
});