import './index.css';
import Logo from '../../assets/logo-jobfinder.png';

const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
            <img src={Logo} alt="Logo JobFinder" className='logo-jobfinder' />

        </header>
    );
}

export default Header;