import React, {useEffect} from 'react';
import Card from './Card';

const CardContainer = ({data, openDialog}) => {
    return (
        data.map((text, index) => (
            <Card key={index} initialText={text} openDialog={openDialog}/>
        ))
    );
};
export default CardContainer;
