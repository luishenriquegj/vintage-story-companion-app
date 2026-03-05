import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen flex flex-col bg-earth-50 text-earth-900">
        {/* Navigation Bar */}
        <nav className="bg-earth-800 text-earth-100 shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-earth-600 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-earth-100">
                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/>
                  </svg>
                </div>
                <span className="font-serif text-xl font-semibold tracking-wide">Vintage Story</span>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-8">
                <Link to="/" className="hover:text-earth-300 transition-colors font-medium">
                  Home
                </Link>
                <Link to="/recipes" className="hover:text-earth-300 transition-colors font-medium">
                  Recipes
                </Link>
                <Link to="/items" className="hover:text-earth-300 transition-colors font-medium">
                  Items
                </Link>
                <Link to="/tools" className="hover:text-earth-300 transition-colors font-medium">
                  Tools
                </Link>
                <Link to="/world" className="hover:text-earth-300 transition-colors font-medium">
                  World
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button className="p-2 hover:bg-earth-700 rounded-lg transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-earth-900 text-earth-300 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* About Section */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-earth-100 mb-4">Vintage Story Companion</h3>
                <p className="text-sm leading-relaxed">
                  Your ultimate companion for the medieval sandbox game Vintage Story. 
                  Explore recipes, tools, and world information all in one place.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-earth-100 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.vintagestory.bblockgames.com/" target="_blank" rel="noopener noreferrer" className="hover:text-earth-100 transition-colors text-sm">
                      Official Website
                    </a>
                  </li>
                  <li>
                    <a href="https://www.vintagestory.bblockgames.com/wiki" target="_blank" rel="noopener noreferrer" className="hover:text-earth-100 transition-colors text-sm">
                      Game Wiki
                    </a>
                  </li>
                  <li>
                    <a href="https://www.vintagestory.bblockgames.com/forum" target="_blank" rel="noopener noreferrer" className="hover:text-earth-100 transition-colors text-sm">
                      Community Forum
                    </a>
                  </li>
                  <li>
                    <a href="https://store.steampowered.com/app/582050/Vintage_Story/" target="_blank" rel="noopener noreferrer" className="hover:text-earth-100 transition-colors text-sm">
                      Steam Page
                    </a>
                  </li>
                </ul>
              </div>

              {/* External Links */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-earth-100 mb-4">External Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.vintagestory.bblockgames.com/" target="_blank" rel="noopener noreferrer" className="hover:text-earth-100 transition-colors text-sm flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Visit Vintage Story
                    </a>
                  </li>
                  <li>
                    <a href="https://www.vintagestory.bblockgames.com/wiki" target="_blank" rel="noopener noreferrer" className="hover:text-earth-100 transition-colors text-sm flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Game Wiki
                    </a>
                  </li>
                  <li>
                    <a href="https://www.vintagestory.bblockgames.com/blog" target="_blank" rel="noopener noreferrer" className="hover:text-earth-100 transition-colors text-sm flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                      Development Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-earth-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm">
                This is an unofficial companion app. Vintage Story is developed by Black block Games.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.vintagestory.bblockgames.com/" target="_blank" rel="noopener noreferrer" className="text-earth-400 hover:text-earth-100 transition-colors">
                  <span className="sr-only">Vintage Story</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-screen bg-earth-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-earth-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="text-2xl font-serif font-bold text-earth-900 mb-2">{message}</h1>
        <p className="text-earth-600 mb-4">{details}</p>
        {stack && (
          <pre className="w-full p-4 overflow-x-auto bg-earth-50 rounded-lg text-left text-xs">
            <code>{stack}</code>
          </pre>
        )}
        <Link to="/" className="inline-block mt-4 px-6 py-2 bg-earth-600 text-white rounded-lg hover:bg-earth-700 transition-colors">
          Return Home
        </Link>
      </div>
    </main>
  );
}
