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
}

function clearMyAccountSettings(){
    var settingOptions = document.querySelectorAll('.profile-header-row2-option');
    for(x in settingOptions){
        settingOptions[x].backgroundColor = "none";

    }
}

const app = Vue.createApp({
    template: '<h1>Hello</h1>',
})

app.mount('#my-articles-wrapper-wrapper')