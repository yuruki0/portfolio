import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router"
import Layout from "../components/layout"

function rootComponent() {
    return (
        <>
            <HeadContent />
            <Scripts />
            <Layout>
                <Outlet />
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
