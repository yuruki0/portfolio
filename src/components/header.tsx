import { Link } from '@tanstack/react-router';
import classes from './header.module.css'

export default function Header() {
    return (
        <header className={classes.header}>
            <h1>
                <Link to='/'>Yuruki</Link>
            </h1>
            <nav className={classes.navigation}>
                <p>coding</p>
                <p>music</p>
                <p>art</p>
                <Link to='/about'>about</Link>
            </nav>
        </header>
    );
}
