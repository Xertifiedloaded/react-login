import { Link } from 'react-router-dom'
import classes from './header.module.css'

const Header = () => {
    return (
        <>
            <div className={classes.main}>
                <div>
                    ola
                </div>
                <nav>
                    <Link to="/">SignUp</Link>
                    <Link to="/login">login</Link>
                </nav>
            </div>
        </>
    )
}

export default Header