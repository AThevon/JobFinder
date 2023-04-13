import './index.css';
// import { Link } from 'react-router-dom';

const SearchBar = ( { search, 
    // filteredData,
    handleSubmit, handleChange } ) => {
    
    return (
        <div className="main_form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={handleChange}
                />
            </form>
            {/* {filteredData.length !== 0 && (
            <ul>
                {filteredData.map((item) => (
                    <Link to={`/job/${item.id}`} key={item.id}>
                        <li>{item.title}</li>
                    </Link>
                ))}
            </ul>
            )} */}
        </div>
    );
};

export default SearchBar;