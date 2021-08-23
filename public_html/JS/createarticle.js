window.onload = function(){
    loggedInControl();
    cookieConsentLoad();
    cityOptionsPopulate()
}


document.getElementById('createarticle-regionselect').onchange = function(){
    cityOptionsPopulate()
};

function cityOptionsPopulate(){
    clearCityOptions();
    var regionSelected = document.getElementById('createarticle-regionselect').value;
    var regionSelected = regionSelected.replace(/ /g, "");
    var array = window[`${regionSelected}CityArray`];
    
    var cityOptions = document.getElementById('createarticle-municipality');
    for(i = 0; i < array.length; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', array[i]);
        $('#disabledselect').remove();
        cityOptions.appendChild(option);
        option.innerText = `${array[i]}`;
    };
}
function clearCityOptions(){
    $('#createarticle-municipality').find('option').remove();
}



/*
document.getElementById('createarticle-category').onclick = () =>{
    var svg = document.querySelectorAll('.one-input-div-inputselect-svg')[0];
    var ariaLabel = document.querySelectorAll('.one-input-div-inputselect-svg')[0].getAttribute('aria-label');
    if(ariaLabel === null || ariaLabel === undefined || ariaLabel === "untoggled"){
        svg.setAttribute('transform', 'rotate(180)');
        svg.setAttribute('aria-label', 'toggled');
    }
    else if(ariaLabel === "toggled"){
        svg.setAttribute('transform', 'rotate(0)');
        svg.setAttribute('aria-label', 'untoggled');
    }
}
document.getElementById('createarticle-regionselect').onclick = () =>{

}
document.getElementById('createarticle-municipality').onclick = () =>{
    
}
*/