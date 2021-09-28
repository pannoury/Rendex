$(document).ready(function(){
    loggedInControl();
    cookieConsentLoad();
    viewControl();
});

function viewControl(){ //checks whether its you looking at your public profile or not
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    cookieid = getCookie("a_user");
    var cookieid = cookieid.split(',');
    
    if(cookieid[0] == id){ //you are looking at your own page
        document.getElementById('profile-initiate-btn-wrapper').style.display = "none";
    }
    else if(cookieid[0] == null || cookieid[0] == undefined){
        window.location = "https://rendex.se/login"
    }
    document.getElementById('report-user-btn').setAttribute('href', `https://rendex.se/report?id=${id}`);

    getURLParameterProfile();

    function getURLParameterProfile(){
        var url_string = window.location.href;
        var url = new URL(url_string);
        var id = url.searchParams.get("id");
        if(id !== null && id !== undefined && id !== " "){
            $.ajax(
                {
                    url: './PHP/individuals.php',
                    dataType: 'text',
                    method: 'GET',
                    data: {
                        requestid: 1,
                        userid: id,
                        role: 0, //since we dont know the role yet
                    },
                    success: function(response){
                        var response = JSON.parse(response);
                        console.log(response)
                        
                        if(response[1] == 1){ //individual
                            individualRender(response, id);
                        }
                        else if(response[1] == 2){ //organisation
                            organisationRender(response, id);
                        }
                        else if(response[1] === ""){
                            document.getElementById('no-account-error').style.display = "flex";
                            var profileSections = document.querySelectorAll('.profile-section');
                            for(i=0; i<profileSections.length; i++){
                                profileSections[i].style.display = "none"
                            }
                        }
                    }
                }
            );
        }
        else{
            document.getElementById('no-account-error').style.display = "flex";
            document.getElementById('account-wrapper-wrapper').style.display = "none";
        }
    
    };

    function individualRender(response, id){ //triggered by getURLParameterProfile
        document.getElementById('profile-email').innerText = `${response[2]}`
        renderInformation();
        renderParticipatingArticles();
        function renderInformation(){
            $.ajax(
                {
                    url: './PHP/profile.php',
                    dataType: 'text',
                    method: 'GET',
                    data: {
                        userid: id,
                        role: 1,
                    },
                    success: function(response){
                        var response = JSON.parse(response);
                        console.log(response)
                        document.getElementById('accountpage-companyname').innerText = `${response[1]} ${response[2]}`;
                        
                        //hide information that is only shown among organisation profiles
                        document.querySelectorAll('.profile-top-info-row')[2].style.display = "none";
                        document.querySelectorAll('.profile-top-info-row')[3].style.display = "none";
                        
                        //Add Description text
                        if(response[10] === ""){
                            document.getElementById('profile-description-text').innerText = "Ingen beskrivning hittades"
                        }
                        else{
                            document.getElementById('profile-description-text').innerText = `${response[10]}`;
                        }
                        
                        //profile picture
                        if(response[9] == undefined || response[9] == null || response[9] === ""){
                            document.getElementById('companylogoimage').setAttribute('src', './assets/images/unchosen-profilepic.svg');
                        }
                        else{
                            document.getElementById('companylogoimage').setAttribute('src', `${response[9]}`);
                        }
                        //website
                        if(response[11] === "" || response[11] == null || response[11] == undefined){
                            document.querySelectorAll('.profile-top-info-row')[5].style.display = "none";
                        }
                        else{
                            document.getElementById('company-website').innerText = `${response[11]}`;
                            document.getElementById('company-website').setAttribute('href', `${response[11]}`);
                        }
                        $.ajax( //See whether you have reviews or not
                            {
                                url: './PHP/profile.php',
                                dataType: 'text',
                                method: 'GET',
                                data: {
                                    userid: id,
                                    requestid: 1,
                                },
                                success: function(response){
                                    var response = JSON.parse(response);
                                    console.log(response);
                                    if(response == 1 || response[0] == 1){
                                        console.log(response);
                                        /*
                                        $.ajax( //Get Average Score in Reviews
                                            {
                                                url: './PHP/profile.php',
                                                dataType: 'text',
                                                method: 'GET',
                                                data: {
                                                    userid: id,
                                                    requestid: 2,
                                                },
                                                success: function(response){
                                                    var response = JSON.parse(response);
                                                    console.log(response);
                                                }
                                            }
                                        );
                                        */
                                    }
                                    else if(response == 0 || response[0] == 0){
                                        document.getElementById('numberofreviewscompany').innerText = "0";
                                        var img = document.querySelectorAll('.rating-star');
                                        for(i=0; i<img.length; i++){
                                            img[i].setAttribute('src', './assets/images/empty-star.svg')
                                        }
                                        var p = document.createElement('p');
                                        p.innerText = "Inga recensioner hittades"
                                        document.getElementById('previes-articles').appendChild(p);
                                    }
                                }
                            }
                        );
                    }
                }
            );
        }
    }

    function organisationRender(response, id){
        //do nothing yet
        //this function populates the profile site in case the profile is an organisation
        //needs to be added
    }

    function renderParticipatingArticles(){
        $.ajax(
            {
                url: './PHP/articleload.php',
                dataType: 'text',
                method: 'GET',
                data: {
                    requestid: 9,
                    userid: id,
                },
                success: function(response){
                    var response = JSON.parse(response);
                    console.log(response)
                    if(response[0].constructor === Array){ //multiple hits
                        response.forEach(element => {
                            createArticle(element);
                        });
                    }
                    else if(response[0] > 0 && response[0].constructor !== Array){ //single hit
                        createArticle(response);
                    }
                    else{ //no hits

                    }
                }
            }
        );
    }
    function createArticle(array){
        var resultWrapper = document.getElementById('companyannonser');
    
        /************First layer *********/
        var a1 = document.createElement('a');
        a1.setAttribute('class', 'article-wrapper');
        resultWrapper.appendChild(a1);
    
        var div2 = document.createElement('div');
        div2.setAttribute('class', 'article-information-wrapper');
        a1.addEventListener('click', function(e){
            if(e.target !== e.currentTarget){
                if(e.target.localName === "span" || e.target.localName === "svg" || e.target.localName === "path"){
                    var id = e.currentTarget.getAttribute('aria-label');
                    saveArticle(id, e.currentTarget)
                }
                else{
                    let id = a1.getAttribute('aria-label');
                    window.location = `https://rendex.se/article?id=${id}`;
                }
            }
            else{
                let id = a1.getAttribute('aria-label');
                window.location = `https://rendex.se/article?id=${id}`;
            }
        });
        a1.appendChild(div2);
        /************First layer *********/
        
        /********ARTICLE-IMAGE-WRAPPER********* */
        
        var hoverDiv = document.createElement('div');
        hoverDiv.setAttribute('class', 'article-option-wrapper');
        var hoverDivSVG = document.createElement('span');
        hoverDivSVG.setAttribute('class', 'article-save');
        //hoverDivSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/></svg>`
        
        var loginId = getCookie("a_user");
        var newArrayLoginId = loginId.split(',');
        $.ajax(
            {
                url: './PHP/individuals.php',
                dataType: 'text',
                method: 'GET',
                data: {
                    requestid: 2,
                    userid: newArrayLoginId[0],
                    role: newArrayLoginId[1],
                },
                success: function(response){
                    var response = JSON.parse(response);
                    if(response !== 0 || response !== ""){
                        if(response.includes(',')){
                            var response = response.split(',')
                        }
                        var articleId = array[1]
                        if(response.constructor === Array){
                            if(response.indexOf(articleId) > -1){
                                hoverDivSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>`
                            }
                            else{
                                hoverDivSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/></svg>`
                            }
                        }
                        else{
                            if(response === articleId){
                                hoverDivSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>`
                            }
                            else{
                                hoverDivSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/></svg>`
                            }
                        }
                    }
                    else{
                        //do nothing
                    }
                },
            }
        );
        
        
        hoverDivSVG.setAttribute('aria-label', `${array[1]}`)
        hoverDiv.appendChild(hoverDivSVG);
        a1.appendChild(hoverDiv);
        
        /********ARTICLE-IMAGE-WRAPPER********* */
    
        /********ARTICLE-INFORMATION-WRAPPER********* */
        var div4 = document.createElement('div');
        div4.setAttribute('class', 'title-wrapper');
        div2.appendChild(div4);
            pA = document.createElement('p');
            pA.setAttribute('class', 'article-title');
            pB = document.createElement('p');
            pB.setAttribute('class', 'time-stamp');
    
            div4.appendChild(pA);
            div4.appendChild(pB);
    
    
        var divMid = document.createElement('div');
        divMid.setAttribute('class', 'article-information-middle');
        div2.appendChild(divMid);
        var pMid = document.createElement('p');
        pMid.setAttribute('class', 'article-information-middle-text');
        divMid.appendChild(pMid);
    
        var div5 = document.createElement('div');
        div5.setAttribute('class', 'article-information-bottom');
        div2.appendChild(div5);
    
        /********ARTICLE-INFORMATION-WRAPPER********* */
    
        var div6 = document.createElement('div');
        div6.setAttribute('class', 'article-rating article-info');
        div5.appendChild(div6);
    
        var urlParameters = new URLSearchParams(window.location.search);  
        var role = urlParameters.get("ro");
        if(role === null || role === "undefined" || role === undefined || role === "Uppdragsgivare" || role === "null"){
            div6.innerHTML = `<p class="article-rating">${array[2]}, ${array[3]}<p>`
        }
        else if(role === "Uppdragstagare"){
            
        }
        
    
        var p1 = document.createElement('p');
        p1.setAttribute('class', 'article-price article info');
        var p2 = document.createElement('p');
        p2.setAttribute('class', 'article-class article-info');
        div5.appendChild(p1);
        div5.appendChild(p2);
    
        $.ajax(
            {
                url: './PHP/articleload.php',
                dataType: 'text',
                method: 'GET',
                data: {
                    requestid: 2,
                    accountid: array[0],
                },
                success: function(response){
                    var response = JSON.parse(response);
                    if(response[2] == 1){ //individual
                        $.ajax(
                            {
                                url: './PHP/articleload.php',
                                dataType: 'text',
                                method: 'GET',
                                data: {
                                    requestid: 3,
                                    accountid: array[1],
                                    role: 1,
                                },
                                success: function(response){
                                    var response = JSON.parse(response);
                                    console.log(response)
                                    a1.setAttribute('aria-label', `${array[1]}`);
                                }
                            }
                        );
                    }
                    else if(response[2] == 2){ //organisation
                        $.ajax(
                            {
                                url: './PHP/articleload.php',
                                dataType: 'text',
                                method: 'GET',
                                data: {
                                    requestid: 3,
                                    accountid: array[1],
                                    role: 2,
                                },
                                success: function(response){
                                    var response = JSON.parse(response);
                                }
                            }
                        );
                    }
                },
            }
        );
    
        pA.innerText = `${array[6]}`; //article titel label
        pB.innerText = `${array[9].substring(0,10)}`; //date label
        p2.innerText = `${array[5]}`; //category label
    
        /************PRICE WINDOW IN ARTICLE *************/
        if(array[7].length >= 4){ //value is equal or more than 10k
            p1.innerText = `${array[7].substring(0, array[7].length-3)}K - ${array[8].substring(0, array[8].length-3)}K`;
        }
        else if(array[7].length < 4 && array[8].length >= 4){
            p1.innerText = `${array[7]} - ${array[8].substring(0, array[8].length-3)}K`;
        }
        else{
            p1.innerText = `${array[7]} - ${array[8]}`;
        }
        p1.style.fontWeight = "bold";
        /************PRICE WINDOW IN ARTICLE *************/
        var width = window.innerWidth
        if(width > 875){
            if(array[4].length > 240){
                pMid.innerText = `${array[4].replace(/\r?\n|\r/g, "").substring(0,240)}...`;
            }
            else if(array[4].length <= 240){
                pMid.innerText = `${array[4].replace(/\r?\n|\r/g, "")}`
            }
        }
        else{ //mobile
            pMid.innerText = `${array[4].replace(/\r?\n|\r/g, "").substring(0,150)}...`;
        }
    };
    function saveButtonArticles(e){
        var string = e.href;
        var id = string.substring(string.indexOf("=")).replace("=", '')
        console.log(id)
        console.log(e)
        e.preventDefault();
    }
}


