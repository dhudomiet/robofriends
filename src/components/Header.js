import React from 'react';

const Header = React.memo((props) => { 
    console.log('Header');
    return <h1 className="f2">RoboFriends</h1>
});

export default Header;