var insertWindow = document.getElementById('insert-window');
var windowButton = document.getElementById('insert-button-chat');
var chatOptionsButton = document.getElementById('conversation-options');
var chatOptionsWindow = document.getElementById('conversation-options-window');

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