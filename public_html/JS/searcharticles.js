//const { DEFAULT_MIN_VERSION } = require("tls");

var regionSelected = localStorage.getItem("regionSelected");
var citySelected = localStorage.getItem("citySelected");
var purposeSelected = localStorage.getItem("purposeSelected");
var roleSelected = localStorage.getItem("roleSelected");


window.addEventListener('load', function(){
    articleFilter1();
});

function articleFilter1(){
    searchArray = [];

    if(regionSelected == null){
        searchArray.push("Hela Sverige");
    }
    else{
        var regionString = regionSelected.replace(/"/g,"");
        searchArray.push(regionString);
    }
    if(citySelected != null){
        var cityString = regionSelected.replace(/"/g,"");
        searchArray.push(cityString);
    }
    else{
        searchArray.push(citySelected);
    }
    if(purposeSelected != null){
        var purposeString = purposeSelected.replace(/"/g,"");
        searchArray.push(purposeString);
    }
    else{
        searchArray.push(purposeSelected);
    }
    if(roleSelected != null){
        var roleString = roleSelected.replace(/"/g,"");
        searchArray.push(roleString);
    }
    else{
        searchArray.push(roleSelected);
    }
    articleLoad(searchArray)
}

function articleLoad(array){
    region = array[0]
    $.ajax(
        {
            url: './PHP/articleload.php',
            dataType: 'text',
            method: 'GET',
            data: {
                requestid: 1,
                region: region,
            },
            success: function(response){
                var response = JSON.parse(response);
                ajaxResponse(response);
            },
        }
    );
}
function ajaxResponse(response){
    console.log(response);
    if(response[0].constructor === Array){ //if multiarray (multiple hits)
        response.forEach(element => {
            createArticle(element);
        });
    }
    else{ // single hit
        createArticle(response);
    }
    articleCounter();
}

function articleCounter(){
    var width = window.innerWidth;
    var articleCount = document.querySelectorAll('.article-wrapper');
    console.log(articleCount.length);
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

        div2.appendChild(pA, pB);

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
};