$.getJSON("https://skatteverket.entryscape.net/rowstore/dataset/b4de7df7-63c0-4e7e-bb59-1f156a591763/swagger", function(personId){
    console.log(personId);
})

document.getElementById('insurancenumber').onblur = function(){
    var a = document.getElementById('insurancenumber');
    var b = a.value;

    if(b.length > 0 && b.length < '12'){
        alert("Skriv ett 12-siffrigt personnummer");
        a.style.borderColor = "red";
    }
    else if (b.length > 12){
        alert("Du har skrivit mer än 12 siffror")
        a.style.borderColor = "red";
    }
    else{
        a.style.borderColor = "black";
    }
};
document.getElementById('insurancenumber').oninput = function(){
    var x = document.getElementById('insurancenumber');

    if(isNaN(x.value)){
        x.style.borderColor = "red";
    }
    else{
        x.style.borderColor = "black";
    }
}
document.getElementById('firstnameinput').oninput = function(){
    var f = document.getElementById('firstnameinput').value;
}
document.getElementById('surnameinput').oninput = function(){
    var s = document.getElementById('surnameinput').value;
}
document.getElementById('purposeselect').onchange = function purposeSelect(){
    var p = document.getElementById('purposeselect').value;
}
document.getElementById('regioninput').onchange = function regionSelect(){
    var r = document.getElementById('regioninput').value;
}

function createAccountClick(){
    var firstName = document.getElementById('firstnameinput').value;
    var lastName = document.getElementById('surnameinput').value;
    var roleSelect = document.getElementById('purposeselect').value;
    var regionSelected = document.getElementById('regioninput').value;

    console.log(firstName, lastName, roleSelect, regionSelected);
}
document.getElementById('repeatpassword').onblur = function passwordControl(){
    var a = document.getElementById('createpassword').value;
    var b = document.getElementById('repeatpassword').value;

    if(a != b){
        alert("Lösenorden matchar inte!")
    }
}
