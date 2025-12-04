import { createRoute } from "@tanstack/react-router"

// Importing root route
import { rootRoute } from "./__root";

// Index page component
function CodingPage() {
  return (
    <>
        <h2>my coding projects</h2>
        <p> lol hi </p>
    </>
  )
}

// Making route for the index page
export const CodingRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/coding',
    component: CodingPage,
});
