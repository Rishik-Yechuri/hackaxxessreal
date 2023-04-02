// DialogBox.js
import React, { useState } from 'react';
import { updateAverage } from './UpdateAverages.js';
import './DialogBox.css';

const DialogBox = ({ isOpen, closeDialog, groupNum, text }) => {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleClose = () => {
        closeDialog();
    };

    const handleOk = () => {
        if (selectedValue !== null) {
            updateAverage(groupNum, selectedValue);
        }
        closeDialog();
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="dialog-overlay">
            <div className="dialog-box">
                <p>{text}</p>
                <div className="rating-buttons">
                    {Array.from({ length: 5 }, (_, index) => (
                        <button
                            key={index}
                            className={`rating-button ${selectedValue === index + 1 ? 'selected' : ''}`}
                            style={{ backgroundColor: `hsl(${120 * index / 4}, 100%, 50%)` }}
                            onClick={() => setSelectedValue(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
                <div className="dialog-actions">
                    <button className="cancel-button" onClick={handleClose}>
                        Cancel
                    </button>
                    <button className="ok-button" onClick={handleOk}>
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DialogBox;