//These functions allow users to text other users in case they dont have
//an existing conversation, or if they want to text in an already existing chat
//
/************Chat function */
document.getElementById('initiate-chat').addEventListener('click', function(){
    var width = window.innerWidth;

    document.getElementById('initiate-chat').setAttribute('aria-label', 'open');
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    cookieid = getCookie("a_user");
    var cookieid = cookieid.split(',');

    if(width > 875){
        document.getElementById('new-chatwindow').style.width = "50vw";
    }
    else{
        document.getElementById('new-chatwindow').style.display = "block";
        document.getElementById('new-chatwindow').style.width = "100vw";
    }
    document.getElementById('darkcover').style.display = "block"


    $.ajax(
        {
            url: './PHP/individuals.php',
            dataType: 'text',
            method: 'GET',
            data: {
                userid: id,
                role: 1,
            },
            success: function(response){
                var response = JSON.parse(response);
                document.getElementById('new-chat-reciever').innerText = `${response[1]} ${response[2]}`;
            }
        }
    );
})

document.getElementById('close-new-chat').addEventListener('click', function(){
    document.getElementById('new-chatwindow').style.width = "0vw";
    document.getElementById('darkcover').style.display = "none"
});


document.getElementById('new-send-wrapper').addEventListener('click', function(){
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    cookieidraw = getCookie("a_user");
    var cookieid = cookieidraw.split(',');

    var text = document.getElementById('new-chatwindow-input').value;

    var chatid = `${cookieid[0]},${id}`;
    var chatid2 = `${id},${cookieid[0]}`;

    var today = new Date();
    var month = ('0' + (today.getMonth()+1)).slice(-2);
    var date = `${today.getFullYear()}-${month}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

    console.log(chatid);


    if(text.length >= 1){
        $.ajax( //check if conversation does exist
            {
                url: './PHP/inbox.php',
                dataType: 'text',
                method: 'GET',
                data: {
                    requestid: 10,
                    chatid: chatid,
                    chatid2: chatid2,
                },
                success: function(response){
                    var response = JSON.parse(response);
                    if(response !== 0){
                        $.ajax( // sends the text in an already existing conversation
                            {
                                url: './PHP/inbox.php',
                                dataType: 'text',
                                method: 'POST',
                                data: {
                                    requestid: 5,
                                    sender: cookieid[0],
                                    reciever: id,
                                    chatid: response,
                                    text: text,
                                    date: date,
                                },
                                success: function(response){
                                    var response = JSON.parse(response);
                                    if(response == 1){
                                        window.location = "https://rendex.se/inbox";
                                    }
                                }
                            }
                        );
                    }
                    else{
                        $.ajax( //creates a new conversation
                            {
                                url: './PHP/inbox.php',
                                dataType: 'text',
                                method: 'POST',
                                data: {
                                    requestid: 5,
                                    sender: cookieid[0],
                                    reciever: id,
                                    chatid: chatid,
                                    text: text,
                                    date: date,
                                },
                                success: function(response){
                                    var response = JSON.parse(response);
                                    if(response == 1){
                                        window.location = "https://rendex.se/inbox";
                                    }
                                }
                            }
                        );
                    }
                }
            }
        );
    }
    else{
        alert("Vänligen skriv ditt meddelande");
    }

});
/************Chat function */