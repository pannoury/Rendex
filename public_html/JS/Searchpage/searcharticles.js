var regionSelected = localStorage.getItem("regionSelected");
var citySelected = localStorage.getItem("citySelected");
var purposeSelected = localStorage.getItem("purposeSelected");
var roleSelected = localStorage.getItem("roleSelected");

function ajaxResponse(response){
    console.log(response);
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

function articleCounter(){
    var width = window.innerWidth;
    var articleCount = document.querySelectorAll('.article-wrapper');
    var p = document.querySelector(".search-result-midpage-header-right p");
    if(articleCount.length == 0){
        p.innerText = "0 Annonser"
    }
    else if(articleCount.length == 1){
        p.innerText = `${articleCount.length} Annons`;
    }
    else if(articleCount.length > 1){
        p.innerText = `${articleCount.length} Annonser`;
    }
}

function createArticle(array){
    console.log(array);
    var resultWrapper = document.getElementById('article-wrapper-wrapper');

    /************First layer *********/
    var a1 = document.createElement('a');
    a1.setAttribute('class', 'article-wrapper');
    resultWrapper.appendChild(a1);

    var div1 = document.createElement('div');
    div1.setAttribute('class', 'article-image-wrapper');
    a1.appendChild(div1);

    var div2 = document.createElement('div');
    div2.setAttribute('class', 'article-information-wrapper');
    a1.appendChild(div2);
    /************First layer *********/
    
    /********ARTICLE-IMAGE-WRAPPER********* */
    var image = document.createElement('img');
    image.setAttribute('alt', 'article-image');
    div1.appendChild(image);
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

    var div5 = document.createElement('div');
    div5.setAttribute('class', 'article-information-bottom');
    div2.appendChild(div5);
    /********ARTICLE-INFORMATION-WRAPPER********* */

    var div6 = document.createElement('div');
    div6.setAttribute('class', 'article-rating article-info');
    div5.appendChild(div6);

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
                                a1.setAttribute('href', `https://rendex.se/article?id=${array[1]}`);
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

    pA.innerText = `${array[6]}`;
    pB.innerText = `${array[8].substring(0,10)}`;
    p1.innerText = `${array[7]}`;
    p2.innerText = `${array[5]}`;
    marginTopFix();
};

function marginTopFix(){
    var fix = document.querySelectorAll('.article-title');
    for(i=0; i < fix.length; i++){
        fix[i].style.marginTop = "0px";
    }
}