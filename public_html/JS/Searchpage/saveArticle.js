function saveArticle(id, target){
    var loginId = getCookie("a_user");
    var newArrayLoginId = loginId.split(',');
    if(newArrayLoginId[1] == 1){ //individual
        $.ajax(
            {
                url: './PHP/individuals.php',
                dataType: 'text',
                method: 'GET',
                data: {
                    userid: newArrayLoginId[0],
                    role: newArrayLoginId[1],
                },
                success: function(response){
                    var response = JSON.parse(response);
                    if(response[12] === ""){
                        console.log(id)
                        $.ajax(
                            {
                                url: './PHP/individuals.php',
                                dataType: 'text',
                                method: 'POST',
                                data: {
                                    requestid: 1,
                                    userid: newArrayLoginId[0],
                                    role: newArrayLoginId[1],
                                    saved: id,
                                },
                                success: function(response){
                                    var response = JSON.parse(response);
                                    if(response == 1){
                                        var notification = document.getElementById('notification-div');
                                        notification.innerText = "Annons sparad!";
                                        notification.style.visibility = "visible";
                                        changeSVG(target, 1);
                                        setTimeout(function(){
                                            notification.style.visibility = "hidden";
                                        }, 3000);
                                    }
                                    else{
                                        //failed to save article
                                    }
                                },
                            }
                        );
                    }
                    else{
                        if(response[12].includes(',')){
                            var savedArticles = response[12].split(',')
                            var bracket = "";
                            for(i=0; i<savedArticles.length; i++){
                                if(savedArticles[i] === id){
                                    var hit = savedArticles[i];
                                }
                                else{
                                    var bracket = `${bracket}` + `${savedArticles[i]},`
                                }
                            }
                            if(hit !== "" && hit !== undefined){
                                var x = bracket.split(',')
                                var y = bracket.length;
                                if(bracket[y] === undefined){
                                    var bracket = bracket.replace(/,\s*$/, "");
                                }
                                ajaxUpdateSavedArticles(newArrayLoginId[0], bracket, newArrayLoginId[1])
                                changeSVG(target, 0)
                                var notification = document.getElementById('notification-div');
                                notification.innerText = "Denna annons är inte längra sparad!";
                                notification.style.visibility = "visible";
                                setTimeout(function(){
                                    notification.style.visibility = "hidden";
                                }, 3000);
                            }
                            else if(hit === undefined){
                                changeSVG(target, 1)
                                var newSavedArticles = `${response[12]},${id}`;
                                ajaxUpdateSavedArticles(newArrayLoginId[0], newSavedArticles, newArrayLoginId[1])
                                var notification = document.getElementById('notification-div');
                                notification.innerText = "Annons sparad!";
                                notification.style.visibility = "visible";
                                setTimeout(function(){
                                    notification.style.visibility = "hidden";
                                }, 3000);
                            }
                        }
                        else{
                            var articleId = target.getAttribute('aria-label')
                            if(response[12] === articleId){ //remove article
                                changeSVG(target , 0)
                                ajaxUpdateSavedArticles(newArrayLoginId[0], '', 1)
                            }
                            else{ //add article and create array
                                var savedArticles = `${articleId},${response[12]}`
                                changeSVG(target , 1)
                                ajaxUpdateSavedArticles(newArrayLoginId[0], savedArticles, 1)
                            }
                        }
                    }
                },
            }
        );
    }
    else if(newArrayLoginId[1] == 2){ //organisation
    }

    function changeSVG(target , ping){
        if(ping === 1){
            var svg = target.children[1].children[0].children[0];
            var span = target.children[1].children[0]
            svg.remove()
            span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>`
        }
        else if(ping === 0){
            var svg = target.children[1].children[0].children[0];
            var span = target.children[1].children[0]
            svg.remove()
            span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></svg>`
        }
    }
}

function ajaxUpdateSavedArticles(userid, articleid, role){
    $.ajax(
        {
            url: './PHP/individuals.php',
            dataType: 'text',
            method: 'POST',
            data: {
                requestid: 1,
                userid: userid,
                role: role,
                saved: articleid,
            },
            success: function(response){
                var response = JSON.parse(response);
            },
        }
    );
}