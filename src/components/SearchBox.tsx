import React, {ChangeEvent} from 'react';

interface SearchBoxProps {
    searchChange(event: ChangeEvent<HTMLInputElement>): void;
}

const SearchBox = (props: SearchBoxProps) => {
    const {searchChange} = props;
    return (
        <div className="pa2">
            <input 
            aria-label="Search Robots"
            className="pa3 ba b--green bg-lightest-blue" 
            type="search" 
            placeholder="search robots"
            onChange={searchChange} />
        </div>
    )
}

export default SearchBox;