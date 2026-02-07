import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import OffersPage from './pages/OffersPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

// Layout component with header and footer
function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

// Root route with layout
const rootRoute = createRootRoute({
  component: Layout,
});

// Define all page routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const menuRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/menu',
  component: MenuPage,
});

const offersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/offers',
  component: OffersPage,
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery',
  component: GalleryPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  menuRoute,
  offersRoute,
  galleryRoute,
  contactRoute,
]);

// Create router
const router = createRouter({ routeTree });

// Type declaration for router
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
