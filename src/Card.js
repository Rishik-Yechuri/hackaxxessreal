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
            <span className="card-text">{text}</span> {/* Update this line */}

        </div>
    );
};

export default Card;
