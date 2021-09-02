var cityButton = document.getElementById('optionCity');
var brackets = /\[|\]/g;

function loadSearchParameters(){ //onload settings
    var urlParameters = new URLSearchParams(window.location.search);       
    var region = arrayCreatorLoad(urlParameters.get("r"));
    var city = arrayCreatorLoad(urlParameters.get("c"));
    var purpose = arrayCreatorLoad(urlParameters.get("p"));
    var price = arrayCreatorLoad(urlParameters.get("pr"), "Price");
    var rating = arrayCreatorLoad(urlParameters.get("ra"));
    var role = arrayCreatorLoad(urlParameters.get("ro"));
    var regionHeader = document.getElementById('region-header-display');


    function arrayCreatorLoad(value, type){
        if(type === undefined || type === null){
            if(value === null || value === undefined || value === "undefined"){
                return null;
            }
            else if(value.includes(',')){
                var array = value.split(',')
                console.log(array)
                var length = array.length;
                var count = 0;
                for(i=0; i<array.length; i++){
                    var element = document.getElementById(`${array[i].replace(' ', "")}`);
                    if(element === null){
                        //do nothing
                    }
                    else{
                        count++
                    }
                }
                if(count === length){
                    return value;
                }
                else{
                    return null
                }
            }
            else{
                var element = value.replace(' ', "");
                var element = document.getElementById(`${element}`);
                if(element === null && value !== "Uppdragsgivare" && value !== "Uppdragstagare"){
                    return null
                }
                else{
                    return value;
                }
            }
        }
        else if(type === "Price"){
            if(value === undefined || value === "undefined" || value === null || value === "Alla Priser"){
                document.getElementById('allapricecheckbox').checked = true
            }
            else{
                if(value.includes(',')){
                    if(value.substring(0,1) === ','){ //highprice only defined
                        console.log(value.substring(1))
                        return [value.substring(1), "high"]
                    }
                    else if(value.slice(-1) === ','){
                        return [value.substring(0, value.length -1), "low"]
                    }
                    else if(value.slice(-1) !== ',' && value.substring(0,1) !== ','){
                        var value = value.split(',')
                        return value
                    }
                }
            }
        }

    }

    console.log(region, city, purpose, price, rating, role)

    var allRegions = document.querySelectorAll('.regioncheckbox');
    for(i=0; i < allRegions.length; i++){
        allRegions[i].checked = false;
    }
    if(region === null || region === undefined){ //region is unspecific
        document.getElementById('helasverigecheckbox').checked = true;
        document.getElementById('region-header-display').innerText = "Hela Sverige"
        document.getElementById('regioncityheader').innerText = "Hela Sverige"
        document.getElementById('allareas-wrapper').style.display = "none"
    }
    else if(region.includes(',')){ //array, multiple regions
        var region = region.split(',')
        for(x in region){
            document.getElementById(`${region[x].replace(' ', '')}`).checked = true;
        }
        document.getElementById('allareas-wrapper').style.display = "none";
        regionHeader.innerText = "Flera Regioner"
        document.getElementById('regioncityheader').innerText = "Flera Regioner"
    }
    else if(region.includes(',') === false && region !== null || region !== undefined){ //single region
        if(region === "Hela Sverige"){
            document.getElementById('helasverigecheckbox').checked = true;
            document.getElementById('regioncityheader').innerText = "Hela Sverige"
            document.getElementById('allareas-wrapper').style.display = "none"
        }
        else{
            document.getElementById(`${region}`).checked = true;
            populateCityOptions(region);
        }
        var city = arrayCreatorLoad(urlParameters.get("c"));
        if(city === `Hela ${region}` || city === "Alla Städer"){
            regionHeader.innerText = `Hela ${region}`
        }
        else if(city === null || city === "undefined" || city === undefined){
            console.log("triggered", city)
            document.getElementById('region-header-display').innerText = `${region}`
        }
        else if(city.includes(',')){
            regionHeader.innerText = "Flera Områden"
        }
        else if(city.includes(',') === false && city !== `Hela ${region}`){
            regionHeader.innerText = `${city}`
            document.getElementById(`${city}`).checked = true
            document.getElementById('allaområdencheckbox').checked = false;
        }
    }

    var cityOptions = document.querySelectorAll('input[name=city]');
    for(i=0; i<cityOptions.length; i++){
        cityOptions[i].addEventListener('change', function(e){
            checkBoxControlCity(e)
        });
    }

    //Kategory/Purpose
    if(purpose === null || purpose === undefined){
        document.getElementById('allakategoriercheckbox').checked = true;
    }
    else if(purpose.includes(',') === false){
        var purpose = purpose.replace(' ', "");
        document.getElementById(`${purpose}`).checked = true;
        document.getElementById('allakategoriercheckbox').checked = false;
    }
    else if(purpose.includes(',')){ //multiple categories
        var purpose = purpose.split(',')
        for(i=0; i<purpose.length; i++){
            document.getElementById(`${purpose[i].replace(' ', "")}`).checked = true;
        }
        document.getElementById('allakategoriercheckbox').checked = false;
    }

    //Price
    if(price === null || price === undefined || price === "undefined"){
        document.getElementById('allapricecheckbox').checked = true;
        var priceInput = document.querySelectorAll('.filter-price-input');
        priceInput.forEach(element => {
            element.value = "";
        });
    }
    else{
        if(price.constructor === Array){
            if(price[1] === "high" || price[1] === "low"){
                if(price[1] === "high"){
                    document.getElementById('highPrice').value = price[0];
                }
                else if(price[1] === "low"){
                    document.getElementById('lowPrice').value = price[0];
                }
            }
            else{
                document.getElementById('lowPrice').value = price[0];
                document.getElementById('highPrice').value = price[1];
            }
        }
        else{
            document.getElementById('allapricecheckbox').checked = true;
        }
    }
    //Rating/Betyg
    if(rating === undefined || rating === null || rating === "undefined"){
        var ratingOptions = document.querySelectorAll('.ratingcheckbox:checked');
        for(i=0; i<ratingOptions.length; i++){
            ratingOptions[i].checked = false;
        }
        document.getElementById('allaratingcheckbox').checked = true;
    }
    else if(rating.includes('+') && rating === "Alla Betyg"){
        var ratingOptions = document.querySelectorAll('.ratingcheckbox:checked');
        for(i=0; i<ratingOptions.length; i++){
            ratingOptions[i].checked = false;
        }
        document.getElementById('allaratingcheckbox').checked = true;
    }
    else if(rating !== "Alla Betyg"){
        var ratingOptions = document.querySelectorAll('.ratingcheckbox:checked');
        for(i=0; i<ratingOptions.length; i++){
            ratingOptions[i].checked = false;
        }
        document.getElementById(`rating${rating}`).checked = true;
    }


    //Role Check
    if(role === null || role === undefined || role === "undefined"){
        document.querySelectorAll('.search-filter-option')[4].style.display = "none";
        document.getElementById('search-role-span').innerText = "Uppdragsgivare"
    }
    else{
        if(role === "Uppdragstagare"){
            document.querySelectorAll('.search-filter-option')[4].style.display = "none";
            document.getElementById('search-role-span').innerText = "Uppdragstagare"
        }
        else if(role === "Uppdragsgivare"){
            document.querySelectorAll('.search-filter-option')[4].style.display = "flex";
            document.getElementById('search-role-span').innerText = "Uppdragsgivare"
        }
        else{
            document.querySelectorAll('.search-filter-option')[4].style.display = "none";
            document.getElementById('search-role-span').innerText = "Uppdragsgivare"
        }
    }
    //Load Articles

};
$('input[name=region]').change(function checkBoxControlRegion(e){ //onchange settings (Region)
    var newSelect = e.target.id;

    var cityOptions = document.getElementsByClassName('locationcityoptions');
    for(i=0; i<cityOptions.length; i++){
        cityOptions[i].remove();
    }
    var regionSelected = document.querySelectorAll('.regioncheckbox:checked');
    if(regionSelected.length === 1){
        document.getElementById('allareas-wrapper').style.display = "flex"
        var region = document.querySelectorAll('.regioncheckbox:checked')[0].value;
        if(region.includes('+')){
            region.replace('+', " ");
        }
        if(region === "Hela Sverige"){
            //do nothing, do not populate city list
        }
        else if(region !== "Hela Sverige"){
            populateCityOptions(region);
        }
    }
    else if(regionSelected.length > 2){
        document.getElementById('allareas-wrapper').style.display = "none"
        helaSverige = document.getElementById('helasverigecheckbox');
        if(helaSverige.checked === true && newSelect == "helasverigecheckbox"){
            var regionOptions = document.querySelectorAll('.regioncheckbox:checked');
            for(i=0; i<regionOptions.length; i++){
                regionOptions[i].checked = false;
            }
            document.getElementById('helasverigecheckbox').checked = true;
            document.getElementById('regioncityheader').innerText = "Hela Sverige"
        }
        else if(helaSverige.checked === true && newSelect !== "helasverigecheckbox"){
            document.getElementById('helasverigecheckbox').checked = false;
            newSelect.checked = true;
            document.getElementById('regioncityheader').innerText = "Flera Regioner"
        }
        else{ //multiple selections, hela sverige not selected or was selected
            document.getElementById('regioncityheader').innerText = "Flera Regioner"
        }
    }
    else if(regionSelected.length === 2){
        document.getElementById('allareas-wrapper').style.display = "none"
        helaSverige = document.getElementById('helasverigecheckbox');
        if(helaSverige.checked === true && newSelect == "helasverigecheckbox"){
            var regionOptions = document.querySelectorAll('.regioncheckbox:checked');
            for(i=0; i<regionOptions.length; i++){
                regionOptions[i].checked = false;
            }
            document.getElementById('helasverigecheckbox').checked = true;
            document.getElementById('regioncityheader').innerText = "Hela Sverige"

            //new count is === 1 (Hela Sverige only)
        }
        else if(helaSverige.checked === true && newSelect !== "helasverigecheckbox"){
            document.getElementById('helasverigecheckbox').checked = false;
            newSelect.checked = true;
            var newRegionValue = e.target.value
            document.getElementById('regioncityheader').innerText = `${newRegionValue}`
            document.getElementById('allareas-wrapper').style.display = "flex";
            populateCityOptions(newRegionValue); //Populate with city list
            //new count is === 1 (Region, not Hela Sverige)
        }
        else{
            document.getElementById('regioncityheader').innerText = "Flera Regioner"
            //new count is === 2
        }
    }
    else if(regionSelected.length === 0){ //0 Regions Selected, add text "Var god och välj en region"
        document.getElementById('regioncityheader').innerText = "Hela Sverige"
        var cityOptions = document.getElementsByClassName('locationcityoptions');
        for(i=0; i<cityOptions.length; i++){
            cityOptions[i].remove();
        }
        document.getElementById('allaområdencheckbox').checked = true;
        document.getElementById('helasverigecheckbox').checked = true;
    }

    var newCityOptions = document.querySelectorAll('input[name=city]');
    if(newCityOptions.length === 0 || newCityOptions === null || newCityOptions == undefined){
        //do nothing
    }
    else{
        for(i=0; i<cityOptions.length; i++){
            cityOptions[i].addEventListener('change', function(e){
                checkBoxControlCity(e)
            });
        }
    }
});
function checkBoxControlCity(e){ //onchange settings (City)
    var newSelect = e.target.id;

    var citySelected = document.querySelectorAll('.citycheckbox:checked');
    if(citySelected.length === 1){
        //do nothing?
    }
    else if(citySelected.length === 2){
        allCities = document.getElementById('allaområdencheckbox');
        if(allCities.checked === true && newSelect == "allaområdencheckbox"){
            var cityOptions = document.querySelectorAll('.citycheckbox:checked');
            for(i=0; i<cityOptions.length; i++){
                cityOptions[i].checked = false;
            }
            document.getElementById('allaområdencheckbox').checked = true;

            //new count is === 1 (Hela Sverige only)
        }
        else if(allCities.checked === true && newSelect !== "allaområdencheckbox"){
            document.getElementById('allaområdencheckbox').checked = false;
            newSelect.checked = true;
            //new count is === 1 (Region, not Hela Sverige)
        }
        else{
            //new count is === 2
        }
    }
    else if(citySelected.length > 2){
        allCities = document.getElementById('allaområdencheckbox');
        if(allCities.checked === true && newSelect == "allaområdencheckbox"){
            var cityOptions = document.querySelectorAll('.citycheckbox:checked');
            for(i=0; i<cityOptions.length; i++){
                cityOptions[i].checked = false;
            }
            document.getElementById('allaområdencheckbox').checked = true;
        }
        else if(allCities.checked === true && newSelect !== "allaområdencheckbox"){
            document.getElementById('allaområdencheckbox').checked = false;
            newSelect.checked = true;
        }
        else{ //multiple selections, hela sverige not selected or was selected

        }
    }
    else if(citySelected.length === 0){ //0 Regions Selected, add text "Var god och välj en region"
        document.getElementById('allaområdencheckbox').checked = true;
        //force that AllCities is selected if user does not select one.
    }
};

