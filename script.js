function timeChoice(){
    if(document.getElementById("daily").checked){
        document.getElementById("daily-label").style.color = 'white';
    }

    if(document.getElementById("weekly").checked){
        document.getElementById("weekly-label").style.color = "white";
    }

    if(document.getElementById("monthly").checked){
        document.getElementById("monthly-label").style.color = "white";
    }
}