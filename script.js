function dataCrap(){

    // Buttons
    let dailyButton = document.getElementById("daily");
    let weeklyButton = document.getElementById("weekly");
    let monthlyButton = document.getElementById("monthly");

    // Work Card attributes
    let currentWork = document.getElementById("work-hours");
    let previousWork = document.getElementById("work-summary");

    // Play Card attributes
    let currentPlay = document.getElementById("play-hours");
    let previousPlay = document.getElementById("play-summary");

    // Study Card attributes
    let currentStudy = document.getElementById("study-hours");
    let previousStudy = document.getElementById("study-summary");

    // Exercise Card attributes
    let currentExercise = document.getElementById("exercise-hours");
    let previousExercise = document.getElementById("exercise-summary");

    // Social Card attributes
    let currentSocial = document.getElementById("social-hours");
    let previousSocial = document.getElementById("social-summary");

    // Self Care Card attributes
    let currentSelf = document.getElementById("self-hours");
    let previousSelf = document.getElementById("self-summary");

    if (dailyButton.checked === true){
      // Work values
      currentWork.innerHTML = "5";
      previousWork.innerHTML = "7";

      // Play values
      currentPlay.innerHTML = "1";
      previousPlay.innerHTML = "2";

      // Study values
      currentStudy.innerHTML = "0";
      previousStudy.innerHTML = "1";

      // Exercise values
      currentExercise.innerHTML = "1"
      previousExercise.innerHTML = "1";

      // Social values
      currentSocial.innerHTML = "1";
      previousSocial.innerHTML = "3";

      // Self Care values
      currentSelf.innerHTML = "0";
      previousSelf.innerHTML = "1";
    }

    if (weeklyButton.checked === true){
      // Work values
      currentWork.innerHTML = "32";
      previousWork.innerHTML = "36";

      // Play values
      currentPlay.innerHTML = "10";
      previousPlay.innerHTML = "8";

      // Study values
      currentStudy.innerHTML = "4";
      previousStudy.innerHTML = "7";

      // Exercise values
      currentExercise.innerHTML = "4"
      previousExercise.innerHTML = "5";

      // Social values
      currentSocial.innerHTML = "5";
      previousSocial.innerHTML = "10";

      // Self Care values
      currentSelf.innerHTML = "2";
      previousSelf.innerHTML = "2";
    }

    if (monthlyButton.checked === true){
      // Work values
      currentWork.innerHTML = "103";
      previousWork.innerHTML = "128";

      // Play values
      currentPlay.innerHTML = "23";
      previousPlay.innerHTML = "29";

      // Study values
      currentStudy.innerHTML = "13";
      previousStudy.innerHTML = "19";

      // Exercise values
      currentExercise.innerHTML = "11";
      previousExercise.innerHTML = "18";

      // Social values
      currentSocial.innerHTML = "21";
      previousSocial.innerHTML = "23";

      // Self Care values
      currentSelf.innerHTML = "7";
      previousSelf.innerHTML = "11";
    }
    
}