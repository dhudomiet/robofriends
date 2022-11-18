import React from 'react';

interface ScrollProps {
    children: React.ReactNode;
}

const Scroll = (props: ScrollProps) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '1000px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;