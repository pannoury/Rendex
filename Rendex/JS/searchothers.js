/**************************END OF REGION/CITY SELECT************************* */
document.getElementById('searchpage-searchindex').addEventListener('input', inputQuery);
function inputQuery(data){
  let theInput = data.target;
  
  console.log(theInput.value);
  return theInput.value;
}
document.getElementById('arrowopen-anchor').onclick = function sideMenuOpen(){
    var arrowClick = document.getElementById('arrowopen-anchor');
    var arrowClose = document.getElementById('arrowclose-anchor');
    var sideMenu = document.getElementById('searchpage-sidemenu');
    var darkCover = document.getElementById('darkcover');

    arrowClick.style.display = "none";
    document.getElementById('locationselectwindow').style.width = "0px";
    document.getElementById('locationselectwindow-city').style.width = "0px";
    document.getElementById('location-arrow-down').style.display = "block";
    document.getElementById('location-arrow-up').style.display = "none";
    sideMenu.style.width = "400px";
    darkCover.style.display = "block"
    setTimeout(function (){
        arrowClose.style.display = "block";
    }, 450);
}
document.getElementById('arrowclose-anchor').onclick = function sideMenuClose(){
    var arrowClick = document.getElementById('arrowopen-anchor');
    var arrowClose = document.getElementById('arrowclose-anchor');
    var sideMenu = document.getElementById('searchpage-sidemenu');
    var darkCover = document.getElementById('darkcover');
    document.getElementById('golvoptionextended').style.width = "0px";
    document.getElementById('vvsoptionextended').style.width = "0px";

    arrowClick.style.display = "block";
    arrowClose.style.display = "none";
    sideMenu.style.width = "0px";
    darkCover.style.display = "none";
}

/**************** EXTENDED LIST ***************************/

function closeExtendedMenu(){
    var closeExtendedMenu = document.getElementsByClassName('sidemenuextended');
    for (i = 0; i < closeExtendedMenu.length; i++) {
        closeExtendedMenu[i].style.width = "0px";
    }
}
document.getElementById('balkongoption').onclick = function(){
    document.getElementById('balkongoptionextended').style.width = "400px";
}
document.getElementById('golvoption').onclick = function(){
    document.getElementById('golvoptionextended').style.width = "400px";
}
document.getElementById('vvsoption').onclick = function(){
    document.getElementById('vvsoptionextended').style.width = "400px";
}
/**************** EXTENDED LIST ***************************/