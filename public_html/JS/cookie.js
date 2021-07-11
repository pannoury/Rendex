function createCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    var sameSite = "SameSite=None; Secure"
    document.cookie = `${cname}=${cvalue}; SameSite=None; Secure; ${expires};path=/;`;
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return ""; 
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
/*********************** GLOBAL COOKIE SETTINGS **********************************/
window.addEventListener('load', function checkCookie(){
  var user=getCookie("cookieconsent");
  if (user != "") {
    document.getElementById('cookiewindowpopupwrapper').style.display = "none";
  } else {
    document.getElementById('cookiewindowpopupwrapper').style.display = "block";
    if (user != "" && user != null) {
      setCookie("cookieconsent", user, 30);
    }
  }
});
function consentClicked(){
  createCookie("cookieconsent", "true", "365");
  document.getElementById('cookiewindowpopupwrapper').style.display = "block";
};