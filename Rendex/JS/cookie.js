function getCookie(name){
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if(begin == -1){
        begin = dc.indexOf(prefix);
        if (begin != 0){
            return null;
        }
    }
    else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1){
            end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
}
window.onload = function cookieCheck(){
    var cookiesAccepted = getCookie("cookiesAccepted");
    var loggedinCookie = getCookie("loggedinCookie");
    if(cookiesAccepted = false || loggedinCookie == false || loggedinCookie == undefined || cookiesAccepted == undefined){
        document.getElementById('cookiewindowpopupwrapper').style.display = "block";
    }
    else{
        document.getElementById('cookiewindowpopupwrapper').style.display = "none";
    }
}
function cookieBotton(){
    document.cookie = "cookiesAccepted=true";
    document.getElementById('cookiewindowpopupwrapper').style.display = "none";
}