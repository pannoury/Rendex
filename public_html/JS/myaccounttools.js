/***********Create Article Link **************/
document.getElementById('create-article-btn').onclick = () => {
    window.location = "https://rendex.se/createarticle";
}
document.getElementById('my-articles').onclick = () => {
    clearMyAccountSettings()
    document.getElementById('my-articles').style.backgroundColor = "#d4d4d4"

    var loginId = getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    id = newArrayLoginId[0];

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
                console.log(response);

                if(response == 0){
                    document.getElementById('my-articles-no-articles-found').style.display = "flex";
                }
                else if(response[0].constructor === Array){ //multi array
                    response.forEach(element => {
                        createMyArticles(element);
                    });
                }
                else{ //single hit
                    createMyArticles(response)
                }
            },
        }
    );

    document.querySelectorAll('.profile-header-row2-column')[1].style.display = "block";
    document.getElementById('my-articles-wrapper-wrapper').style.display = "block";
    document.getElementById('profile-header-row2-column-header').innerText = "Mina Annonser";

    var width = window.innerWidth;
    if(width > 875){
        // do nothing
    }
    else{
        document.querySelectorAll('.profile-header-row2-column')[0].style.display = "none";
        document.querySelectorAll('.profile-header-row2-column-back-btn')[0].style.display = "flex";
    }
}
document.getElementById('my-articles-back-btn').onclick = () => { //close My Articles (mobile version)
    document.querySelectorAll('.profile-header-row2-column')[0].style.display = "block";
    document.querySelectorAll('.profile-header-row2-column')[1].style.display = "none";
    document.querySelectorAll('.profile-header-row2-column-back-btn')[0].style.display = "none";
    document.getElementById('my-articles-wrapper-wrapper').style.display = "none";
    var Articles = document.getElementsByClassName('my-articles-wrapper');
    for(i=0; i < Articles.length; i++){ //removes Articles so we dont have duplications in case the user goes back
        Articles[i].remove();
    }
    clearMyAccountSettings(); //remove background color/selection from all items in list
}
function createMyArticles(array){
    var topWrapper = document.getElementById('my-articles-wrapper-wrapper');

    var profileHeaderColumn2Div = document.createElement('div')
    profileHeaderColumn2Div.setAttribute('class', 'profile-header-column-2-div');
    var myArticlesWrapper = document.createElement('a')
    myArticlesWrapper.setAttribute('class','my-articles-wrapper');
    profileHeaderColumn2Div.appendChild(myArticlesWrapper);

    var myArticlesWrapperHeader = document.createElement('div')
    myArticlesWrapperHeader.setAttribute('class', 'my-articles-wrapper-header')
    var myArticlesHeader = document.createElement('h4')
    myArticlesHeader.setAttribute('class', 'my-articles-header');
    var myArticlesDate = document.createElement('p')
    myArticlesDate.setAttribute('class', 'my-articles-date')
    myArticlesWrapperHeader.appendChild(myArticlesHeader, myArticlesDate); //append to A

    var myArticlesMid = document.createElement('div')
    myArticlesMid.setAttribute('class', 'my-articles-mid')
    var myArticlesDescription = document.createElement('p')
    myArticlesDescription.setAttribute('class', 'my-articles-description')
    myArticlesMid.appendChild(myArticlesDescription); //append to A

    var myArticlesBottom = document.createElement('div')
    myArticlesBottom.setAttribute('class', 'my-articles-bottom')
    var myArticlesCategory = document.createElement('p')
    myArticlesCategory.setAttribute('class', 'my-articles-category')
    var myArticlesViews = document.createElement('div')
    myArticlesViews.setAttribute('class', 'my-articles-views')
    myArticlesViews.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/></svg>'
    var myArticlesViewNumerical = document.createElement('p')
    myArticlesViewNumerical.setAttribute('class', 'my-articles-view-numerical');

    myArticlesBottom.appendChild(myArticlesCategory)
    myArticlesBottom.appendChild(myArticlesViews)
    myArticlesViews.appendChild(myArticlesViewNumerical)

    myArticlesWrapper.appendChild(myArticlesWrapperHeader)
    myArticlesWrapper.appendChild(myArticlesMid)
    myArticlesWrapper.appendChild(myArticlesBottom)

    topWrapper.appendChild(profileHeaderColumn2Div)

    myArticlesHeader.innerText = `${array[6]}`
    myArticlesDate.innerText = `${array[8].substring(0,10)}`
    myArticlesDescription.innerText = `${array[4]}`
    myArticlesCategory.innerText = `${array[5]}`
    myArticlesViewNumerical.innerText = `${array[10]}`
    myArticlesWrapper.setAttribute('href', `https://rendex.se/article?id=${array[1]}`)


}
function clearMyAccountSettings(){
    var settingOptions = document.getElementsByClassName('profile-header-row2-option');
    for(i=0; i < settingOptions.length; i++){
        settingOptions[i].style.backgroundColor = "";
    }
}