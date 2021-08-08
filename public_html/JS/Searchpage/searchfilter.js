var regionSelected = localStorage.getItem("regionSelected");
var citySelected = localStorage.getItem("citySelected");
var purposeSelected = localStorage.getItem("purposeSelected");
var roleSelected = localStorage.getItem("roleSelected");
var priceSelected = localStorage.getItem("priceFilter");


function regionFilter(){
    var regionSelected = localStorage.getItem("regionSelected");
    if(regionSelected.includes(',') == true && regionSelected !== null){
        var region = regionSelected;
        cityFilter(region);
    }
    else if(regionSelected !== null && regionSelected.includes(',') == false){
        var region = regionSelected.replace(/"/g, "");
        cityFilter(region);
    }
    else{
        var region = "Hela Sverige";
        cityFilter(region);
    }
};
function cityFilter(region){
    var citySelected = localStorage.getItem("citySelected");
    if(region.includes(',') == true){
        var city = "Flera Regioner"
        purposeFilter(region, city);
    }
    else if(region.includes(',') == false && region == "Hela Sverige"){
        var city = "Hela Sverige";
        purposeFilter(region, city);
    }
    else if(region.includes(',') == false && region !== "Hela Sverige"){
        if(citySelected !== null && citySelected.includes(',') == true){ //city is an array
            var city = citySelected;
            purposeFilter(region, city);
        }
        else if(citySelected !== null && citySelected.includes(',') == false){ //city is not an array, but also not null
            console.log(citySelected);
            if(citySelected == "Alla Städer" || citySelected.includes('Hela') == true && regionSelected.includes(',') == false){
                var city = regionSelected.replace(/"/g, "");
                purposeFilter(region, city);
            }
            else{
                var city = citySelected.replace(/"/g, "");
                purposeFilter(region, city);
            }
        }
        else if(citySelected == null){
            var city = regionSelected.replace(/"/g, "");
            purposeFilter(region, city);
        }
    }
};
function purposeFilter(region, city){
    var purposeSelected = localStorage.getItem("purposeSelected");
    if(purposeSelected == null){
        var purpose = "All";
        roleFilter(region, city, purpose);
    }
    else if(purposeSelected !== null && purposeSelected.includes(',') == true){
        var purpose = purposeSelected;
        roleFilter(region, city, purpose);
    }
    else if(purposeSelected !== null && purposeSelected.includes(',') == false){
        purpose = purposeSelected.replace(/"/g, "");
        roleFilter(region, city, purpose);
    }
};
function roleFilter(region, city, purpose){
    var roleSelected = localStorage.getItem("roleSelected");
    if(roleSelected == null){
        var role = "Uppdragstagare";
        prisFilter(region, city, purpose, role);
    }
    else{
        var role = roleSelected.replace(/"/g, "");
        prisFilter(region, city, purpose, role);
    }
    
};
function prisFilter(region, city, purpose, role){
    var priceSelected = localStorage.getItem("priceFilter");
    if(priceSelected !== null && priceSelected.includes(',') == true){
        var price = priceSelected;
        articleLoad(region, city, purpose, role, price);
    }
    else if(priceSelected !== null && priceSelected.includes(',') == false){
        var price = priceSelected.replace(/"/g, "");
        articleLoad(region, city, purpose, role, price);
    }
    else if(priceSelected == null){
        var price = "All";
        articleLoad(region, city, purpose, role, price);
    }
}

/************ADD A NEW FUNCTION FOR NEW FILTERS *************/

/************ADD A NEW FUNCTION FOR NEW FILTERS *************/

function articleLoad(region, city, purpose, role, price){
    console.log(region, city, purpose, role, price)
    if(role == "Uppdragstagare"){ //detta ska ändras till uppdragsgivare senare!! Detta är tillfälligt
        $.ajax(
            {
                url: './PHP/articleload.php',
                dataType: 'text',
                method: 'GET',
                data: {
                    requestid: 1,
                    region: region,
                    city: city,
                    purpose: purpose,
                    price: price,
                },
                success: function(response){
                    var response = JSON.parse(response);
                    ajaxResponse(response);
                },
            }
        );
    }
    else{ //inte klar, ska populera konto profiler!!!
        $.ajax(
            {
                url: './PHP/articleload.php',
                dataType: 'text',
                method: 'GET',
                data: {
                    requestid: 5,
                    region: region,
                    city: city,
                    purpose: purpose,
                    role: role,
                    price: price,
                },
                success: function(response){
                    var response = JSON.parse(response);
                    ajaxResponse(response);
                },
            }
        );
    }
}