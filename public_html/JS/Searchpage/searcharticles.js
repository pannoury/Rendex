function articleCounter(){ //counts the number of articles

    var urlParameters = new URLSearchParams(window.location.search);      
    var region = arrayCreator(urlParameters.get("r"));
    var city = arrayCreator(urlParameters.get("c"));
    var purpose = arrayCreator(urlParameters.get("p"));
    var price = arrayCreator(urlParameters.get("pr"));
    var rating = arrayCreator(urlParameters.get("ra"));
    var role = arrayCreator(urlParameters.get("ro"));
    function arrayCreator(value){
        if(value === null || value === undefined || value === "undefined"){
            return 0;
        }
        else if(value.includes(',')){
            var array = value.split(',')
            var length = array.length;
            var count = 0;
            if(!isNaN(array[0])){
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
                    var value = '\'' + value.split(',').join('\',\'') + '\'';
                    return value
                }
            }
            else{
                for(i=0; i<array.length; i++){
                    var element = document.getElementById(`${array[i].replace(' ','')}`);
                    if(element === null){
                        //do nothing
                    }
                    else{
                        count++
                    }
                }
                if(count === length){ //pass an array, readable by PHP through json_decode
                    //return JSON.stringify(value.split(','));
                    //return value = value.split(',')
                    var value = '\'' + value.split(',').join('\',\'') + '\'';
                    return value
                }
                else{
                    return 0
                }
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
                var p = document.querySelector(".search-result-midpage-header-right p");
                if(response == 0){
                    p.innerText = "0 Annonser"
                }
                else if(response == 1){
                    p.innerText = `${response} Annons`;
                }
                else if(response > 1){
                    p.innerText = `${response} Annonser`;
                }

                document.getElementsByClassName('pagination-navigation-bottom')[0].innerText = `1 - ${response}`;
                document.getElementsByClassName('pagination-side-total-count')[0].innerText = `${response}`;
                if(response < 40){
                    document.getElementById('loadmorearticles-btn').style.display = "none";
                }
                else{
                    //do nothing, display load button
                }
            },
        }
    );
}

function ajaxResponse(response){
    if(response !== null || response !== undefined){
        if(response == 0){
            document.getElementById('searchresult-articlecounter').innerText = "0 Annonser";
            document.getElementById('no-articles-found').style.display = "block";
            document.getElementById('search-navigation-btn-mobile').style.display = "none";
        }
        else if(response[0].constructor === Array){ //if multiarray (multiple hits)
            response.forEach(element => {
                createArticle(element);
            });
        }
        else{ // single hit
            createArticle(response);
            document.getElementById('search-navigation-btn-mobile').style.display = "none";
        }
    }
    else{
        document.querySelector(".search-result-midpage-header-right p")[0].innerText = "0 Annonser";
        //add a div which shows no hits :(
    }
    articleCounter();
}

function createArticle(array){
    var resultWrapper = document.getElementById('article-wrapper-wrapper');

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

    //controlCheckSavedArticles(hoverDivSVG);
    marginTopFix();
};

function marginTopFix(){
    var fix = document.querySelectorAll('.article-title');
    for(i=0; i < fix.length; i++){
        fix[i].style.marginTop = "0px";
    }
}

function saveButtonArticles(e){
    var string = e.href;
    var id = string.substring(string.indexOf("=")).replace("=", '')
    console.log(id)
    console.log(e)
    e.preventDefault();
}