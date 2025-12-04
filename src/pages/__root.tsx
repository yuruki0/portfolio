import { createRootRoute, Outlet } from "@tanstack/react-router"
import Header from "../components/header"

function rootComponent() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export const rootRoute = createRootRoute({ component: rootComponent })
