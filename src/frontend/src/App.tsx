import React from 'react';
import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import WatermarkBackground from '@/components/WatermarkBackground';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import MenuPage from '@/pages/MenuPage';
import OffersPage from '@/pages/OffersPage';
import ContactPage from '@/pages/ContactPage';
import MenuManagementPage from '@/pages/MenuManagementPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

function RootLayout() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <WatermarkBackground />
      <SiteHeader />
      <main className="flex-1 relative z-10 w-full">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

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

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const menuManagementRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/menu-management',
  component: MenuManagementPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  menuRoute,
  offersRoute,
  contactRoute,
  menuManagementRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
