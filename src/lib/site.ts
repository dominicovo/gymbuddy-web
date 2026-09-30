// www is the canonical host — the bare domain redirects to it.
export const SITE_URL = 'https://www.gymbuddy.live';

export const SITE_NAME = 'GymBuddy';

// Leads with the brand so a search for "gymbuddy" can tell this GymBuddy
// apart from the other apps and gyms with the same name.
export const SITE_TITLE = 'GymBuddy — The App That Locks Your Apps Until You Hit the Gym';

// A page that sets its own openGraph/twitter metadata stops inheriting the
// root share image, so it spreads these back in.
export const SHARE_IMAGES = {
  openGraph: { images: '/opengraph-image' },
  twitter: { images: '/twitter-image' },
};

export const SITE_DESCRIPTION =
  'GymBuddy is an iPhone app that locks Instagram, TikTok and games on your gym days until you check in at the gym with a photo. Pair up with a buddy and keep each other going. Coming soon to the App Store.';
