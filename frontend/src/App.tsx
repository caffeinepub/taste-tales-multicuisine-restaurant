import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import WatermarkBackground from './components/WatermarkBackground';
import GetDirectionsBar from './components/GetDirectionsBar';
import HomePage from './pages/HomePage';

// Lazy load non-critical pages for route-level code splitting
const AboutPage = lazy(() => import('./pages/AboutPage'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const OffersPage = lazy(() => import('./pages/OffersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));

// Simple loading fallback for lazy routes
function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-muted-foreground">Loading...</div>
    </div>
  );
}

// Layout component with header, directions bar, watermark background, and footer
function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <WatermarkBackground />
      <SiteHeader />
      <GetDirectionsBar />
      <main className="relative z-10 flex-1">
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
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AboutPage />
    </Suspense>
  ),
});

const menuRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/menu',
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <MenuPage />
    </Suspense>
  ),
  validateSearch: (search: Record<string, unknown>): { q?: string } => {
    return {
      q: typeof search.q === 'string' ? search.q : undefined,
    };
  },
});

const offersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/offers',
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <OffersPage />
    </Suspense>
  ),
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ContactPage />
    </Suspense>
  ),
});

const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/search',
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <SearchPage />
    </Suspense>
  ),
  validateSearch: (search: Record<string, unknown>): { q?: string } => {
    return {
      q: typeof search.q === 'string' ? search.q : undefined,
    };
  },
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  menuRoute,
  offersRoute,
  contactRoute,
  searchRoute,
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
