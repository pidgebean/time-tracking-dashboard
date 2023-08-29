function timeChoice(){
    if(document.getElementById("daily").checked){
        document.getElementById("daily-label").style.color = 'white';
        document.getElementById("weekly").checked = false;
        document.getElementById("monthly").checked = false;
    }

    if(document.getElementById("weekly").checked){
        document.getElementById("weekly-label").style.color = "white";
        ocument.getElementById("daily").checked = false;
        document.getElementById("monthly").checked = false;
    }

    if(document.getElementById("monthly").checked){
        document.getElementById("monthly-label").style.color = "white";
        ocument.getElementById("weekly").checked = false;
        document.getElementById("daily").checked = false;
    }
}