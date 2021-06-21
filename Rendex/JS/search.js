var regionHeader = document.getElementById('region-header-display');
var region = localStorage.getItem("regionSelected");
var citySelected = localStorage.getItem('citySelected');
var roleSelected = localStorage.getItem('roleSelected');
var purposeSelected = localStorage.getItem('purposeSelected');
var searchRegion = document.getElementsByClassName('searchregion-searchpage');

window.onload = function(){
    if(region == 'Hela Sverige'){
        regionHeader.innerText = "Hela Sverige";
        searchRegion = "Hela Sverige";
    }
    else if(region == 'Blekinge'){
        regionHeader.innerText = "Blekinge";
        searchRegion = "Blekinge";
    }
    else if(region == 'Dalarna'){
        regionHeader.innerText = "Dalarna";
        searchRegion.setAttribute('value', 'Dalarna');
    }
    else if(region == 'Gävleborg'){
        regionHeader.innerText = "Gävleborg";
        searchRegion = "Gävleborg";
    }
    else if(region == 'Gotland'){
        regionHeader.innerText = "Gotland";
        searchRegion.value = 'Gotland';
    }
    else if(region == 'Halland'){
        regionHeader.innerText = "Halland";
        searchRegion = "Halland";
    }
    else if(region == 'Jämtland'){
        regionHeader.innerText = "Jämtland";
        searchRegion = "Jämtland";
    }
    else if(region == 'Jönköping'){
        regionHeader.innerText = "Jönköping";
        searchRegion = "Jönköping";
    }
    else if(region == 'Kalmar'){
        regionHeader.innerText = "Kalmar";
        searchRegion = "Kalmar";
    }
    else if(region == 'Kronoberg'){
        regionHeader.innerText = "Kronoberg";
        searchRegion = "Kronoberg";
    }
    else if(region == 'Norrbotten'){
        regionHeader.innerText = "Norrbotten";
        searchRegion = "Norrbotten";
    }
    else if(region == "Örebro"){
        regionHeader.innerText = "Örebro";
        searchRegion = 'Örebro';
    }
    else if(region == 'Östergötland'){
        regionHeader.innerText = "Östergötland";
        searchRegion = "Östergötland";
    }
    else if(region == 'Skåne'){
        regionHeader.innerText = "Skåne";
        searchRegion = "Skåne";
    }
    else if(region == 'Sörmland'){
        regionHeader.innerText = "Sörmland";
        searchRegion = "Sörmland";
    }
    else if(region == 'Stockholm'){
        regionHeader.innerText = "Stockholm";
        searchRegion = "Stockholm";
    }
    else if(region == 'Uppsala'){
        regionHeader.innerText = "Uppsala";
        searchRegion = "Uppsala";
    }
    else if(region == 'Värmland'){
        regionHeader.innerText = "Värmland";
        searchRegion = "Värmland";
    }
    else if(region == 'Västerbotten'){
        regionHeader.innerText = "Västerbotten";
        searchRegion = "Västerbotten";
    }
    else if(region == 'Västernorrland'){
        regionHeader.innerText = "Västernorrland";
        searchRegion = "Västernorrland";
    }
    else if(region == 'Västmanland'){
        regionHeader.innerText = "Västmanland";
        searchRegion = "Västmanland";
    }
    else if(region == 'Västra Götaland'){
        regionHeader.innerText = "Västra Götaland";
        searchRegion = "Västra Götaland";
    }
}
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

    arrowClick.style.display = "block";
    arrowClose.style.display = "none";
    sideMenu.style.width = "0px";
    darkCover.style.display = "none"
}