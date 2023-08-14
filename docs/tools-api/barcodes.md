---
title: Barcodes
description: The Barcodes API can be used to generate QR, aztec, and data matrix codes. It is recommended to download and/or cache codes that are used often.
---

The Barcodes API can be used to generate QR, aztec, and data matrix codes. It is recommended to download and/or cache codes that are used often.

## Authentication

Please refer to the overview page for [basic information](/docs/tools-api/), [authentication](/docs/tools-api/#authentication), or [formatting of parameters](/docs/tools-api/#parameters) of this endpoint.

## Endpoints

### Get Barcodes

```url title="Endpoint URL"
GET /barcodes
```

#### Query Parameters

- _Required Parameters_
  - `type` - Type of code that should be generated. Must be one of:
    - `qr_code`
    - `aztec_code`
    - `data_matrix`
  - `data` - Any string between 4 and 1663 characters that should be encoded
    in the barcode. Could be:
    - URL
    - Coordinates
    - Phone Number
    - Text
    - ...
- _Optional Parameters_
  - `scale` - Defines how large the resulting image should be. Must be:
    - Integer between 1 and 10 (_default is 2_)

#### Example

```curl title="CURL"
curl "https://www.gentlentapis.com/tools/v1/barcodes?type=qr_code&data=https://www.gentlent.com&scale=3"
```

![](https://www.gentlentapis.com/tools/v1/barcodes?type=qr_code&data=https://www.gentlent.com&scale=3)
