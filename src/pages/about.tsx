import { createRoute } from "@tanstack/react-router"

// Importing root route
import { rootRoute } from "./__root";

// Index page component
function AboutPage() {
  return (
    <>
        <h2> about me </h2>
        <p> lol hi </p>
    </>
  )
}

// Making route for the index page
export const AboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: AboutPage,
});
