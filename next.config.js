// Next.js’ i18n `locale` is used to determine the site:
const sites = {
  main: {
    domain: "localhost",
  },
};

const siteKeys = Object.keys(sites);

// Selecting a language is instead handled via a `pseudoLocale` prop:
const pseudoLocales = ["en", "es"];

module.exports = {
  // next/config: publicRuntimeConfig available on both server and client – restart needed to change
  publicRuntimeConfig: {
    sites,
    pseudoLocales,
  },

  // We "hijack" Next.js’ i18n system to use for different sites
  i18n: {
    locales: siteKeys,
    defaultLocale: siteKeys[0],
    domains: siteKeys.map((siteKey) => ({
      domain: sites[siteKey].domain,
      defaultLocale: siteKey,
    })),
  },

  // Redirect / to default pseudoLocale
  redirects: () => [
    {
      source: "/",
      destination: `/${pseudoLocales[0]}`,
      permanent: true,
    },
  ],

  future: {
    webpack5: true,
  },
};
