var width = window.screen.width;

document.getElementById('bankidwindowwide').addEventListener('click', function(){
    bankIdWindow();
});
document.getElementById('bankidwindowmobile').addEventListener('click', function(){
    bankIdWindow();
});
function bankIdWindow(){
    if(width > 875){
        document.getElementById('side-menuhelp').style.width='400px';
        document.getElementById('login').style.marginLeft='0px';
    }
    else{
        document.getElementById('side-menuhelp').style.width='100vw';
        document.getElementById('login').style.marginLeft='0px';
    }
}
document.getElementById('close-sidehelp-cross').addEventListener('click', function(){
    closeSlideHelp();
});
document.getElementById('close-sidehelp-button').addEventListener('click', function(){
    closeSlideHelp();
});
function closeSlideHelp(){
    document.getElementById('side-menuhelp').style.width='0';
    document.getElementById('login').style.marginLeft='0';
}