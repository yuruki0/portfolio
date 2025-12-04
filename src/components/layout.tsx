import type { PropsWithChildren } from "react";

import classes from './layout.module.css'

export default function Layout(props: PropsWithChildren) {
    return (
        <div className={classes.layout}>
        {props.children}
        </div>
    )
}
