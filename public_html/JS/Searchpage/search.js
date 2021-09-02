/*********************************************************** */
//                  v.2.2                                    //
//           Last Updated: 01/09/2021                        //
//                                                           //
//                                                           //
/*********************************************************** */
var regionHeader = document.getElementById('region-header-display');
var regionCityHeader = document.getElementById('regioncityheader');
var url_string = window.location.href;
var url = new URL(url_string);
var citySelected = url.searchParams.get("c")
var roleSelected = url.searchParams.get("ro")
var purposeSelected = url.searchParams.get("p")
var priceSelected = url.searchParams.get("pr")
var innerWidth = window.innerWidth;

window.onload = () =>{
    loggedInControl();
    cookieConsentLoad();
    languageControl();
    articleCounter();
    retriveArticle();

    //regionFilter(); //searchfilter.js
    document.getElementById('globeicon').setAttribute('src', './assets/images/globe.svg')
    document.getElementById('logo-mobile').style.display = "block";
};
document.addEventListener('DOMContentLoaded', () => {
    loadSearchParameters();
});

document.getElementById('initiateSearchFilter').onclick = () =>{
    //Region
    function regionInitiateControl(){
        var region = document.querySelectorAll('.regioncheckbox:checked');
        if(region.length === 1){
            var region = document.querySelectorAll('.regioncheckbox:checked')[0].value;
            return region.replace(' ', '+')
        }
        else if(region.length > 1){
            var regionMultiple = document.querySelectorAll('.regioncheckbox:checked');
            var region = [];
            for(i=0; i<regionMultiple.length; i++){
                region.push(regionMultiple[i].value)
            }
            var region = region.toString().replace(' ', '+')
            return region
        }
    }
    //City
    function cityInitiateControl(){
        var region = document.querySelectorAll('.regioncheckbox:checked');
        if(region.length > 1){ //region = array, ignore city
            return null
        }
        else if(region.length == 1){
            var city = document.querySelectorAll('.citycheckbox:checked');
            if(city.length == 1){
                var city = document.querySelectorAll('.citycheckbox:checked')[0].value;
                return city.replace(' ', '+')
            }
            else if(city.length > 1){
                var cityMultiple = document.querySelectorAll('.citycheckbox:checked');
                var city = [];
                for(i=0; i<cityMultiple.length; i++){
                    city.push(cityMultiple[i].value)
                }
                var city = city.toString().replace(' ', '+')
                return city
            }
            else if(city.length === 0){
                return null
            }
        }
    }
    //Category
    function categoryInitiateControl(){
        var category = document.querySelectorAll('.categorycheckbox:checked');
        if(category.length === 1){
            var category = document.querySelectorAll('.categorycheckbox:checked')[0].value;
            return category.replace(' ', '+')
        }
        else if(category.length > 1){
            var categoryMultiple = document.querySelectorAll('.categorycheckbox:checked');
            var category = [];
            for(i=0; i<categoryMultiple.length; i++){
                category.push(categoryMultiple[i].value)
            }
            var category = category.toString().replace(' ', '+')
            return category
        }
    }
    //Price
    function priceInitiateControl(){
        var price = document.querySelectorAll('.pricecheckbox:checked');
        if(price.length === 1){
            var price = document.querySelectorAll('.pricecheckbox:checked')[0].value;
            return price.replace(' ', '+')
        }
        else if(price.length === 0){
            var lowPrice = document.getElementById('lowPrice').value;
            var highPrice = document.getElementById('highPrice').value;
            if(lowPrice === null && highPrice === null){
                return 'Alla+Priser'
            }
            else{
                if(highPrice === null && lowPrice !== null){
                    return lowPrice;
                }
                else if(lowPrice === null && highPrice !== null){
                    return highPrice
                }
                else if(lowPrice !== null && highPrice !== null){
                    return [lowPrice, highPrice];
                }
                
            }
        }
    }
    //Rating
    function ratingInitiateControl(){
        var rating = document.querySelectorAll('.ratingcheckbox:checked');
        if(rating.length === 1){
            var rating = document.querySelectorAll('.ratingcheckbox:checked')[0].value;
            return rating.replace(' ', '+')
        }
        else if(rating.length > 1){
            var ratingMultiple = document.querySelectorAll('.ratingcheckbox:checked');
            var rating = [];
            for(i=0; i<ratingMultiple.length; i++){
                rating.push(ratingMultiple[i].value)
            }
            var rating = rating.toString().replace(' ', '+')
            return rating
        }
    }
    //Final Step
    var region = regionInitiateControl();
    var city = cityInitiateControl();
    var category = categoryInitiateControl();
    var price = priceInitiateControl()
    var rating = ratingInitiateControl()

    var url_string = window.location.href;
    var url = new URL(url_string);  
    var role = url.searchParams.get("ro");

    window.location = `https://rendex.se/searchpage?r=${region}&c=${city}&p=${category}&pr=${price}&ra=${rating}&ro=${role}`;
}