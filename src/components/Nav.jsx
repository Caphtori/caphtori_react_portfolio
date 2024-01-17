import { Link } from 'react-router-dom';

function Nav({ thisPage }){
    const tabs = ['portfolio', 'resume', 'contact']
    return(
        <nav className='header-nav'>
            <ul>
                <li>
                    <Link to='/'>About</Link>
                </li>
            </ul>
            {tabs.map((tab)=>{
                <li>
                    <Link to={`/${tab}`}>{tab}</Link>
                </li> 
            })}
        </nav>
    )
};

export default Nav;