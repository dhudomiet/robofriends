import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    console.log('CardList');
    const cards = robots.map(robot =>{
        return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
    });
    return (
        <div>
            {cards}
        </div>
    )
}

export default CardList;