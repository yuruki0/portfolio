import { createRoute } from "@tanstack/react-router"

// Importing root route
import { rootRoute } from "./__root";

// Index page component
function ArtPage() {
  return (
    <>
        <h2>my art</h2>
        <p> lol hi </p>
    </>
  )
}

// Making route for the index page
export const ArtRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/art',
    component: ArtPage,
});
