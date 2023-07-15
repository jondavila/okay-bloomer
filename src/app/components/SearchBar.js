import React, { useState } from 'react';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const plantList = ['test', 'help', 'trying1', 'trying2', 'helpful', 'HELP'];

    // @todo: Perform API call


    // Function to handle input change
    const handleChange = (e) => {
        const { value } = e.target;
        setSearchQuery(value);
        console.log(value);

        
        if (value.trim() === '') {
            setSuggestions([]);
        } else {
            const filteredSuggestions = plantList.filter((plant) =>
                plant.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        }

    };

    // Function to handle selection from suggestions
    const handleSelection = (suggestion) => {
        setSearchQuery(suggestion);
        setSuggestions([]);
    };

    const handleSearch = () => {
        const filteredSuggestions = plantList.filter((plant) =>
            plant.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
    };

    return (
        <div>
            <input type="text" value={searchQuery} onChange={handleChange} />

            <button onClick={handleSearch}>Search</button>

            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => handleSelection(suggestion)}>
                        {suggestion}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;
