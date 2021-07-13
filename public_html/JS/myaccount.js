document.getElementById('logout').onclick = function(){
  eraseCookie("a_user");
  sessionStorage.clear();
  setTimeout(function(){
    window.location = './index.html';
  }, 2000);
};