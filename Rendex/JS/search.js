var regionHeader = document.getElementById('region-header-display');
var regionSelected = localStorage.getItem('regionSelected');
var citySelected = localStorage.getItem('citySelected');
var roleSelected = localStorage.getItem('roleSelected');
var purposeSelected = localStorage.getItem('purposeSelected');

window.onload = function(){
    if(regionSelected === 'Hela Sverige'){
        regionHeader.innerHTML = "Hela Sverige";
    }
    else if(regionSelected === 'Blekinge'){
        regionHeader.innerText = "Blekinge";
    }
    console.log(regionSelected);
}

//eat this //
//durim//