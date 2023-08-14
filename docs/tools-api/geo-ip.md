---
title: Geo IP
description: You can use our Geo IP API to get location data, as well as geo-supported subnet details of an IP address.
---

You can use our Geo IP API to get location data, as well as geo-supported subnet details of an IP address.

## Authentication

Please refer to the overview page for [basic information](/docs/tools-api/), [authentication](/docs/tools-api/#authentication), or [formatting of parameters](/docs/tools-api/#parameters) of this endpoint.

## Endpoints

### Get Geo IP Data

```url title="Endpoint URL"
GET /geoIp
```

#### Query Parameters

- _Required Parameters_
  - `ip_address` - The IP address you want to look up. Must be one of:
    - IPv4 address (without CIDR)
    - IPv6 address (without CIDR)

#### Example

```curl title="CURL"
curl "https://www.gentlentapis.com/tools/v1/geoIp?ip_address=8.8.8.8"
```

```json title="Response"
{
  "ip": "8.8.8.8",
  "metadata": {
    "location": {
      "country": "US",
      "eu": false
    },
    "asn": 15169,
    "asn_name": "GOOGLE",
    "coords": {
      "lat": 37.751,
      "lon": -97.822
    },
    "ip": "8.8.8.8",
    "subnet": "8.8.8.0/24"
  }
}
```
