import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import './index.css';
import Logo from '../Logo';
import Date from '../Date';
import TypeOfWorkHours from '../TypeOfWorkHours';
import Title from '../Title';
import NameEnterprise from '../NameEnterprise';
import Location from '../Location';
import SingleDisplay from '../singleDisplay';

const Wrapper = () => {
    const [datas, isLoading, error] = useFetch('../data.json');
    const [selectedArticle, setSelectedArticle] = useState(null);


    const handleSingleDisplay = (data) => {
        setSelectedArticle(data)
    };

    const handleSingleDisplayReturn = () => {
        setSelectedArticle(null)
    };

    return (
        <>
            {error ? (
                <p>{error}</p>
            ) : isLoading ? (
                    <figure className="loader"></figure>
            ) : selectedArticle ? (
                <section className='single-section'>
                    <button onClick={handleSingleDisplayReturn} className='btn-return'>Back</button>
                    <SingleDisplay data={selectedArticle} />
                </section>
            ) : (
                <section className='all-section'>{
                    datas.map((data) => (
                        <article className='article-all' key={data.id} onClick={() => handleSingleDisplay(data)}>
                            <div className="first-container">
                                <Logo logoImg={data.logo}/>
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