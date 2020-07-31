new Chart(document.getElementById("my-skills"), {
    "type": "doughnut",
    "options": {
        "legend": {
            "labels": {
                "fontColor": 'white'
            }
        }
    },
    "data": {
        "labels": ["JavaScript", "PHP", "Java", "C", "C++", "Others"],
        "datasets": [{
            "label": "Programming Languages",
            "data": [30, 20, 30, 7, 7, 6],
            "backgroundColor": ["rgb(255,184,0)", "rgb(233,0,255)", "rgb(20,151,0)", "rgb(0,25,151)", "rgb(151,30,0)", "rgb(255,128,0)"]
        }]
    }
});