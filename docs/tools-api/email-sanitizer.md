---
title: Email Sanitizer
description: Our Email Sanitizer API is used to normalise email addresses by honoring things such as punycode, inbox aliases, and more.
---

Our Email Sanitizer API is used to normalise email addresses by honoring things such as punycode, inbox aliases, and more.

## Authentication

Please refer to the overview page for [basic information](/docs/tools-api/), [authentication](/docs/tools-api/#authentication), or [formatting of parameters](/docs/tools-api/#parameters) of this endpoint.

## Endpoints

### Sanitize an Email Address

```url title="Endpoint URL"
POST /sanitizeEmail
```

#### Query Parameters

- _Required Parameters_
  - `email` - The email address that should be formatted. Must be:
    - Email Address
- _Optional Parameters_
  - `format` - Type of the response. Must be one of:
    - text (_default_)
    - json

#### Example

```bash title="CURL"
curl -X POST "https://www.gentlentapis.com/tools/v1/sanitizeEmail" \
  -H 'Content-Type: application/json' \
  -d '{"email": "JoHn.DoE+RANDOM@YourName.xyz", "format": "json"}'
```

```json title="Response"
{
​  "email": "john.doe@yourname.xyz"
}
```
