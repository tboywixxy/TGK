const DEFAULT_SITE_URL = "https://theguardianskeeper.org";

function normalizeSiteUrl(value?: string) {
  if (!value) {
    return DEFAULT_SITE_URL;
  }

  return value.endsWith("/") ? value.slice(0, -1) : value;
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
