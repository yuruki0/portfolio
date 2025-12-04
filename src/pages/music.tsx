import { createRoute } from "@tanstack/react-router"

// Importing root route
import { rootRoute } from "./__root";

// Index page component
function MusicPage() {
  return (
    <>
        <h2>my music</h2>
        <p> lol hi </p>
    </>
  )
}

// Making route for the index page
export const MusicRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/music',
    component: MusicPage,
});
