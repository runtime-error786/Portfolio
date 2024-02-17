import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // Check if the request path is the root URL
  if (request.url === '/' || request.url==="") {
    // Redirect to "/Dash" only if the requested path is "/"
    return NextResponse.redirect('/Dash');
  }

  // For all other paths, return the original request
  return NextResponse.next();
}

// Define the configuration for the middleware
export const config = {
  // Specify the path pattern to match
  matcher: '*',
};
