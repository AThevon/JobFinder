import './index.css';
import { Link } from "react-router-dom";
import Logo from '../../assets/logo-jobfinder.png';

const Header = ({ title }) => {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="Logo JobFinder" className='logo-jobfinder' />
                </Link>
                <h1>{title}</h1>
            </div>
        </header>
    );
}

export default Header;