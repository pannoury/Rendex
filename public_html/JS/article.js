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
                        document.getElementById('article-about').style.visibility = "hidden"
                    }
                    else{
                        populateArticlePage(response);
                    }
                }
            }
        );
    }
    articleViewCount(articleid);
};
function populateArticlePage(response){
    console.log(response)
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
    date.innerText = response[9].substring(0,10);
    type.innerText = response[5];

    if(response[7].length >= 4){ //value is equal or more than 10k
        price.innerText = `${response[7].substring(0, response[7].length-3)}K - ${response[8].substring(0, response[8].length-3)}K`;
    }
    else if(response[7].length < 4 && response[8].length >= 4){
        price.innerText = `${response[7]} - ${response[8].substring(0, response[8].length-3)}K`;
    }
    else{
        price.innerText = `${response[7]} - ${response[8]}`;
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
                                    document.getElementById('company-image').setAttribute('src', './assets/images/unchosen-profilepic.svg');
                                }
                                else if(response[9] !== "" && response[9] !== null && response[9] !== undefined){
                                    document.getElementById('article-profile-picture').setAttribute('src', `${response[9]}`);
                                    document.getElementById('company-image').setAttribute('src', `${response[9]}`);
                                }

                                document.getElementById('company-name').innerText = `${response[1]} ${response[2]}`;
                                document.getElementById('company-name').setAttribute('href', `https://rendex.se/profile?id=${sessionStorage.getItem("ac_id")}`)
                                if(response[10] === ""){
                                    document.getElementById('company-description').innerText = "Ingen beskrivning hittades"
                                }
                                else{
                                    document.getElementById('company-description').innerText = `${response[10]}`
                                }

                                cookieid = getCookie("a_user");
                                var cookieid = cookieid.split(',');
                                if(sessionStorage.getItem("ac_id") == cookieid[0]){
                                    var parentElement = document.getElementById('article-image-wrapper')
                                    var wrapper = document.createElement('div')
                                    wrapper.setAttribute('id', 'article-options');
                                    parentElement.appendChild(wrapper);
                                    wrapper.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 0 24 24" fill="#000000">
                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                                    </svg>`;
                                    wrapper.setAttribute('onclick', "articleOptions()");
                                }
                                else{

                                }
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

function articleViewCount(articleid){
    console.log(articleid)
    $.ajax(
        {
            url: './PHP/articleStatistics.php',
            dataType: 'text',
            method: 'POST',
            data: {
                requestid: 1,
                articleId: articleid,
            },
            success: function(response){
                var response = JSON.parse(response);
            }
        }
    );
}
document.getElementById('read-more-article-description').onclick = () =>{
    var viewMore = document.getElementById('read-more-article-description');
    attribute = viewMore.getAttribute('aria-label');
    svg = document.getElementById('read-more-article-description').getElementsByTagName('svg')[0]
    var descriptionDiv = document.getElementById('article-description-wrapper')
    if(attribute === null || attribute === undefined || attribute === "" || attribute === "untoggled"){
        svg.style.transform = "rotate(180deg)"
        viewMore.setAttribute('aria-label', 'toggled');
        descriptionDiv.style.height = "auto"
    }
    else if(attribute === "toggled"){
        svg.style.transform = "rotate(0deg)"
        viewMore.setAttribute('aria-label', 'untoggled');
        descriptionDiv.style.height = "85px"
    }
}
function articleOptions(){
    var optionsWindow = document.getElementById('article-options-window');
    var attribute = optionsWindow.getAttribute('aria-label')
    if(attribute === null || attribute === undefined || attribute === "" || attribute === "untoggled"){
        optionsWindow.setAttribute('aria-label', 'toggled');
        optionsWindow.style.visibility = "visible";
    }
    else if(attribute === "toggled"){
        optionsWindow.setAttribute('aria-label', 'untoggled');
        optionsWindow.style.visibility = "hidden";
    }
}

/*
window.onclick = (e) => {
    console.log(e.target)
    var optionsWindow = document.getElementById('article-options-window');
    var attribute = optionsWindow.getAttribute('aria-label')
    if(e.target.id === "article-options-window"){

    }
    else{
        optionsWindow.setAttribute('aria-label', 'untoggled');
        optionsWindow.style.visibility = "hidden";
    }
}
*/