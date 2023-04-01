import React, { useState } from 'react';
import './Card.css';

const Card = ({ initialText }) => {
    const [text, setText] = useState(initialText);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="card">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
};

export default Card;
