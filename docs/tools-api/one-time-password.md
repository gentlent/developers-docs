---
title: One-Time-Password (OTP)
description: Integrating TOTP-based 2-factor authentication is now easier than ever. With out OTP API, you can create and verify 2FA codes with ease.
---

Integrating TOTP-based 2-factor authentication is now easier than ever. With out OTP API, you can create and verify 2FA codes with ease.

:::tip
The OTP API is best-used with [the Barcodes API](/docs/tools-api/barcodes) to generate OTP QR-codes. Those are supported by almost all OTP clients.
:::

## Authentication

Please refer to the overview page for [basic information](/docs/tools-api/), [authentication](/docs/tools-api/#authentication), or [formatting of parameters](/docs/tools-api/#parameters) of this endpoint.

## Endpoints

### Generate an OTP Code

```url title="Endpoint URL"
POST /otp
```

#### Query Parameters

- _Required Parameters_
  - `type` - Type of the OTP code. Must be:
    - `time_based`
  - `action` - What action you want to take. Must be:
    - `generate`
- _Optional Parameters_
  - `label` - Defines the label used by OTP apps and software. Must be:
    - Text
  - `issuer` - Defines the issuer name used by OTP apps and software. Must be:
    - Text
  - `digits` - Defines how many digits should be generated. Must be one of:
    - `6` (_default_; most compatible)
    - `8`

#### Example

```bash title="CURL"
curl -X POST "https://www.gentlentapis.com/tools/v1/otp" \
  -H 'Content-Type: application/json' \
  -d '{"type": "time_based", "action": "generate"}'
```

```json title="Response"
{
​  "algorithm": "SHA1",
​  "digits": 6,
​  "issuer": "",
​  "label": "",
​  "otp_url": "otpauth://totp/?secret=...&issuer=&algorithm=SHA1&digits=6&period=30",
​  "period": 30,
​  "qrcode_url": "https://www.gentlentapis.com/tools/v1/barcodes?type=qr_code&...",
​  "secret": "FF4HND2CCGPWNZHKIA66I6Y44DEKPXXI",
​  "type": "totp"
}
```

### Verify an OTP Code

```url title="Endpoint URL"
POST /otp
```

#### Query Parameters

- _Required Parameters_
  - `type` - Type of the OTP code. Must be:
    - `time_based`
  - `action` - What action you want to take. Must be:
    - `verify`
  - `secret` - Must be:
    - Secret returned by a generate request
- _Optional Parameters_
  - `digits` - Defines how many digits should be generated. Must be one of:
    - `6` (_default_; most compatible)
    - `8`

#### Example

```bash title="CURL"
curl -X POST "https://www.gentlentapis.com/tools/v1/otp" \
  -H 'Content-Type: application/json' \
  -d '{"type": "time_based", "action": "verify", "secret": "FF4HND2CCGPWNZHKIA66I6Y44DEKPXXI"}'
```

```json title="Response"
{
​  "algorithm": "SHA1",
​  "digits": 6,
​  "otp_codes": {
​    "+30s": "623843",
​    "current": "078649",
​    "-30s": "697286",
​    "-60s": "673108"
​  },
​  "period": 30,
​  "secret": "FF4HND2CCGPWNZHKIA66I6Y44DEKPXXI",
​  "type": "totp"
}
```
