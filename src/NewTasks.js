import { updateAverage } from './UpdateAverages.js';

export function NewTasks(arr) {
    arr = JSON.parse(localStorage.getItem('averages')) || [];

    // Check if there are no user preferences saved
    if (arr.length === 0) {
        // Create default preferences
        arr = Array(4).fill([1, 3]);
        // Save the default preferences to local storage
        localStorage.setItem('averages', JSON.stringify(arr));
    }
    let newArray = [];
    let meditationArr = ["Do 5 mins of deep breathing exercises", "Color or draw mindfully for at least 15 minutes", "Listen to a new song on Spotify to lift your mood", "Take a nap for at least one hour today", "Do 10 minutes of yoga in the morning or before sleeping"];
    let cardioArr = ["Go on a walk in an nearby park", "Run one mile today", "Try a new dance workout on YouTube", "Play any sport outside for at least 30 minutes", "Stretch for 10 minutes before bed"];
    let journalingArr = ["Write down 3 good things you've achieved yesterday", "Write down your current thoughts on a sheet of paper", "Create a to-do list for today", "Create a schedule for this week and include important activities/events to stay organized", "Make a list of things you are thankful for"];
    let connectedArr = ["Call/text an old friend that you haven't been in contact with recently", "Call your parents/guardians to tell them how much you appreicate them!", "Check-in with a friend and ask how they're doing", "Start small talk with a neighbor/stranger", "Make plans to go out with a friend"];
    let k = 0;
    let outputArr = [];
    let categoryOutArr = [];
    let finalArray = [];
//alert('here');
    arr =JSON.parse(localStorage.getItem('averages')) || [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i][1]; j++) {
            let curr = (i+1);
            //alert('added:' + curr);
            // basically store the i into the new array based on the number of times
            newArray[k] = curr;
            k++;
        }
    }
   // alert('preshuff:' + JSON.stringify(newArray));
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
alert('shuffled:' + JSON.stringify(newArray));
   /* for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }*/

    for (let i = 0; i < 4; i++) {
        let j = newArray[i]
        let k = Math.floor(Math.random()*5)
        if(j === 1) {
            outputArr[i]= meditationArr[k];
            categoryOutArr[i] = j;
        }
        if (j === 2) {
            outputArr[i] = cardioArr[k];
            categoryOutArr[i] = j;
        }
        if (j === 3) {
            outputArr[i] = journalingArr[k];
            categoryOutArr[i] = j;
        }
        if (j === 4) {
            outputArr[i] = connectedArr[k];
            categoryOutArr[i] = j;
        }

        for(let l = 0; l < outputArr.length; l++) {
            if(outputArr[i] == outputArr[l] && i!=l) {
                i--;
            }
        }

    }

    for (let i = 0; i < outputArr.length; i++) {
        finalArray.push([categoryOutArr[i], outputArr[i]]);
    }

    return finalArray;

}