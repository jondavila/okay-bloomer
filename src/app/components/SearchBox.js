const SearchBox = () => {
    return (

        <div className="max-w-md mx-auto">
            <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Search for plants..."
            />
            <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBox;