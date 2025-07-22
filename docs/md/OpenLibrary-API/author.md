## Author API

| Request type | Endpoint     | Description|
| ------------ | ------------ | ---------- |
| **GET**      | `/search/authors.json` | Author Search |
| **GET**      | `/authors/{OLID}.json` | Author Details |
| **GET**      | `/authors/{OLID}/works.json` | Author Works |

## Autohr Work Parameters
|Parameter|Type|Default|Max|Description|
|-|-|-|-|
|`limit`|**integer**|50|1000|Number of works|
|`offset`|**integer**|0|-|Pagination offset|

> Example url : `https://openlibrary.org/authors/${OLID}/works.json?limit=50`

## Author Response Structure

```typescript
interface AuthorResponse {
  key: string;              // Author OLID
  type: { key: string };
  name: string;
  birth_date?: string;
  death_date?: string;
  bio?: string | { type: string; value: string };
  personal_name?: string;
  alternate_names?: string[];
  photos?: number[];        // Photo IDs
  links?: Array<{
    title: string;
    url: string;
    type: { key: string };
  }>;
  source_records?: string[];
  work_count?: number;
}
```