// Mood Tracker Function
let moodLog = [];
function logMood() {
    const mood = document.getElementById('mood-input').value;
    if (mood) {
        moodLog.push(mood);
        document.getElementById('mood-records').innerHTML = `<h3>Mood Log:</h3><ul>${moodLog.map(m => `<li>${m}</li>`).join('')}</ul>`;
        document.getElementById('mood-input').value = '';
    } else {
        alert('Please enter your mood!');
    }
}

// Check Schedule Function
function checkSchedule() {
    const sleepTime = document.getElementById('sleep-time').value;
    const wakeTime = document.getElementById('wake-time').value;
    const studyTime = document.getElementById('study-time').value;

    if (sleepTime && wakeTime && studyTime) {
        // Calculate sleep duration
        const sleepStart = new Date(`1970-01-01T${sleepTime}:00`);
        const sleepEnd = new Date(`1970-01-01T${wakeTime}:00`);
        if (sleepEnd < sleepStart) {
            sleepEnd.setDate(sleepEnd.getDate() + 1); // Adjust for crossing midnight
        }
        const sleepDuration = (sleepEnd - sleepStart) / (1000 * 60 * 60); // Sleep duration in hours

        // Check if the schedule is healthy
        let healthMessage = '';
        if (sleepDuration < 7) {
            healthMessage = 'You may want to get more sleep. Recommended sleep is 7-9 hours.';
        } else if (sleepDuration > 9) {
            healthMessage = 'You might be oversleeping. Try reducing your sleep to a healthy 7-9 hours.';
        } else {
            healthMessage = 'Your sleep duration is healthy! Keep it up!';
        }

        // Display schedule and health message
        document.getElementById('result').innerText = `Your schedule is: Sleep from ${sleepTime} to ${wakeTime}, and study for ${studyTime} hours.`;
        document.getElementById('health-status').innerText = healthMessage;
    } else {
        document.getElementById('result').innerText = 'Please fill in all fields.';
    }
}

// Goal List Function
function addGoal() {
    const newGoal = document.getElementById('new-goal').value;
    if (newGoal) {
        const goalList = document.getElementById('goal-list');
        const newGoalItem = document.createElement('li');
        newGoalItem.innerHTML = `<input type="checkbox"> ${newGoal}`;
        goalList.appendChild(newGoalItem);
        document.getElementById('new-goal').value = '';
    } else {
        alert('Please enter a goal!');
    }
}

// Productivity Tracker Function
let productivityLog = [];
function logProductivity() {
    const productivity = document.getElementById('productivity-level').value;
    if (productivity >= 0 && productivity <= 10) {
        productivityLog.push(productivity);
        document.getElementById('productivity-records').innerHTML = `<h3>Productivity Log:</h3><ul>${productivityLog.map(p => `<li>Productivity Level: ${p}</li>`).join('')}</ul>`;
        document.getElementById('productivity-level').value = '';
    } else {
        alert('Please enter a productivity level between 0 and 10!');
    }
}
