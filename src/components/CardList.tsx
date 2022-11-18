import React, { FC } from 'react';
import Card, { CardDetails } from './Card';
import { Robot } from '../types/robotTypes';

interface CardListProps {
    robots: Robot[];
}

const CardList = (props: CardListProps) => {
    const {robots} = props;
    console.log("CardList")
    const cards = robots.map((robot: Robot) => {
        return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
    });

    return (
        <div>
            {cards}
        </div>
    )
}

export default CardList;