//Dynamic City Option Populate
function populateCityOptions(regionValue){
    console.log(regionValue);
    if(regionValue.includes(' ') == true){
        document.getElementById('regioncityheader').innerText = 'Västra Götaland';
        var regionValue = regionValue.replace(/\s/g, "");
        console.log(regionValue);

        var cityWrapper = document.getElementById('locationheader-wrapper-city');
        var locationCityWrapper = document.createElement('div');
        locationCityWrapper.setAttribute('class', 'locationcityoptions');
        locationCityWrapper.setAttribute('id', `location${regionValue}`);

        cityWrapper.append(locationCityWrapper);

        var array = window[`${regionValue}CityArray`];
        for(x in array){
            var cityOptionWrapper = document.createElement('div');
            cityOptionWrapper.setAttribute('class', 'singlecityoption');
    
            var cityInput = document.createElement('input');
            cityInput.setAttribute('type', 'checkbox');
            cityInput.setAttribute('name', 'city');
            cityInput.setAttribute('class', 'citycheckbox');
            cityInput.setAttribute('value', `${array[x]}`);
            cityInput.setAttribute('id', `${array[x]}`);

            var label = document.createElement('label');
            label.textContent = `${array[x]}`;

            locationCityWrapper.append(cityOptionWrapper);
            cityOptionWrapper.append(cityInput);
            cityOptionWrapper.append(label);
        }
    }
    else{
        document.getElementById('regioncityheader').innerText = `${regionValue}`;
        var cityWrapper = document.getElementById('locationheader-wrapper-city');
        var locationCityWrapper = document.createElement('div');
        locationCityWrapper.setAttribute('class', 'locationcityoptions');
        locationCityWrapper.setAttribute('id', `location${regionValue}`);

        cityWrapper.append(locationCityWrapper);

        var array = window[`${regionValue}CityArray`];
        for(x in array){
            var cityOptionWrapper = document.createElement('div');
            cityOptionWrapper.setAttribute('class', 'singlecityoption');
    
            var cityInput = document.createElement('input');
            cityInput.setAttribute('type', 'checkbox');
            cityInput.setAttribute('name', 'city');
            cityInput.setAttribute('class', 'citycheckbox');
            cityInput.setAttribute('value', `${array[x]}`);
            cityInput.setAttribute('id', `${array[x]}`);

            var label = document.createElement('label');
            label.textContent = `${array[x]}`;

            locationCityWrapper.append(cityOptionWrapper);
            cityOptionWrapper.append(cityInput);
            cityOptionWrapper.append(label);
        }
    }

    //This section might needs to be removed, duplicate/redundant
    if(citySelected === null || citySelected === undefined){
        document.getElementById('allaområdencheckbox').checked = true;
    }
    else if(citySelected.includes(',')){
        var citySelected = citySelected.replace(/"/g, "");
        var citySelected = citySelected.split(',');
        for (i = 0; i < citySelected.length; i++){
            document.getElementById(citySelected[i]).checked = true;
            document.getElementById('allaområdencheckbox').checked = false;
        }
    }
    else if(citySelected = 'Alla Städer'){
        document.getElementById('allaområdencheckbox').checked = true;
    }
    else{
        var citySelected = citySelected.replace(/"/g, "");
        document.getElementById(`${citySelected}`).checked = true;
    }
}

/*******CATEGORY, PRICE & RATING FILTERS********* */
$('input[name=category]').change(function checkBoxControlRegion(e){ //category filter
    var target = e.target.id
    if(target === "allakategoriercheckbox"){
        var categoryOptions = document.querySelectorAll('.categorycheckbox')
        for(i=0; i<categoryOptions.length; i++){
            categoryOptions[i].checked = false;
        }
        document.getElementById('allakategoriercheckbox').checked = true
    }
    else if(target !== "allakategoriercheckbox"){
        var allCategories = document.getElementById("allakategoriercheckbox");
        if(allCategories.checked === true){
            allCategories.checked = false;
        }
        else{
            // do nothing
        }
    }
});
document.getElementById('allapricecheckbox').onchange = () =>{ //price Filter

}
document.getElementById('lowPrice').oninput = () =>{
    var input = document.getElementById('lowPrice').value
    console.log(typeof(input))
    document.getElementById('lowPrice').value = input.replace(/\D+/g, '').replace(/^0+/, '');

    var highPrice = document.getElementById('highPrice').value;
    if((input.length === 0 || input === "") && (highPrice.length === 0 || highPrice === "")){
        document.getElementById('allapricecheckbox').checked = true;
    }
    else{
        document.getElementById('allapricecheckbox').checked = false;
    }
    if(input <= highPrice || highPrice === ""){
        document.getElementById('lowPrice').style.borderColor = "";
    }
    else{
        document.getElementById('lowPrice').style.borderColor = "red";
    }
    priceInputCount()
}
document.getElementById('highPrice').oninput = () =>{
    var input = document.getElementById('highPrice').value
    document.getElementById('highPrice').value = input.replace(/\D+/g, '').replace(/^0+/, '');

    var lowPrice = document.getElementById('lowPrice').value;
    if((input.length === 0 || input === "") && (lowPrice.length === 0 || lowPrice === "")){
        document.getElementById('allapricecheckbox').checked = true;
    }
    else{
        document.getElementById('allapricecheckbox').checked = false;
    }
    if(input <= highPrice || highPrice === ""){
        document.getElementById('highPrice').style.borderColor = "";
    }
    else{
        document.getElementById('highPrice').style.borderColor = "red";
    }
    priceInputCount()
}
function priceInputCount(){
    var lowPrice = document.getElementById('lowPrice').value;
    var highPrice = document.getElementById('highPrice').value;
    if(lowPrice === "" && highPrice === ""){
        document.getElementById('allapricecheckbox').checked = true;
    }
    else{
        var lowPrice = parseInt(lowPrice);
        var highPrice = parseInt(highPrice)
        if(lowPrice > highPrice){
            document.getElementById('allapricecheckbox').checked = true;
        }
        else{
            document.getElementById('allapricecheckbox').checked = false;
        }
    }
}


$('input[name=rating]').change(function checkBoxControlRegion(e){ //rating filter
    console.log(e.target.id)
});

function displayArticleHits(){
    var region = document.querySelectorAll('.regioncheckbox');
    var city = document.querySelectorAll('.citycheckbox');
    var purpose = document.querySelectorAll('.categorycheckbox');

    var region = displayArticleHitsParameters(region);
    console.log(region)

    function displayArticleHitsParameters(value){
        for(i=0; i<value.length; i++){
            if(value[i].checked = true){
                return value[i];
            }
            else if(value[i] === null || value[i] === undefined){
                return null
            }
        }
    }
    $.ajax(
        {
            url: './PHP/articleload.php',
            dataType: 'text',
            method: 'GET',
            data: {
                requestid: 9,
                region: region,
                city: city,
                purpose: purpose,
                price: price,
                rating: rating,
                role: role,
                count: 1,
            },
            success: function(response){
                var response = JSON.parse(response);
                console.log(response)
                if(response !== null){

                }
                else{

                }
            },
        }
    );
}