---
title: What's My IP
description: Get the IP address of the client you connect to this API with. This is more of a utility to find your public IP in a complicated cloud environment.
---

Get the IP address of the client you connect to this API with. This is more of a utility to find your public IP in a complicated cloud environment.

## Authentication

Please refer to the overview page for [basic information](/docs/tools-api/), [authentication](/docs/tools-api/#authentication), or [formatting of parameters](/docs/tools-api/#parameters) of this endpoint.

## Endpoints

### Get My IP

```url title="Endpoint URL"
GET /getIp
```

#### Query Parameters

- _Optional Parameters_
  - `format` - Type of the response. Must be one of:
    - text (_default_)
    - json

#### Example

```bash title="CURL"
curl "https://www.gentlentapis.com/tools/v1/getIp"
```

```text title="Response"
2a13:9640:ffff:d3ad::3491:9042
```
