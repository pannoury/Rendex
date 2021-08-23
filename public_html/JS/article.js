window.onload = function(){
    loggedInControl();
    getURLParameter()
    cookieConsentLoad();
}

function getURLParameter(){
    var url_string = window.location.href;
    var url = new URL(url_string);
    var articleid = url.searchParams.get("id");

    cookieid = getCookie("a_user");
    var cookieid = cookieid.split(',');
    if(cookieid[0] == null || cookieid[0] == undefined){
        window.location = "https://rendex.se/login"
    }
    else{
        $.ajax(
            {
                url: './PHP/articleload.php',
                dataType: 'text',
                method: 'GET',
                data: {
                    requestid: 6,
                    articleId: articleid,
                },
                success: function(response){
                    var response = JSON.parse(response);
                    if(response === 0){
                        document.getElementById('no-article-error').style.display = "flex";
                        document.getElementById('top-page-article-wrapper').style.display = "none";
                        document.getElementById('article-option-tabs').style.display = "none";
                        document.getElementById('article-wrapper-wrapper').style.backgroundColor = "#fff"
                    }
                    else{
                        populateArticlePage(response);
                    }
                }
            }
        );
    }
};
function populateArticlePage(response){
    var articleTitle = document.getElementById('article-title');
    var articleIdSpan = document.getElementById('article-id-header');
    var articleDescription = document.getElementById('article-description');
    var regionLocation = document.getElementById('article-region-location');
    var price = document.getElementById('article-price');
    var date = document.getElementById('article-date');
    var type = document.getElementById('article-type');
    articleTitle.innerText = response[6];
    articleIdSpan.innerText = `(#${response[1]})`;
    articleDescription.innerText = response[4];
    regionLocation.innerText = `${response[3]}, ${response[2]}`;
    date.innerText = response[8].substring(0,10);
    type.innerText = response[5];

    if(response[7].includes(',')){
        priceValue = response[7].split(',');
        if(priceValue[0].length >= 5){
            priceLow = priceValue[0]/1000;
            priceHigh = priceValue[1]/1000;
            price.innerText = `${priceLow}K - ${priceHigh}K`
        }
        else{
            price.innerText = `${priceValue[0]} - ${priceValue[1]}`
        }
    }
    else{
        price.innerText = response[7];
    }

    sessionStorage.setItem("ac_id", `${response[0]}`);

    $.ajax(
        {
            url: './PHP/articleload.php',
            dataType: 'text',
            method: 'GET',
            data: {
                requestid: 7,
                accountid: response[0],
            },
            success: function(response){
                var response = JSON.parse(response);
                
                if(response == 1){ //individual
                    document.getElementById('article-role').innerText = "Privatperson";
                    document.getElementById('article-role-icon').setAttribute('src', './assets/images/individual-icon.svg')
                    document.getElementById('article-role-icon').style.height = "20px";
                    document.getElementById('article-role-icon').style.width = "20px";
                    $.ajax(
                        {
                            url: './PHP/individuals.php',
                            dataType: 'text',
                            method: 'GET',
                            data: {
                                userid: sessionStorage.getItem("ac_id"),
                                role: 1,
                            },
                            success: function(response){
                                var response = JSON.parse(response);
                                console.log(response);
                                if(response[9] === "" || response[9] == null || response[9] == undefined){ //no profilepicture exist
                                    document.getElementById('article-profile-picture').setAttribute('src', './assets/images/unchosen-profilepic.svg');
                                }
                                else if(response[9] !== "" && response[9] !== null && response[9] !== undefined){
                                    document.getElementById('article-profile-picture').setAttribute('src', `${response[9]}`);
                                }

                                document.getElementById('name-of-assignment-giver').innerText = `${response[1]} ${response[2]}`;
                                document.getElementById('name-of-assignment-giver').setAttribute('href', `https://rendex.se/profile?id=${sessionStorage.getItem("ac_id")}`)
                            }
                        }
                    );
                }
                else if(response == 2){ //organisation
                    document.getElementById('article-role').innerText = "Företag";
                    document.getElementById('article-role-icon').setAttribute('src', './assets/images/suitcase-icon.svg')
                    document.getElementById('article-role-icon').style.height = "20px";
                    document.getElementById('article-role-icon').style.width = "20px";
                    $.ajax(
                        {
                            url: './PHP/individuals.php',
                            dataType: 'text',
                            method: 'GET',
                            data: {
                                userid: sessionStorage.getItem("ac_id"),
                                role: 2,
                            },
                            success: function(response){
                                var response = JSON.parse(response);
                                
                                if(response.length == 9){ //no profilepicture exist
                                    document.getElementById('article-profile-picture').setAttribute('src', './assets/images/unchosen-profilepic.svg');
                                }
                                else if(response.length === 10){
                                    document.getElementById('article-profile-picture').setAttribute('src', `${response[9]}`);
                                }
                            }
                        }
                    );
                }
            }
        }
    );
}

document.getElementsByClassName('article-option-btn')[0].addEventListener('click', function(){
    var btnMode = document.getElementsByClassName('article-option-btn')[0].getAttribute('aria-label');
    var arrow = document.getElementsByClassName('article-option-btn')[0].getElementsByTagName('svg')[0];
    if(btnMode == "open"){
        document.getElementById('about-assignment-giver').style.display = "none";
        document.getElementsByClassName('article-option-btn')[0].setAttribute('aria-label', 'closed');
        arrow.setAttribute('transform', 'rotate(0)');
    }
    else{
        document.getElementById('about-assignment-giver').style.display = "flex";
        document.getElementsByClassName('article-option-btn')[0].setAttribute('aria-label', 'open');
        arrow.setAttribute('transform', 'rotate(180)');
    }
});