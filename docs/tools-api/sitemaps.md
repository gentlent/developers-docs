---
title: Sitemaps
description: Let us scan your site and build your sitemap to get more visibility in search engines.
---

Let us scan your site and build your sitemap to get more visibility in search engines.

:::caution
Please note that <u>this API is subject to rate limiting</u>. Please cache responses, or contact us for increased limits.
:::

## Authentication

Please refer to the overview page for [basic information](/docs/tools-api/), [authentication](/docs/tools-api/#authentication), or [formatting of parameters](/docs/tools-api/#parameters) of this endpoint.

## Endpoints

### Get Sitemap

```url title="Endpoint URL"
GET /sitemaps
```

#### Query Parameters

- _Required Parameters_
  - `url` - The URL of the website you want to get a sitemap from. Must be:
    - HTTP URL
    - HTTPS URL
- _Optional Parameters_
  - `depth` - How deep you want your site to be crawled. This increases the risk of a timeout. Must be:
    - Integer between 1 and 5 (_default is 3_)
  - `format` - Type of the response. Must be one of:
    - xml (_default_)
    - text
    - json

#### Example

```bash title="CURL"
curl "https://www.gentlentapis.com/tools/v1/sitemap?url=https://pki.gentlent.com&format=xml&depth=2"
```

```xml title="Response"
<?xml version="1.0" encoding="UTF-8"?>
​<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
​  <url>
​    <loc>https://pki.gentlent.com/</loc>
​    <priority>1.0000</priority>
​  </url>
​  <url>
​    <loc>https://root-ca3-demo-revoked.pki.gentlent.com/</loc>
​    <priority>0.9000</priority>
​  </url>
​  <url>
​    <loc>https://root-ca3-demo.pki.gentlent.com/</loc>
​    <priority>0.9000</priority>
​  </url>
​  …
​</urlset>
```
