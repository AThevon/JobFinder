import './index.css';

const Logo = ( { logoImg, className} ) => {
    return (
        <div className="logo">
            <img src={logoImg} alt="logo" className={className}/>
        </div>
    );
}

export default Logo;