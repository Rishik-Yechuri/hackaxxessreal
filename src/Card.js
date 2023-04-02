import React, { useState } from 'react';
import './Card.css';

const Card = ({ initialText }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [text, setText] = useState(initialText);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        let meditationArr = ["Do 5 mins of deep breathing exercises", "Color or draw mindfully for at least 15 minutes", "Listen to a new song on Spotify to lift your mood", "Take a nap for at least one hour today", "Do 10 minutes of yoga in the morning or before sleeping"];
        let cardioArr = ["Go on a walk in an nearby park", "Run one mile today", "Try a new dance workout on YouTube", "Play any sport outside for at least 30 minutes", "Stretch for 10 minutes before bed"];
        let journalingArr = ["Write down 3 good things you've achieved yesterday", "Write down your current thoughts on a sheet of paper", "Create a to-do list for today", "Create a schedule for this week and include important activities/events to stay organized", "Make a list of things you are thankful for"];
        let connectedArr = ["Call/text an old friend that you haven't been in contact with recently", "Call your parents/guardians to tell them how much you appreicate them!", "Check-in with a friend and ask how they're doing", "Start small talk with a neighbor/stranger", "Make plans to go out with a friend"];
        var inGroup = 0;
        if (meditationArr.includes(text)) {
            // The text is in meditationArr
            inGroup = 1;
        } else if (cardioArr.includes(text)) {
            // The text is in cardioArr
            inGroup = 2;
        } else if (journalingArr.includes(text)) {
            // The text is in journalingArr
            inGroup = 3;
        } else if (connectedArr.includes(text)) {
            // The text is in connectedArr
            inGroup = 4;
        } else {
            alert("NOT IN, PANIC NOW PANIC NOW")
            // The text is not in any of the arrays
        }
    };

    return (
        <div className="card">
            <label className="checkbox-container">
                <input
                    className="checkbox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <span className="custom-checkbox"></span>
            </label>
            <span className="card-text">{text}</span>
        </div>
    );
};

export default Card;