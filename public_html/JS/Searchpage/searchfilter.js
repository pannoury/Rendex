function filterOptionSelect(id){
    let toggle = document.getElementById(`${id}`).getAttribute('aria-label');
    if(toggle === "untoggled"){
        document.getElementById(`${id}`).nextElementSibling.style.display = "flex"
        document.getElementById(`${id}`).getElementsByTagName('svg')[1].setAttribute('transform', 'rotate(180)')
        document.getElementById(`${id}`).setAttribute('aria-label', 'toggled');
        document.getElementById(`${id}`).style.backgroundColor = "#d4d4d4";
    }
    else if(toggle == "toggled"){
        document.getElementById(`${id}`).nextElementSibling.style.display = "none"
        document.getElementById(`${id}`).getElementsByTagName('svg')[1].setAttribute('transform', 'rotate(0)')
        document.getElementById(`${id}`).setAttribute('aria-label', 'untoggled');
        document.getElementById(`${id}`).style.backgroundColor = "";
    }
}
document.getElementById('filter-initiate-button').onclick = function openFilterWindow(){//Open Filter Window
    document.getElementById('search-filter-wrapper').style.width = "48vw"
    document.getElementById('search-filter-wrapper').style.padding = "20px"
    document.getElementById('darkcover').style.display = "block" //add dark cover in the background
}
document.getElementById('plats-btn').onclick = function openFilterWindowMobile(){
    document.getElementById('search-filter-wrapper').style.width = "90vw"
    document.getElementById('search-filter-wrapper').style.padding = "20px"
    document.getElementById('darkcover').style.display = "block" //add dark cover in the background
    $('body').css({'overflow':'hidden'});
    $(document).bind('scroll',function () { 
         window.scrollTo(0,0); 
    });
}
document.getElementById('search-filter-close-anchor').onclick = function closeFilterWindow(){ //Close Filter Window
    document.getElementById('search-filter-wrapper').style.width = "0vw"
    document.getElementById('search-filter-wrapper').style.padding = "0px"
    document.getElementById('darkcover').style.display = "none" //remove dark cover in the background
    $(document).unbind('scroll'); 
    $('body').css({'overflow':'visible'});
}
//Input Search Function
document.getElementById('searchpage-searchindex').addEventListener('input', inputQuery);

function inputQuery(data){
  let theInput = data.target.value;
  console.log(theInput)
  if(theInput === ""){
    document.getElementById('searchpage-search-suggestions').style.display = "none";
  }
  else{
    document.getElementById('searchpage-search-suggestions').style.display = "block";
    /*
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
    */
  }
  
}

function retriveArticle(){
    var urlParameters = new URLSearchParams(window.location.search);      
    var region = arrayCreator(urlParameters.get("r"));
    var city = arrayCreator(urlParameters.get("c"));
    var purpose = arrayCreator(urlParameters.get("p"));
    var price = arrayCreator(urlParameters.get("pr"));
    var rating = arrayCreator(urlParameters.get("ra"));
    var role = arrayCreator(urlParameters.get("ro"));


    function arrayCreator(value){
        console.log(value)
        if(value === null || value === undefined || value === "undefined"){
            return 0;
        }
        else if(value.includes(',')){
            var array = value.split(',')
            var length = array.length;
            var count = 0;
            if(!isNaN(array[0])){ //price range
                if(value.substring(0,1) === ','){ //highprice only defined
                    var array = `${value.substring(1)},high`
                    return '\'' + array.split(',').join('\',\'') + '\'';
                }
                else if(value.slice(-1) === ','){
                    var array = `${value}low`
                    return '\'' + array.split(',').join('\',\'') + '\'';
                }
                else if(value.slice(-1) !== ',' && value.substring(0,1) !== ','){
                    return '\'' + value.split(',').join('\',\'') + '\'';
                }
                else{
                    return 0
                }
            }
            else{
                for(i=0; i<array.length; i++){
                    var element = document.getElementById(`${array[i]}`);
                    if(element === null){
                        //do nothing
                    }
                    else{
                        count++
                    }
                }
            }
            if(count === length){ //pass an array, readable by PHP through json_decode
                var value = '\'' + value.split(',').join('\',\'') + '\'';
                return value
            }
            else{
                return 0
            }
        }
        else{
            var element = value.replace(' ', "");
            var element = document.getElementById(`${element}`);
            if(element === null && value !== "Uppdragsgivare" && value !== "Uppdragstagare"){
                return 0
            }
            else{
                return value;
            }
        }
    }
    
    console.log(region, city, purpose, price, rating, role)
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
            },
            success: function(response){
                var response = JSON.parse(response);
                console.log(response)
                ajaxResponse(response);
            },
        }
    );
}

/*
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
*/