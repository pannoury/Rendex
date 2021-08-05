
window.onload = function(){
    getURLParameterProfile();
    viewControl();
}

function viewControl(){ //checks whether its you looking at your public profile or not
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    cookieid = getCookie("a_user");
    var cookieid = cookieid.split(',');
    
    if(cookieid[0] == id){ //you are looking at your own page
        document.getElementById('initiate-chat').style.display = "none";
    }
    else{
        //do nothing
    }
}

function getURLParameterProfile(){
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
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
                
                if(response[1] == 1){ //individual
                    individualRender(response, id);
                }
                else if(response[1] == 2){ //organisation
                    organisationRender(response, id);
                }
            }
        }
    );
};

function individualRender(response, id){
    document.getElementById('profile-email').innerText = `${response[2]}`
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
                console.log(response)
                document.getElementById('accountpage-companyname').innerText = `${response[1]} ${response[2]}`;
                
                
                if(response.length == 9){
                    document.getElementById('companylogoimage').setAttribute('src', './assets/images/unchosen-profilepic.svg');
                }
                else if(response.length == 10){
                    document.getElementById('companylogoimage').setAttribute('src', `${response[9]}`);
                }
            }
        }
    );
}

function organisationRender(response, id){

}