import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import './index.css';
import Logo from '../Logo';
import Date from '../Date';
import TypeOfWorkHours from '../TypeOfWorkHours';
import Title from '../Title';
import NameEnterprise from '../NameEnterprise';
import Location from '../Location';
import SearchBar from '../SearchBar';

const Wrapper = () => {

    const [datas, isLoading, error] = useFetch('../data.json');

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const results = datas.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
        );
        if (search.length !== 0) {
            setFilteredData(results);
        }
    }, [search, datas]);

    const handleChange = (event) => {
        setSearch(event.target.value);
        setFilteredData([]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const disabledCard = (data) => {
        if (filteredData.includes(data) && filteredData.length !== 0) {
            return ''
        }
        return 'disabled'
    }


    return (
        <>
            <SearchBar search={search} filteredData={filteredData} handleChange={handleChange} handleSubmit={handleSubmit} />
            {error ? (
                <p>{error}</p>
            ) : isLoading ? (
                <figure className="loader"></figure>
            ) : (
                <section className='all-section'>{
                    datas.map((data) => (
                        <article className={`article-all ${filteredData.length > 0 && disabledCard(data)}`} key={data.id}>
                            <Link to={`/job/${data.id}`} className='span-link'></Link>
                            <div className="first-container">
                                <Logo logoImg={data.logo} />
                                <div className="date-type">
                                    <TypeOfWorkHours
                                        type={data.work_hours}
                                        className={data.work_hours === 'full-time' ? 'full-time' : 'part-time'} />
                                    <Date date={data.date} />
                                </div>
                            </div>
                            <div className="second-container">
                                <Title title={data.title} />
                                <NameEnterprise name={data.name} />
                                <Location location={data.location} />
                            </div>
                        </article>
                    ))
                }</section>
            )}
        </>
    );
};

export default Wrapper;