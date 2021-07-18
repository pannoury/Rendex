var regionHeader = document.getElementById('region-header-display');
var citySelected = localStorage.getItem("citySelected");
var region = localStorage.getItem("regionSelected");
var roleSelected = localStorage.getItem('roleSelected');
var purposeSelected = localStorage.getItem('purposeSelected');
var regionSpanText = document.getElementById('regionspan-text');
var citySpan = document.getElementById('cityspan-text');
var regionCityHeader = document.getElementById('regioncityheader');
var width = window.screen.width;

window.addEventListener('load', function loadRegionCheck(){
    var region = localStorage.getItem("regionSelected");
    if(region !== undefined && region !== null){
        if (region.includes(',')) {
            regionHeader.innerText = "Flera Regioner";
            document.getElementById('regionspan-text').innerText = "Flera Regioner";
            document.getElementById('location-city-button').style.display = "none";
            regionArrayPopulate(region);
            document.getElementById('location-city-button').style.display = "none";
        }
        else{
            var region = region.replace(/[^a-öA-Ö ]/g, "");
            if(region == 'Hela Sverige'){
                regionHeader.innerText = "Hela Sverige";
                regionSpanText.innerText = "Hela Sverige";
                regionCityHeader.innerText = "Hela Sverige";
                this.localStorage.removeItem("citySelected");
                document.getElementById('helasverigecheckbox').checked = true;
                document.getElementById('location-city-button').style.display = "none";
            }
            else if(region == 'Blekinge'){
                loadRegionCheckV2("Blekinge");
            }
            else if(region == 'Dalarna'){
                loadRegionCheckV2("Dalarna");
            }
            else if(region == 'Gävleborg'){
                loadRegionCheckV2("Gävleborg");
            }
            else if(region == 'Gotland'){
                loadRegionCheckV2("Gotland");
            }
            else if(region == 'Halland'){
                loadRegionCheckV2("Halland");
            }
            else if(region == 'Jämtland'){
                loadRegionCheckV2("Jämtland");
            }
            else if(region == 'Jönköping'){
                loadRegionCheckV2("Jönköping");
            }
            else if(region == 'Kalmar'){
                loadRegionCheckV2("Kalmar");
            }
            else if(region == 'Kronoberg'){
                loadRegionCheckV2("Kronoberg");
            }
            else if(region == 'Norrbotten'){
                loadRegionCheckV2("Norrbotten");
            }
            else if(region == "Örebro"){
                loadRegionCheckV2("Örebro");
            }
            else if(region == 'Östergötland'){
                loadRegionCheckV2("Östergötland");
            }
            else if(region == 'Skåne'){
                loadRegionCheckV2("Skåne");
            }
            else if(region == 'Sörmland'){
                loadRegionCheckV2("Sörmland");
            }
            else if(region == 'Stockholm'){
                loadRegionCheckV2("Stockholm");
            }
            else if(region == 'Uppsala'){
                loadRegionCheckV2("Uppsala");
            }
            else if(region == 'Värmland'){
                loadRegionCheckV2("Värmland");
            }
            else if(region == 'Västerbotten'){
                loadRegionCheckV2("Västerbotten");
            }
            else if(region == 'Västernorrland'){
                loadRegionCheckV2("Västernorrland");
            }
            else if(region == 'Västmanland'){
                loadRegionCheckV2("Västmanland");
            }
            else if(region == 'Västra Götaland'){
                loadRegionCheckV2("Västra Götaland");
            }
        }
    }
    else if(region === null || region === undefined){
        regionHeader.innerText = "Hela Sverige";
        localStorage.setItem("regionSelected", "Hela Sverige");
        document.getElementById('regionspan-text').innerText = "Hela Sverige";
        document.getElementById('helasverigecheckbox').checked = true;
        document.getElementById('location-city-button').style.display = "none";
    }
    else{
        regionHeader.innerText = "Flera Regioner";
        document.getElementById('regionspan-text').innerText = "Flera Regioner";
        document.getElementById('location-city-button').style.display = "none";
    } //might need to be removed, archaic!
});

function loadRegionCheckV2(regionValue){
    regionHeader.innerText = `${regionValue}`;
    regionSpanText.innerText = `${regionValue}`;
    regionCityHeader.innerText = `${regionValue}`;
    if (regionValue === 'Västra Götaland') {
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById(`${regionValue}`).checked = true;

        var citySelected = this.localStorage.getItem("citySelected");
        if (citySelected !== null && citySelected !== undefined){
            if (citySelected.includes(',')){
                var citySelected = citySelected.replace(/"/g, "");
                var citySelected = citySelected.split(',');
                citySpan.innerText = "Flera Områden";
                if(citySelected.length === 1 && citySelected.includes('Alla Städer') === false){
                    var citySelected = citySelected.toString();
                    citySpan.innerText = `${citySelected}`;
                }
            }
            else if(citySelected.includes('Alla Städer')){
                citySpan.innerText = `Hela ${regionValue}`;
            }
            else{
                var citySelected = citySelected.replace(/"/g, "");
                citySpan.innerText = `${citySelected}`;
                regionHeader.innerText = `${citySelected}`;
            }
        }
        else if(citySelected === null || citySelected === undefined){
            citySpan.innerText = `Hela ${regionValue}`;
            clearCitySelection();
        }
        else{
            citySpan.innerText = `Hela ${regionValue}`;
        }
    }
    else{
        document.getElementById('helasverigecheckbox').checked = false;
        document.getElementById(`${regionValue}`).checked = true;

    
    
        var citySelected = this.localStorage.getItem("citySelected");
        if (citySelected !== null && citySelected !== undefined){
            if (citySelected.includes(',')){
                var citySelected = citySelected.replace(/"/g, "");
                var citySelected = citySelected.split(',');
                citySpan.innerText = "Flera Områden";
                if(citySelected.length === 1 && citySelected.includes('Alla Städer') === false){
                    var citySelected = citySelected.toString();
                    citySpan.innerText = `${citySelected}`;
                }
            }
            else if(citySelected.includes('Alla Städer')){
                citySpan.innerText = `Hela ${regionValue}`;
            }
            else{
                var citySelected = citySelected.replace(/"/g, "");
                citySpan.innerText = `${citySelected}`;
                regionHeader.innerText = `${citySelected}`;
            }
        }
        else if(citySelected === null || citySelected === undefined){
            citySpan.innerText = `Hela ${regionValue}`;
            clearCitySelection();
        }
        else{
            citySpan.innerText = `Hela ${regionValue}`;
        }
    }
};
/*
document.getElementById('closelocationselectwindow').addEventListener('click', function(){
    clearRegionsV2();
});
*/