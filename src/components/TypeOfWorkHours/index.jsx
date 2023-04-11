import './index.css';

const TypeOfWorkHours = ({ type, className }) => {
    return (
        <p className={className}>{type}</p>
    );
}

export default TypeOfWorkHours;