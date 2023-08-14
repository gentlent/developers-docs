---
title: Favicon
description: Get the URL or direct image of any site's favicon with our public Favicon API. It supports the classic favicon.ico, but also much newer icons, such as the Apple touch icons.
---

Get the URL or direct image of any site's favicon with our public Favicon API. It supports the classic favicon.ico, but also much newer icons, such as the Apple touch icons.

## Authentication

Please refer to the overview page for [basic information](/docs/tools-api/), [authentication](/docs/tools-api/#authentication), or [formatting of parameters](/docs/tools-api/#parameters) of this endpoint.

## Endpoints

### Get a Favicon

```url title="Endpoint URL"
GET /getFavicon
```

#### Query Parameters

- _Required Parameters_
  - `url` - The URL of the website you want to get the favicon from. Must be:
    - HTTP URL
    - HTTPS URL
- _Optional Parameters_
  - `format` - Type of the response. Must be one of:
    - text (_default_)
    - json
    - image

#### Example

```curl title="CURL"
curl "https://www.gentlentapis.com/tools/v1/getFavicon?url=https://gentlent.com&format=image"
```

![Example](https://www.gentlentapis.com/tools/v1/getFavicon?url=https://gentlent.com&format=image)
