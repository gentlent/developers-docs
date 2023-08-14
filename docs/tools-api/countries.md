---
title: Countries
description: The Countries API provides a list of countries and their states along with their names and ISO codes.
---

The Countries API provides a list of countries and their states along with their names and ISO codes.

## Authentication

Please refer to the overview page for [basic information](/docs/tools-api/), [authentication](/docs/tools-api/#authentication), or [formatting of parameters](/docs/tools-api/#parameters) of this endpoint.

## Endpoints

### Get Countries

```url title="Endpoint URL"
GET /countries
```

#### Query Parameters

- _Optional Parameters_
  - `country` - Lists more detailed information and the states of a specific country. Must be:
    - 2-letter Country Code

#### Example

```bash title="CURL"
curl "https://www.gentlentapis.com/tools/v1/countries"
```

```json title="Response"
[
​  {
​    "code2": "AF",
​    "code3": "AFG",
​    "name": "Afghanistan",
​    "capital": "Kabul",
​    "region": "Asia",
​    "subregion": "Southern Asia",
​    "api_url": "https://www.gentlentapis.com/tools/v1/countries?country=AF"
​  },
​  {
​    "code2": "AX",
​    "code3": "ALA",
​    "name": "Åland Islands",
​    "capital": "Mariehamn",
​    "region": "Europe",
​    "subregion": "Northern Europe",
​    "api_url": "https://www.gentlentapis.com/tools/v1/countries?country=AX"
​  },
​  …
]
```
