$.getJSON("https://skatteverket.entryscape.net/rowstore/dataset/b4de7df7-63c0-4e7e-bb59-1f156a591763", function(personId){
    console.log(personId);
})
/********************************PERSONNUMMER************************************ */
document.getElementById('insurancenumber').onblur = function insuranceLengthCheck(){
    var a = document.getElementById('insurancenumber');
    var b = a.value;
    var c = document.getElementById('wronginsurancenumber');
    var d = false;

    if(b.length > 0 && b.length < '12'|| b.length > 12){
        a.style.borderColor = "red";
        c.style.display = "block";
    }
    else{
        a.style.borderColor = "black";
        c.style.display = "none";
        return (d = true);
    }
};
document.getElementById('insurancenumber').oninput = function insuranceValueCheck(){
    var x = document.getElementById('insurancenumber');
    var v = false;

    if(isNaN(x.value)){
        x.style.borderColor = "red";
        c.style.display = "block";
    }
    else{
        x.style.borderColor = "black";
        c.style.display = "none";
        var v = true;
    }
}
/********************************PERSONNUMMER************************************ */
document.getElementById('firstnameinput').oninput = function(){
    document.getElementById('firstnameinput').onblur = function(){
        var f = document.getElementById('firstnameinput');
        if(f.length < 2){
            f.style.borderColor = "red";
        }
        f.style.borderColor = "black"
        return f;
    }
}
document.getElementById('surnameinput').oninput = function(){
    document.getElementById('surnameinput').onblur = function(){
        var s = document.getElementById('surnameinput').value;
        return s;
    } 
}
document.getElementById('purposeselect').onchange = function purposeSelect(){
    var p = document.getElementById('purposeselect').value;
    return p;
}
document.getElementById('regioninput').onchange = function regionSelect(){
    var r = document.getElementById('regioninput').value;
    return r;
}
document.getElementById('selection-input-btn').addEventListener('click', () => {
    var a = document.getElementById('individual-organisation-select');
    document.getElementById('individual-organisation-select').click();
});
/****************************Phone number ***********************************/
document.getElementById('phonenumberinput').onblur = function(){
    var a = document.getElementById('phonenumberinput');
    var b = a.value;
    var c = document.getElementById('wrongphonenumber');

    if(b.length > 0 && b.length < '10'){
        a.style.borderColor = "red";
        c.style.display = "block"
    }
    else if (b.length > 10){
        a.style.borderColor = "red";
        c.style.display = "block"
    }
    else{
        a.style.borderColor = "black";
        c.style.display = "none"
    }
};
document.getElementById('phonenumberinput').oninput = function(){
    var x = document.getElementById('phonenumberinput');
    var c = document.getElementById('wrongphonenumber');

    if(isNaN(x.value)){
        x.style.borderColor = "red";
        c.style.display = "block"
    }
    else{
        x.style.borderColor = "black";
        c.style.display = "none"
    }
}
/****************************Phone number ***********************************/
document.getElementById('emailinputrepeat').onblur = function(){
    var a = document.getElementById('emailinputrepeat');
    var b = document.getElementById('emailinput');
    var c = document.getElementById('wrongemailrepeat');
    var d = a.value

    if(d.length < 1){
        a.style.borderColor = "black";
        c.style.display = "none"
    }
    else if(a.value != b.value){
        a.style.borderColor = "red";
        c.style.display = "block"
    }
    else{
        a.style.borderColor = "black";
        c.style.display = "none"
        return d;
    }
}

document.getElementById('createaccount-btn').onclick = function retrieveData(){
    var a = docuemnt.getElementById('regioninput').value;


    for(var i = 0; i <= a; i++){

    }
}


