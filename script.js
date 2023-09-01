function dataCrap(){

    let dailyButton = document.getElementById("daily");
    let weeklyButton = document.getElementById("weekly");
    let monthlyButton = document.getElementById("monthly");

    let workHours = document.getElementById("work-hours");
    let workSummary = document.getElementById("work-summary");

    let playHours = document.getElementById("play-hours");
    let playSummary = document.getElementById("play-summary");

    let exerciseHours = document.getElementById("exericse-hours");
    let exerciseSummary = document.getElementById("exercise-summary");

    let socialHours = document.getElementById("social-hours");
    let socialSummary = document.getElementById("social-summary");

    let selfHours = document.getElementById("self-hours");
    let selfSummary = document.getElementById("self-summary");

    let info = `[
        {
          "title": "Work",
          "timeframes": {
            "daily": {
              "current": 5,
              "previous": 7
            },
            "weekly": {
              "current": 32,
              "previous": 36
            },
            "monthly": {
              "current": 103,
              "previous": 128
            }
          }
        },
        {
          "title": "Play",
          "timeframes": {
            "daily": {
              "current": 1,
              "previous": 2
            },
            "weekly": {
              "current": 10,
              "previous": 8
            },
            "monthly": {
              "current": 23,
              "previous": 29
            }
          }
        },
        {
          "title": "Study",
          "timeframes": {
            "daily": {
              "current": 0,
              "previous": 1
            },
            "weekly": {
              "current": 4,
              "previous": 7
            },
            "monthly": {
              "current": 13,
              "previous": 19
            }
          }
        },
        {
          "title": "Exercise",
          "timeframes": {
            "daily": {
              "current": 1,
              "previous": 1
            },
            "weekly": {
              "current": 4,
              "previous": 5
            },
            "monthly": {
              "current": 11,
              "previous": 18
            }
          }
        },
        {
          "title": "Social",
          "timeframes": {
            "daily": {
              "current": 1,
              "previous": 3
            },
            "weekly": {
              "current": 5,
              "previous": 10
            },
            "monthly": {
              "current": 21,
              "previous": 23
            }
          }
        },
        {
          "title": "Self Care",
          "timeframes": {
            "daily": {
              "current": 0,
              "previous": 1
            },
            "weekly": {
              "current": 2,
              "previous": 2
            },
            "monthly": {
              "current": 7,
              "previous": 11
            }
          }
        }
    ]`

    if (dailyButton.checked = true){
        // some crap here
        workHours.innerHTML = JSON.parse(info)[0].timeframes.daily.current;
        workSummary.innerHTML = JSON.parse(info)[0].timeframes.daily.pervious;
        
        playHours.innerHTML = JSON.parse(info)[1].timeframes.daily.current;
        playSummary.innerHTML = JSON.parse(info)[1].timeframes.daily.pervious;

        studyHours.innerHTML = JSON.parse(info)[2].timeframes.daily.current;
        studySummary.innerHTML = JSON.parse(info)[2].timeframes.daily.pervious;

        exerciseHours.innerHTML = JSON.parse(info)[3].timeframes.daily.current;
        exerciseSummary.innerHTML = JSON.parse(info)[3].timeframes.daily.pervious;

        socialHours.innerHTML = JSON.parse(info)[4].timeframes.daily.current;
        socialSummary.innerHTML = JSON.parse(info)[4].timeframes.daily.pervious;

        selfHours.innerHTML = JSON.parse(info)[5].timeframes.daily.current;
        selfSummary.innerHTML = JSON.parse(info)[5].timeframes.daily.pervious;
    }

    if (weeklyButton.checked = true){
        // some crap here
        workHours.innerHTML = JSON.parse(info)[0].timeframes.weekly.current;
        workSummary.innerHTML = JSON.parse(info)[0].timeframes.weekly.pervious;
        
        playHours.innerHTML = JSON.parse(info)[1].timeframes.weekly.current;
        playSummary.innerHTML = JSON.parse(info)[1].timeframes.weekly.pervious;

        studyHours.innerHTML = JSON.parse(info)[2].timeframes.weekly.current;
        studySummary.innerHTML = JSON.parse(info)[2].timeframes.weekly.pervious;

        exerciseHours.innerHTML = JSON.parse(info)[3].timeframes.weekly.current;
        exerciseSummary.innerHTML = JSON.parse(info)[3].timeframes.weekly.pervious;

        socialHours.innerHTML = JSON.parse(info)[4].timeframes.weekly.current;
        socialSummary.innerHTML = JSON.parse(info)[4].timeframes.weekly.pervious;

        selfHours.innerHTML = JSON.parse(info)[5].timeframes.weekly.current;
        selfSummary.innerHTML = JSON.parse(info)[5].timeframes.weekly.pervious;
    }

    if (Button.checked = true){
        // some crap here
        workHours.innerHTML = JSON.parse(info)[0].timeframes.monthly.current;
        workSummary.innerHTML = JSON.parse(info)[0].timeframes.monthly.pervious;
        
        playHours.innerHTML = JSON.parse(info)[1].timeframes.monthly.current;
        playSummary.innerHTML = JSON.parse(info)[1].timeframes.monthly.pervious;

        studyHours.innerHTML = JSON.parse(info)[2].timeframes.monthly.current;
        studySummary.innerHTML = JSON.parse(info)[2].timeframes.monthly.pervious;

        exerciseHours.innerHTML = JSON.parse(info)[3].timeframes.monthly.current;
        exerciseSummary.innerHTML = JSON.parse(info)[3].timeframes.monthly.pervious;

        socialHours.innerHTML = JSON.parse(info)[4].timeframes.monthly.current;
        socialSummary.innerHTML = JSON.parse(info)[4].timeframes.monthly.pervious;

        selfHours.innerHTML = JSON.parse(info)[5].timeframes.monthly.current;
        selfSummary.innerHTML = JSON.parse(info)[5].timeframes.monthly.pervious;
    }
    
    
    
}