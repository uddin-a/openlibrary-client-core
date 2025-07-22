# Legacy Book API

| Request type | Endpoint     |
| ------------ | ------------ |
| **GET**      | `/api/books` |

## Parameters
|parameters|Type|Description|
|`bibkeys`|**string**|Comma-separated identifiers (`ISBN:`, `OCLC:`, `LCCN:`, `OLID:`)|
|`format`|**string**|`json` (recommended) or `javascript`|
|`callback`|**string**|`jsonp` callback function|
|`jscmd`|**string**|`viewapi`, `data`, or `details`|

