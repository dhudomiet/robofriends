import React, { FC } from 'react';

export interface CardDetails {
    id: number;
    name: string;
    email: string
}

const Card: FC<CardDetails> = ({id, name, email}) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
            <div data-testid={id}>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;