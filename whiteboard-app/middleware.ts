/** @format */

// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
// 	matcher: [
// 		// Skip Next.js internals and all static files, unless found in search params
// 		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
// 		// Always run for API routes
// 		"/(api|trpc)(.*)",
// 	],
// };

// -----

// Deprecated authMiddleware was used below to match up with Code with Antonio: https://youtu.be/ADJKbuayubE?si=3scMEXs9kLhUGBTO&t=2313 -> https://youtu.be/ADJKbuayubE?si=0sQetH7YyB-H0F8B&t=2857
// Try to implement the current version of clerk auth later

import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware();

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		// Always run for API routes
		"/(api|trpc)(.*)",
	],
};
