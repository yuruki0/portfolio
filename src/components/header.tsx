import classes from './header.module.css'

export default function Header() {
    return (
        <header className={classes.header}>
            <h1>Yuruki</h1>
            <nav className={classes.navigation}>
                <p>coding</p>
                <p>music</p>
                <p>art</p>
                <p>about</p>
            </nav>
        </header>
    );
}
