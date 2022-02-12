import './Header.css';

const Header = () => (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" id="logo" href="#">
                <h1>Seleioter</h1>
            </a>
            <div id='contactNumber'>
                <h3>Call: 1-973-963-9017</h3>
            </div>
        </div>
    </nav>
);

export default Header;