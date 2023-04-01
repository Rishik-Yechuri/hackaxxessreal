import React from 'react';
import Card from './Card';

const CardContainer = ({ data }) => {
    return (
        <div id="otherStuff2">
            {data.map((text, index) => (
                <Card key={index} initialText={text} />
            ))}
        </div>
    );
};

export default CardContainer;
