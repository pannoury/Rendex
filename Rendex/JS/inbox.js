var insertWindow = document.getElementById('insert-window');
var windowButton = document.getElementById('insert-button-chat');

function displayInsertWindow(){
    insertWindow.style.display = "flex";
}
window-addEventListener('click', function(e){
    if(document.getElementById('insert-button-chat').contains(e.target)){
        //clicked in box
    }
    else{
        insertWindow.style.display = "none";
    }
})