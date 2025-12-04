import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router"
import Header from "../components/header"
import Footer from "../components/footer"
import Content from "../components/content"
import Layout from "../components/layout"

function rootComponent() {
    return (
        <>
            <HeadContent />
            <Scripts />
            <Layout>
                <Header />
                <Content>
                    <Outlet />
                </Content>
                <Footer />
            </Layout>
        </>
    )
}

export const rootRoute = createRootRoute({
    head: () => ({
        meta: [
            {
                title: 'yuruki\'s portfolio'
            },
            {
                name: 'description',
                content: 'Yuruki\'s portfolio website.'
            },
        ],
    }),
    component: rootComponent
})
