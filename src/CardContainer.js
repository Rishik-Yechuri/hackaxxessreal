import React from 'react';
import Card from './Card';

const CardContainer = ({ data }) => {
    return (
            data.map((text, index) => (
                <Card key={index} initialText={text} />
            ))
    );
};

export default CardContainer;
