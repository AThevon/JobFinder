import './index.css';
import { Link } from "react-router-dom";
import Logo from '../../assets/logo-jobfinder.png';

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
            <Link to="/">
                <img src={Logo} alt="Logo JobFinder" className='logo-jobfinder' />
            </Link>

        </header>
    );
}

export default Header;