import { Link } from '@tanstack/react-router';
import classes from './header.module.css'

export default function Header() {
    return (
        <header className={classes.header}>
            <h1>
                <Link to='/'>yuruki</Link>
            </h1>
            <nav className={classes.navigation}>
                <Link to='/'>home</Link>
                <Link to='/coding'>coding</Link>
                <Link to='/music'>music</Link>
                <Link to='/art'>art</Link>
                <Link to='/about'>about</Link>
            </nav>
        </header>
    );
}
