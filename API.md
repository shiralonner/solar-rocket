---
title: Solar Rocket Fuel API v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="solar-rocket-fuel-api">Solar Rocket Fuel API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Access delivery data for solar rocket fuel

Base URLs:

* <a href="https://solar-rocket-fuel.benmanage.click/">https://solar-rocket-fuel.benmanage.click/</a>

# Authentication

* API Key (UserID)
    - Parameter Name: **UserID**, in: header. 

* API Key (ApiKey)
    - Parameter Name: **ApiKey**, in: header. 

<h1 id="solar-rocket-fuel-api-methods">Methods</h1>

## get__deliveries

> Code samples

```shell
# You can also use wget
curl -X GET https://solar-rocket-fuel.benmanage.click/deliveries?startDate=string&numberOfDays=0 \
  -H 'Accept: application/json' \
  -H 'UserID: API_KEY' \
  -H 'ApiKey: API_KEY'

```

```http
GET https://solar-rocket-fuel.benmanage.click/deliveries?startDate=string&numberOfDays=0 HTTP/1.1
Host: solar-rocket-fuel.benmanage.click
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'UserID':'API_KEY',
  'ApiKey':'API_KEY'
};

fetch('https://solar-rocket-fuel.benmanage.click/deliveries?startDate=string&numberOfDays=0',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'UserID' => 'API_KEY',
  'ApiKey' => 'API_KEY'
}

result = RestClient.get 'https://solar-rocket-fuel.benmanage.click/deliveries',
  params: {
  'startDate' => 'string',
'numberOfDays' => 'integer'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'UserID': 'API_KEY',
  'ApiKey': 'API_KEY'
}

r = requests.get('https://solar-rocket-fuel.benmanage.click/deliveries', params={
  'startDate': 'string',  'numberOfDays': '0'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'UserID' => 'API_KEY',
    'ApiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://solar-rocket-fuel.benmanage.click/deliveries', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://solar-rocket-fuel.benmanage.click/deliveries?startDate=string&numberOfDays=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "UserID": []string{"API_KEY"},
        "ApiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://solar-rocket-fuel.benmanage.click/deliveries", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /deliveries`

*List upcoming fuel delivery dates*

<h3 id="get__deliveries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startDate|query|string|true|The first date (yyyy-mm-dd) for which to list deliveries|
|numberOfDays|query|integer|true|The number of days to return (maximum 5)|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="get__deliveries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Array of upcoming delivery dates|[Dates](#schemadates)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid parameters|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserID & ApiKey
</aside>

## get__delivery_{date}

> Code samples

```shell
# You can also use wget
curl -X GET https://solar-rocket-fuel.benmanage.click/delivery/{date} \
  -H 'Accept: application/json' \
  -H 'UserID: API_KEY' \
  -H 'ApiKey: API_KEY'

```

```http
GET https://solar-rocket-fuel.benmanage.click/delivery/{date} HTTP/1.1
Host: solar-rocket-fuel.benmanage.click
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'UserID':'API_KEY',
  'ApiKey':'API_KEY'
};

fetch('https://solar-rocket-fuel.benmanage.click/delivery/{date}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'UserID' => 'API_KEY',
  'ApiKey' => 'API_KEY'
}

result = RestClient.get 'https://solar-rocket-fuel.benmanage.click/delivery/{date}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'UserID': 'API_KEY',
  'ApiKey': 'API_KEY'
}

r = requests.get('https://solar-rocket-fuel.benmanage.click/delivery/{date}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'UserID' => 'API_KEY',
    'ApiKey' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://solar-rocket-fuel.benmanage.click/delivery/{date}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://solar-rocket-fuel.benmanage.click/delivery/{date}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "UserID": []string{"API_KEY"},
        "ApiKey": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://solar-rocket-fuel.benmanage.click/delivery/{date}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /delivery/{date}`

*Get the delivery details for a specific date*

<h3 id="get__delivery_{date}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|path|string|true|Date (yyyy-mm-dd) for which to show delivery information|

> Example responses

> 200 Response

```json
{
  "date": "string",
  "deliveries": [
    {
      "type": "sunlight",
      "quantity": 0,
      "unit": "string",
      "icon": "string"
    }
  ]
}
```

<h3 id="get__delivery_{date}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Details of the deliveries for specified date|[DeliveryDate](#schemadeliverydate)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid parameters|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Delivery date not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
UserID & ApiKey
</aside>

# Schemas

<h2 id="tocS_DeliveryDate">DeliveryDate</h2>
<!-- backwards compatibility -->
<a id="schemadeliverydate"></a>
<a id="schema_DeliveryDate"></a>
<a id="tocSdeliverydate"></a>
<a id="tocsdeliverydate"></a>

```json
{
  "date": "string",
  "deliveries": [
    {
      "type": "sunlight",
      "quantity": 0,
      "unit": "string",
      "icon": "string"
    }
  ]
}

```

Details of a fuel delivery date

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|false|none|Date (yyyy-mm-dd) of delivery|
|deliveries|[[Delivery](#schemadelivery)]|false|none|Array of fuel deliveries|

<h2 id="tocS_Delivery">Delivery</h2>
<!-- backwards compatibility -->
<a id="schemadelivery"></a>
<a id="schema_Delivery"></a>
<a id="tocSdelivery"></a>
<a id="tocsdelivery"></a>

```json
{
  "type": "sunlight",
  "quantity": 0,
  "unit": "string",
  "icon": "string"
}

```

Details of a specific fuel delivery

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of fuel delivery|
|quantity|integer|false|none|Quantity of fuel to be delivered|
|unit|string|false|none|Unit in which this type of fuel is measured|
|icon|string|false|none|SVG image (in a base64 data URI) which represents the fuel type|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sunlight|
|type|wind|
|type|kerosene|
|type|electricity|

<h2 id="tocS_Dates">Dates</h2>
<!-- backwards compatibility -->
<a id="schemadates"></a>
<a id="schema_Dates"></a>
<a id="tocSdates"></a>
<a id="tocsdates"></a>

```json
[
  "string"
]

```

Array of dates (yyyy-mm-dd)

### Properties

*None*

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "error": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A human readable error message|



&nbsp;
# Good Luck!