
export const Nav: React.FC = () => {
    return (
        <nav className='nav-container'>
            <div className="nav-component">
                <div className="li">
                    <h1>About Me</h1>
                </div>
            </div>
            <div className="nav-component">
                <div className="li">
                    <h1>Projects</h1>
                </div>
            </div>
            <div className="nav-component">
                <div className="li">
                    <h1>Experience</h1>
                </div>
            </div>
            <div className="nav-component">
                <div className="li">
                    <h1>Contact</h1>
                </div>
            </div>
        </nav>
    );
};

export default Nav;