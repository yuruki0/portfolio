import type { PropsWithChildren } from 'react';

import classes from './layout.module.css'
import Header from './header';
import Content from './content';
import Footer from './footer';

export default function Layout(props: PropsWithChildren) {
    return (
        <div className={classes.layout}>
            <Header />
            <Content>
                {props.children}
            </Content>
            <Footer />
        </div>
    )
}
