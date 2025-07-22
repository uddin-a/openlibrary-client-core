## Search API


| Request type | Endpoint     |
| ------------ | ------------ |
| **GET**      | `/search.json` |

<br></br>

> The full path of the api is : `https://openlibrary.org/search.json`

<br></br>

### Required Parameters

| Parameter | Type       | Description                               |
| --------- | ---------- | ----------------------------------------- |
| `fields`  | **string** | Comma-separated fields or `*` for **all** |

> Example :
> ```typescript
> fields=key,title,author_name,cover_i
>```

### Optional Parameters

| Parameter      | Type        | Default value | Constraints                                                                           | Description                         |
| -------------- | ----------- | ------------- | ------------------------------------------------------------------------------------- | ----------------------------------- |
| `q`            | **string**  | -             | -                                                                                     | General search query                |
| `title`        | **string**  | -             | -                                                                                     | Search by title                     |
| `author`       | **string**  | -             | -                                                                                     | Search by author name               |
| `isbn`         | **string**  | -             | **10** to **13** digits                                                               | Search by **ISBN** number           |
| `subject`      | **string**  | -             | -                                                                                     | Search by subject                   |
| `publisher`    | **string**  | -             | -                                                                                     | Search by publisher                 |
| `publish_year` | **integer** | -             | -                                                                                     | Filter by publication year          |
| `language`     | **string**  | -             | [**ISO**](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) Language code | Language preference                 |
| `sort`         | **string**  | `relevance`   | `new`,`old`,`random`,`key`                                                            | Sort order                          |
| `limit`        | **integer** | 20            | 1-1000                                                                                | Result par page                     |
| `offset`       | **integer** | 0             | -                                                                                     | Pagination offset                   |
| `page`         | **integer** | 1             | -                                                                                     | Page number (alternative to offset) |

#### Advanced Field Filtering

Access nested edition data with dot notation

```typescript
const fieldsParam = "key,title,author_name,editions,editions.isbn,editions.language";
```

## Complete **Response** Structure

```typescript
  interface Editoin {
    isbn?: string[];
    language?: string[];
    publish_date?: string[];
  }
  
  interface Docs {
    key: string;                    // Work identifier
    title: string;
    author_name?: string[];
    author_key?: string[];          // Author OLIDs
    cover_i?: number;               // Cover ID
    cover_edition_key?: string;
    edition_count?: number;
    first_publish_year?: number;
    has_fulltext?: boolean;
    public_scan_b?: boolean;
    ia?: string[];                  // Internet Archive IDs
    isbn?: string[];
    publish_year?: number[];
    publisher?: string[];
    subject?: string[];
    place?: string[];
    person?: string[];
    time?: string[];
    language?: string[];
    id_goodreads?: string[];
    id_librarything?: string[];
    editions?: Editoin                    // When editions included
  }

  interface Response {
    start: number;
    num_found: number;
    numFoundExact: boolean;
    docs: Docs[];
  }

```