import { createRootRoute, Outlet } from "@tanstack/react-router"
import Header from "../components/header"
import Footer from "../components/footer"
import Content from "../components/content"
import Layout from "../components/layout"

function rootComponent() {
    return (
        <Layout>
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer />
        </Layout>
    )
}

export const rootRoute = createRootRoute({ component: rootComponent })
