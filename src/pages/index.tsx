import { createRoute } from "@tanstack/react-router"

// Importing root route
import { rootRoute } from "./__root";

// Index page component
function IndexPage() {
  return (
    <>
        <h2>test</h2>
    </>
  )
}

// Making route for the index page
export const IndexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: IndexPage,
});
