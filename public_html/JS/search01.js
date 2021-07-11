function clearRegionsV2(){
    var x = document.getElementsByClassName('regioncheckbox');
    var checkedboxes = 0;
    for(i = 0; i < x.length; i++){
        if (x[i].checked) {
            checkedboxes++;
            if (checkedboxes > 0){
                x[i].checked = false;
            }
            else{}
        }
    }
};

function regionArrayPopulate(region){
    var regionSelected = region.replace(/"/g, "");
    var regionSelected = regionSelected.split(',');
    for (i = 0; i < regionSelected.length; i++){
        document.getElementById(regionSelected[i]).checked = true;
        if(i === 21){
            break;
        }
    }
} 