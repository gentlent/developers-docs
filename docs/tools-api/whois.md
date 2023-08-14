---
title: WHOIS
description: Retrieve the WHOIS data of any IP address or domain.
---

Retrieve the WHOIS data of any IP address or domain.

:::caution
Please note that <u>this API is subject to rate limiting</u>. Please cache responses, or contact us for increased limits.
:::

## Authentication

Please refer to the overview page for [basic information](/docs/tools-api/), [authentication](/docs/tools-api/#authentication), or [formatting of parameters](/docs/tools-api/#parameters) of this endpoint.

## Endpoints

### Get WHOIS Data

```url title="Endpoint URL"
GET /whois
```

#### Query Parameters

- _Required Parameters_
  - `query` - Type of the response. Must be one of:
    - Registered Domain Name
    - IPv4 address
    - IPv6 address
- _Optional Parameters_
  - `rdap` - Returns the RDAP response of a TLD, if supported. Must be:
    - Boolean
  - `showServer` - Adds the queried WHOIS server to the response. Must be:
    - Boolean

#### Example

```bash title="CURL"
curl "https://www.gentlentapis.com/tools/v1/whois?query=yourname.xyz"
```

```text title="Response"
Domain name: yourname.xyz
Registry Domain ID: D18815624-CNIC
Registrar WHOIS Server: whois.namecheap.com
Registrar URL: http://www.namecheap.com
Updated Date: 2021-02-19T07:49:59.61Z
Creation Date: 2016-03-21T00:28:19.00Z
Registrar Registration Expiration Date: 2022-03-21T23:59:59.00Z
...
```
