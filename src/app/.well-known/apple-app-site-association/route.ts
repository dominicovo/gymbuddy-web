// Tells iOS that https://www.gymbuddy.live/b/<code> links belong to the
// GymBuddy app, so tapping one opens the app instead of Safari.
// Apple fetches this from https://www.gymbuddy.live/.well-known/apple-app-site-association
// and needs JSON straight back (no redirect) — a route handler guarantees that.

const APP_ID = 'GA5P2J5N3R.com.dominiceburuoh.gymbuddy'; // <Team ID>.<bundle ID>

export const dynamic = 'force-static';

export function GET() {
  return Response.json({
    applinks: {
      details: [
        {
          appIDs: [APP_ID],
          components: [{ '/': '/b/*', comment: 'Buddy pair links' }],
        },
      ],
    },
  });
}
