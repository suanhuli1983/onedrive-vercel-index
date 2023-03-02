/**
 * This file contains the configuration for the API endpoints and tokens we use.
 *
 * - If you are a OneDrive International user, you would not have to change anything here.
 * - If you are not the admin of your OneDrive for Business account, you may need to define your own clientId/clientSecret,
 *   check documentation for more details.
 * - If you are using a E5 Subscription OneDrive for Business account, the direct links of your files are not the same here.
 *   In which case you would need to change directLinkRegex.
 */
module.exports = {
  // The clientId and clientSecret are used to authenticate the user with Microsoft Graph API using OAuth. You would
  // not need to change anything here if you can authenticate with your personal Microsoft account with OneDrive International.
  clientId: '2c26b211-0230-4856-aaec-47e1261b45a7',
  obfuscatedClientSecret: 'U2FsdGVkX18qNf7Ke9NMZJnbPxc3OtslBaOp7Yq4x5P9HLyjG56MGcrOUmU24UGRy/Aq3JIaS6LkhzB7XsNkxA==',

  // The redirectUri is the URL that the user will be redirected to after they have authenticated with Microsoft Graph API.
  // Likewise, you would not need to change redirectUri if you are using your personal Microsoft account with OneDrive International.
  redirectUri: 'http://localhost',

  // These are the URLs of the OneDrive API endpoints. You would not need to change anything here if you are using OneDrive International
  // or E5 Subscription OneDrive for Business. You may need to change these if you are using OneDrive 世纪互联.
  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',

  // The scope we require are listed here, in most cases you would not need to change this as well.
  scope: 'user.read files.read.all offline_access',

  // Cache-Control header, check Vercel documentation for more details. The default settings imply:
  // - max-age=0: no cache for your browser
  // - s-maxage=0: cache is fresh for 60 seconds on the edge, after which it becomes stale
  // - stale-while-revalidate: allow serving stale content while revalidating on the edge
  // https://vercel.com/docs/concepts/edge-network/caching
  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}
