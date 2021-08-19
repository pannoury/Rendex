function languageControl(){
    var languageCookie = getCookie("lang");
    var path = window.location.pathname;

    if(languageCookie !== null || languageCookie !== undefined){
        if(languageCookie == "SE"){
            console.log(path);
            /*
            if(path.substring(0,4) = "/ENG"){
                
            }
            else{
                alert("Svenska!")
            }
            */
        }
        else if(languageCookie == "ENG"){
            //window.location = `${window.location.hostname}/ENG${window.location.pathname}`;
        }
    }
    else{
        //geolocation API
    }
};